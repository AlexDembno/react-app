import React from "react";
import { useState } from "react";
import ButtonUsage from "../../shared/components/Button/Button";
import styles from "./Header.module.css";
import ThreeSixtyIcon from "@mui/icons-material/ThreeSixty";
import Add from "@mui/icons-material/Add";
import CreateNewList from "../CreateNewList/CreateNewList";

const Header = () => {
  const [newList, setNewList] = useState(false);
  const changeNewList = () => {
    setNewList(true);
  };

  return (
    <header className={styles.header}>
      <h1>My Task Bord</h1>
      <ButtonUsage
        startIcon={<ThreeSixtyIcon />}
        variant={"outlined"}
        props={"History"}
      />
      <ButtonUsage
        startIcon={<Add />}
        variant={"contained"}
        props={"Create new list"}
        onClick={changeNewList}
      />
      {newList && <CreateNewList />}
    </header>
  );
};

export default Header;
