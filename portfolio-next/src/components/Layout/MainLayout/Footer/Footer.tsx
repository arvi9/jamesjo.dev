import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Box,
  Container,
  Divider,
  Stack,
  Button,
  IconButton,
} from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";

interface FooterProps {
  navLinks: { title: string; path: string }[];
  mainLogo: string;
}

//TODO: Store footer links to Strapi CMS
const Footer = ({ navLinks, mainLogo }: FooterProps) => {
  return (
    <Box component="footer" sx={{ py: 6, mt: "auto" }} id="contact">
      <Container sx={{ maxWidth: 800 }} maxWidth={false}>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Link href="/" passHref>
            <Box width={60} height={45} position="relative" component="a">
              <Image
                src={mainLogo}
                alt="footer logo"
                layout="fill"
                objectFit="contain"
              />
            </Box>
          </Link>
          <Stack
            direction="row"
            alignItems="center"
            divider={<Divider orientation="vertical" flexItem />}
            sx={{
              "& .MuiButtonBase-root": {
                fontSize: { xs: 10, sm: 12 },
                fontWeight: "500",
              },
            }}
          >
            {navLinks.map(({ title, path }) => (
              <React.Fragment key={title}>
                <Link href={path} passHref>
                  <Button variant="text" component="a" color="primary">
                    {title}
                  </Button>
                </Link>
              </React.Fragment>
            ))}
          </Stack>
        </Box>
        <Divider flexItem sx={{ my: 0.5 }} />
        <Stack alignItems="flex-end">
          <Stack direction="row" spacing={1} alignItems="center">
            <IconButton
              component="a"
              href="https://linkedin.com/in/jamesikjo"
              target="_blank"
            >
              <LinkedInIcon />
            </IconButton>
            <IconButton
              component="a"
              href="https://instagram.com/jam._.jo"
              target="_blank"
            >
              <InstagramIcon />
            </IconButton>
            <IconButton
              component="a"
              href="https://github.com/jamesikjo"
              target="_blank"
            >
              <GitHubIcon />
            </IconButton>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
