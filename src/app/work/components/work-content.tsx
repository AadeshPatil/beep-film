"use client";

import { styled } from "@mui/material/styles";
import { Box, Typography, IconButton, Slider } from "@mui/material";
import { useState, useRef, useEffect } from "react";
import Hls from "hls.js";
import Header from "@/common/components/header";
import { getStreamUrl, getThumbnailUrl } from "@/common/utils";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";
import FullscreenIcon from "@mui/icons-material/Fullscreen";
import FullscreenExitIcon from "@mui/icons-material/FullscreenExit";
import KRAJewellers1Thumbnail from "@/assets/img/thumbnails/KRA_Jewellers_1.webp";
import KRAJewellers2Thumbnail from "@/assets/img/thumbnails/KRA_Jewellers_2.webp";
import Kohinoor1Thumbnail from "@/assets/img/thumbnails/Kohinoor_1.webp";
import Kohinoor2Thumbnail from "@/assets/img/thumbnails/Kohinoor_2.webp";
import KRABridalCampaignThumbnail from "@/assets/img/thumbnails/KRA_jewellers-Bridal_campaign_Digital.webp";
import KraDailyDiamondsThumbnail from "@/assets/img/thumbnails/Kra Jewellers-Daily_Diamonds.webp";
import KraDiamondsDigitalThumbnail from "@/assets/img/thumbnails/Kra_jewellers-Diamonds_Digital_campaign.webp";
import SebamedDigitalAdThumbnail from "@/assets/img/thumbnails/Sebamed-digital_ad.webp";
import ShakuniFinalThumbnail from "@/assets/img/thumbnails/Shakuni_final.webp";
import VipsFilm1Thumbnail from "@/assets/img/thumbnails/VIPS_digital_campaign_Film_1.webp";
import VipsFilm2Thumbnail from "@/assets/img/thumbnails/VIPS_digital_campaign_Film_2.webp";
import VipsFilm3Thumbnail from "@/assets/img/thumbnails/VIPS_digital_campaign_Film_3.webp";
import VipsFilm4Thumbnail from "@/assets/img/thumbnails/VIPS_digital_campaign_Film_4.webp";
import YaleZuriDvcThumbnail from "@/assets/img/thumbnails/Yale_Zuri-DVC.webp";

const StyledWorkSection = styled(Box)(({ theme }) => ({
  backgroundColor: "#000",
  minHeight: "100vh",
  padding: "4rem 3rem 3.5rem",
  marginTop: "40px",
  [theme.breakpoints.down("sm")]: {
    padding: "2.5rem 1rem 2.5rem",
    marginTop: "60px",
  },
  [theme.breakpoints.between("sm", "md")]: {
    padding: "3rem 2rem 3rem",
    marginTop: "24px",
  },
}));

const StyledWorkInner = styled(Box)({
  maxWidth: "1400px",
  margin: "0 auto",
  width: "100%",
});

const StyledWorkTitle = styled(Typography)(({ theme }) => ({
  fontSize: "2.5rem",
  fontWeight: 700,
  color: "#fff",
  textTransform: "uppercase",
  margin: "0 auto 4rem",
  fontFamily: "var(--font-koulen), sans-serif",
  width: "100%",
  maxWidth: "100%",
  [theme.breakpoints.down("sm")]: {
    fontSize: "2.5rem",
    margin: "0 auto 2rem",
  },
}));

const StyledWorkGrid = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  gap: "2rem",
  width: "100%",
  [theme.breakpoints.down("md")]: {
    gridTemplateColumns: "1fr",
    gap: "1.5rem",
  },
}));

const StyledWorkCard = styled(Box)({
  cursor: "pointer",
  transition: "transform 0.3s ease",
  "&:hover": {
    transform: "scale(1.02)",
  },
});

const StyledWorkImageWrapper = styled(Box)({
  position: "relative",
  borderRadius: "20px",
  overflow: "hidden",
  aspectRatio: "16/9",
  marginBottom: "1rem",
  backgroundColor: "#1a1a1a",
});

