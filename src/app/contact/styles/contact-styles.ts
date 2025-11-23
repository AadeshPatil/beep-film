import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledContactSection = styled(Box)({
  backgroundColor: "#000",
  minHeight: "100vh",
  padding: "6rem 3rem 4rem",
  marginTop: "80px",
});

export const StyledContactContent = styled(Box)({
  maxWidth: "1200px",
  margin: "0 auto",
});

export const StyledPageTitle = styled(Typography)(({ theme }) => ({
  fontSize: "2rem",
  fontWeight: 700,
  color: "#fff",
  textTransform: "uppercase",
  marginBottom: "3rem",
  fontFamily: "var(--font-koulen), sans-serif",
  [theme.breakpoints.down("sm")]: {
    fontSize: "1.5rem",
  },
}));

export const StyledSectionLabel = styled(Typography)(({ theme }) => ({
  fontSize: "1rem",
  fontWeight: 400,
  color: "#00FFFF",
  textTransform: "capitalize",
  fontFamily: "var(--font-koulen), sans-serif",
  [theme.breakpoints.down("sm")]: {
    fontSize: "0.875rem",
  },
}));

export const StyledContactItem = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "1rem",
  marginBottom: "1.5rem",
});

export const StyledContactIcon = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  minWidth: "40px",
});

export const StyledContactText = styled(Typography)({
  fontSize: "1.125rem",
  fontWeight: 400,
  color: "#fff",
  lineHeight: 1.6,
});

export const StyledContactLink = styled("a")({
  color: "#fff",
  textDecoration: "none",
  transition: "color 0.3s",
  "&:hover": {
    color: "#00FFFF",
  },
});

export const StyledAddressText = styled(Typography)(({ theme }) => ({
  fontSize: "1.125rem",
  fontWeight: 400,
  color: "#fff",
  lineHeight: 1.8,
  marginTop: "1rem",
  [theme.breakpoints.down("sm")]: {
    fontSize: "1rem",
  },
}));
