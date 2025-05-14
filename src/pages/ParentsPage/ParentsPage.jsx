import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUserKids } from "../../redux/auth/authOperations";
import { Link } from "react-router-dom";

import Header from "../../components/Header";
import MainParents from "../../components/MainParents";
import styles from "./ParentsPage.module.scss";

const ParentsPage = () => {
  const dispatch = useDispatch();
  const [selectedKidId, setSelectedKidId] = useState(null);
  useEffect(() => {
    dispatch(fetchUserKids());
  }, [dispatch]);

  const { children = [] } = useSelector((state) => state.auth?.userKids || {});

  const handleSelectKid = (id) => {
    setSelectedKidId(id);
  };

  return (
    <div className={styles.wrapper}>
      <Link to="/" className={styles.link}>
        Go Home
      </Link>
      <Header childId={selectedKidId} />
      {children.length !== 0 && (
        <h2 className={styles.kidTitle}>Select a child</h2>
      )}

      <ul className={styles.kidList}>
        {children.map((child) => (
          <li key={child.id} className={styles.kidItem}>
            <button
              className={styles.kidButton}
              onClick={() => handleSelectKid(child.id)}
            >
              {child.first_name} {child.last_name}
            </button>
          </li>
        ))}
      </ul>

      {selectedKidId && <MainParents userId={selectedKidId} />}
    </div>
  );
};

export default ParentsPage;
