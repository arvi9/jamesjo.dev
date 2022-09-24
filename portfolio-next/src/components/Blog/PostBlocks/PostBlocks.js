import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import SpanText from "./SpanText";

const PostBlocks = ({ blogContentBlocks }) => {
  const { results: postBlocks } = blogContentBlocks;

  return postBlocks.map((block) => {
    const { type, id } = block;
    //get blog content by type name and set to value to use in switch statement
    const value = block[type];

    switch (type) {
      case "heading_1":
        return <Heading text={value.rich_text} level={type} key={id} id={id} />;

      case "heading_2":
        return <Heading text={value.rich_text} level={type} key={id} id={id} />;

      case "heading_3":
        return <Heading text={value.rich_text} level={type} key={id} id={id} />;

      case "paragraph":
        return <Paragraph text={value.rich_text} key={id} id={id} />;

      case "image":
        const imageSrc =
          value.type === "external" ? value.external.url : value.file.url;
        const caption = value.caption.length ? value.caption[0].plain_text : "";

        return (
          <Box key={id}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <Box component="img" alt={caption} src={imageSrc} width={1} />
            {caption && <Typography mt={2}>{caption}</Typography>}
          </Box>
        );

      default:
        return `Unsupported block (${
          type === "unsupported" ? "unsupported by Notion API" : type
        })`;
    }
  });
};

const Heading = ({ text, level, id }) => {
  switch (level) {
    case "heading_1":
      return (
        <SpanText
          text={text}
          muiColor="primary"
          variant="h4"
          component="h1"
          id={id}
        />
      );
    case "heading_2":
      return (
        <SpanText
          text={text}
          muiColor="primary"
          variant="h5"
          component="h2"
          id={id}
        />
      );
    case "heading_3":
      return (
        <SpanText
          text={text}
          muiColor="primary"
          variant="h6"
          component="h3"
          id={id}
        />
      );
    default:
      return null;
  }
};
const Paragraph = ({ text, id }) => {
  return (
    <Box compnent="p" mb={3}>
      <SpanText
        text={text}
        id={id}
        muiColor="secondary"
        variant="subtitle1"
        component="span"
      />
    </Box>
  );
};

export default PostBlocks;
