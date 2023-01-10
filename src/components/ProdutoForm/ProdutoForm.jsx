import "./ProdutoForm.css"
import axios from "axios";
import React, { useState } from 'react';
import {  useNavigate  } from 'react-router-dom';


const initialValue ={
    titulo: '',
    descricao: '',
    valor: '',
}

const ProdutoForm = () => {
    const [values, setValues] = useState(initialValue);
    const navigate = useNavigate ();

    function onChange(ev) {
       
        const {name, value } = ev.target;
       
        setValues({ ...values, [name]: value});
    }

   function onSubmit(ev){
      ev.preventDefault();

      axios.post("http://localhost:3006/produto", values)
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
                <h1 className='text-login'>Crie seu produto</h1>
                <form onSubmit={onSubmit} >

                    <div className='cinza'>

                        <div className="formField">
                            <label>Titulo*</label>
                            <input
                                placeholder="Digite o nome do seu Produto..."
                                onChange={onChange}
                                name="titulo"
                            />

                        </div>

                        <div className="formField">
                            <label>Descrição*</label>
                            <input
                                placeholder="Descrição do Produto..."
                                onChange={onChange}
                                name="descricao"
                            />
                        </div>
                        <div className="formField">
                            <label>Valor*</label>
                            <input

                                type="number"
                                placeholder="Digite o valor do produto..."
                                onChange={onChange}
                                name="valor"
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

export default ProdutoForm;