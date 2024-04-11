import React from "react";
import { useState } from "react";
import ButtonUsage from "../../shared/components/Button/Button";
import styles from "./Header.module.css";
import ThreeSixtyIcon from "@mui/icons-material/ThreeSixty";
import Add from "@mui/icons-material/Add";
import CreateNewList from "../CreateNewList/CreateNewList";
import { useDispatch, useSelector } from "react-redux";
import { modalIsOpen, modalIsClose } from "../../redux/modal/modalSlice";
import Modal from "../../shared/components/Modal/Modal";
import useModal from "../../shared/hooks/useModal";

const Header = () => {
  const { isOpen, openModal, closeModal } = useModal();

  const handleAddTask = () => {
    openModal();
  };

  const handlCloseModal = () => {
    closeModal();
  };

  return (
    <header className={styles.header}>
      <h1>My Task Bord</h1>
      <div className={styles.wrapperButton}>
        <ButtonUsage
          startIcon={<ThreeSixtyIcon />}
          variant={"outlined"}
          props={"History"}
        />
        <ButtonUsage
          startIcon={<Add />}
          variant={"contained"}
          props={"Create new list"}
          onClick={handleAddTask}
        />
      </div>
      {isOpen && (
        <Modal closeModal={handlCloseModal}>
          <CreateNewList closeModal={handlCloseModal} />
        </Modal>
      )}
    </header>
  );
};

export default Header;
