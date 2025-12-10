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
import { useState, useEffect } from "react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

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
    minHeight: "70vh",
  },
  [theme.breakpoints.up("md")]: {
    padding: "0 3rem",
  },
}));

const StyledVideoBackground = styled("video")({
  position: "absolute",
  inset: 0,
  width: "100%",
  height: "100%",
  objectFit: "cover",
  display: "block",
  backgroundColor: "#000",
});

const StyledVideoOverlay = styled(Box)({
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  background: "linear-gradient(180deg, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0.65) 100%)",
  pointerEvents: "none",
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
    paddingBottom: "2rem",
  },
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
    bottom: "1.5rem",
  },
}));

const StyledTextContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  lineHeight: 0.9,
});

const StyledHeroTitle = styled(Typography)<TypographyProps>(({ theme }) => ({
  fontSize: "2.75rem",
  fontWeight: 700,
  letterSpacing: "-0.01em",
  color: "#fff",
  textTransform: "uppercase",
  [theme.breakpoints.up("md")]: {
    fontSize: "3.25rem",
  },
  [theme.breakpoints.up("lg")]: {
    fontSize: "3.75rem",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "2.25rem",
  },
}));

const StyledHeroSubtitle = styled(Typography)<TypographyProps>(({ theme }) => ({
  color: "#e5e7eb",
  fontSize: "1rem",
  fontWeight: 500,
  letterSpacing: "0.05em",
  marginTop: "0.5rem",
  textTransform: "uppercase",
  [theme.breakpoints.up("md")]: {
    fontSize: "1.125rem",
  },
}));

const StyledRecentsSection = styled(Box)(({ theme }) => ({
  backgroundColor: "#000",
  padding: "3.5rem 1.5rem 4rem",
  [theme.breakpoints.down("sm")]: {
    padding: "3rem 1.25rem 3.5rem",
  },
}));

const StyledRecentsTitle = styled(Typography)(({ theme }) => ({
  fontSize: "2.5rem",
  fontWeight: 400,
  color: "#fff",
  textTransform: "uppercase",
  marginBottom: "2rem",
  fontFamily: "var(--font-koulen), sans-serif",
  alignSelf: "flex-start",
  [theme.breakpoints.down("sm")]: {
    fontSize: "1.75rem",
  },
}));

const StyledCarouselContainer = styled(Box)({
  position: "relative",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "2rem",
  maxWidth: "1200px",
  margin: "0 auto",
  width: "100%",
});

const StyledCarouselWrapper = styled(Box)({
  position: "relative",
  overflow: "hidden",
  flex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "100%",
  maxWidth: "900px",
  margin: "0 auto",
});

const StyledCarouselTrack = styled(Box)<{ currentIndex: number }>(
  ({ currentIndex }) => ({
    height: "100%",
    width: "100%",
    display: "flex",
    minHeight: "0",
    transition: "transform 0.5s ease-in-out, opacity 0.3s ease-in-out",
    transform: `translateX(-${currentIndex * 100}%)`,
  })
);

const StyledVideoCard = styled(Box)(({ theme }) => ({
  position: "relative",
  width: "100%",
  minWidth: "100%",
  cursor: "pointer",
  flexShrink: 0,
  display: "flex",
  flexDirection: "column",
  maxWidth: "900px",
  [theme.breakpoints.down("md")]: {
    minWidth: "100%",
  },
}));

const StyledImageWrapper = styled(Box)(({ theme }) => ({
  position: "relative",
  width: "100%",
  aspectRatio: "16/9",
  borderRadius: "20px",
  overflow: "hidden",
  [theme.breakpoints.down("sm")]: {
    maxHeight: "220px",
    aspectRatio: "3/4",
  },
}));

const StyledCardImage = styled("img")({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  display: "block",
});

const StyledCardOverlay = styled(Box)({
  position: "absolute",
  inset: 0,
  background: "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.4) 100%)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  transition: "background 0.3s ease",
});

const StyledPlayIcon = styled("img")({
  width: "80px",
  height: "80px",
  opacity: 0,
  transition: "opacity 0.3s ease",
  pointerEvents: "none",
});

const StyledTextContent = styled(Box)(({ theme }) => ({
  padding: "1.5rem 0",
  [theme.breakpoints.down("sm")]: {
    padding: "0.75rem 0",
  },
}));

const StyledCardSubtitle = styled(Typography)(({ theme }) => ({
  color: "#fff",
  fontSize: "2rem",
  fontWeight: 400,
  textTransform: "uppercase",
  letterSpacing: "0.05em",
  fontFamily: "var(--font-koulen), sans-serif",
  [theme.breakpoints.down("sm")]: {
    fontSize: "1rem",
  },
}));

const StyledNavButton = styled(IconButton)(({ theme }) => ({
  backgroundColor: "rgba(255, 255, 255, 0.1)",
  color: "#fff",
  "&:hover": {
    backgroundColor: "rgba(255, 255, 255, 0.2)",
  },
  "&:disabled": {
    opacity: 0.3,
  },
  [theme.breakpoints.down("md")]: {
    width: "46px",
    height: "46px",
    fontSize: "1rem",
  },
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
    display: "flex",
  },
}));

