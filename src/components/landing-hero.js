import React from "react";
import styles from "../styles/landing-hero.module.css";
import { Container, Row, Button, Col } from "react-bootstrap";
import { useMetaMask } from "metamask-react";

export default function LandingHero() {
  const { status, connect, account, chainId, ethereum } = useMetaMask();
  return (
    <Container fluid className={styles.landinghero}>
      <Row className="g-0">
        <Col lg={6} className={styles.intro}>
          <h3>Start a Band</h3>
          <h1>
            GroupyFi the NFTs you like,
            <br /> Start a band and Jam together:
          </h1>
          <p>
            Choose the collection, Find believers, Raise funds,
            <br /> buy NFTs and own the fractions
          </p>
          <div onClick={connect} className={styles.button}>
            Start a Group
          </div>
        </Col>
        <Col>
          <div className={styles.image}></div>
        </Col>
      </Row>
    </Container>
  );
}
