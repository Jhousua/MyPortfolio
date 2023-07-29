import Image from "next/image";
import styles from "./page.module.css";
import Button from "@/components/Button/Button";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.insidecon}>
        <div className={styles.leftcol}>
          <h1 className={styles.title}>Hi I'm Jhousua</h1>
          <p>
            I love what i do and i do what our clients love & work with great
            clients all over the world to create thoughtful and purposeful
            websites
          </p>
          <Button url="/portfolio" text="See my works" />
        </div>
        <div className={styles.rightcol}>
          <Image src="/heroimg.png" alt="heroImg" width={600} height={600} />
        </div>
      </div>
    </div>
  );
}