const StyledMobileNav = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  gap: "0.75rem",
  marginTop: "1rem",
  [theme.breakpoints.up("md")]: {
    display: "none",
  },
}));

const StyledBrandsContainer = styled(Box)({
  position: "relative",
  maxWidth: "1200px",
  margin: "0 auto",
});

const StyledBrandsTitle = styled(Typography)(({ theme }) => ({
  fontSize: "2.5rem",
  fontWeight: 400,
  color: "#fff",
  textTransform: "uppercase",
  marginBottom: "2rem",
  fontFamily: "var(--font-koulen), sans-serif",
  alignSelf: "flex-start",
  [theme.breakpoints.down("sm")]: {
    fontSize: "1.75rem",
  },
  marginTop: "5rem",
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
    zIndex: 2,
  },
  "&::before": {
    left: 0,
    background: "linear-gradient(to right, #000 0%, transparent 100%)",
  },
  "&::after": {
    right: 0,
    background: "linear-gradient(to left, #000 0%, transparent 100%)",
  },
});

const StyledBrandsTrack = styled(Box)({
  display: "flex",
  gap: "3rem",
  animation: "scroll 14s linear infinite",
  "@keyframes scroll": {
    "0%": {
      transform: "translateX(0)",
    },
    "100%": {
      transform: "translateX(-50%)",
    },
  },
  "&:hover": {
    animationPlayState: "paused",
  },
});

const StyledBrandLogo = styled(Box)({
  flexShrink: 0,
  width: "150px",
  height: "80px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  opacity: 1,
  "& img": {
    maxWidth: "100%",
    maxHeight: "100%",
    objectFit: "contain",
  },
});

const recentVideos = [
  {
    id: 1,
    title: "Jab Judenge tabhi toh Udenge",
    subtitle: "LINE PRODUCTION | SHRIRAM FINANCE",
    brand: "SHRIRAM",
    imageSrc:
      "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&q=80",
  },
  {
    id: 2,
    title: "Creative Excellence",
    subtitle: "BRAND CAMPAIGN | CREATIVE STUDIO",
    brand: "BRAND",
    imageSrc:
      "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&q=80",
  },
  {
    id: 3,
    title: "Visual Storytelling",
    subtitle: "PRODUCTION | MEDIA HOUSE",
    brand: "MEDIA",
    imageSrc:
      "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=800&q=80",
  },
  {
    id: 4,
    title: "Commercial Project",
    subtitle: "DIRECTION | FILM STUDIO",
    brand: "STUDIO",
    imageSrc:
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&q=80",
  },
];

const brandLogos = [
  { id: 1, name: "Brand 1", src: Logo1.src },
  { id: 2, name: "Brand 2", src: Logo2.src },
  { id: 3, name: "Brand 3", src: Logo3.src },
  { id: 4, name: "Brand 4", src: Logo4.src },
  { id: 5, name: "Brand 5", src: Logo5.src },
  { id: 6, name: "Brand 6", src: Logo6.src },
  { id: 7, name: "Yale", src: Logo7.src },
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        if (prev >= recentVideos.length - 1) {
          return 0;
        }
        return prev + 1;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? recentVideos.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= recentVideos.length - 1 ? 0 : prev + 1));
  };

  return (
    <>
      <StyledHeroSection>
        {/* Background Video */}
        <StyledVideoBackground
          autoPlay
          loop
          muted
          playsInline
          poster={HeroCover.src}
        >
          <source src="/videos/hero-video.mp4" type="video/mp4" />
        </StyledVideoBackground>

        <StyledVideoOverlay />

        <StyledHeroInner>
          <StyledContentWrapper>
            <Box
              component="img"
              src={LogoHeader.src}
              alt="Beep Films animated logo"
              sx={{
                height: { xs: "64px", sm: "80px", md: "96px" },
                width: "auto",
              }}
            />
            <StyledTextContainer>
              <StyledHeroTitle component="h1">Crafting Stories That Move</StyledHeroTitle>
              <StyledHeroSubtitle component="p">Films, spots, and stories across mediums</StyledHeroSubtitle>
            </StyledTextContainer>
          </StyledContentWrapper>
        </StyledHeroInner>
      </StyledHeroSection>

      {/* Recents Section */}
      <StyledRecentsSection>
        <StyledCarouselContainer>

          <StyledCarouselWrapper>
            <StyledRecentsTitle>RECENTS</StyledRecentsTitle>
            <StyledCarouselTrack currentIndex={currentIndex}>
              {recentVideos.map((video) => (
                <StyledVideoCard
                  key={video.id}
                  sx={{
                    "&:hover .play-icon": {
                      opacity: 1,
                    },
                    "&:hover .card-overlay": {
                      background: "rgba(0, 0, 0, 0.5)",
                    },
                  }}
                >
                  <StyledImageWrapper>
                    <StyledCardImage src={video.imageSrc} alt={video.title} />

                    <StyledCardOverlay className="card-overlay">
                      <StyledPlayIcon
                        className="play-icon"
                        src={PlayIcon.src}
                        alt="Play"
                      />
                    </StyledCardOverlay>
                  </StyledImageWrapper>

                  <StyledTextContent>
                    <StyledCardSubtitle>{video.subtitle}</StyledCardSubtitle>
                  </StyledTextContent>
                </StyledVideoCard>
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
    </>
  );
}
