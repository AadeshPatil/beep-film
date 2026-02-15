"use client";

import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";
import { useEffect, useRef } from "react";
import Hls from "hls.js";
import { getStreamUrl } from "@/common/utils";

// TODO: Replace with your actual Cloudflare Stream video ID for the showreel
const SHOWREEL_VIDEO_ID = "cc1bb892a924cbed49637a36546c232b";

const StyledShowreelContainer = styled(Box)(({ theme }) => ({
  minHeight: "100vh",
  height: "100vh",
  padding: "0",
  backgroundColor: "#000",
  display: "flex",
  alignItems: "center",
  overflow: "hidden",
  [theme.breakpoints.down("sm")]: {
    height: "100vh",
    padding: "0 1rem",
  },
}));

const StyledVideoContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  maxWidth: "1400px",
  height: "100%",
  margin: "0 auto",
  padding: "0 2rem",
  display: "flex",
  alignItems: "center",
  [theme.breakpoints.between("md", "lg")]: {
    padding: "0 20vw",
  },
  [theme.breakpoints.down("sm")]: {
    padding: "0",
  },
}));

const StyledVideo = styled("video")(({ theme }) => ({
  width: "100%",
  height: "auto",
  maxHeight: "100%",
  objectFit: "contain",
  display: "block",
  backgroundColor: "#000",
  borderRadius: "4px",
  "::cue": {
    backgroundColor: "rgba(0, 0, 0, 0.8)",
  },
}));

export function ShowreelContent() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const hlsRef = useRef<Hls | null>(null);

  // Initialize HLS for Cloudflare Stream
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const streamUrl = getStreamUrl(SHOWREEL_VIDEO_ID);

    // Clean up existing HLS instance
    if (hlsRef.current) {
      hlsRef.current.destroy();
      hlsRef.current = null;
    }

    // Check for native HLS support (Safari, iOS)
    if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = streamUrl;
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
      hls.attachMedia(video);

      // Error handling
      hls.on(Hls.Events.ERROR, (_event, data) => {
        if (data.fatal) {
          switch (data.type) {
            case Hls.ErrorTypes.NETWORK_ERROR:
              console.error("Showreel HLS Network Error - attempting to recover:", data);
              hls.startLoad();
              break;
            case Hls.ErrorTypes.MEDIA_ERROR:
              console.error("Showreel HLS Media Error - attempting to recover:", data);
              hls.recoverMediaError();
              break;
            default:
              console.error("Showreel HLS Fatal Error - cannot recover:", data);
              hls.destroy();
              break;
          }
        } else {
          console.warn("Showreel HLS Non-fatal Error:", data);
        }
      });
    } else {
      console.error("HLS is not supported in this browser");
    }

    // Cleanup function
    return () => {
      if (hlsRef.current) {
        hlsRef.current.destroy();
        hlsRef.current = null;
      }
    };
  }, []);

  return (
    <StyledShowreelContainer>
      <StyledVideoContainer>
        <StyledVideo
          ref={videoRef}
          controls
          controlsList="nodownload"
          playsInline
          preload="metadata"
        >
          Your browser does not support the video tag.
        </StyledVideo>
      </StyledVideoContainer>
    </StyledShowreelContainer>
  );
}
