import React, { useEffect } from "react";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import Work from "../components/Work";
import Process from "../components/Process";
import Services from "../components/Services";
import Cta from "../components/Cta";

const IndexPage = () => {
  useEffect(() => {}, []);

  return (
    <>
      <Layout>
        <Hero />
        <Work />
        <Services />
        <Process />
      </Layout>
    </>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
