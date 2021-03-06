import Head from "next/head";
import Image from "next/image";
import { useState } from "react/cjs/react.production.min";
import Search from "../components/Search";
import { getData, getSeries } from "../lib/category";

export async function getStaticProps() {
  const data = await getData();
  if (!data && !series) {
    return {
      notFound: true,
    };
  }

  return {
    props: { data },
    revalidate: 60,
  };
}

export default function Home({ data }) {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="max-w-[1440px] relative mx-auto">
        <Image
          height={550}
          width={1440}
          src="/hero.jpg"
          alt="hero"
          className="absolute h-[257px] sm:h-[550px] object-cover w-full"
        />
        <div className="text-gray-light ml-7 top-7 md:top-20 md:ml-[77px] sm:top-5 text-[28px] sm:text-[52px] md:text[72px] w-[300px]  sm:w-[366px] text-center font-bold absolute">
          Watch something incredible
        </div>
      </div>
      <Search data={data} />
    </div>
  );
}
// https://www.omdbapi.com/?s=inception&apikey=3d454594&
// https://www.omdbapi.com/?s=type&apikey=3d454594&
