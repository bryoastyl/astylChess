import React from "react";
import css from "./Viewer.module.css";
import ConnectBoard from "../Board";
import DataBoard from "../Databoard";
import Chats from "../Chat";

function index() {
  return (
    <div className={css.Viewer}>
      <DataBoard mins="10" />
      <ConnectBoard />
      <Chats />
    </div>
  );
}

export default index;
