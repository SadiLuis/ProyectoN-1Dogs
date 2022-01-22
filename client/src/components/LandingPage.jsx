import React from "react";
import { Link } from "react-router-dom";
import styles from "./styless/LandingPage.module.css";

import video2 from "./../img/video2.mp4";
import img from "../img/pushboton.gif"


export default function LandingPage() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h1 className="animate__animated  animate__tada animate__infinite	infinite">
          Push the pet{" "}
        </h1>
        <Link to="/home">
          <p>
            <img src={img} className={styles.icon} />
          </p>
        </Link>
      </div>
      <video className={styles.background} muted autoPlay loop src={video2} />
    </div>
  );
}
