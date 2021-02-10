import Head from "next/head";

export const MetaData = ({ title }) => {
  return (
    <Head>
      <title>Ninja | {title}</title>
      <meta name="keywords" content="ninjas" />
    </Head>
  );
};
