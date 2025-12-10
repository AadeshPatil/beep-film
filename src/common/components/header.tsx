"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { styled } from "@mui/material/styles";
import { Box, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Logo from "@/assets/img/light/logo.png";

const StyledHeaderWrapper = styled("header")<{ isOpen?: boolean }>(({ isOpen, theme }) => ({
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  zIndex: 50,
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  padding: "3rem 3rem",
  maxHeight: isOpen ? "100vh" : "150px",
  transition: "max-height 1s cubic-bezier(0.4, 0, 0.2, 1), background-color 1s ease",
  overflow: "hidden",
  [theme.breakpoints.down("sm")]: {
    padding: "1.5rem 1.5rem",
    maxHeight: isOpen ? "100vh" : "90px",
  },
}));

const StyledNavContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  [theme.breakpoints.down("sm")]: {
    gap: "0.5rem",
  },
}));

const StyledLogo = styled(Link)(({ theme }) => ({
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  textDecoration: "none",
  position: "relative",
  height: "50px",
  width: "120px",
  [theme.breakpoints.down("sm")]: {
    height: "38px",
    width: "90px",
  },
}));

const StyledMenuButton = styled(IconButton)(({ theme }) => ({
  color: "#fff",
  width: "auto",
  padding: "0.5rem",
  "& svg": {
    fontSize: "2rem",
  },
  [theme.breakpoints.down("sm")]: {
    padding: "0.25rem",
    "& svg": {
      fontSize: "1.6rem",
    },
  },
}));

const StyledMenuContent = styled(Box)<{ isOpen?: boolean }>(({ isOpen }) => ({
  display: "flex",
  height: "calc(100vh - 12rem)",
  gap: "4rem",
  marginTop: "3rem",
  opacity: isOpen ? 1 : 0,
  visibility: isOpen ? "visible" : "hidden",
  transition: "opacity 0.4s ease-in-out, visibility 0.4s ease-in-out",
  pointerEvents: isOpen ? "auto" : "none",
}));

const StyledMenuRight = styled(Box)({
  flex: 1,
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "flex-end",
});

const StyledMenuList = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: "2rem",
  alignItems: "flex-end",
  justifyContent: "flex-start",
});

const StyledMenuLink = styled(Box)<{ hoverColor?: string }>(({ hoverColor, theme }) => ({
  fontSize: "22.76px",
  fontWeight: 700,
  fontFamily: "Koulen, Regular, sans-serif",
  color: "#fff",
  textDecoration: "none",
  transition: "color 0.3s ease",
  cursor: "pointer",
  "&:hover": {
    color: hoverColor || "#fff",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "18px",
  },
}));

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleNavigation = (path: string) => {
    router.push(path);
    setIsMenuOpen(false);
  };

  return (
    <StyledHeaderWrapper isOpen={isMenuOpen}>
      <StyledNavContainer>
        <StyledLogo href="/">
          <Image
            src={Logo}
            height={150}
            width={163}
            alt="BEEP FILMS"
            style={{ objectFit: "contain", width: "100%", height: "auto" }}
            priority
          />
        </StyledLogo>

        <StyledMenuButton onClick={toggleMenu} aria-label="Open menu">
          {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
        </StyledMenuButton>
      </StyledNavContainer>

      <StyledMenuContent isOpen={isMenuOpen}>
        <StyledMenuRight>
          <StyledMenuList>
            <StyledMenuLink hoverColor="#00D9FF" onClick={() => handleNavigation("/")}>
              HOME
            </StyledMenuLink>
            <StyledMenuLink hoverColor="#FFE500" onClick={() => handleNavigation("/work")}>
              WORK
            </StyledMenuLink>
            <StyledMenuLink hoverColor="#FF00FF" onClick={() => handleNavigation("/about")}>
              ABOUT US
            </StyledMenuLink>
            <StyledMenuLink hoverColor="#FF0000" onClick={() => handleNavigation("/contact")}>
              CONTACT US
            </StyledMenuLink>
          </StyledMenuList>
        </StyledMenuRight>
      </StyledMenuContent>
    </StyledHeaderWrapper>
  );
}
