import React from "react";
import styles from "./signup-form.module.css";

const SignupForms = ({ onSubmit }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const values = [].slice
      .call(event.target)
      .filter((el) => el.name && !!el.value)
      .reduce((val, el) => ({ ...val, [el.name]: el.value }), {});

    onSubmit && onSubmit(values);
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.form__row}>
          <label htmlFor="#fullName">Name</label>
          <input
            type="text"
            placeholder="Johnny Bravo"
            name="fullName"
            id="fullName"
          />
        </div>
        <div className={styles.form__row}>
          <label htmlFor="#emailAddress">Email</label>
          <input
            type="email"
            name="email"
            placeholder="johnny@email.com"
            id="emailAddress"
          />
        </div>
        <div className={styles.form__row}>
          <button className={styles.form__submit} type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignupForms;
