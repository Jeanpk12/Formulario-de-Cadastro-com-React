import { useState } from 'react';
import './Styles.css'
import ilustracao from './images/ilustracao.png'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {

  const [name, setName] = useState('');
  const [tel, setTel] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = () => {
    
    switch (true) {
      case name.length === 0:
          toast.error('Você não nos informou o seu Nome.')
        break;

        case /\d/.test(name):
        toast.error('Você não nos informou um Nome válido.');
        break;

      case tel.length === 0:
          toast.error('Você não nos informou o seu Telefone.')
        break;

        case isNaN(tel):
      toast.error('Você não nos informou um Telefone válido.');
        break;

      case email.length === 0:
        toast.error('Você não nos informou o seu E-mail.');
        break;

        case !email.includes('@'):
        toast.error('Você não nos informou um E-mail válido.');
        break;
        
      default:
        setName('');
        setTel('');
        setEmail('');
        document.getElementById('btn').disabled = true;
        document.getElementById('btn').style.opacity = '0.5';
        toast.success(`Tudo certo ${name}! Agora basta acessar seu Email e confirmar a sua conta`);
        const callToActionElements = document.querySelectorAll('.callToAction');
        callToActionElements.forEach((element) => {
          element.innerHTML = 'Seja Bem-vindo!';
        });
    }
  };


  return (
    <>
    <ToastContainer position="top-center" />
      <div className="container">
        <div className="div_images">
          <img src={ilustracao} alt="ilustração da página" />
        </div>
        <div className="bar"></div>
        <div className="div_imput">
        <h1 className='callToAction'>Junte-se a nós</h1>
          <label htmlFor="name">Nome</label>
          <input 
                type="text" 
                name="name" 
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)} />

          <label htmlFor="tel">Telefone</label>
          <input 
                type="tel" 
                name="tel" 
                id="tel"
                value={tel}
                onChange={(e) => setTel(e.target.value)} />

          <label htmlFor="email">E-mail</label>
          <input 
                type="email" 
                name="email" 
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)} />

          <input 
                type="button" 
                value="Cadastrar-se" 
                id='btn'
                onClick={handleSubmit}/>
        </div>
      </div>
    </>
  );
};

export default App;
