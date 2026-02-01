"use client";

import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

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
  return (
    <StyledShowreelContainer>
      <StyledVideoContainer>
        <StyledVideo
          controls
          controlsList="nodownload"
          playsInline
          preload="metadata"
        >
          <source
            src="https://static.kleemservices.com/beepfilms/videos/BEEP%20SHOWREEL%20HD.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </StyledVideo>
      </StyledVideoContainer>
    </StyledShowreelContainer>
  );
}
