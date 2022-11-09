import React from "react";
import FullWidthText from "../components/FullWidthText";
import Layout from "../components/Layout";

export default function CaseStudies() {
  return (
      <div className="w-screen h-screen grid grid-cols-1 md:grid-cols-2 gap-8  p-4 pb-8 md:px-8 text-black dark:text-white pt-16 md:pt-20">
        <FullWidthText word1="CASE" word2="STUDIES" />
      </div>
  );
}