const StyledWorkThumbnail = styled("img")(({ theme }) => ({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  display: "block",
  position: "absolute",
  top: 0,
  left: 0,
  zIndex: 1,
}));

const StyledWorkVideo = styled("video")(({ theme }) => ({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  display: "block",
  position: "absolute",
  top: 0,
  left: 0,
  zIndex: 2,
}));

const PlayButtonOverlay = styled(Box)({
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "rgba(0, 0, 0, 0.3)",
  cursor: "pointer",
  transition: "backgroundColor 0.3s ease",
  zIndex: 3,
});

const PlayButton = styled(Box)({
  width: "60px",
  height: "60px",
  borderRadius: "50%",
  backgroundColor: "#fff",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  transition: "transform 0.3s ease",
  "&:hover": {
    transform: "scale(1.1)",
  },
  "& svg": {
    marginLeft: "4px",
  },
});

const StyledWorkCategory = styled(Typography)(({ theme }) => ({
  color: "#fff",
  fontSize: "1.5rem",
  fontWeight: 400,
  textTransform: "uppercase",
  letterSpacing: "0.05em",
  fontFamily: "var(--font-koulen), sans-serif",
  [theme.breakpoints.down("sm")]: {
    fontSize: "1.2rem",
  },
}));

const VideoControlsWrapper = styled(Box)({
  position: "absolute",
  bottom: 0,
  left: 0,
  right: 0,
  background: "linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 70%, transparent 100%)",
  padding: "2rem 1.5rem 1rem",
  zIndex: 4,
  opacity: 0,
  transition: "opacity 0.3s ease",
  "&.visible": {
    opacity: 1,
  },
});

const ControlsRow = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "0.75rem",
});

const StyledIconButton = styled(IconButton)({
  color: "#fff",
  padding: "8px",
  "&:hover": {
    backgroundColor: "rgba(255,255,255,0.1)",
  },
  "& .MuiSvgIcon-root": {
    fontSize: "1.5rem",
  },
});

const ProgressBar = styled(Slider)({
  color: "#fff",
  height: 4,
  padding: "8px 0",
  marginBottom: "0.5rem",
  "& .MuiSlider-thumb": {
    width: 12,
    height: 12,
    backgroundColor: "#fff",
    "&:hover, &.Mui-focusVisible": {
      boxShadow: "0 0 0 8px rgba(255,255,255,0.16)",
    },
  },
  "& .MuiSlider-track": {
    border: "none",
    height: 4,
  },
  "& .MuiSlider-rail": {
    opacity: 0.3,
    backgroundColor: "#fff",
    height: 4,
  },
});

const VolumeSlider = styled(Slider)({
  color: "#fff",
  width: 80,
  height: 4,
  "& .MuiSlider-thumb": {
    width: 10,
    height: 10,
    backgroundColor: "#fff",
    "&:hover, &.Mui-focusVisible": {
      boxShadow: "0 0 0 6px rgba(255,255,255,0.16)",
    },
  },
  "& .MuiSlider-track": {
    border: "none",
    height: 4,
  },
  "& .MuiSlider-rail": {
    opacity: 0.3,
    backgroundColor: "#fff",
    height: 4,
  },
});

const TimeDisplay = styled(Typography)({
  color: "#fff",
  fontSize: "0.875rem",
  fontFamily: "monospace",
  minWidth: "90px",
  userSelect: "none",
});

const QualityButton = styled(IconButton)({
  color: "#fff",
  padding: "8px",
  fontSize: "0.75rem",
  minWidth: "45px",
  height: "32px",
  border: "1px solid rgba(255,255,255,0.3)",
  borderRadius: "4px",
  "&:hover": {
    backgroundColor: "rgba(255,255,255,0.1)",
  },
});

const QualityMenu = styled(Box)({
  position: "absolute",
  bottom: "100%",
  right: "1rem",
  backgroundColor: "rgba(0, 0, 0, 0.95)",
  borderRadius: "4px",
  overflow: "hidden",
  marginBottom: "0.5rem",
  minWidth: "120px",
  zIndex: 10,
});

