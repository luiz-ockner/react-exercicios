import React,{useState} from "react";
import style from './contador.module.css';

export default function Contador() {

    const [contador, setContador] = useState(0);

    const incrementar = () => {
        setContador(contador + 1);
    }

    const decrementar = () => {
        if (contador === 0) {
            alert("O contador não pode ser menor que 0");
            setContador(0);
            return;
        }
        setContador(contador - 1);
    }

    return (
        <div className={style.container}>
            <h1>Contador: {contador}</h1>
            <button onClick={incrementar} className={style.btn}>Incrementar</button>
            <button onClick={decrementar} className={style.btn}>Decrementar</button>
        </div>
    );
}