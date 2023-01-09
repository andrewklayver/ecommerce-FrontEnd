
import "./Header.css";

const Header = () => {
   
   return ( 
        <header>
              <img href="/home" className="logo" src="../../image/americanas.svg" alt="logo"></img> 
           <nav>
              <ul>
                <li>Adicionar Produtos</li>
              </ul>
           <div className="visitante">
            <a href="/login"> Faça seu Login!</a>
           </div>
           </nav> 
       
        </header>
     );
};
 
export default Header;
  