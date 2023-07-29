import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div>@2023 Jhousua. All rights reserved.</div>
      <div className={styles.icons}>
        <div className={styles.links}>
          <Link href="https://web.facebook.com/jhousua.jumalon.90/">
            <Image
              src="/facebook.png"
              width={25}
              height={25}
              alt="facebook icons"
            />
          </Link>
        </div>

        <Image
          src="/instagram.png"
          width={25}
          height={25}
          alt="instagram icons"
        />
        <Image src="/twitter.png" width={25} height={25} alt="twitter icons" />
      </div>
    </div>
  );
};

export default Footer;
