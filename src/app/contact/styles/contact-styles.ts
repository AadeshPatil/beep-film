import { Box, Typography, Button } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledContactSection = styled(Box)({
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

export const StyledContactGrid = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "1fr",
  gap: "3rem",
  marginTop: "3rem",
  [theme.breakpoints.up("md")]: {
    gridTemplateColumns: "1fr 1fr",
    gap: "4rem",
  },
}));

export const StyledContactInfo = styled(Box)({
  "& > *": {
    marginBottom: "2rem",
  },
});

export const StyledInfoTitle = styled(Typography)({
  fontSize: "1.5rem",
  fontWeight: 700,
  marginBottom: "1rem",
});

export const StyledInfoText = styled(Typography)({
  fontSize: "1rem",
  color: "#6b7280",
  lineHeight: 1.6,
});

export const StyledContactLink = styled("a")({
  color: "#000",
  textDecoration: "none",
  transition: "color 0.3s",
  "&:hover": {
    color: "#374151",
  },
});

export const StyledContactForm = styled("form")({
  display: "flex",
  flexDirection: "column",
  gap: "1.5rem",
});

export const StyledSubmitButton = styled(Button)({
  padding: "1rem",
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