const QualityOption = styled(Box)<{ isActive: boolean }>(({ isActive }) => ({
  padding: "0.75rem 1rem",
  color: "#fff",
  cursor: "pointer",
  backgroundColor: isActive ? "rgba(255,255,255,0.2)" : "transparent",
  fontWeight: isActive ? 600 : 400,
  fontSize: "0.875rem",
  "&:hover": {
    backgroundColor: "rgba(255,255,255,0.15)",
  },
  transition: "background-color 0.2s ease",
}));

// TODO: Replace these placeholder IDs with your actual Cloudflare Stream video UIDs
const workItems = [
  {
    id: 1,
    label: "Hausla hai toh hojayega.",
    category: " TVC x Shriya Pilgaonkar x  KRA Jewellers",
    cloudflareVideoId: "66cd87d31d8c6b991b8dfdb1a7833439", // Replace with actual Cloudflare video ID
    thumbnail: KRAJewellers1Thumbnail, // Fallback - will use Cloudflare thumbnail
  },
  {
    id: 2,
    label: "Fortune Teller",
    category: "TVC x Sai Tamhankar x Kohinoor",
    cloudflareVideoId: "96cc0ba1195720c43e010328c9cb0d75",
    thumbnail: Kohinoor1Thumbnail,
  },
  {
    id: 3,
    label: "Brand Campaign",
    category: "TVC x Sai Tamhankar x Kohinoor",
    cloudflareVideoId: "d541fa1d8b3bfffe854707ba97f4bc58",
    thumbnail: Kohinoor2Thumbnail,
  },
  {
    id: 4,
    label: "Brand Film",
    category: "Shriya Pilgaonkar x KRA jewellers",
    cloudflareVideoId: "420a7f94914bcd646a729b12e7502bde",
    thumbnail: KRAJewellers2Thumbnail,
  },
  {
    id: 5,
    label: "Creative Direction",
    category: "Sebamed x digital ad",
    cloudflareVideoId: "52b15c1c08e2c4bdfbd69b65127015ac",
    thumbnail: SebamedDigitalAdThumbnail,
  },
  {
    id: 6,
    label: "Product Launch",
    category: "Yale Zuri x DVC",
    cloudflareVideoId: "a0426a2933d41fd2351c0a16269afd7a",
    thumbnail: YaleZuriDvcThumbnail,
  },
  {
    id: 7,
    label: "Visual Story",
    category: "Bridal campaign Digital  x KRA jewellers",
    cloudflareVideoId: "442a2eb9688b579530f92224f613123a",
    thumbnail: KRABridalCampaignThumbnail,
  },
  {
    id: 8,
    label: "Special Discount",
    category: "Diamonds Digital campaign x Kra jewellers",
    cloudflareVideoId: "617906039894457634da39f8529d6e1c",
    thumbnail: KraDiamondsDigitalThumbnail,
  },
  {
    id: 9,
    label: "Brand Campaign",
    category: "Ganpati festive x Kra jewellers",
    cloudflareVideoId: "96cc0ba1195720c43e010328c9cb0d75",
    thumbnail: KRAJewellers1Thumbnail,
  },
  {
    id: 10,
    label: "Festive Collection",
    category: "Daily Diamonds x Kra Jewellers",
    cloudflareVideoId: "YOUR_VIDEO_ID_10",
    thumbnail: KraDailyDiamondsThumbnail,
  },
  {
    id: 11,
    label: "Brand Film",
    category: "VIPS digital campaign Film 2",
    cloudflareVideoId: "ec3ae84bd7b8f94d2ffe5d708d9457de",
    thumbnail: VipsFilm2Thumbnail,
  },
  {
    id: 12,
    label: "Brand Film",
    category: "VIPS digital campaign Film 1",
    cloudflareVideoId: "9147b1b7d119463fa860703e19f84d98",
    thumbnail: VipsFilm1Thumbnail,
  },
  {
    id: 13,
    label: "Product Launch",
    category: "VIPS digital campaign Film 3",
    cloudflareVideoId: "96714c0c1eedc1e993e9dec030e08aaa",
    thumbnail: VipsFilm3Thumbnail,
  },
  {
    id: 14,
    label: "Brand Campaign",
    category: "VIPS digital campaign Film 4",
    cloudflareVideoId: "YOUR_VIDEO_ID_14",
    thumbnail: VipsFilm4Thumbnail,
  },
  {
    id: 15,
    label: "Festive Collection",
    category: "VIPS digital campaign Film 5",
    cloudflareVideoId: "8a563c9fb71f30c3e67eb34d6299ea23",
    thumbnail: ShakuniFinalThumbnail,
  }
];

