import React from "react";
import styles from "./galeryList.module.css";

export default function GaleryList({ galery }) {

    return (
        <div className={styles.galeryList}>
        {galery.map((item, index) => (
            <div key={index} className={styles.galeryItem}>
            <img src={item.image} alt={item.title} />
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            </div>
        ))}
        </div>
    );
}