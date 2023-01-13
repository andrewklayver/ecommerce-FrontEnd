import './Footer.css';

const Footer = () => {
    return ( 

        <footer className="footer">
            <div className='responsavel'>
              <p>
                Projeto
                  <h1>Andrew Klayver</h1>
                  <h2>(FrontEnd Jr)</h2>
              </p>       
            </div>


            <div className='descResponsavel'>
                <img src="../../image/alerta-blank.svg" alt="#" />
                <p className='textoReponsavel'>
                Atenção: Projeto feito para adquirir experiência e praticar programação.
                </p>
            </div>
        </footer>
     );
}
 
export default Footer;