import styles from "../styles/Home.module.css";
import { MetaData } from "../components/MetaData";

export default function Home() {
  return (
    <>
      <MetaData title={"Home"} />
      <div>
        <h1 className={styles.title}>Home page</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi
          adipisci non consequuntur praesentium officiis alias cum. Asperiores
          velit repellat dignissimos magni pariatur eaque non sequi!
        </p>
      </div>
    </>
  );
}
