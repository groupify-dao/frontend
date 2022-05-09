import React from "react";
import styles from "../styles/progress-bar.module.css";
import { Container, Row, Col } from "react-bootstrap";

export default function ProgressBar({ progress }) {
  return (
    <div className={styles.progressBar}>
      <div className={styles.track}></div>
      <div className={styles.progress} style={{ width: `${progress}%` }}></div>
    </div>
  );
}
