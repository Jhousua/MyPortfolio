import React from "react";
import styles from "./about.module.css";
import Image from "next/image";
import Button from "@/components/Button/Button";

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image
          className={styles.img}
          src="/web1.jpg"
          width={400}
          height={400}
        ></Image>
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Digital Storytellers</h1>
          <h2 className={styles.imgSubTitle}>adasdassssssssssssssssssssss</h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.colOne}>
          <h1 className={styles.colOneTitle}>Title</h1>
          <p className={styles.description}>
            Pellentesque velit enim, tincidunt sed rhoncus et, lobortis non
            purus. Morbi in luctus tellus. Nulla vel lorem sodales, laoreet ante
            ac, euismod magna. <br /> <br /> Vestibulum blandit tempus mi id
            blandit. Integer sollicitudin iaculis diam, a faucibus orci
            elementum id. Donec euismod enim in tellus aliquet molestie. Proin
            id vestibulum enim. Aenean vehicula justo sapien, imperdiet
            fermentum orci finibus quis.
          </p>
        </div>
        <div className={styles.colTwo}>
          <h1 className={styles.colOneTitle}>Title</h1>
          <p className={styles.description}>
            Pellentesque velit enim, tincidunt sed rhoncus et, lobortis non
            purus. Morbi in luctus tellus. Nulla vel lorem sodales, laoreet ante
            ac, euismod magna. <br /> <br /> Vestibulum blandit tempus mi id
            blandit. Integer sollicitudin iaculis diam, a faucibus orci
            elementum id. Donec euismod enim in tellus aliquet molestie. Proin
            id vestibulum enim. Aenean vehicula justo sapien, imperdiet
            fermentum orci finibus quis.
          </p>
          <Button url="/contact" text="Contact" />
        </div>
      </div>
    </div>
  );
};

export default About;
