import { useFormik } from 'formik';
import "./Login.css"
import { basicSchema } from '../../schemas';
import axios from "axios"; 
import {  useNavigate  } from 'react-router-dom';




function Login() {
  const navigate = useNavigate ();
  const onSubmit = async (values, actions) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    actions.resetForm()
    await axios.post('http://localhost:3006/login', values)
    .then(res => {
      
      if(values.email === res.data.usuario.email){
      navigate('/')
     
    }else{
        window.alert(`Usuário não existe`)
      }
    })
    .catch(error => console.log(error))
    
  };
  const { values, errors, touched, isSubmitting, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: {
      email: 'andrew1@gmail.com',
      senha: 'andrew1800',
    },
    validationSchema: basicSchema,
    onSubmit,
  });

  

  
  return (

    <div className='cadastro'>
      <h1 className='text-login'>Faça seu login</h1>
      <div className='cinza'>
    
        <form onSubmit={handleSubmit} autoComplete="off" className="form" >

          <div className="formField">
            <label>Email*</label>
            <input
              id="email"
              type="email"
              placeholder="Digite seu email..."
              onChange={handleChange}
              value={values.email}
              onBlur={handleBlur}

            />
            <div>
              {errors.email && touched.email && <p className="error">{errors.email}</p>}
            </div>
          </div>

          <div className="formField">
            <label>Senha*</label>
            <input
              id="senha"
              type="senha"
              placeholder="Digite sua senha..."
              onChange={handleChange}
              value={values.senha}
              onBlur={handleBlur}
            />

            <div>
              {errors.senha && touched.senha && <p className="error">{errors.senha}</p>}
            </div>
          </div>

          <div className="enviar-cadastro">
            <div className="link-login">
              <a href="#">Esqueci minha senha</a>
            </div>
            <button disabled={isSubmitting} className="button" type="submit">Entrar</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login;