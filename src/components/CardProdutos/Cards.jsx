import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import "./Cards.css"

function Cards() {
    const [produtos, setProdutos] = useState([])

    useEffect(() => {
        axios.get("http://localhost:3006/produto")

        .then((res) => {
              setProdutos(res.data.produtos)
            })
            .catch(erro => {
                console.log(erro)
            })
    }, [])

    return (
        <>
            {produtos.map((produto, key) => {
                return (
                    <div className="card" key={key}>

                        <div className="imgBox">
                            <img src="#" alt="mouse corsair" className="mouse" />
                        </div>

                        <div className="contentBox">
                            <h3>{produto.titulo}</h3>
                            <h2 className="price">{produto.valor}</h2>
                            <a href="#" className="buy">Comprar</a>
                        </div>
                    </div>

                )
            })}
        </>
    )
}

export default Cards;




