"use client";

import { useState } from "react";
import { styled } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import type { VideoCardProps } from "../types";

const StyledVideoCardWrapper = styled(Box)({
  position: "relative",
  cursor: "pointer",
  overflow: "hidden",
  backgroundColor: "#f3f4f6",
  aspectRatio: "16 / 9",
  animation: "slideUp 0.6s ease-out both",
  "@keyframes slideUp": {
    from: {
      transform: "translateY(30px)",
      opacity: 0,
    },
    to: {
      transform: "translateY(0)",
      opacity: 1,
    },
  },
});

const StyledThumbnailWrapper = styled(Box)({
  width: "100%",
  height: "100%",
});

const StyledThumbnailImage = styled("img")({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  transition: "transform 0.5s",
  "div:hover &": {
    transform: "scale(1.1)",
  },
});

const StyledFallbackBox = styled(Box)({
  width: "100%",
  height: "100%",
  background: "linear-gradient(135deg, #e5e7eb 0%, #d1d5db 100%)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const StyledVideoOverlay = styled(Box)<{ isHovered?: boolean }>(({ isHovered }) => ({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  background: "linear-gradient(180deg, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.7) 100%)",
  opacity: isHovered ? 1 : 0,
  transition: "opacity 0.3s",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  color: "#fff",
  padding: "1.5rem",
}));

const StyledOverlayContent = styled(Box)<{ isHovered?: boolean }>(({ isHovered }) => ({
  transition: "all 0.3s",
  opacity: isHovered ? 1 : 0,
  transform: isHovered ? "translateY(0)" : "translateY(16px)",
}));

const StyledPlayIconWrapper = styled(Box)({
  marginBottom: "1rem",
});

const StyledVideoTitle = styled(Typography)({
  fontSize: "1.25rem",
  fontWeight: 700,
  textAlign: "center",
  marginBottom: "0.5rem",
});

const StyledVideoBrand = styled(Typography)({
  fontSize: "0.875rem",
  textAlign: "center",
  color: "#e5e7eb",
});

export default function VideoCard({ video, index, onClick }: VideoCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [imageError, setImageError] = useState(false);

  return (
    <StyledVideoCardWrapper
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && onClick()}
    >
      {/* Thumbnail */}
      <StyledThumbnailWrapper>
        {!imageError ? (
          <StyledThumbnailImage
            src={video.thumbnailUrl}
            alt={video.title}
            onError={() => setImageError(true)}
          />
        ) : (
          <StyledFallbackBox>
            <PlayArrowIcon sx={{ width: 80, height: 80, color: "#9ca3af" }} />
          </StyledFallbackBox>
        )}
      </StyledThumbnailWrapper>

      {/* Overlay */}
      <StyledVideoOverlay isHovered={isHovered}>
        <StyledOverlayContent isHovered={isHovered}>
          <StyledPlayIconWrapper>
            <PlayArrowIcon sx={{ width: 64, height: 64 }} />
          </StyledPlayIconWrapper>
          <StyledVideoTitle variant="h3">{video.title}</StyledVideoTitle>
          <StyledVideoBrand variant="body2">{video.brand}</StyledVideoBrand>
        </StyledOverlayContent>
      </StyledVideoOverlay>
    </StyledVideoCardWrapper>
  );
}
