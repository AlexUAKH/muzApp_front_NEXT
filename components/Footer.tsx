import React, { FC } from "react";
import styles from "../styles/MainLayout.module.scss";

const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      {new Date().getFullYear()} -
      <strong>
        <a href="https://github.com/AlexUAKH" target="_blank" rel="noreferrer">
          AlexKHUA
        </a>
      </strong>
    </footer>
  );
};

export default Footer;
