"use client";

import { styled } from "@mui/material/styles";
import { Box, Container, Typography, IconButton } from "@mui/material";

const StyledFooterWrapper = styled("footer")({
  backgroundColor: "#000",
  color: "#fff",
  padding: "4rem 1.5rem",
});

const StyledFooterContent = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "1fr",
  gap: "3rem",
  marginBottom: "3rem",
  [theme.breakpoints.up("md")]: {
    gridTemplateColumns: "repeat(3, 1fr)",
  },
}));

const StyledBrandTitle = styled(Typography)({
  fontSize: "1.5rem",
  fontWeight: 700,
  marginBottom: "1rem",
  letterSpacing: "-0.01em",
});

const StyledBrandDescription = styled(Typography)({
  color: "#9ca3af",
  fontSize: "0.875rem",
  lineHeight: 1.6,
});

const StyledSectionTitle = styled(Typography)({
  fontSize: "1.125rem",
  fontWeight: 600,
  marginBottom: "1rem",
  letterSpacing: "0.02em",
});

const StyledLinkList = styled("ul")({
  listStyle: "none",
  padding: 0,
  margin: 0,
  display: "flex",
  flexDirection: "column",
  gap: "0.5rem",
});

const StyledFooterLink = styled("a")({
  color: "#9ca3af",
  fontSize: "0.875rem",
  textDecoration: "none",
  transition: "color 0.3s",
  "&:hover": {
    color: "#fff",
  },
});

const StyledSocialLinks = styled(Box)({
  display: "flex",
  gap: "1rem",
});

const StyledSocialIconButton = styled("a")({
  width: "2.5rem",
  height: "2.5rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "50%",
  backgroundColor: "rgba(255, 255, 255, 0.1)",
  color: "#fff",
  textDecoration: "none",
  transition: "background-color 0.3s",
  "&:hover": {
    backgroundColor: "rgba(255, 255, 255, 0.2)",
  },
});

const StyledBottomBar = styled(Box)({
  borderTop: "1px solid #374151",
  paddingTop: "2rem",
  textAlign: "center",
});

const StyledCopyright = styled(Typography)({
  color: "#9ca3af",
  fontSize: "0.875rem",
});

export default function Footer() {
  return (
    <StyledFooterWrapper>
      <Container maxWidth="xl">
        <StyledFooterContent>
          {/* Brand Section */}
          <Box>
            <StyledBrandTitle variant="h3">BRAND × LOVE</StyledBrandTitle>
            <StyledBrandDescription>
              We create compelling visual stories that connect brands with their audience through innovative video production and creative content.
            </StyledBrandDescription>
          </Box>

          {/* Quick Links */}
          <Box>
            <StyledSectionTitle variant="h4">QUICK LINKS</StyledSectionTitle>
            <StyledLinkList>
              <li>
                <StyledFooterLink href="/#work">Our Work</StyledFooterLink>
              </li>
              <li>
                <StyledFooterLink href="/directors">Directors</StyledFooterLink>
              </li>
              <li>
                <StyledFooterLink href="/about">About Us</StyledFooterLink>
              </li>
              <li>
                <StyledFooterLink href="/contact">Contact Us</StyledFooterLink>
              </li>
            </StyledLinkList>
          </Box>

          {/* Social Links */}
          <Box>
            <StyledSectionTitle variant="h4">CONNECT</StyledSectionTitle>
            <StyledSocialLinks>
              <StyledSocialIconButton
                href="https://vimeo.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Vimeo"
              >
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.977 6.416c-.105 2.338-1.739 5.543-4.894 9.609-3.268 4.247-6.026 6.37-8.29 6.37-1.409 0-2.578-1.294-3.553-3.881L5.322 11.4C4.603 8.816 3.834 7.522 3.01 7.522c-.179 0-.806.378-1.881 1.132L0 7.197c1.185-1.044 2.351-2.084 3.501-3.128C5.08 2.701 6.266 1.984 7.055 1.91c1.867-.18 3.016 1.1 3.447 3.838.465 2.953.789 4.789.971 5.507.539 2.45 1.131 3.674 1.776 3.674.502 0 1.256-.796 2.265-2.385 1.004-1.589 1.54-2.797 1.612-3.628.144-1.371-.395-2.061-1.614-2.061-.574 0-1.167.121-1.777.391 1.186-3.868 3.434-5.757 6.762-5.637 2.473.06 3.628 1.664 3.493 4.797l-.013.01z"/>
                </svg>
              </StyledSocialIconButton>
              <StyledSocialIconButton
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </StyledSocialIconButton>
              <StyledSocialIconButton
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </StyledSocialIconButton>
            </StyledSocialLinks>
          </Box>
        </StyledFooterContent>

        {/* Bottom Bar */}
        <StyledBottomBar>
          <StyledCopyright>
            © {new Date().getFullYear()} Brand × Love. All rights reserved.
          </StyledCopyright>
        </StyledBottomBar>
      </Container>
    </StyledFooterWrapper>
  );
}
