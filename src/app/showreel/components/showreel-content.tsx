"use client";

import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";
import { useEffect, useRef } from "react";
import { useHlsPlayer } from "@/common/hooks";
import { getStreamUrl } from "@/common/utils";

// TODO: Replace with your actual Cloudflare Stream video ID for the showreel
const SHOWREEL_VIDEO_ID = "cc1bb892a924cbed49637a36546c232b";

const StyledShowreelContainer = styled(Box)(({ theme }) => ({
  minHeight: "100vh",
  paddingTop: "90px",
  paddingBottom: "2rem",
  backgroundColor: "#000",
  [theme.breakpoints.down("sm")]: {
    paddingTop: "80px",
  },
}));

const StyledVideoContainer = styled(Box)(({ theme }) => ({
  maxWidth: "1400px",
  margin: "0 auto",
  padding: "3rem 2rem",
  [theme.breakpoints.down("sm")]: {
    padding: "1.5rem",
  },
}));

const StyledVideo = styled("video")(({ theme }) => ({
  width: "100%",
  height: "auto",
  display: "block",
  backgroundColor: "#000",
  borderRadius: "4px",
  "::cue": {
    backgroundColor: "rgba(0, 0, 0, 0.8)",
  },
}));

export function ShowreelContent() {
  const videoRef = useRef<HTMLVideoElement>(null);
  
  // Initialize HLS for Cloudflare Stream
  useHlsPlayer(videoRef.current, getStreamUrl(SHOWREEL_VIDEO_ID));
  
  return (
    <StyledShowreelContainer>
      <StyledVideoContainer>
        <StyledVideo
          ref={videoRef}
          controls
          controlsList="nodownload"
          playsInline
          preload="metadata"
        >
          Your browser does not support the video tag.
        </StyledVideo>
      </StyledVideoContainer>
    </StyledShowreelContainer>
  );
}
