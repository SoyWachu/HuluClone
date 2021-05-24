import Head from "next/head";
import Nav from "../components/Nav";
import Header from "../components/Header";
import Results from "../components/Results";
import requests from "../utils/request";

export default function Home({ results }) {
  return (
    <div>
      <Head>
        <title>Hulu Clone</title>
      </Head>
      <Header />
      <Nav />
      <Results movies={results} />
    </div>
  );
}

export async function getServerSideProps(context) {
  const genre = context.query.genre;

  const request = await fetch(
    `https://api.themoviedb.org/3${
      requests[genre]?.url || requests.fetchTrending.url
    }`
  ).then((res) => res.json());

  return {
    props: {
      results: request.results,
    },
  };
}
