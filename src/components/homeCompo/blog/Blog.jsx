import React from "react";
import PageInfo from "../../commonComp/PageInfo";
import BlogRow from "./blogsInfoRow/BlogRow";

function Blog() {
  return (
    <>
      <PageInfo bgTitle="BLOG" mainTitle="LATEST BLOG" />

      <BlogRow />
    </>
  );
}

export default Blog;