export default function WorkContent() {
  const [playingId, setPlayingId] = useState<number | null>(null);
  const [controlsVisible, setControlsVisible] = useState<{ [key: number]: boolean }>({});
  const [isPlaying, setIsPlaying] = useState<{ [key: number]: boolean }>({});
  const [currentTime, setCurrentTime] = useState<{ [key: number]: number }>({});
  const [duration, setDuration] = useState<{ [key: number]: number }>({});
  const [volume, setVolume] = useState<{ [key: number]: number }>({});
  const [isMuted, setIsMuted] = useState<{ [key: number]: boolean }>({});
  const [isFullscreen, setIsFullscreen] = useState<{ [key: number]: boolean }>({});
  const [qualities, setQualities] = useState<{ [key: number]: Array<{ height: number; bitrate: number; name: string }> }>({});
  const [currentQuality, setCurrentQuality] = useState<{ [key: number]: number }>({});
  const [qualityMenuOpen, setQualityMenuOpen] = useState<{ [key: number]: boolean }>({});
  const videoRefs = useRef<Record<number, HTMLVideoElement | null>>({});
  const wrapperRefs = useRef<Record<number, HTMLDivElement | null>>({});
  const hideControlsTimeoutRef = useRef<Record<number, NodeJS.Timeout | null>>({});
  const hlsInstancesRef = useRef<Record<number, any>>({});
  const hlsReadyRef = useRef<Record<number, boolean>>({});

  const formatTime = (seconds: number) => {
    if (!seconds || isNaN(seconds)) return "0:00";
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  const handlePlayPause = (id: number) => {
    const video = videoRefs.current[id];
    if (!video) return;

    if (video.paused) {
      video.play();
      setIsPlaying((prev) => ({ ...prev, [id]: true }));
    } else {
      video.pause();
      setIsPlaying((prev) => ({ ...prev, [id]: false }));
    }
  };

  const handleProgressChange = (id: number, value: number) => {
    const video = videoRefs.current[id];
    if (!video) return;
    video.currentTime = value;
    setCurrentTime((prev) => ({ ...prev, [id]: value }));
  };

  const handleVolumeChange = (id: number, value: number) => {
    const video = videoRefs.current[id];
    if (!video) return;
    video.volume = value;
    setVolume((prev) => ({ ...prev, [id]: value }));
    setIsMuted((prev) => ({ ...prev, [id]: value === 0 }));
  };

  const handleMuteToggle = (id: number) => {
    const video = videoRefs.current[id];
    if (!video) return;
    
    if (video.muted || video.volume === 0) {
      video.muted = false;
      video.volume = volume[id] || 0.5;
      setIsMuted((prev) => ({ ...prev, [id]: false }));
    } else {
      video.muted = true;
      setIsMuted((prev) => ({ ...prev, [id]: true }));
    }
  };

  const handleFullscreenToggle = (id: number) => {
    const wrapper = wrapperRefs.current[id];
    if (!wrapper) return;

    if (!document.fullscreenElement) {
      wrapper.requestFullscreen();
      setIsFullscreen((prev) => ({ ...prev, [id]: true }));
    } else {
      document.exitFullscreen();
      setIsFullscreen((prev) => ({ ...prev, [id]: false }));
    }
  };

  const handleQualityChange = (id: number, qualityIndex: number) => {
    const hls = hlsInstancesRef.current[id];
    if (!hls) return;

    hls.currentLevel = qualityIndex;
    setCurrentQuality((prev) => ({ ...prev, [id]: qualityIndex }));
  };

  const handleAutoQuality = (id: number) => {
    const hls = hlsInstancesRef.current[id];
    if (!hls) return;

    hls.currentLevel = -1; // -1 = auto
    setCurrentQuality((prev) => ({ ...prev, [id]: -1 }));
  };

  const showControls = (id: number) => {
    setControlsVisible((prev) => ({ ...prev, [id]: true }));
    
    if (hideControlsTimeoutRef.current[id]) {
      clearTimeout(hideControlsTimeoutRef.current[id]!);
    }

    if (isPlaying[id]) {
      hideControlsTimeoutRef.current[id] = setTimeout(() => {
        setControlsVisible((prev) => ({ ...prev, [id]: false }));
      }, 3000);
    }
  };

  const handleVideoClick = (id: number) => {
    if (playingId === id) {
      handlePlayPause(id);
    } else {
      setPlayingId(id);
    }
  };

  useEffect(() => {
    if (playingId) {
      const videoElement = videoRefs.current[playingId];
      const workItem = workItems.find((item) => item.id === playingId);
      
      if (videoElement && workItem?.cloudflareVideoId) {
        // Initialize HLS first
        const streamUrl = getStreamUrl(workItem.cloudflareVideoId);
        
        // Clean up existing HLS instance if any
        if (hlsInstancesRef.current[playingId]) {
          hlsInstancesRef.current[playingId].destroy();
          delete hlsInstancesRef.current[playingId];
        }
        hlsReadyRef.current[playingId] = false;
        
        // Check for native HLS support (Safari)
        if (videoElement.canPlayType('application/vnd.apple.mpegurl')) {
          console.log('Using native HLS support');
          videoElement.src = streamUrl;
          hlsReadyRef.current[playingId] = true;
          // Play immediately
          videoElement.play().catch((err) => console.error("Play failed:", err));
          setIsPlaying((prev) => ({ ...prev, [playingId]: true }));
        } else if (Hls.isSupported()) {
          console.log('Using HLS.js library');
          // Use HLS.js for other browsers
          const hls = new Hls({
            enableWorker: true,
            lowLatencyMode: false,
            backBufferLength: 90,
            maxBufferLength: 30,
            maxMaxBufferLength: 600,
          });
          
          hls.loadSource(streamUrl);
          hls.attachMedia(videoElement);
          
          // Capture available quality levels
          const handleManifestParsed = () => {
            console.log('HLS Manifest parsed, total levels:', hls.levels.length);
            if (hls.levels.length > 0) {
              const availableQualities = hls.levels.map((level) => ({
                height: level.height,
                bitrate: level.bitrate,
                name: `${level.height}p`,
              }));
              console.log('Available qualities:', availableQualities);
              setQualities((prev) => ({ ...prev, [playingId]: availableQualities }));
              setCurrentQuality((prev) => ({ ...prev, [playingId]: -1 })); // Auto
            } else {
              console.warn('No quality levels found in manifest');
            }
            hlsReadyRef.current[playingId] = true;
            // Play after HLS is ready
            videoElement.play().catch((err) => console.error("Play failed:", err));
            setIsPlaying((prev) => ({ ...prev, [playingId]: true }));
          };

          hls.on(Hls.Events.MANIFEST_PARSED, handleManifestParsed);
          
          // Also check levels if they were already loaded
          if (hls.levels.length > 0) {
            handleManifestParsed();
          }
          
          // Error handling
          hls.on(Hls.Events.ERROR, (_event, data) => {
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
            }
          });
          
          hlsInstancesRef.current[playingId] = hls;
        }
        
        // Initialize volume if not set
        if (volume[playingId] === undefined) {
          setVolume((prev) => ({ ...prev, [playingId]: 1 }));
        }
      }
    } else {
      Object.values(videoRefs.current).forEach((video) => {
        if (video) {
          video.pause();
        }
      });
    }
  }, [playingId]);

  useEffect(() => {
    const videos = videoRefs.current;
    
    const handleTimeUpdate = (id: number) => (e: Event) => {
      const video = e.target as HTMLVideoElement;
      setCurrentTime((prev) => ({ ...prev, [id]: video.currentTime }));
    };

    const handleLoadedMetadata = (id: number) => (e: Event) => {
      const video = e.target as HTMLVideoElement;
      setDuration((prev) => ({ ...prev, [id]: video.duration }));
    };

    const handleEnded = (id: number) => () => {
      setPlayingId(null);
      setIsPlaying((prev) => ({ ...prev, [id]: false }));
    };

    Object.entries(videos).forEach(([idStr, video]) => {
      const id = parseInt(idStr);
      if (video) {
        video.addEventListener("timeupdate", handleTimeUpdate(id));
        video.addEventListener("loadedmetadata", handleLoadedMetadata(id));
        video.addEventListener("ended", handleEnded(id));
      }
    });

    return () => {
      Object.entries(videos).forEach(([idStr, video]) => {
        const id = parseInt(idStr);
        if (video) {
          video.removeEventListener("timeupdate", handleTimeUpdate(id));
          video.removeEventListener("loadedmetadata", handleLoadedMetadata(id));
          video.removeEventListener("ended", handleEnded(id));
        }
      });
    };
  }, []);

  // Cleanup all HLS instances on unmount
  useEffect(() => {
    return () => {
      Object.values(hlsInstancesRef.current).forEach((hls) => {
        if (hls && hls.destroy) {
          hls.destroy();
        }
      });
      hlsInstancesRef.current = {};
    };
  }, []);

  return (
    <>
      <Header />
      <StyledWorkSection>
        <StyledWorkInner>
          <StyledWorkTitle>WORK</StyledWorkTitle>
          <StyledWorkGrid>
            {workItems.map((work) => (
              <StyledWorkCard key={work.id}>
                <StyledWorkImageWrapper
                  ref={(el: HTMLDivElement | null) => {
                    if (el) wrapperRefs.current[work.id] = el;
                  }}
                  onMouseEnter={() => showControls(work.id)}
                  onMouseMove={() => showControls(work.id)}
                  onMouseLeave={() => {
                    if (hideControlsTimeoutRef.current[work.id]) {
                      clearTimeout(hideControlsTimeoutRef.current[work.id]!);
                    }
                    if (isPlaying[work.id]) {
                      setControlsVisible((prev) => ({ ...prev, [work.id]: false }));
                    }
                  }}
                >
                  <StyledWorkThumbnail
                    src={work.thumbnail.src}
                    alt={work.label}
                    style={{
                      opacity: playingId === work.id ? 0 : 1,
                      transition: "opacity 0.3s ease",
                    }}
                  />
                  <StyledWorkVideo
                    ref={(el) => {
                      if (el) videoRefs.current[work.id] = el;
                    }}
                    preload="metadata"
                    controlsList="nodownload nofullscreen noremoteplayback noplaybackrate"
                    disablePictureInPicture
                    onClick={() => handleVideoClick(work.id)}
                    style={{
                      opacity: playingId === work.id ? 1 : 0,
                      pointerEvents: playingId === work.id ? "auto" : "none",
                      transition: "opacity 0.3s ease",
                      cursor: playingId === work.id ? "pointer" : "default",
                    }}
                  />
                  {playingId !== work.id && (
                    <PlayButtonOverlay onClick={() => setPlayingId(work.id)}>
                      <PlayButton>
                        <svg width="50px" height="50px" viewBox="-7.44 -7.44 38.88 38.88" xmlns="http://www.w3.org/2000/svg" fill="#000000" transform="rotate(0)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="1.248"></g><g id="SVGRepo_iconCarrier"> <path fill="none" stroke="#000000" stroke-width="2.4" d="M3,22.0000002 L21,12 L3,2 L3,22.0000002 Z M5,19 L17.5999998,11.9999999 L5,5 L5,19 Z M7,16 L14.1999999,12 L7,8 L7,16 Z M9,13 L10.8,12 L9,11 L9,13 Z"></path> </g></svg>
                      </PlayButton>
                    </PlayButtonOverlay>
                  )}
                  {playingId === work.id && (
                    <VideoControlsWrapper className={controlsVisible[work.id] ? "visible" : ""}>
                      <ProgressBar
                        value={currentTime[work.id] || 0}
                        max={duration[work.id] || 100}
                        onChange={(_, value) => handleProgressChange(work.id, value as number)}
                        aria-label="Video progress"
                      />
                      <ControlsRow>
                        <StyledIconButton
                          onClick={(e) => {
                            e.stopPropagation();
                            handlePlayPause(work.id);
                          }}
                          aria-label={isPlaying[work.id] ? "Pause" : "Play"}
                        >
                          {isPlaying[work.id] ? <PauseIcon /> : <PlayArrowIcon />}
                        </StyledIconButton>

                        <TimeDisplay>
                          {formatTime(currentTime[work.id] || 0)} / {formatTime(duration[work.id] || 0)}
                        </TimeDisplay>

                        <Box sx={{ flex: 1 }} />

                        {/* Quality Button */}
                        {qualities[work.id] && qualities[work.id].length > 0 && (
                          <Box sx={{ position: "relative" }}>
                            <QualityButton
                              onClick={(e) => {
                                e.stopPropagation();
                                setQualityMenuOpen((prev) => ({
                                  ...prev,
                                  [work.id]: !prev[work.id],
                                }));
                              }}
                              aria-label="Video quality"
                            >
                              {currentQuality[work.id] === -1
                                ? "AUTO"
                                : qualities[work.id][currentQuality[work.id]]?.name || "AUTO"}
                            </QualityButton>
                            {qualityMenuOpen[work.id] && (
                              <QualityMenu>
                                <QualityOption
                                  isActive={currentQuality[work.id] === -1}
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    handleAutoQuality(work.id);
                                    setQualityMenuOpen((prev) => ({
                                      ...prev,
                                      [work.id]: false,
                                    }));
                                  }}
                                >
                                  Auto
                                </QualityOption>
                                {qualities[work.id].map((quality, index) => (
                                  <QualityOption
                                    key={index}
                                    isActive={currentQuality[work.id] === index}
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      handleQualityChange(work.id, index);
                                      setQualityMenuOpen((prev) => ({
                                        ...prev,
                                        [work.id]: false,
                                      }));
                                    }}
                                  >
                                    {quality.name}
                                  </QualityOption>
                                ))}
                              </QualityMenu>
                            )}
                          </Box>
                        )}

                        <StyledIconButton
                          onClick={(e) => {
                            e.stopPropagation();
                            handleMuteToggle(work.id);
                          }}
                          aria-label={isMuted[work.id] ? "Unmute" : "Mute"}
                        >
                          {isMuted[work.id] || volume[work.id] === 0 ? <VolumeOffIcon /> : <VolumeUpIcon />}
                        </StyledIconButton>

                        {/* <VolumeSlider
                          value={isMuted[work.id] ? 0 : (volume[work.id] ?? 1)}
                          max={1}
                          step={0.01}
                          onChange={(_, value) => handleVolumeChange(work.id, value as number)}
                          aria-label="Volume"
                        /> */}

                        <StyledIconButton
                          onClick={(e) => {
                            e.stopPropagation();
                            handleFullscreenToggle(work.id);
                          }}
                          aria-label={isFullscreen[work.id] ? "Exit fullscreen" : "Fullscreen"}
                        >
                          {isFullscreen[work.id] ? <FullscreenExitIcon /> : <FullscreenIcon />}
                        </StyledIconButton>
                      </ControlsRow>
                    </VideoControlsWrapper>
                  )}
                </StyledWorkImageWrapper>
                <StyledWorkCategory>{work.category}</StyledWorkCategory>
              </StyledWorkCard>
            ))}
          </StyledWorkGrid>
        </StyledWorkInner>
      </StyledWorkSection>
    </>
  );
}
