import styles from "./home.css";
// import io from "socket.io-client";
import { Button } from "antd";
// import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // ES6
import React from "react";

const HomeContainer = () => {
    console.log(window.location);
    return (
      <div className={styles.normal}>
        <h1>home page!</h1>
        <Button>lalala</Button>
      </div>
    );
  };
  export default HomeContainer;