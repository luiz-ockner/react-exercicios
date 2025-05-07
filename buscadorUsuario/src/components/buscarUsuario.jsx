import React, { useState } from "react";
import style from './buscarUsuario.module.css';
import axios from 'axios';
import { Circles } from 'react-loader-spinner';

export default function BuscarUsuario() {

    const [usuario, setUsuario] = useState("");
    const [resultado, setResultado] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);    

    const handleInputChange = (e) => {
        setUsuario(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();      
        setLoading(true);
        setError(null);

        try 
        {
            const response = await axios.get(`https://jsonplaceholder.typicode.com/users?username=` + usuario); // Substitua pela URL da API desejada
            setResultado(response.data);
        } 
        catch (error) 
        {
            setError(error.message);
        } 
        finally 
        {
            setLoading(false);
        }
    }

    if (loading) return <Circles color="#3498db" height={50} width={50} />;
   
    if (error) {
        return <p>{error}</p>;
    }   

    return (
        <div className={style.container}>
            <h1>Buscador de Usuário</h1>
            <form onSubmit={handleSubmit} className={style.form}>
                <input
                    type="text"
                    value={usuario}
                    onChange={handleInputChange}
                    placeholder="Digite o nome do usuário"
                />
                <button type="submit" className={style.btn}>Buscar</button>
            </form>
            {loading && <p>Carregando...</p>}
            {error && <p>{error}</p>}
            {resultado && (
                <div className={style.resultado}>
                    <h2>Resultado:</h2>
                    <pre  className="json-container">{JSON.stringify(resultado, null, 2)}</pre>
                </div>
            )}
        </div>
    );
}

