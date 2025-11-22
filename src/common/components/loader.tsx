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

const StyledLoaderLogo = styled(Box)({
  fontSize: "4rem",
  fontWeight: 700,
  color: "#fff",
  letterSpacing: "-0.02em",
  animation: "pulse 1.5s ease-in-out infinite",
  "@keyframes pulse": {
    "0%, 100%": {
      opacity: 1,
    },
    "50%": {
      opacity: 0.5,
    },
  },
});

interface LoaderProps {
  isLoading: boolean;
}

export default function Loader({ isLoading }: LoaderProps) {
  if (!isLoading) return null;

  return (
    <StyledLoaderWrapper>
      <StyledLoaderLogo>BEEP</StyledLoaderLogo>
    </StyledLoaderWrapper>
  );
}
