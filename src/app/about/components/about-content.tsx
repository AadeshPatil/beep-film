"use client";

import { Container, Typography } from "@mui/material";
import { useNavigation } from "@/common/hooks";
import {
  StyledAboutSection,
  StyledPageTitle,
  StyledContentSection,
  StyledSectionTitle,
  StyledSectionText,
  StyledStatsGrid,
  StyledStatBox,
  StyledStatNumber,
  StyledStatLabel,
  StyledCTASection,
  StyledCTAButton,
} from "../styles";

export default function AboutContent() {
  const { navigateTo } = useNavigation();

  return (
    <StyledAboutSection>
      <Container maxWidth="lg">
        <StyledPageTitle variant="h1">ABOUT US</StyledPageTitle>

        <StyledContentSection>
          <StyledSectionTitle variant="h2">Our Story</StyledSectionTitle>
          <StyledSectionText>
            Founded in 2015, Brand × Love has been at the forefront of visual storytelling, creating compelling narratives that connect brands with their audiences. Our passion for innovation and excellence drives us to push creative boundaries and deliver exceptional results.
          </StyledSectionText>
          <StyledSectionText>
            We believe in the power of authentic storytelling and the impact it can have on building meaningful connections. Our team of talented directors, cinematographers, and creative professionals work collaboratively to bring visions to life.
          </StyledSectionText>
        </StyledContentSection>

        <StyledContentSection>
          <StyledSectionTitle variant="h2">Our Approach</StyledSectionTitle>
          <StyledSectionText>
            We combine strategic thinking with creative excellence to produce work that not only looks beautiful but also achieves measurable results. From concept development to final delivery, we ensure every project receives the attention and care it deserves.
          </StyledSectionText>
          <StyledSectionText>
            Our collaborative process involves close partnership with our clients, ensuring their vision is realized while bringing our creative expertise to enhance and elevate the final product.
          </StyledSectionText>
        </StyledContentSection>

        <StyledStatsGrid>
          <StyledStatBox>
            <StyledStatNumber>500+</StyledStatNumber>
            <StyledStatLabel>Projects Completed</StyledStatLabel>
          </StyledStatBox>
          <StyledStatBox>
            <StyledStatNumber>200+</StyledStatNumber>
            <StyledStatLabel>Happy Clients</StyledStatLabel>
          </StyledStatBox>
          <StyledStatBox>
            <StyledStatNumber>50+</StyledStatNumber>
            <StyledStatLabel>Awards Won</StyledStatLabel>
          </StyledStatBox>
          <StyledStatBox>
            <StyledStatNumber>10+</StyledStatNumber>
            <StyledStatLabel>Years Experience</StyledStatLabel>
          </StyledStatBox>
        </StyledStatsGrid>

        <StyledCTASection>
          <Typography variant="h3" sx={{ fontSize: "2rem", fontWeight: 700, marginBottom: "1rem" }}>
            Ready to Create Something Amazing?
          </Typography>
          <Typography sx={{ color: "#6b7280", marginBottom: "1rem" }}>
            Let's collaborate and bring your vision to life.
          </Typography>
          <StyledCTAButton onClick={() => navigateTo("/contact")}>GET IN TOUCH</StyledCTAButton>
        </StyledCTASection>
      </Container>
    </StyledAboutSection>
  );
}
