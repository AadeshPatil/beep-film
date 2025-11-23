"use client";

import { styled } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";
import { useState } from "react";
import Header from "@/common/components/header";

const StyledWorkSection = styled(Box)({
  backgroundColor: "#000",
  minHeight: "100vh",
  padding: "5rem 4rem 4rem",
  marginTop: "80px",
});

const StyledWorkTitle = styled(Typography)(({ theme }) => ({
  fontSize: "3.5rem",
  fontWeight: 700,
  color: "#fff",
  textTransform: "uppercase",
  marginBottom: "4rem",
  fontFamily: "var(--font-koulen), sans-serif",
  [theme.breakpoints.down("sm")]: {
    fontSize: "2.5rem",
    marginBottom: "2rem",
  },
}));

const StyledWorkGrid = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  gap: "2rem",
  maxWidth: "1400px",
  margin: "0 auto",
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
});

const StyledWorkImage = styled("img")({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  display: "block",
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

const workItems = [
  {
    id: 1,
    label: "Hausla hai toh hojayega.",
    category: "TVC / LINE PRODUCTION / KOTAK",
    imageSrc:
      "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&q=80",
  },
  {
    id: 2,
    label: "Fortune Teller",
    category: "CAMPAIGN / VIPS FORTUNE TELLER",
    imageSrc:
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800&q=80",
  },
  {
    id: 3,
    label: "Brand Campaign",
    category: "TVC / COMMERCIAL / BRAND",
    imageSrc:
      "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=800&q=80",
  },
  {
    id: 4,
    label: "Creative Direction",
    category: "CAMPAIGN / CREATIVE STUDIO",
    imageSrc:
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&q=80",
  },
  {
    id: 5,
    label: "Product Launch",
    category: "TVC / LINE PRODUCTION / TECH",
    imageSrc:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
  },
  {
    id: 6,
    label: "Visual Story",
    category: "CAMPAIGN / MEDIA HOUSE",
    imageSrc:
      "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=800&q=80",
  },
  {
    id: 7,
    label: "Brand Identity",
    category: "TVC / COMMERCIAL / LIFESTYLE",
    imageSrc:
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80",
  },
  {
    id: 8,
    label: "Digital Campaign",
    category: "CAMPAIGN / SOCIAL MEDIA",
    imageSrc:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80",
  },
  {
    id: 9,
    label: "Documentary",
    category: "TVC / LINE PRODUCTION / FILM",
    imageSrc:
      "https://images.unsplash.com/photo-1579548122080-c35fd6820ecb?w=800&q=80",
  },
  {
    id: 10,
    label: "Fashion Film",
    category: "CAMPAIGN / FASHION / EDITORIAL",
    imageSrc:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&q=80",
  },
];

export default function WorkContent() {
  return (
    <>
      <Header />
      <StyledWorkSection>
        <StyledWorkTitle>WORK</StyledWorkTitle>
        <StyledWorkGrid>
        {workItems.map((work) => (
          <StyledWorkCard key={work.id}>
            <StyledWorkImageWrapper>
              <StyledWorkImage src={work.imageSrc} alt={work.label} />
            </StyledWorkImageWrapper>
            <StyledWorkCategory>{work.category}</StyledWorkCategory>
          </StyledWorkCard>
        ))}
      </StyledWorkGrid>
      </StyledWorkSection>
    </>
  );
}
