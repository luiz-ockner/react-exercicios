import React,{ useState,useEffect } from "react";
import styles from "./clocktime.module.css";

export default function ClockTime() {

    const [clock,setClock] = useState(new Date().toLocaleTimeString());

    useEffect(() => {
        const interval = setInterval(() => {
            setClock(new Date().toLocaleTimeString());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className={styles.clockContainer}>
            <div className={styles.clock}>
                <p className={styles.clockTime}>{clock}</p>
            </div>           
        </div>
    );
}

