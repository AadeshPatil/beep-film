"use client";

import { styled } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import TvIcon from "@mui/icons-material/Tv";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import VideocamIcon from "@mui/icons-material/Videocam";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import MovieIcon from "@mui/icons-material/Movie";
import GroupIcon from "@mui/icons-material/Group";
import DevendraImg from "@/assets/img/team/devendra.png";
import AmeyImg from "@/assets/img/team/amey.png";
import AmeySVG from "@/assets/img/team/amey.png";
import ShreyasImg from "@/assets/img/team/shreyash.png";
import FlashEImg from "@/assets/img/light/flash-e.png";

const StyledAboutSection = styled(Box)(({ theme }) => ({
  backgroundColor: "#000",
  minHeight: "100vh",
  padding: "6rem 3rem 4rem",
  marginTop: "40px",
  [theme.breakpoints.down("sm")]: {
    marginTop: "20px",
  },
}));

const StyledAboutContent = styled(Box)({
  maxWidth: "1200px",
  margin: "0 auto",
});

const StyledSectionTitle = styled(Typography)(({ theme }) => ({
  fontSize: "70px",
  fontWeight: 700,
  color: "#fff",
  textTransform: "uppercase",
  fontFamily: "var(--font-koulen), sans-serif",
  display: "flex",
  alignItems: "center",
  gap: "0",
  [theme.breakpoints.down("sm")]: {
    fontSize: "1.5rem",
  },
}));

const StyledBeliefText = styled(Typography)(({ theme }) => ({
  fontSize: "1.2rem",
  fontWeight: 400,
  color: "#fff",
  marginBottom: "0.5rem",
  lineHeight: 1.6,
  [theme.breakpoints.down("sm")]: {
    fontSize: "1rem",
  },
}));

const StyledHighlightText = styled("span")({
  color: "#FDFF6D",
});

const StyledTagline = styled(Typography)(({ theme }) => ({
  fontSize: "1.2rem",
  fontWeight: 400,
  color: "#fff",
  marginBottom: "1.5rem",
  lineHeight: 1.6,
  [theme.breakpoints.down("sm")]: {
    fontSize: "1rem",
  },
}));

const StyledCallout = styled(Typography)(({ theme }) => ({
  fontSize: "1.2rem",
  fontWeight: 400,
  color: "#fff",
  marginTop: "2rem",
  marginBottom: "5rem",
  lineHeight: 1.6,
  [theme.breakpoints.down("sm")]: {
    fontSize: "1rem",
    marginBottom: "3rem",
  },
}));

const StyledServicesGrid = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
  gap: "2rem",
  marginBottom: "4rem",
  marginTop: "2rem",
  [theme.breakpoints.down("md")]: {
    gridTemplateColumns: "repeat(2, 1fr)",
  },
  [theme.breakpoints.down("sm")]: {
    gridTemplateColumns: "1fr",
    gap: "1rem",
  },
}));

const StyledServiceItem = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "1rem",
  position: "relative",
  paddingRight: "3rem",
  "&::after": {
    content: '""',
    position: "absolute",
    right: "1.25rem",
    top: "50%",
    transform: "translateY(-50%)",
    width: "1px",
    height: "26px",
    backgroundColor: "#FDFF6D",
  },
  "&:nth-of-type(4n)::after": {
    display: "none",
  },
  "&:last-child::after": {
    display: "none",
  },
  [theme.breakpoints.down("md")]: {
    "&:nth-of-type(4n)::after": {
      display: "block",
    },
    "&:nth-of-type(2n)::after": {
      display: "none",
    },
  },
  [theme.breakpoints.down("sm")]: {
    paddingRight: "0",
    "&::after": {
      display: "none !important",
    },
  },
}));

const StyledServiceIcon = styled(Box)({
  color: "#FF4CF0",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0,
  height: "30px",
  width: "30px",
  "& .MuiSvgIcon-root": {
    fontSize: "30px !important",
    width: "30px",
    height: "30px",
  },
});

const StyledServiceText = styled(Typography)(({ theme }) => ({
  color: "#fff",
  fontSize: "1.1rem",
  fontWeight: 400,
  whiteSpace: "nowrap",
  [theme.breakpoints.down("sm")]: {
    fontSize: "1rem",
  },
}));

const StyledTeamSection = styled(Box)({
  marginTop: "6rem",
});

const StyledTeamTitle = styled(Typography)(({ theme }) => ({
  fontSize: "34px",
  fontWeight: 700,
  color: "#fff",
  textTransform: "uppercase",
  marginBottom: "2.5rem",
  fontFamily: "var(--font-koulen), sans-serif",
  [theme.breakpoints.down("sm")]: {
    fontSize: "2rem",
    marginBottom: "2rem",
  },
}));

