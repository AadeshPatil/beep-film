"use client";

import { styled } from "@mui/material/styles";
import { Box, Typography, IconButton } from "@mui/material";
import type { TypographyProps } from "@mui/material/Typography";
import HeroCover from "@/assets/img/light/hero-cover.png";
import PlayIcon from "@/assets/img/light/play.png";
import LogoHeader from "@/assets/img/light/animated.gif";
import Logo1 from "@/assets/img/company-logos/image.png";
import Logo2 from "@/assets/img/company-logos/image copy.png";
import Logo3 from "@/assets/img/company-logos/image copy 2.png";
import Logo4 from "@/assets/img/company-logos/image copy 3.png";
import Logo5 from "@/assets/img/company-logos/image copy 4.png";
import Logo6 from "@/assets/img/company-logos/image copy 5.png";
import Logo7 from "@/assets/img/company-logos/yale.png";
import YaleZuriDvcThumbnail from "@/assets/img/thumbnails/Yale_Zuri-DVC.webp";
import KraDiamondsDigitalThumbnail from "@/assets/img/thumbnails/Kra_jewellers-Diamonds_Digital_campaign.webp";
import { useState, useEffect, useRef } from "react";
import type { TouchEvent, PointerEvent } from "react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import CloseIcon from "@mui/icons-material/Close";
import Image from "next/image";
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
  transition: "background-color 0.3s ease",
  zIndex: 3
});

const StyledHeroSection = styled(Box)(({ theme }) => ({
  position: "relative",
  minHeight: "90vh",
  width: "100%",
  backgroundColor: "#000",
  overflow: "hidden",
  display: "flex",
  alignItems: "stretch",
  padding: "0 1.25rem",
  [theme.breakpoints.down("sm")]: {
    minHeight: "70vh"
  },
  [theme.breakpoints.up("md")]: {
    padding: "0 3rem"
  }
}));

const StyledVideoBackground = styled("video")({
  position: "absolute",
  inset: 0,
  width: "100%",
  height: "100%",
  objectFit: "cover",
  display: "block",
  backgroundColor: "#000"
});

const StyledVideoOverlay = styled(Box)({
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  background:
    "linear-gradient(180deg, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0.65) 100%)",
  pointerEvents: "none"
});

const StyledHeroInner = styled(Box)(({ theme }) => ({
  position: "relative",
  width: "100%",
  maxWidth: "1200px",
  margin: "0 auto",
  display: "flex",
  alignItems: "flex-end",
  flex: 1,
  height: "100%",
  paddingBottom: "3rem",
  zIndex: 1,
  [theme.breakpoints.down("md")]: {
    paddingBottom: "2rem"
  }
}));

const StyledContentWrapper = styled(Box)(({ theme }) => ({
  position: "absolute",
  bottom: "2.5rem",
  left: "0",
  zIndex: 10,
  display: "flex",
  alignItems: "center",
  gap: "1.25rem",
  padding: "1rem 1.25rem",
  borderRadius: "16px",
  background: "rgba(0,0,0,0.35)",
  backdropFilter: "blur(10px)",
  [theme.breakpoints.down("sm")]: {
    gap: "1rem",
    padding: "0.75rem 1rem",
    bottom: "1.5rem"
  }
}));

const StyledTextContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  lineHeight: 0.9
});

const StyledHeroTitle = styled(Typography)<TypographyProps>(({ theme }) => ({
  fontSize: "2.75rem",
  fontWeight: 700,
  letterSpacing: "-0.01em",
  color: "#fff",
  textTransform: "uppercase",
  [theme.breakpoints.up("md")]: {
    fontSize: "3.25rem"
  },
  [theme.breakpoints.up("lg")]: {
    fontSize: "3.75rem"
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "2.25rem"
  }
}));

const StyledHeroSubtitle = styled(Typography)<TypographyProps>(({ theme }) => ({
  color: "#e5e7eb",
  fontSize: "1rem",
  fontWeight: 500,
  letterSpacing: "0.05em",
  marginTop: "0.5rem",
  textTransform: "uppercase",
  [theme.breakpoints.up("md")]: {
    fontSize: "1.125rem"
  }
}));

const StyledRecentsSection = styled(Box)(({ theme }) => ({
  backgroundColor: "#000",
  padding: "1rem 0 2rem",
  [theme.breakpoints.down("sm")]: {
    padding: "1rem 0 1.5rem"
  }
}));

