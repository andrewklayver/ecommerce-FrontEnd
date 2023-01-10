
import axios from "axios";
import "./Header.css";

const Header = () => {

   
   return ( 
        <header>
              <img href="/home" className="logo" src="../../image/americanas.svg" alt="logo"></img> 
           <nav>
              <ul>
              <a href="/criarproduto">Adicionar Produto</a>
              </ul>
           <nav className="login">
            <a href="/login"> Faça seu Login!</a>
           </nav>
           </nav> 
       
        </header>
     );
};
 
export default Header;
  