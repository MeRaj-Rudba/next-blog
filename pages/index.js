import Head from "next/head";
import { Fragment } from "react";
import FeaturedPosts from "../components/home-page/featured-posts";
import Hero from "../components/home-page/hero";
import { getFeaturedPosts } from "../lib/post-util";

export default function Home(props) {
  return (
    <Fragment>
      <Head>
        <title>Next Blogs</title>
        <meta
          name="description"
          content="I post about programming and web development."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero />
      <FeaturedPosts posts={props.posts} />
    </Fragment>
  );
}

export async function getStaticProps(context) {
  const featuredPosts = getFeaturedPosts();
  return {
    props: {
      posts: featuredPosts,
    },
    revalidate: 60,
  };
}
