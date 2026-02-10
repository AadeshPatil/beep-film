import { useEffect, useRef, useState, useCallback } from 'react';
import Hls from 'hls.js';

export interface QualityLevel {
  height: number;
  bitrate: number;
  name: string;
}

/**
 * Custom hook for integrating HLS.js with a video element for Cloudflare Stream
 * Handles both native HLS support (Safari) and HLS.js for other browsers
 * Includes quality level management
 *
 * @param videoElement - The HTML video element ref
 * @param streamUrl - The HLS manifest URL (.m3u8)
 * @param enabled - Whether to enable HLS playback (default: true)
 * @param onQualitiesAvailable - Callback when quality levels become available
 */
export const useHlsPlayer = (
  videoElement: HTMLVideoElement | null,
  streamUrl: string | null,
  enabled: boolean = true,
  onQualitiesAvailable?: (qualities: QualityLevel[]) => void
) => {
  const hlsRef = useRef<Hls | null>(null);
  const [currentQuality, setCurrentQuality] = useState<number | null>(null);

  const setQuality = useCallback((qualityIndex: number) => {
    if (!hlsRef.current) return;

    const levels = hlsRef.current.levels;
    if (qualityIndex < 0 || qualityIndex >= levels.length) return;

    hlsRef.current.currentLevel = qualityIndex;
    setCurrentQuality(qualityIndex);
  }, []);

  const setAutoQuality = useCallback(() => {
    if (!hlsRef.current) return;
    hlsRef.current.currentLevel = -1; // -1 means auto
    setCurrentQuality(-1);
  }, []);

  useEffect(() => {
    if (!videoElement || !streamUrl || !enabled) {
      return;
    }

    // Clean up any existing HLS instance
    if (hlsRef.current) {
      hlsRef.current.destroy();
      hlsRef.current = null;
    }

    // Check if the browser has native HLS support (Safari)
    if (videoElement.canPlayType('application/vnd.apple.mpegurl')) {
      // Native HLS support (Safari, iOS)
      videoElement.src = streamUrl;
    } else if (Hls.isSupported()) {
      // Use HLS.js for browsers without native HLS support
      const hls = new Hls({
        enableWorker: true,
        lowLatencyMode: false,
        backBufferLength: 90,
        maxBufferLength: 30,
        maxMaxBufferLength: 600,
      });

      hlsRef.current = hls;

      // Load the stream and attach to video element
      hls.loadSource(streamUrl);
      hls.attachMedia(videoElement);

      // Handle manifest parsed - extract quality levels
      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        const levels = hls.levels.map((level) => ({
          height: level.height,
          bitrate: level.bitrate,
          name: `${level.height}p`,
        }));

        if (onQualitiesAvailable) {
          onQualitiesAvailable(levels);
        }

        // Default to auto quality
        setCurrentQuality(-1);
      });

      // Error handling
      hls.on(Hls.Events.ERROR, (event, data) => {
        if (data.fatal) {
          switch (data.type) {
            case Hls.ErrorTypes.NETWORK_ERROR:
              console.error('HLS Network Error - attempting to recover:', data);
              hls.startLoad();
              break;
            case Hls.ErrorTypes.MEDIA_ERROR:
              console.error('HLS Media Error - attempting to recover:', data);
              hls.recoverMediaError();
              break;
            default:
              console.error('HLS Fatal Error - cannot recover:', data);
              hls.destroy();
              break;
          }
        } else {
          console.warn('HLS Non-fatal Error:', data);
        }
      });
    } else {
      console.error('HLS is not supported in this browser');
    }

    // Cleanup function
    return () => {
      if (hlsRef.current) {
        hlsRef.current.destroy();
        hlsRef.current = null;
      }
    };
  }, [videoElement, streamUrl, enabled, onQualitiesAvailable]);

  return {
    hlsRef,
    currentQuality,
    setQuality,
    setAutoQuality,
  };
};
