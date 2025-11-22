"use client";

import { Container, Typography } from "@mui/material";
import {
  StyledDirectorsSection,
  StyledPageTitle,
  StyledDirectorsGrid,
  StyledDirectorCard,
  StyledDirectorImage,
  StyledDirectorName,
  StyledDirectorBio,
} from "../styles";

const directors = [
  {
    id: 1,
    name: "Aakash Bhatia",
    bio: "Award-winning director specializing in commercial and narrative storytelling.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
  },
  {
    id: 2,
    name: "Priya Sharma",
    bio: "Creative visionary known for bold visual narratives and brand campaigns.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
  },
  {
    id: 3,
    name: "Rahul Mehta",
    bio: "Documentary filmmaker and visual storyteller with a passion for authenticity.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
  },
  {
    id: 4,
    name: "Ananya Singh",
    bio: "Music video and fashion film director with a unique artistic perspective.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
  },
  {
    id: 5,
    name: "Vikram Kumar",
    bio: "Commercial director specializing in automotive and lifestyle brands.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
  },
  {
    id: 6,
    name: "Meera Desai",
    bio: "Cinematographer turned director, known for stunning visual compositions.",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop",
  },
];

export default function DirectorsContent() {
  return (
    <StyledDirectorsSection>
      <Container maxWidth="xl">
        <StyledPageTitle variant="h1">OUR DIRECTORS</StyledPageTitle>
        <Typography
          variant="body1"
          sx={{
            textAlign: "center",
            color: "#6b7280",
            maxWidth: "48rem",
            margin: "0 auto 4rem",
            fontSize: "1.125rem",
          }}
        >
          Meet our talented team of directors who bring stories to life through their unique vision and creative expertise.
        </Typography>
        <StyledDirectorsGrid>
          {directors.map((director) => (
            <StyledDirectorCard key={director.id}>
              <StyledDirectorImage>
                <img src={director.image} alt={director.name} />
              </StyledDirectorImage>
              <StyledDirectorName variant="h3">{director.name}</StyledDirectorName>
              <StyledDirectorBio>{director.bio}</StyledDirectorBio>
            </StyledDirectorCard>
          ))}
        </StyledDirectorsGrid>
      </Container>
    </StyledDirectorsSection>
  );
}
