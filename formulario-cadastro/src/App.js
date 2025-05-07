import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react';
import cadastro from './models/cadastro.ts';

function App() {
  const [cadastro, setCadastro] = useState([]);

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleCadastro = (newCadastro) => {
    
    const cad = {
      nome: nome,
      email: email,
      senha: senha
    }

    if(cadastro.filter(c => c.nome === cad.nome && c.email === cad.email).length > 0) {
      alert('Cadastro já existe');
      return;
    }
    
    if(cad.nome === '' || cad.email === '' || cad.senha === '') {
      alert('Preencha todos os campos');
      return;
    }

    if(cad.senha.length < 6) {
      alert('A senha deve ter no mínimo 6 caracteres');
      return;
    }

    if(!cad.email.includes('@')) {
      alert('O email deve conter @');
      return;
    }
    setCadastro([...cadastro, newCadastro]);

    setNome('');
    setEmail('');
    setSenha('');
  }

  const HandleClearList = () =>{
     setCadastro([]);
  }


  return (
    <div className="App">      
      <div className="formulario">
        <h1>Formulário de Cadastro</h1>
        <form onSubmit={(e) => {
          e.preventDefault();
          handleCadastro({ nome, email, senha });
        }}>
          <input type="text" placeholder="Nome" value={nome} onChange={(e) => setNome(e.target.value)} />
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type="password" placeholder="Senha" value={senha} onChange={(e) => setSenha(e.target.value)} />
          <button type="submit">Cadastrar</button>
          <button type="button" onClick={HandleClearList}>Limpar Lista</button>
        </form>
        {cadastro.map((cad, index) => (
          <div key={index}>
            <p>Nome: {cad.nome}</p>
            <p>Email: {cad.email}</p>            
          </div>
        ))}
        </div>
    </div>
  );
}

export default App;
