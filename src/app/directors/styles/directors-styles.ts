import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledDirectorsSection = styled(Box)({
  minHeight: "100vh",
  paddingTop: "6rem",
  paddingBottom: "4rem",
  backgroundColor: "#fff",
});

export const StyledPageTitle = styled(Typography)(({ theme }) => ({
  fontSize: "3rem",
  fontWeight: 700,
  textAlign: "center",
  marginBottom: "3rem",
  letterSpacing: "-0.02em",
  [theme.breakpoints.up("md")]: {
    fontSize: "4rem",
  },
}));

export const StyledDirectorsGrid = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "1fr",
  gap: "3rem",
  marginTop: "3rem",
  [theme.breakpoints.up("md")]: {
    gridTemplateColumns: "repeat(2, 1fr)",
  },
  [theme.breakpoints.up("lg")]: {
    gridTemplateColumns: "repeat(3, 1fr)",
  },
}));

export const StyledDirectorCard = styled(Box)({
  textAlign: "center",
});

export const StyledDirectorImage = styled(Box)({
  width: "100%",
  aspectRatio: "1 / 1",
  backgroundColor: "#f3f4f6",
  borderRadius: "8px",
  marginBottom: "1rem",
  overflow: "hidden",
  "& img": {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
});

export const StyledDirectorName = styled(Typography)({
  fontSize: "1.5rem",
  fontWeight: 700,
  marginBottom: "0.5rem",
});

export const StyledDirectorBio = styled(Typography)({
  fontSize: "0.875rem",
  color: "#6b7280",
  lineHeight: 1.6,
});
