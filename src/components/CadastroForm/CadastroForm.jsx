
import axios from "axios";
import React, { useState } from 'react';
import {  useNavigate  } from 'react-router-dom';
import "./CadastroForm.css"

const initialValue ={
    nome: '',
    email: '',
    senha: '',
}

const CadastroForm = () => {
    const [values, setValues] = useState(initialValue);
    const navigate = useNavigate ();

    function onChange(ev) {
       
        const {name, value } = ev.target;
       
        setValues({ ...values, [name]: value});
    }

   function onSubmit(ev){
      ev.preventDefault();

      axios.post("http://localhost:3006/usuario", values)
      .then(
        (response => {
          navigate('/');
        })
      )
      .catch(
        console.log("deu errado")
      )
   }
    

    return (
        <div>
            <div className='cadastro'>
                <h1 className='text-login'>Crie sua conta</h1>
                <form onSubmit={onSubmit} >

                    <div className='cinza'>

                        <div className="formField">
                            <label>Nome*</label>
                            <input
                                placeholder="Digite o seu nome..."
                                onChange={onChange}
                                name="nome"
                            />

                        </div>

                        <div className="formField">
                            <label>Email*</label>
                            <input
                                placeholder="Digite seu email..."
                                onChange={onChange}
                                name="email"
                            />
                        </div>
                        <div className="formField">
                            <label>Senha*</label>
                            <input

                                type="password"
                                placeholder="Digite sua senha..."
                                onChange={onChange}
                                name="senha"
                            />
                        </div>

                        <div className="enviar-cadastro">
                        <button className="button" type="submit">Criar</button>
                        </div>

                    </div>
                </form>
            </div>
        </div>
    )
};

export default CadastroForm;

