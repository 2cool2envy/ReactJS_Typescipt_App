import React from 'react';
import styles from "./input.module.scss";

type InputProps = {
  id: string;
  label: string;
  list: any[];
  onSelectLanguage: any;
  onSelectList: any;
};

const Input = ({ id, label, list, onSelectLanguage, onSelectList }: InputProps) => {


  const textChange = (val: string) => {
    onSelectLanguage(val);
  }

  const listChange = (val: string) => {
    onSelectList(val);
  }

  return (
    <div className={styles["input-field"]}>
      <label>{label}</label>
      <br />
      <input id={id} name={id} className={styles.inputElement} type="text"
        onChange={(e) => textChange(e.target.value)}
      />
      <br /> <br />
      <label>{label}</label>
      <br />
      <select className={styles.inputElement} onChange={e => listChange(e.target.value)}>
        {
          list.map((data, i) => {
            return (<option key={i} className={styles.input} value={data.name}>
              {data.name}
            </option>)
          })
        }
      </select>
    </div>
  );
};

export default Input;
