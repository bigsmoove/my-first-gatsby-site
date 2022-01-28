import * as React from "react";
import Layout from "../component/layout";
import { StaticImage } from "gatsby-plugin-image";

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby tutorial.</p>
      <StaticImage
        alt="Clifford, a reddish brown pit"
        src="../images/navy-logo.svg.png"
      />
    </Layout>
  );
};
export default IndexPage;