const StyledCarouselContainer = styled(Box)(({ theme }) => ({
  position: "relative",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "2rem",
  maxWidth: "100%",
  margin: "0 auto",
  width: "100%",
  padding: "0 1.5rem",
  [theme.breakpoints.up("md")]: {
    padding: "0 3rem"
  }
}));

const StyledCarouselWrapper = styled(Box)({
  position: "relative",
  overflow: "hidden",
  flex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "100%",
  maxWidth: "100%",
  margin: "0 auto"
});

const StyledCarouselTrack = styled(Box)<{
  currentIndex: number;
  transitionEnabled: boolean;
  isDragging: boolean;
}>(({ currentIndex, transitionEnabled, isDragging }) => ({
  height: "100%",
  width: "100%",
  display: "flex",
  minHeight: "0",
  userSelect: "none",
  touchAction: "pan-y",
  cursor: isDragging ? "grabbing" : "grab",
  transition: transitionEnabled
    ? "transform 0.7s cubic-bezier(0.4, 0, 0.2, 1)"
    : "none",
  transform: `translateX(-${currentIndex * 100}%)`
}));

const StyledSlideWrapper = styled(Box)({
  minWidth: "100%",
  width: "100%",
  flexShrink: 0,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "0 10px"
});

const StyledVideoCard = styled(Box)(({ theme }) => ({
  position: "relative",
  width: "95%",
  minWidth: "95%",
  cursor: "pointer",
  flexShrink: 0,
  display: "flex",
  flexDirection: "column",
  maxWidth: "1200%",
  aspectRatio: "16/9",
  borderRadius: "24px",
  overflow: "hidden",
  justifyContent: "center",
  boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
  [theme.breakpoints.down("md")]: {
    width: "100%",
    height: "auto",
    aspectRatio: "16/9"
  }
}));

const StyledModalOverlay = styled(Box)({
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0, 0, 0, 0.9)",
  zIndex: 9999,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "2rem",
  opacity: 0,
  visibility: "hidden",
  transition: "opacity 0.3s ease, visibility 0.3s ease",
  "&.open": {
    opacity: 1,
    visibility: "visible"
  }
});

const StyledModalContent = styled(Box)({
  position: "relative",
  width: "100%",
  maxWidth: "1200px",
  aspectRatio: "16/9",
  backgroundColor: "#000",
  borderRadius: "16px",
  overflow: "hidden",
  boxShadow: "0 20px 50px rgba(0,0,0,0.5)"
});

const StyledCloseButton = styled(IconButton)({
  position: "absolute",
  top: "20px",
  right: "20px",
  color: "#fff",
  backgroundColor: "rgba(255,255,255,0.1)",
  zIndex: 10000,
  "&:hover": {
    backgroundColor: "rgba(255,255,255,0.2)"
  }
});

const StyledImageWrapper = styled(Box)(({ theme }) => ({
  position: "relative",
  width: "100%",
  height: "100%",
  overflow: "hidden"
}));

const StyledCardImage = styled("img")({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  display: "block"
});

const StyledCardOverlay = styled(Box)({
  position: "absolute",
  inset: 0,
  background: "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.4) 100%)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  transition: "background 0.3s ease"
});

const StyledPlayIcon = styled("img")({
  width: "80px",
  height: "80px",
  opacity: 0,
  transition: "opacity 0.3s ease",
  pointerEvents: "none"
});

const StyledTextContent = styled(Box)(({ theme }) => ({
  position: "absolute",
  bottom: 0,
  left: 0,
  width: "100%",
  padding: "3rem 2rem",
  background:
    "linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.5) 50%, transparent 100%)",
  zIndex: 2,
  display: "flex",
  justifyContent: "flex-end",
  [theme.breakpoints.down("sm")]: {
    padding: "2rem 1.5rem"
  }
}));

const StyledCardSubtitle = styled(Typography)(({ theme }) => ({
  color: "#fff",
  fontSize: "2rem",
  fontWeight: 400,
  textTransform: "uppercase",
  letterSpacing: "0.05em",
  fontFamily: "var(--font-koulen), sans-serif",
  textAlign: "right",
  [theme.breakpoints.down("sm")]: {
    fontSize: "1rem"
  }
}));

