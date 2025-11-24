"use client";

import { styled } from "@mui/material/styles";
import { Box, Typography, IconButton } from "@mui/material";
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

const StyledHeroSection = styled(Box)({
  position: "relative",
  height: "100vh",
  width: "100%",
  backgroundColor: "#000",
  overflow: "hidden",
});

const StyledVideoBackground = styled("video")({
  position: "relative",
  width: "100%",
  display: "block",
  backgroundColor: "#000",
});

const StyledVideoOverlay = styled(Box)({
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0, 0, 0, 0.3)",
  pointerEvents: "none",
});

const StyledContentWrapper = styled(Box)(({ theme }) => ({
  position: "absolute",
  bottom: "3rem",
  left: "3rem",
  zIndex: 10,
  display: "flex",
  alignItems: "flex-end",
  gap: "1.5rem",
  [theme.breakpoints.down("sm")]: {
    bottom: "2rem",
    left: "2rem",
  },
}));

const StyledTextContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  lineHeight: 0.9,
});

const StyledHeroTitle = styled(Typography)(({ theme }) => ({
  fontSize: "2rem",
  fontWeight: 700,
  letterSpacing: "-0.02em",
  color: "#fff",
  textTransform: "uppercase",
  [theme.breakpoints.up("md")]: {
    fontSize: "2rem",
  },
  [theme.breakpoints.up("lg")]: {
    fontSize: "2rem",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "2rem",
  },
}));

const StyledRecentsSection = styled(Box)(({ theme }) => ({
  backgroundColor: "#000",
  padding: "4rem 3rem",
  [theme.breakpoints.down("sm")]: {
    padding: "3rem 2rem",
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
    fontSize: "2rem",
  },
}));

const StyledCarouselContainer = styled(Box)({
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "2rem",
  maxWidth: "1200px",
  margin: "0 auto",
});

const StyledCarouselWrapper = styled(Box)({
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
  [theme.breakpoints.down("md")]: {
    minWidth: "100%",
  },
}));

const StyledImageWrapper = styled(Box)({
  position: "relative",
  width: "100%",
  aspectRatio: "16/9",
  borderRadius: "20px",
  overflow: "hidden",
});

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
    padding: "1rem 0",
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
    fontSize: "0.8rem",
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
    fontSize: "2rem",
  },
  marginTop: "11rem",
}));

const StyledBrandsScroller = styled(Box)({
  display: "flex",
  overflow: "hidden",
  position: "relative",
  width: "100%",
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
  gap: "4rem",
  animation: "scroll 10s linear infinite",
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
            {/* Brand Collaborations Section */}

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
