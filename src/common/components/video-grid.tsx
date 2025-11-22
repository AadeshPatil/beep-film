"use client";

import { useState } from "react";
import { styled } from "@mui/material/styles";
import { Box, Container, Typography, Button, Modal, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import VideoCard from "./video-card";
import type { Video } from "../types";

const videos: Video[] = [
  {
    id: 1,
    title: 'Challenge Accepted',
    brand: 'Royal Challenge × Aakash',
    videoUrl: 'https://player.vimeo.com/video/76979871',
    thumbnailUrl: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&h=450&fit=crop',
  },
  {
    id: 2,
    title: 'Goals for YouTube',
    brand: 'YT Shorts × Aakash Bhatia',
    videoUrl: 'https://player.vimeo.com/video/169599296',
    thumbnailUrl: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800&h=450&fit=crop',
  },
  {
    id: 3,
    title: 'Innovation Campaign',
    brand: 'Google × Anmol × Aakash',
    videoUrl: 'https://player.vimeo.com/video/148751763',
    thumbnailUrl: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&h=450&fit=crop',
  },
  {
    id: 4,
    title: 'Fuel Your Hustle',
    brand: 'Zomato × Aakash Bhatia',
    videoUrl: 'https://player.vimeo.com/video/169599296',
    thumbnailUrl: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&h=450&fit=crop',
  },
  {
    id: 5,
    title: 'Women of Color',
    brand: 'Inecto × Aakash',
    videoUrl: 'https://player.vimeo.com/video/76979871',
    thumbnailUrl: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=800&h=450&fit=crop',
  },
  {
    id: 6,
    title: 'Classic Ride',
    brand: 'Royal Enfield × Aakash',
    videoUrl: 'https://player.vimeo.com/video/148751763',
    thumbnailUrl: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=450&fit=crop',
  },
  {
    id: 7,
    title: 'Zaheerabad Project',
    brand: 'Mahindra × Aakash',
    videoUrl: 'https://player.vimeo.com/video/169599296',
    thumbnailUrl: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&h=450&fit=crop',
  },
  {
    id: 8,
    title: 'Transformation - It Begins Here',
    brand: 'Gitam × Aakash Bhatia',
    videoUrl: 'https://player.vimeo.com/video/76979871',
    thumbnailUrl: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=450&fit=crop',
  },
  {
    id: 9,
    title: 'The Single Moment',
    brand: 'Singleton × Aakash Bhatia',
    videoUrl: 'https://player.vimeo.com/video/148751763',
    thumbnailUrl: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=800&h=450&fit=crop',
  },
]

const StyledWorkSection = styled(Box)({
  padding: "5rem 1.5rem",
  backgroundColor: "#fff",
});

const StyledSectionTitle = styled(Typography)(({ theme }) => ({
  fontSize: "2.25rem",
  fontWeight: 700,
  textAlign: "center",
  marginBottom: "4rem",
  letterSpacing: "-0.01em",
  [theme.breakpoints.up("md")]: {
    fontSize: "3rem",
  },
}));

const StyledVideoGridContainer = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "repeat(1, 1fr)",
  gap: "2rem",
  [theme.breakpoints.up("md")]: {
    gridTemplateColumns: "repeat(2, 1fr)",
  },
  [theme.breakpoints.up("lg")]: {
    gridTemplateColumns: "repeat(3, 1fr)",
  },
}));

const StyledLoadMoreButton = styled(Button)({
  marginTop: "4rem",
  padding: "1rem 3rem",
  backgroundColor: "#000",
  color: "#fff",
  fontSize: "0.875rem",
  fontWeight: 500,
  letterSpacing: "0.1em",
  transition: "background-color 0.3s",
  "&:hover": {
    backgroundColor: "#374151",
  },
});

const StyledModalBox = styled(Box)({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90%",
  maxWidth: "80rem",
  outline: "none",
});

const StyledCloseButton = styled(IconButton)({
  position: "absolute",
  top: "-3rem",
  right: 0,
  color: "#fff",
  fontSize: "2.5rem",
  transition: "opacity 0.3s",
  "&:hover": {
    opacity: 0.7,
  },
});

const StyledVideoIframe = styled("iframe")({
  width: "100%",
  aspectRatio: "16 / 9",
  border: "none",
});

const StyledVideoInfo = styled(Box)({
  marginTop: "1rem",
  color: "#fff",
});

const StyledVideoModalTitle = styled(Typography)({
  fontSize: "1.5rem",
  fontWeight: 700,
});

const StyledVideoModalBrand = styled(Typography)({
  fontSize: "1rem",
  color: "#d1d5db",
  marginTop: "0.5rem",
});

export default function VideoGrid() {
  const [visibleVideos, setVisibleVideos] = useState(6);
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);

  const loadMore = () => {
    setVisibleVideos(prev => Math.min(prev + 3, videos.length));
  };

  return (
    <StyledWorkSection id="work">
      <Container maxWidth="xl">
        <StyledSectionTitle variant="h2">OUR WORK</StyledSectionTitle>
        
        <StyledVideoGridContainer>
          {videos.slice(0, visibleVideos).map((video, index) => (
            <VideoCard
              key={video.id}
              video={video}
              index={index}
              onClick={() => setSelectedVideo(video)}
            />
          ))}
        </StyledVideoGridContainer>

        {visibleVideos < videos.length && (
          <Box display="flex" justifyContent="center">
            <StyledLoadMoreButton onClick={loadMore}>
              LOAD MORE
            </StyledLoadMoreButton>
          </Box>
        )}
      </Container>

      {/* Video Modal */}
      <Modal
        open={Boolean(selectedVideo)}
        onClose={() => setSelectedVideo(null)}
        sx={{
          backgroundColor: "rgba(0, 0, 0, 0.9)",
        }}
      >
        <StyledModalBox>
          <StyledCloseButton
            onClick={() => setSelectedVideo(null)}
            aria-label="Close video modal"
          >
            <CloseIcon fontSize="large" />
          </StyledCloseButton>
          {selectedVideo && (
            <>
              <StyledVideoIframe
                src={`${selectedVideo.videoUrl}?autoplay=1`}
                title={selectedVideo.title}
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
              />
              <StyledVideoInfo>
                <StyledVideoModalTitle>{selectedVideo.title}</StyledVideoModalTitle>
                <StyledVideoModalBrand>{selectedVideo.brand}</StyledVideoModalBrand>
              </StyledVideoInfo>
            </>
          )}
        </StyledModalBox>
      </Modal>
    </StyledWorkSection>
  );
}
