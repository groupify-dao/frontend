import styles from "../styles/groups.module.css";
import { Container, Row, Col } from "react-bootstrap";
import React, { useEffect, useState } from "react";

import ProgressBar from "./progress-bar";

export default function Groups() {
  const [openSeaCollections, setopenSeaCollections] = useState([]);

  useEffect(() => {
    fetch("https://eebbd3c8-7d84-4e80-92c0-80bcc5e558bb.mock.pstmn.io/groups")
      .then((response) => response.json())
      .then((result) => {
        let group_collection = [];
        result.forEach((element) => {
          if (element.target_url.includes("collection")) {
            let slug = element.target_url.split("/collection/").slice(1);
            fetch(`https://api.opensea.io/api/v1/collection/${slug}`)
              .then((response) => response.json())
              .then((result) => {
                let collection = result.collection;
                collection.contribution = element.token_collected;
                group_collection.push(collection);
                setopenSeaCollections([...group_collection]);
              });
          }
        });
      });
  }, []);

  return (
    <Container className={styles.groups} fluid>
      <Container>
        <Row>
          <Col>
            <p className={styles.heading}>
              Become a Groupie • <span>12</span>
            </p>
          </Col>
        </Row>
        {/* Group Item/Collection should a new component with data as props*/}

        <Row>
          {openSeaCollections.map((collection) => (
            <Col md={4}>
              <div className={styles.group}>
                <div className={styles.ImageContainer}>
                  <img
                    className={styles.collectionbanner}
                    src={collection.banner_image_url}
                    alt="collection or asset banner Image"
                  />
                  <div
                    className={styles.centerImage}
                    style={{
                      backgroundImage: `url(${collection.image_url})`,
                    }}
                  ></div>
                </div>

                <p className={styles.groupName}>{collection.name}</p>
                <div className={styles.indicators}>
                  <div>
                    <img src="https://openseauserdata.com/files/6f8e2979d428180222796ff4a33ab929.svg" />
                    <p>{collection.contribution} ETH</p>
                  </div>
                  <div>
                    <img src="https://openseauserdata.com/files/6f8e2979d428180222796ff4a33ab929.svg" />
                    <p>{collection.stats.floor_price} ETH</p>
                  </div>
                </div>

                <ProgressBar
                  progress={
                    (collection.contribution / collection.stats.floor_price) *
                    100
                  }
                />
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}
