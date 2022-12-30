
import "./Header.css";

const Header = () => {
    return ( 
        <header>
              <img className="logo" src="../../image/americanas.svg" alt="logo"></img> 
           <nav>
              <ul>
                <li>Produtos</li>
                <li>Adicionar Produtos</li>
              </ul>
           <div className="visitante">
            <a> Faça seu Login!</a>
           </div>
           </nav> 
       
        </header>
     );
};
 
export default Header;
  