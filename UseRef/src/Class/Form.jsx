import React,{useState} from 'react'
import './style.css'

const Form = () => {
    const [formData, setFormData]=useState({
        username: "",
        password: "",
        showPassword: false,
    })
    

const handleChange=(e)=>{
    const inputName= e.target.name;
   
    //checkbox
    if(e.target.type==='checkbox'){
        console.log(e.target.value, e.target.checked);
        setFormData({...formData, [inputName]: e.target.checked,});
        //file
        
    } else if(e.target.type==='file'){
        //files
        setFormData({...formData,[inputName]: e.target.files,
    });
    }
    
    
    else{
        setFormData({
            ...formData,
            [inputName]: e.target.value,
        });
    }
          
         
        };
      
  


    const handleSubmit =(e)=>{
        e.preventDefault()
        console.log(formData)
        //fetch (url, {method: post, body:JSON.stringify(formData)})
    }
  return (
      <div className='main-div'>
           <h1 className='heading'>Login Form</h1>
    <form onSubmit={handleSubmit} className="form">
       
        <div className='grid'>
            <label>User Name</label>
            <input type="text" name="username" placeholder='enter username' onChange={handleChange}/>
        </div>
        <div  className='grid'>
            <label>Password</label>
            <input type={formData.showPassword ? "text" : "password"} name="password" placeholder='password' onChange={handleChange}/>
        </div>
        
<div >
    
    <input type="checkbox" name="showPassword" onChange={handleChange}/>
    <label>SHow PAssword</label>
</div>
<div  className='grid'>
            <label>Age</label>
            <input type="number" name="age" placeholder='Age' onChange={handleChange}/>
        </div>

<div  className='grid'>
    <label>Gender</label>
    <select name="gender" id="gender"  onChange={handleChange}>
        <option value="M">Male</option>
        <option value="F">Female</option>

    </select>
</div>





<div  className='grid'>
    <label>Gender</label>
    <div>
        <input type="radio" value="M"  name="genderRadio" onChange={handleChange}/> Male
      <br />
       <input type="radio" value="F" name="genderRadio"   onChange={handleChange}/>Female

       </div>
</div>





<div  className='grid'>
            <label>DOB</label>
            <input type="date" name="dob" onChange={handleChange}/>
        </div>
<div  className='grid'>
            <label>Resume</label> 
            <input type="file" name="resume" onChange={handleChange}/>
        </div>

        <input type="submit"  className='submit'/>
      
    </form>
    </div>
  )
}

export default Form
