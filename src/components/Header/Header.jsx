import React from "react";
import ButtonUsage from "../../shared/components/Button";
import styles from "./Header.module.scss";
import ThreeSixtyIcon from "@mui/icons-material/ThreeSixty";
import Add from "@mui/icons-material/Add";
import CreateNewList from "../CreateNewList";

import Modal from "../../shared/components/Modal";
import useModal from "../../shared/hooks/useModal";

const Header = () => {
  const { isOpen, openModal, closeModal } = useModal();

  const handleAddTaskList = () => {
    openModal();
  };

  const handlCloseModal = () => {
    closeModal();
  };

  return (
    <header className={styles.header}>
      <h1 className={styles.title}>My Task Bord</h1>
      {/* <ButtonUsage
        startIcon={<ThreeSixtyIcon />}
        variant={"outlined"}
        props={"History"}
        style={{ marginRight: "5px" }}
      /> */}
      <ButtonUsage
        startIcon={<Add />}
        variant={"contained"}
        props={"Create new list"}
        onClick={handleAddTaskList}
      />

      {isOpen && (
        <Modal closeModal={handlCloseModal}>
          <CreateNewList closeModal={handlCloseModal} />
        </Modal>
      )}
    </header>
  );
};

export default Header;
