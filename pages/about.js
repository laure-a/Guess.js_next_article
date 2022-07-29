import * as React from "react";
import Layout from "../components/layout";
import Link from "next/link";

export default () => (
  <Layout>
    About
    <br />
    You can find the{" "}
    <Link href="/media">
      <a>media page here</a>
    </Link>
  </Layout>
);