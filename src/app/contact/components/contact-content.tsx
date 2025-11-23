"use client";

import { Box } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import InstagramIcon from "@mui/icons-material/Instagram";
import {
  StyledContactSection,
  StyledContactContent,
  StyledPageTitle,
  StyledSectionLabel,
  StyledContactItem,
  StyledContactIcon,
  StyledContactText,
  StyledContactLink,
  StyledAddressText,
} from "../styles";

export default function ContactContent() {
  return (
    <StyledContactSection>
      <StyledContactContent>
        <StyledPageTitle variant="h1">CONTACT US</StyledPageTitle>

        {/* Socials Section */}
        <Box sx={{ marginBottom: "4rem" }}>
          <StyledSectionLabel>Socials</StyledSectionLabel>
          
          <StyledContactItem>
            <StyledContactIcon sx={{ color: "#FF1493" }}>
              <EmailIcon sx={{ fontSize: "1.5rem" }} />
            </StyledContactIcon>
            <StyledContactText>
              <StyledContactLink href="mailto:beepfilms@gmail.com">
                beepfilms@gmail.com
              </StyledContactLink>
            </StyledContactText>
          </StyledContactItem>

          <StyledContactItem>
            <StyledContactIcon sx={{ color: "#FF1493" }}>
              <PhoneIcon sx={{ fontSize: "1.5rem" }} />
            </StyledContactIcon>
            <StyledContactText>
              <StyledContactLink href="tel:+918788673291">
                +91 8788673291 / 8087405896
              </StyledContactLink>
            </StyledContactText>
          </StyledContactItem>

          <StyledContactItem>
            <StyledContactIcon sx={{ color: "#FF1493" }}>
              <InstagramIcon sx={{ fontSize: "1.5rem" }} />
            </StyledContactIcon>
            <StyledContactText>
              <StyledContactLink
                href="https://instagram.com/beepfilms"
                target="_blank"
                rel="noopener noreferrer"
              >
                beepfilms@instagram
              </StyledContactLink>
            </StyledContactText>
          </StyledContactItem>
        </Box>

        {/* Address Section */}
        <Box>
          <StyledSectionLabel>Address |</StyledSectionLabel>
          <StyledAddressText>
            Beep Films LLP,<br />
            Shantivan HSG, Off New Link Rd,<br />
            Oshiwara, Andheri West,<br />
            Mumbai 400053.
          </StyledAddressText>
        </Box>
      </StyledContactContent>
    </StyledContactSection>
  );
}
