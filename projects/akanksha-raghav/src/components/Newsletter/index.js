import React from "react";
import styles from "./newsletter.module.css";
import SignupForms from "./SignupForm";

const NewsLetter = () => {
  const onSubmit = (values) => {
    alert(JSON.stringify(values, null, 2));
  };

  return (
    <div className={styles.container}>
      <div className={styles.container__inner}>
        <div className={styles.head__container}>
          <h1 className={styles.title}>Newsletter</h1>
          <p className={styles.subhead}>Signup and receive news and updates!</p>
        </div>
        <SignupForms onSubmit={onSubmit} />
      </div>
    </div>
  );
};

export default NewsLetter;
