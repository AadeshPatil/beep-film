"use client";

import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

const StyledLoaderWrapper = styled(Box)({
  position: "fixed",
  inset: 0,
  backgroundColor: "#000",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 9999,
  transition: "opacity 0.5s ease-in-out",
});

const StyledLoaderVideo = styled("video")({
  maxWidth: "80%",
  maxHeight: "80%",
  objectFit: "contain",
});

interface LoaderProps {
  isLoading: boolean;
}

export default function Loader({ isLoading }: LoaderProps) {
  if (!isLoading) return null;

  return (
    <StyledLoaderWrapper>
      <StyledLoaderVideo autoPlay loop muted playsInline>
        <source src="/src/assets/video/loading.mp4" type="video/mp4" />
      </StyledLoaderVideo>
    </StyledLoaderWrapper>
  );
}
