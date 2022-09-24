import { Typography, Box, Chip, useTheme, useMediaQuery } from "@mui/material";
import BreadNavCrumbs from "../BreadNavCrumbs";
import Link from "next/link";
import notionColors from "../../lib/notionColors";

const Blog = ({ blogPosts }) => {
  const theme = useTheme();
  const isSm = useMediaQuery(theme.breakpoints.up("sm"));
  return (
    <Box>
      <BreadNavCrumbs current="Blog" />
      <Box mb={6}>
        <Typography
          variant="h4"
          color="primary"
          fontWeight="600"
          gutterBottom
          sx={{ letterSpacing: "-.10rem" }}
        >
          Blog
        </Typography>
        <Typography
          variant={isSm ? "subtitle1" : "subtitle2"}
          color="secondary"
          fontWeight="400"
        >
          My collection of useful web developer resources, tools, and
          productivity tips along with my day-to-day experiences on becoming a
          self-taught web developer.
        </Typography>
      </Box>

      <Box mb={4}>
        <Typography
          variant="h4"
          color="primary"
          fontWeight="600"
          mb={2}
          sx={{ letterSpacing: "-.10rem" }}
        >
          All Posts
        </Typography>
        {blogPosts.map(
          ({ properties: { Title, Slug, Tags, FormatDate, Description } }) => (
            <Box key={Title.title[0].plain_text} mb={4}>
              <Box
                display="flex"
                alignItems={{ xs: "flex-start", md: "center" }}
                flexDirection={{ xs: "column", md: "row" }}
                justifyContent="space-between"
                mb={1}
              >
                <Link href={`/blog/${Slug.rich_text[0].plain_text}`} passHref>
                  <Typography
                    component="a"
                    variant="h6"
                    color="primary"
                    mr={1}
                    mb={{ xs: 0.5, sm: 0 }}
                  >
                    {Title.title[0].plain_text}
                  </Typography>
                </Link>
                <Box display="flex" alignItems="center">
                  {Tags.multi_select.map(({ name, color }) => (
                    <Chip
                      key={name}
                      label={name}
                      size="small"
                      sx={{
                        bgcolor: notionColors(color),
                        fontWeight: 400,
                        fontSize: ".70rem",
                        height: "20px",
                      }}
                    />
                  ))}
                  <Typography variant="caption" color="text.primary" ml={0.75}>
                    {FormatDate.formula.string}
                  </Typography>
                </Box>
              </Box>

              <Typography
                variant={isSm ? "subtitle1" : "subtitle2"}
                color="secondary"
                fontWeight="400"
              >
                {Description.rich_text[0]?.plain_text}
              </Typography>
            </Box>
          )
        )}
      </Box>
    </Box>
  );
};

export default Blog;
