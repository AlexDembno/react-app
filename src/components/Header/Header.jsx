import ButtonUsage from "../../shared/components/Button/Button";
import styles from "./Header.module.css";
import ThreeSixtyIcon from "@mui/icons-material/ThreeSixty";
import Add from "@mui/icons-material/Add";

const Header = () => {
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
      />
    </header>
  );
};

export default Header;
