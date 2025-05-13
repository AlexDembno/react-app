import React, { createContext, useContext, useState, useCallback } from "react";
import styles from "./NotificationContext.module.scss";

const NotificationContext = createContext();

export const useNotification = () => useContext(NotificationContext);

export const NotificationProvider = ({ children }) => {
  const [modal, setModal] = useState(null);

  const showNotification = useCallback(
    (message = "Щось пішло не так", type = "info", callback = null) => {
      setModal({ message, type, callback });
    },
    []
  );

  const closeModal = () => setModal(null);

  const handleConfirm = (result) => {
    if (modal?.callback) modal.callback(result);
    closeModal();
  };

  return (
    <NotificationContext.Provider value={{ showNotification }}>
      {children}
      {modal && (
        <div className={`${styles.modal} ${styles[`modal--${modal.type}`]}`}>
          <div
            className={styles.backdrop}
            onClick={() => handleConfirm(false)}
          />
          <div className={styles.content}>
            <p className={styles.message}>{modal.message}</p>
            {modal.type === "confirm" ? (
              <div className={styles.buttons}>
                <button
                  onClick={() => handleConfirm(true)}
                  className={styles.ok}
                >
                  OK
                </button>
                <button
                  onClick={() => handleConfirm(false)}
                  className={styles.cancel}
                >
                  Скасувати
                </button>
              </div>
            ) : (
              <button onClick={() => handleConfirm()} className={styles.ok}>
                OK
              </button>
            )}
          </div>
        </div>
      )}
    </NotificationContext.Provider>
  );
};