const StyledTeamGrid = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: "4rem",
  position: "relative",
  "& > *:not(:last-child)::after": {
    content: '""',
    position: "absolute",
    right: "-2rem",
    top: "0",
    width: "0.1px",
    height: "100%",
    backgroundColor: "#FDFF6D",
  },
  [theme.breakpoints.down("md")]: {
    gridTemplateColumns: "repeat(2, 1fr)",
  },
  [theme.breakpoints.down("sm")]: {
    gridTemplateColumns: "1fr",
    "& > *::after": {
      display: "none",
    },
  },
}));

const StyledTeamMember = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  textAlign: "left",
  gap: "1rem",
  position: "relative",
});

const StyledAvatar = styled(Box)({
  width: "100%",
  maxWidth: "200px",
  height: "200px",
  display: "flex",
  alignItems: "center",
  marginBottom: "1rem",
  "& img": {
    width: "100%",
    height: "100%",
    objectFit: "contain",
    display: "block",
    imageRendering: "-webkit-optimize-contrast",
  },
});

const StyledMemberBio = styled(Typography)(({ theme }) => ({
  fontSize: "0.9rem",
  fontWeight: 400,
  color: "#fff",
  lineHeight: 1.6,
  [theme.breakpoints.down("sm")]: {
    fontSize: "0.85rem",
  },
}));

const StyledFlashImage = styled(Image)(({ theme }) => ({
  width: "auto",
  height: "40px",
  objectFit: "contain",
  display: "inline-block",
  margin: "0 2px 3px 2px",
  [theme.breakpoints.down("sm")]: {
    height: "22px",
  },
}));

const StyledImageTitle = styled(StyledSectionTitle)(({ theme }) => ({
  fontSize: "53px",
  [theme.breakpoints.down("sm")]: {
    fontSize: "30px",
  },
  marginBottom: "2rem",
}));

const services = [
  { icon: <TvIcon />, text: "TV Commercials" },
  { icon: <CameraAltIcon />, text: "Product Ads" },
  { icon: <PhoneAndroidIcon />, text: "Digital Ads" },
  { icon: <VideocamIcon />, text: "BFTN" },
  { icon: <MovieIcon />, text: "Shortfilms" },
  { icon: <GroupIcon />, text: "Documentaries" },
  { icon: <VideocamIcon />, text: "Branded Content" },
];

const teamMembers = [
  {
    name: "Shreyas P.",
    role: "Producer/Executive Producer",
    avatar: ShreyasImg,
    bio: "I like turning tight budgets and crazy ideas into screen magic. Hate saying no to creatives—so I move mountains, bend time, & make the impossible happen.",
  },
  {
    name: "Devendra. D",
    role: "Writer/Director",
    avatar: DevendraImg,
    bio: "Directing is my way of time travel. I take you places, make you feel things, and for a while, the real world hits pause.",
  },
  {
    name: "Amey S.",
    role: "Writer/Director",
    avatar: AmeySVG,
    bio: "Writing and directing emotions that hit home, drama that keeps it real.",
  },
];

export default function AboutContent() {
  return (
    <StyledAboutSection>
      <StyledAboutContent>
        {/* Why Beep Section */}
        <StyledSectionTitle>WHY BEEP?</StyledSectionTitle>
        <StyledBeliefText>At Beep, we believe in</StyledBeliefText>
        <StyledBeliefText>
          <StyledHighlightText>
            No clichés. No filler. No over selling.
          </StyledHighlightText>
        </StyledBeliefText>
        <StyledTagline>
          Just unforgettable stories that pack a punch.
        </StyledTagline>
        <StyledCallout>Lights, camera, Beep!</StyledCallout>

        {/* What We Do Best Section */}
        <StyledTeamTitle>WHAT WE DO BEST</StyledTeamTitle>
        <StyledServicesGrid>
          {services.map((service, index) => (
            <StyledServiceItem key={index}>
              <StyledServiceIcon>{service.icon}</StyledServiceIcon>
              <StyledServiceText>{service.text}</StyledServiceText>
            </StyledServiceItem>
          ))}
        </StyledServicesGrid>

        <StyledTeamSection>
          <StyledImageTitle>
            <span>WHO THE B</span>
            <StyledFlashImage
              src={FlashEImg}
              alt="EE"
         
            />
            <span>P ARE WE?</span>
          </StyledImageTitle>
          <StyledTeamGrid>
            {teamMembers.map((member, index) => {
              const isLastMember = index === teamMembers.length - 1;
              const imageSize = 200;
              const imageScale = isLastMember ? 0.9 : 1;

              return (
                <StyledTeamMember key={index}>
                  <StyledAvatar>
                    <Image
                      src={member.avatar}
                      alt={member.name}
                      width={imageSize}
                      height={imageSize}
                      style={{
                        width: `${imageScale * 100}%`,
                        height: `${imageScale * 100}%`,
                        objectFit: "contain",
                      }}
                      priority
                    />
                  </StyledAvatar>
                  <StyledMemberBio>{member.bio}</StyledMemberBio>
                </StyledTeamMember>
              );
            })}
          </StyledTeamGrid>
        </StyledTeamSection>
      </StyledAboutContent>
    </StyledAboutSection>
  );
}
