import { Fragment } from "react";
import Head from "next/head";

import FeaturedPosts from "../components/home-page/featured-posts";
import { getFeaturedPosts } from "../lib/posts-util";

export default function HomePage(props: any) {
  return (
      <Fragment>
        <Head>
          <title>Meister Site</title>
          <meta name="description" content="welcome to meister site!" />
        </Head>
        <FeaturedPosts posts={props.posts} />
      </Fragment>
  );
}

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts,
    },
  };
}
