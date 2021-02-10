import styles from "../styles/NotFound.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useRef } from "react";

export default function NotFound() {
  const timeout = useRef(null);
  const router = useRouter();

  useEffect(() => {
    if (timeout.current) clearTimeout(timeout.current);
    timeout.current = setTimeout(() => {
      router.push("/");
    }, 3000);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Oooops..</h1>
        <h2>That page cannot be found</h2>
        <p className={styles.text}>
          Go back to{" "}
          <Link href="/">
            <a className={styles.link}>Homepage</a>
          </Link>
        </p>
      </div>
    </div>
  );
}
