import Link from "next/link";
import React from "react";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Career",
};
const Career = () => {
  return (
    <>
      <section className="width">
        <div className="border border-b-0 padding relative py-20 md:py-32 lg:py-40 text-darker text-lg font-medium">
          <p>No new job post are available </p>
          <p>send your cv to </p>
          <Link href={"/"} className="flex w-fit mt-4">
            info@arabianaccess.com
          </Link>
          <Link href={"/"} className="flex w-fit mt-1">
            jouhar@arabianaccess.com
          </Link>
        </div>
      </section>
    </>
  );
};

export default Career;
