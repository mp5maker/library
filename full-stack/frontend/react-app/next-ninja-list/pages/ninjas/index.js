import { MetaData } from "../../components/MetaData";
import styles from "../../styles/Ninjas.module.css";
import Link from "next/link";

export const getStaticProps = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const responseJSON = await response.json();

  return {
    props: {
      ninjas: responseJSON,
    },
  };
};

export default function Ninjas({ ninjas }) {
  return (
    <>
      <MetaData title={"Ninjas"} />
      <div>
        <h1>Ninjas List</h1>
        {ninjas.map((ninja) => {
          return (
            <Link key={ninja.id} href={`/ninjas/${ninja.id}`}>
              <div className={styles.card}>
                <h3>{ninja.name}</h3>
                <div className={styles.indicator}></div>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
}
