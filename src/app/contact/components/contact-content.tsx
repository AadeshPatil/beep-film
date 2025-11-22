"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Box, Container, Typography, TextField } from "@mui/material";
import {
  StyledContactSection,
  StyledPageTitle,
  StyledContactGrid,
  StyledContactInfo,
  StyledInfoTitle,
  StyledInfoText,
  StyledContactLink,
  StyledContactForm,
  StyledSubmitButton,
} from "../styles";

export default function ContactContent() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission here
    
    // Example: Programmatically navigate after submission
    // router.push("/"); // Navigate to home
    // router.push("/about"); // Navigate to about
    // router.back(); // Go back
    // router.refresh(); // Refresh current route
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <StyledContactSection>
      <Container maxWidth="lg">
        <StyledPageTitle variant="h1">CONTACT US</StyledPageTitle>
        <Typography
          variant="body1"
          sx={{
            textAlign: "center",
            color: "#6b7280",
            maxWidth: "48rem",
            margin: "0 auto 4rem",
            fontSize: "1.125rem",
          }}
        >
          Ready to start your next project? Get in touch with us and let's create something extraordinary together.
        </Typography>

        <StyledContactGrid>
          <StyledContactInfo>
            <Box>
              <StyledInfoTitle variant="h3">Get in Touch</StyledInfoTitle>
              <StyledInfoText>
                We'd love to hear from you. Whether you have a project in mind or just want to learn more about our work, feel free to reach out.
              </StyledInfoText>
            </Box>

            <Box>
              <StyledInfoTitle variant="h3">Email</StyledInfoTitle>
              <StyledInfoText>
                <StyledContactLink href="mailto:hello@brandxlove.com">
                  hello@brandxlove.com
                </StyledContactLink>
              </StyledInfoText>
            </Box>

            <Box>
              <StyledInfoTitle variant="h3">Phone</StyledInfoTitle>
              <StyledInfoText>
                <StyledContactLink href="tel:+911234567890">
                  +91 123 456 7890
                </StyledContactLink>
              </StyledInfoText>
            </Box>

            <Box>
              <StyledInfoTitle variant="h3">Office</StyledInfoTitle>
              <StyledInfoText>
                123 Creative Street<br />
                Mumbai, Maharashtra 400001<br />
                India
              </StyledInfoText>
            </Box>
          </StyledContactInfo>

          <StyledContactForm onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              variant="outlined"
            />
            <TextField
              fullWidth
              label="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              variant="outlined"
            />
            <TextField
              fullWidth
              label="Company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              variant="outlined"
            />
            <TextField
              fullWidth
              label="Message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              multiline
              rows={6}
              variant="outlined"
            />
            <StyledSubmitButton type="submit">SEND MESSAGE</StyledSubmitButton>
          </StyledContactForm>
        </StyledContactGrid>
      </Container>
    </StyledContactSection>
  );
}
