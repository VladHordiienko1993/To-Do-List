import React, {  useRef, useState } from "react";
import styles from "./DropwDownList.module.scss";
import cx from "classnames";
import { Link } from "react-router-dom";
import useClickOutside from './../../../hooks/useClickOutside';
import ArrowDropDownCircleIcon from "@mui/icons-material/ArrowDropDownCircle";
import FormatAlignJustifyIcon from "@mui/icons-material/FormatAlignJustify";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import RemoveDoneIcon from "@mui/icons-material/RemoveDone";
import DeleteIcon from "@mui/icons-material/Delete";


const DropDownList = (props) => {
  const [drop, setDrop] = useState(false);
  const stylesMenu = cx(styles.menu, {
    [styles.dropDown]: drop === true,
  });
  const clickDrop = () => {
    setDrop(!drop);
  };
  const callBack = () => {
    setTimeout(() => setDrop(false), 5);
  };

  const refMenu = useRef(null);

  useClickOutside(refMenu, callBack);

  return (
    <>
      <div className={styles.wrapperClickDrop}>
        <ArrowDropDownCircleIcon
          onClick={clickDrop}
          className={styles.btnMenu}
        />
      </div>
      <nav ref={refMenu} className={stylesMenu}>
        <ul className={styles.menuList}>
          <Link className={styles.menuItem} to="/">
            <FormatAlignJustifyIcon />
            <em className={styles.MenuItemText}>All</em>
          </Link>
          <Link  className={styles.menuItem} to="/Done">
            <DoneAllIcon />
            <em className={styles.MenuItemText}>Done</em>
          </Link>
          <Link to="/NotDone" className={styles.menuItem}>
            <RemoveDoneIcon />
            <em className={styles.MenuItemText}>Not a done</em>
          </Link>
          <Link to="/DeletedTasks" className={styles.menuItem}>
            <DeleteIcon />
            <em className={styles.MenuItemText}>Delete</em>
          </Link>
        </ul>
      </nav>
    </>
  );
};

export default DropDownList;
