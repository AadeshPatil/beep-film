import { Box, Typography, Button } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledAboutSection = styled(Box)({
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

export const StyledContentSection = styled(Box)({
  marginBottom: "4rem",
});

export const StyledSectionTitle = styled(Typography)({
  fontSize: "2rem",
  fontWeight: 700,
  marginBottom: "1.5rem",
  letterSpacing: "-0.01em",
});

export const StyledSectionText = styled(Typography)({
  fontSize: "1.125rem",
  lineHeight: 1.8,
  color: "#374151",
  marginBottom: "1rem",
});

export const StyledStatsGrid = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  gap: "2rem",
  marginTop: "3rem",
  [theme.breakpoints.up("md")]: {
    gridTemplateColumns: "repeat(4, 1fr)",
  },
}));

export const StyledStatBox = styled(Box)({
  textAlign: "center",
});

export const StyledStatNumber = styled(Typography)({
  fontSize: "3rem",
  fontWeight: 700,
  color: "#000",
  marginBottom: "0.5rem",
});

export const StyledStatLabel = styled(Typography)({
  fontSize: "0.875rem",
  color: "#6b7280",
  textTransform: "uppercase",
  letterSpacing: "0.05em",
});

export const StyledCTASection = styled(Box)({
  textAlign: "center",
  marginTop: "4rem",
  padding: "3rem",
  backgroundColor: "#f9fafb",
  borderRadius: "8px",
});

export const StyledCTAButton = styled(Button)({
  marginTop: "1.5rem",
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
