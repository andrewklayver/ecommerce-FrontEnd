import './Footer.css';

const Footer = () => {
    return ( 

        <footer className="footer">
            <div className='responsavel'>
              <p>
                Responsável Técnico
                  <h1>Fabio Camilo da Silva</h1>
                  <h2>CRP (06/84133)</h2>
              </p>       
            </div>


            <div className='descResponsavel'>
                <img src="../../image/alerta-blank.svg" alt="#" />
                <p className='textoReponsavel'>
                Atenção: Este site não oferece tratamento ou aconselhamento imediato para pessoas em crise suicida. Em caso de crise, ligue para 188 (CVV) ou acesse o site www.cvv.org.br. Em caso de emergência, procure atendimento em um hospital mais próximo.
                </p>
            </div>
        </footer>
     );
}
 
export default Footer;