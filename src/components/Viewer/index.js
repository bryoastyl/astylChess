<<<<<<< HEAD
import React from 'react'
import css from './Viewer.module.css'
import ConnectBoard from '../Board'
import DataBoard from '../Databoard'
import Chat from '../Chat'

function index() {
    return (
        <div className={css.Viewer}>
            <DataBoard />
            <ConnectBoard />
            <Chat />
        </div>
    )
=======
import React from "react";
import css from "./Viewer.module.css";
import ConnectBoard from "../Board";
import DataBoard from "../Databoard";

function index() {
  return (
    <div className={css.Viewer}>
      <DataBoard mins="25" />
      <ConnectBoard />
    </div>
  );
>>>>>>> c87eff14b43ea687584c2f54dd249d0fb977ed9c
}

export default index;
