"use client";

import { styled } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";
import HeroCover from "@/assets/img/light/hero-cover.png";

const StyledHeroSection = styled(Box)({
  position: "relative",
  height: "100vh",
  width: "100%",
  backgroundColor: "#000",
  overflow: "hidden",
});

const StyledVideoBackground = styled("video")({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  objectFit: "cover",
  backgroundColor: "#000",
});

const StyledVideoOverlay = styled(Box)({
  position: "absolute",
  inset: 0,
  backgroundColor: "rgba(0, 0, 0, 0.3)",
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

export default function Hero() {
  return (
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

      {/* Content - Bottom Left */}
      <StyledContentWrapper>
        <StyledTextContainer>
          <StyledHeroTitle>GET</StyledHeroTitle>
          <StyledHeroTitle>UNFILTERED</StyledHeroTitle>
        </StyledTextContainer>
      </StyledContentWrapper>
    </StyledHeroSection>
  );
}
