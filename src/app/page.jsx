import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.insidecon}>
        <div className={styles.leftcol}>
          <h1 className={styles.title}>Hi there</h1>
          <p>
            We love what we do and we do what our clients love & work with great
            clients all over the world to create thoughtful and purposeful
            websites
          </p>
          <button className={styles.btn}> See My Works</button>
        </div>
        <div className={styles.rightcol}>
          <Image src="/heroimg.png" alt="heroImg" width={600} height={600} />
        </div>
      </div>
    </div>
  );
}
