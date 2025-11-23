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
import ShreyasImg from "@/assets/img/team/shreyash.png";

const StyledAboutSection = styled(Box)({
  backgroundColor: "#000",
  minHeight: "100vh",
  padding: "6rem 3rem 4rem",
  marginTop: "80px",
});

const StyledAboutContent = styled(Box)({
  maxWidth: "1200px",
  margin: "0 auto",
});

const StyledSectionTitle = styled(Typography)(({ theme }) => ({
  fontSize: "2rem",
  fontWeight: 700,
  color: "#fff",
  textTransform: "uppercase",
  fontFamily: "var(--font-koulen), sans-serif",
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
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: "3rem 4rem",
  marginBottom: "4rem",
  [theme.breakpoints.down("md")]: {
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "2rem 3rem",
  },
  [theme.breakpoints.down("sm")]: {
    gridTemplateColumns: "1fr",
    gap: "2rem",
  },
}));

const StyledServiceItem = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "1rem",
  position: "relative",
});

const StyledServiceIcon = styled(Box)({
  color: "#FF4CF0",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  "& .MuiSvgIcon-root": {
    fontSize: "2.5rem",
  },
});

const StyledDivider = styled(Box)({
  width: "2px",
  height: "30px",
  backgroundColor: "#FDFF6D",
  margin: "0 0.5rem",
});

const StyledServiceText = styled(Typography)(({ theme }) => ({
  color: "#fff",
  fontSize: "1rem",
  fontWeight: 400,
  [theme.breakpoints.down("sm")]: {
    fontSize: "0.9rem",
  },
}));

const StyledTeamSection = styled(Box)({
  marginTop: "6rem",
});

const StyledTeamTitle = styled(Typography)(({ theme }) => ({
  fontSize: "3rem",
  fontWeight: 700,
  color: "#fff",
  textTransform: "uppercase",
  marginBottom: "4rem",
  fontFamily: "var(--font-koulen), sans-serif",
  [theme.breakpoints.down("sm")]: {
    fontSize: "2rem",
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
    width: "2px",
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
  marginBottom: "1rem",
  "& img": {
    width: "100%",
    height: "auto",
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
    avatar: AmeyImg,
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
        <StyledSectionTitle>WHAT WE DO BEST</StyledSectionTitle>
        <StyledServicesGrid>
          {services.map((service, index) => (
            <StyledServiceItem key={index}>
              <StyledServiceIcon>{service.icon}</StyledServiceIcon>
              <StyledServiceText>{service.text}</StyledServiceText>
              <StyledDivider />
            </StyledServiceItem>
          ))}
        </StyledServicesGrid>

        <StyledTeamSection>
          <StyledTeamTitle>WHO THE BEEP ARE WE?</StyledTeamTitle>
          <StyledTeamGrid>
            {teamMembers.map((member, index) => (
              <StyledTeamMember key={index}>
                <StyledAvatar>
                  <Image
                    src={member.avatar}
                    alt={member.name}
                    width={200}
                    height={200}
                    style={{
                      width: "100%",
                      height: "153px",
                      objectFit: "contain",
                    }}
                    priority
                  />
                </StyledAvatar>
                <StyledMemberBio>{member.bio}</StyledMemberBio>
              </StyledTeamMember>
            ))}
          </StyledTeamGrid>
        </StyledTeamSection>
      </StyledAboutContent>
    </StyledAboutSection>
  );
}
