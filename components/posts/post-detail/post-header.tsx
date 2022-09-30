import classes from "./post-header.module.css";

export default function PostHeader(props: any) {
  const { title, image } = props;

  return (
    <header className={classes.header}>
      <h1>{title}</h1>
    </header>
  );
}
