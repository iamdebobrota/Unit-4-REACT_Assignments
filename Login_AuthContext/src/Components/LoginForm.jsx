import React, { useContext, useState } from 'react'
import { AuthContext } from '../Context/AuthProvider'
import '../Page/Style.css'

const LoginForm = () => {
const [form, setForm] = useState()

const {login}=useContext(AuthContext);



const handleChange=(e)=>{
    const field=e.target;
    
setForm({...form,
[field.name]: field.value,
})
    
}

const handleSubmit = (e)=>{
e.preventDefault()
login()
}

  return (
    <div>
      <h2 className='login-form'>LoginForm</h2>
      <div>
          <form onSubmit={handleSubmit} className='form'>
              <div>
                  <label htmlFor="">UserName</label>
                  <input type="text" name='username' handleChange={handleChange} minLength='5' />
              </div>
              <div>
                  <label>Password</label>
                  <input type="password" name='password' handleChange={handleChange} minLength='5'/>
              </div>
              <button type='submit' >Login</button>
          </form>
      </div>
    </div>
  )
}

export default LoginForm