const StyledNavButton = styled(IconButton)(({ theme }) => ({
  backgroundColor: "rgba(255, 255, 255, 0.1)",
  color: "#fff",
  "&:hover": {
    backgroundColor: "rgba(255, 255, 255, 0.2)"
  },
  "&:disabled": {
    opacity: 0.3
  },
  [theme.breakpoints.down("md")]: {
    width: "46px",
    height: "46px",
    fontSize: "1rem"
  }
}));

const StyledDesktopNavRail = styled(Box)(({ theme }) => ({
  display: "none",
  position: "absolute",
  inset: 0,
  alignItems: "center",
  justifyContent: "space-between",
  padding: "0 0.75rem",
  pointerEvents: "none",
  [theme.breakpoints.up("md")]: {
    display: "flex"
  }
}));

const StyledMobileNav = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  gap: "0.75rem",
  marginTop: "1rem",
  [theme.breakpoints.up("md")]: {
    display: "none"
  }
}));

const StyledBrandsContainer = styled(Box)({
  position: "relative",
  maxWidth: "1200px",
  margin: "0 auto"
});

const StyledRecentsTitle = styled(Typography)(({ theme }) => ({
  fontSize: "2.5rem",
  fontWeight: 400,
  color: "#fff",
  textTransform: "uppercase",
  marginBottom: "2rem",
  marginTop: "1rem",
  fontFamily: "var(--font-koulen), sans-serif",
  alignSelf: "flex-start",
  paddingLeft: "1.5rem",
  [theme.breakpoints.down("sm")]: {
    fontSize: "1.75rem",
    paddingLeft: "1.25rem",
    marginBottom: "1.5rem"
  }
}));

const StyledBrandsTitle = styled(Typography)(({ theme }) => ({
  fontSize: "2.5rem",
  fontWeight: 400,
  color: "#fff",
  textTransform: "uppercase",
  marginBottom: "2rem",
  marginTop: "4rem",
  fontFamily: "var(--font-koulen), sans-serif",
  alignSelf: "flex-start",
  paddingLeft: "1.5rem",
  letterSpacing: "0.05em",
  [theme.breakpoints.down("sm")]: {
    fontSize: "1.25rem",
    paddingLeft: "1.25rem",
    marginTop: "4rem"
  }
}));

const StyledBrandsScroller = styled(Box)({
  display: "flex",
  overflow: "hidden",
  position: "relative",
  width: "100%",
  padding: "0.5rem 0",
  "&::before, &::after": {
    content: '""',
    position: "absolute",
    top: 0,
    width: "100px",
    height: "100%",
    zIndex: 2
  },
  "&::before": {
    left: 0,
    background: "linear-gradient(to right, #000 0%, transparent 100%)"
  },
  "&::after": {
    right: 0,
    background: "linear-gradient(to left, #000 0%, transparent 100%)"
  }
});

const StyledBrandsTrack = styled(Box)({
  display: "flex",
  gap: "3rem",
  animation: "scroll 14s linear infinite",
  "@keyframes scroll": {
    "0%": {
      transform: "translateX(0)"
    },
    "100%": {
      transform: "translateX(-50%)"
    }
  },
  "&:hover": {
    animationPlayState: "paused"
  }
});

const StyledBrandLogo = styled(Box)({
  flexShrink: 0,
  width: "100px",
  height: "50px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  opacity: 1,
  "& img": {
    maxWidth: "100%",
    maxHeight: "100%",
    objectFit: "contain"
  }
});

const recentVideos = [
  {
    id: 1,
    title: "Jab Judenge tabhi toh Udenge",
    subtitle: "LINE PRODUCTION | SHRIRAM FINANCE",
    brand: "SHRIRAM",
    videoSrc:
      "https://static.kleemservices.com/beepfilms/videos/ZURI%20Final%20Output%20LONG%204K%20(1).mp4",
    thumbnail: YaleZuriDvcThumbnail
  },
  {
    id: 2,
    title: "Creative Excellence",
    subtitle: "BRAND CAMPAIGN | CREATIVE STUDIO",
    brand: "BRAND",
    videoSrc:
      "https://static.kleemservices.com/beepfilms/videos/Specialdiscount.mp4",
    thumbnail: KraDiamondsDigitalThumbnail
  }
];

const brandLogos = [
  { id: 1, name: "Brand 1", src: Logo1.src },
  { id: 2, name: "Brand 2", src: Logo2.src },
  { id: 3, name: "Brand 3", src: Logo3.src },
  { id: 4, name: "Brand 4", src: Logo4.src },
  { id: 5, name: "Brand 5", src: Logo5.src },
  { id: 6, name: "Brand 6", src: Logo6.src },
  { id: 7, name: "Yale", src: Logo7.src }
];

