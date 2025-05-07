import React, { useState } from "react";
import styles from "./toggle.module.css";

export default function Toggle() {

    const [isOn, setIsOn] = useState(false);

    const handleToggle = () => {
        setIsOn(!isOn);
    };
   
    return (
        <div className={styles.toggleContainer}>
            <button
                className={`${styles.toggleButton} ${isOn ? styles.on : styles.off}`}
                onClick={handleToggle}
            >
                {isOn ? "ON" : "OFF"}
            </button>
        </div>
    );
}