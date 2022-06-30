import React, { FC } from "react";
import styles from "../styles/MainLayout.module.scss";

const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      <div>
        @{new Date().getFullYear()}
      </div>
      <div>
        -
      </div>
      <strong>
        <a href="https://github.com/AlexUAKH" target="_blank" rel="noreferrer">
          AlexKHUA
        </a>
      </strong>
    </footer>
  );
};

export default Footer;