const extendedVideos = [
  recentVideos[recentVideos.length - 1],
  ...recentVideos,
  recentVideos[0]
];
const realSlideCount = recentVideos.length;

export default function Hero() {
  const heroVideoRef = useRef<HTMLVideoElement>(null);
  const [selectedVideo, setSelectedVideo] = useState<{
    id: number;
    videoSrc: string;
  } | null>(null);
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);
  const [currentIndex, setCurrentIndex] = useState(1);
  const [transitionEnabled, setTransitionEnabled] = useState(true);

  const dragStartXRef = useRef<number | null>(null);
  const dragCurrentXRef = useRef<number | null>(null);
  const isSwipingRef = useRef(false);
  const [isDragging, setIsDragging] = useState(false);

  const [isMuted, setIsMuted] = useState(true);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isVideoPlaying) {
        setTransitionEnabled(true);
        setCurrentIndex((prev) => prev + 1);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [isVideoPlaying]);

  // Auto-unmute after 0.3s delay for audio autoplay
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsMuted(false);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  // Intersection Observer for pause/play based on visibility
  useEffect(() => {
    const video = heroVideoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {
            // Autoplay might be blocked, that's okay
          });
        } else {
          video.pause();
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!transitionEnabled) return;

    if (currentIndex === extendedVideos.length - 1) {
      // reached cloned last -> jump to first real
      setTimeout(() => {
        setTransitionEnabled(false);
        setCurrentIndex(1);
      }, 20);
    } else if (currentIndex === 0) {
      // reached cloned first -> jump to last real
      setTimeout(() => {
        setTransitionEnabled(false);
        setCurrentIndex(realSlideCount);
      }, 20);
    }
  }, [currentIndex, transitionEnabled]);

  useEffect(() => {
    if (!transitionEnabled) {
      requestAnimationFrame(() => setTransitionEnabled(true));
    }
  }, [transitionEnabled]);

  const handlePrev = () => {
    setTransitionEnabled(true);
    setCurrentIndex((prev) => prev - 1);
  };

  const handleNext = () => {
    setTransitionEnabled(true);
    setCurrentIndex((prev) => prev + 1);
  };

  const handlePointerDown = (e: React.PointerEvent) => {
    dragStartXRef.current = e.clientX;
    isSwipingRef.current = false;
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (dragStartXRef.current === null) return;
    dragCurrentXRef.current = e.clientX;

    if (Math.abs(e.clientX - dragStartXRef.current) > 10) {
      isSwipingRef.current = true;
      if (!isDragging) setIsDragging(true);
    }
  };

  const handlePointerUp = () => {
    if (dragStartXRef.current === null || dragCurrentXRef.current === null) {
      dragStartXRef.current = null;
      dragCurrentXRef.current = null;
      return;
    }

    const distance = dragStartXRef.current - dragCurrentXRef.current;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isSwipingRef.current) {
      if (isLeftSwipe) handleNext();
      if (isRightSwipe) handlePrev();
    }

    dragStartXRef.current = null;
    dragCurrentXRef.current = null;
    setIsDragging(false);

    // Delay clearing the swipe flag so onClick can see it
    setTimeout(() => {
      isSwipingRef.current = false;
    }, 100);
  };

  const handleVideoPlay = () => {
    // setIsVideoPlaying(true); // Handled by modal state now
  };

  const handleVideoPause = () => {
    // setIsVideoPlaying(false);
  };

  useEffect(() => {
    if (selectedVideo) {
      setIsVideoPlaying(true);
      document.body.style.overflow = "hidden";
    } else {
      setIsVideoPlaying(false);
      document.body.style.overflow = "";
    }
  }, [selectedVideo]);

  const handleTransitionEnd = () => {
    if (currentIndex === extendedVideos.length - 1) {
      setTransitionEnabled(false);
      setCurrentIndex(1);
      requestAnimationFrame(() => setTransitionEnabled(true));
    }
    if (currentIndex === 0) {
      setTransitionEnabled(false);
      setCurrentIndex(extendedVideos.length - 2);
      requestAnimationFrame(() => setTransitionEnabled(true));
    }
  };

  return (
    <>
      <StyledHeroSection>
        {/* Background Video */}
        <StyledVideoBackground
          ref={heroVideoRef}
          autoPlay
          muted={isMuted}
          loop
          playsInline
          poster={HeroCover.src}
        >
          <source
            src="https://static.kleemservices.com/beepfilms/videos/BEEP%20SHOWREEL%20HD.mp4"
            type="video/mp4"
          />
        </StyledVideoBackground>

        <StyledVideoOverlay />

        {/* Mute Toggle Button */}
        <StyledNavButton
          onClick={() => setIsMuted(!isMuted)}
          sx={{
            position: "absolute",
            bottom: "2rem",
            right: "2rem",
            zIndex: 10
          }}
          aria-label={isMuted ? "Unmute video" : "Mute video"}
        >
          {isMuted ? <VolumeOffIcon /> : <VolumeUpIcon />}
        </StyledNavButton>

        <StyledHeroInner>
          <StyledContentWrapper>
            <Box
              component="img"
              src={LogoHeader.src}
              alt="Beep Films animated logo"
              sx={{
                height: { xs: "64px", sm: "80px", md: "96px" },
                width: "auto"
              }}
            />
            <StyledTextContainer>
              <StyledHeroTitle component="h1">
                Crafting Stories That Move
              </StyledHeroTitle>
              <StyledHeroSubtitle component="p">
                Films, spots, and stories across mediums
              </StyledHeroSubtitle>
            </StyledTextContainer>
          </StyledContentWrapper>
        </StyledHeroInner>
      </StyledHeroSection>

      {/* Recents Section */}
      <StyledRecentsSection>
        <StyledCarouselContainer>
          <StyledCarouselWrapper>
            <StyledRecentsTitle>RECENTS</StyledRecentsTitle>
            <StyledCarouselTrack
              currentIndex={currentIndex}
              transitionEnabled={transitionEnabled}
              isDragging={isDragging}
              onPointerDown={handlePointerDown}
              onPointerMove={handlePointerMove}
              onPointerUp={handlePointerUp}
              onPointerLeave={handlePointerUp}
              onPointerCancel={handlePointerUp}
              onTransitionEnd={handleTransitionEnd}
            >
              {extendedVideos.map((video, index) => (
                <StyledSlideWrapper key={`${video.id}-${index}`}>
                  <StyledVideoCard
                    onClick={() => {
                      if (isSwipingRef.current) return;
                      setSelectedVideo({
                        id: video.id,
                        videoSrc: video.videoSrc
                      });
                    }}
                    sx={{
                      "&:hover .play-button": {
                        transform: "scale(1.1)"
                      }
                    }}
                  >
                    <StyledImageWrapper>
                      <StyledCardImage
                        src={video.thumbnail.src}
                        alt={video.title}
                      />
                      <PlayButtonOverlay className="card-overlay">
                        <Image
                          src={PlayIcon.src}
                          alt="Play video"
                          width={70}
                          height={70}
                        />
                      </PlayButtonOverlay>
                    </StyledImageWrapper>
                  </StyledVideoCard>
                </StyledSlideWrapper>
              ))}
            </StyledCarouselTrack>

            <StyledBrandsTitle>BRAND COLLABORATIONS</StyledBrandsTitle>
            <StyledBrandsScroller>
              <StyledBrandsTrack>
                {[...brandLogos, ...brandLogos].map((brand, index) => (
                  <StyledBrandLogo key={`${brand.id}-${index}`}>
                    <img src={brand.src} alt={brand.name} />
                  </StyledBrandLogo>
                ))}
              </StyledBrandsTrack>
            </StyledBrandsScroller>
          </StyledCarouselWrapper>
        </StyledCarouselContainer>
      </StyledRecentsSection>

      {/* Video Modal */}
      <StyledModalOverlay
        className={selectedVideo ? "open" : ""}
        onClick={() => setSelectedVideo(null)}
      >
        {selectedVideo && (
          <>
            <StyledCloseButton
              onClick={() => setSelectedVideo(null)}
              aria-label="Close video"
            >
              <CloseIcon />
            </StyledCloseButton>
            <StyledModalContent onClick={(e) => e.stopPropagation()}>
              <StyledVideoBackground
                controls
                autoPlay
                playsInline
                src={selectedVideo.videoSrc}
              />
            </StyledModalContent>
          </>
        )}
      </StyledModalOverlay>
    </>
  );
}
