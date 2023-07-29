import React from "react";
import styles from "./about.module.css";
import Image from "next/image";
import Button from "@/components/Button/Button";

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textImgCon}>
        <div className={styles.textCon}>
          <h1>I'm a Front End Developer from Cavite, Philippines</h1>
          <br /> <br />
          <p>
            I am a passionate and dedicated programming enthusiast, constantly
            seeking opportunities to expand my knowledge and skills in the
            dynamic field of programming. I approach every challenge with
            enthusiasm and a strong drive to excel. I embrace the chance to
            learn and grow, whether it involves exploring new programming
            languages, frameworks, or techniques. My motivation and
            determination empower me to tackle tasks with a positive mindset,
            pushing myself to deliver high-quality results. I am excited about
            the endless possibilities that programming offers and always strive
            to stay up-to-date with the latest developments in the industry.
          </p>
        </div>
        <div className={styles.imgCon}>
          <Image
            className={styles.profile}
            src="/animate.jpg"
            width={400}
            height={400}
            alt="Profile Image"
          />
        </div>
      </div>
      <div className={styles.con2}>
        <div className={styles.btn}></div>
        <div className={styles.contact}>
          <form className={styles.form} action="/send-data-here" method="post">
            <div className={styles.formCon}>
              <div className={styles.text}>
                <h2>Email me</h2> <br />
                <label for="first">Full Name:</label> <br />
                <input type="text" id="first" name="first" /> <br /> <br />
                <label for="last">Email:</label>
                <br />
                <input type="text" id="last" name="last" /> <br />
                <br />
                <button type="submit">Submit</button>
              </div>

              <div>
                <label>Message</label> <br />
                <textarea className={styles.textArea} name="message"></textarea>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default About;
