import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { BiTrash } from "react-icons/bi"
import "./Cards.css"


const Cards = () => {
    const [produtos, setProdutos] = useState([]);



    useEffect(() => {
        axios.get("http://localhost:3006/produto")

            .then((res) => {
                setProdutos(res.data.produtos)
            })
            .catch(erro => {
                console.log(erro)
            })
    })

    const deleteApi = (id) => {
        axios.delete(`http://localhost:3006/produto/${id}`);
        setProdutos(
            produtos.filter((produto) => {
                return produto.id !== id;
            })
        );

    };




    return (
        <>
            {produtos.map((produto, key) => {
                return (
                    <div className="cardMain">
                        <div className="card" key={produto?.id}>
                            <button className="button-trash" onClick={() => deleteApi(produto.id)}> <BiTrash /> </button>
                            <div className="imgBox">
                                <img src="#" className="mouse" />
                            </div>

                            <div className="contentBox">
                                <h2 >{produto.titulo}</h2>
                                <h3 className="price">{produto.descricao}</h3>
                                <h4 className="price">{produto.valor}</h4>
                                <a href="#" className="buy">Comprar</a>
                            </div>
                        </div>
                    </div>
                )
            })}
        </>
    )

}



export default Cards;




