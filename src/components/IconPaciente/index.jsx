import "./index.css"

function IconPaciente(){
    return(
        
        <div className="tab-container"> 
         <div className="login-usuario">
        <img className= "image" src="https://www.vittude.com/static/images/psico-orange.svg" alt=""></img>
        <span className="active">Psicólogo</span>
        </div>
      
       <div className="login-usuario">
       <img className= "image" src="https://www.vittude.com/static/images/paciente-terracota.svg" alt=""></img>
       <span className="active">Paciente</span>
       </div>
      
       </div>
    )
}

export default IconPaciente;