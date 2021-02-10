import { useRouter } from "next/router";
import get from "lodash/get";
import { useEffect, useState } from "react";

export const getStaticPaths = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const responseJson = await response.json();

  const paths = responseJson.map((ninja) => {
    return {
      params: {
        id: ninja.id.toString(),
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const id = get(params, "id", "");
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  const responseJson = await response.json();

  return {
    props: {
      ninja: responseJson,
    },
  };
};

export default function NinjaDetails({ ninja }) {
  const router = useRouter();
  const id = get(router, "query.id", "");
  const [data, setData] = useState({});

  const callApi = async () => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
    const responseJson = await response.json();
    setData(responseJson);
  };

  useEffect(() => {
    callApi();
  }, []);

  return (
    <div>
      <h1> {get(data, "name", get(ninja, "name", ""))} </h1>
      <p> {get(data, "email", get(ninja, "email", ""))} </p>
      <p> {get(data, "website", get(ninja, "website", ""))} </p>
      <p> {get(data, "address.city", get(ninja, "address.city", ""))} </p>
    </div>
  );
}
