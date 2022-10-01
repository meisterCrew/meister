import ReactMarkdown from "react-markdown";
import classes from "./post-content.module.css";


export default function PostContent(props: any) {
  const { post } = props;

  return (
    <article className={classes.content}>
      <ReactMarkdown>{post.content}</ReactMarkdown>
    </article>
  );
}
