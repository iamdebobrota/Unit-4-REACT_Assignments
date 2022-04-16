import React, { useState } from 'react';
import Resturent from './Resturent';
// import ShowForm from './ShowForm';
import './Styles.css'
import swal from 'sweetalert';


function Form() {
    const [formData, setFormData] = useState({})


    const handleClick = (e) => {
        const inputName = e.target.name;

        
           setFormData({
                ...formData,
                [inputName]: e.target.value,
           });
        

     

    };

    const handleSubmit = (e) => {
        e.preventDefault()
        // console.log(formData);

        swal({
            title: "Saved",
            text: "Your Data Is Saved you can see",
            icon: "success",
            button: "Thank You",
          });
    }
 
    const postTodo= async()=>{
        console.log(formData);
        let res= await fetch("http://localhost:3000/data/",{
          method: "POST",
          headers: {"content-type" : "application/json"},
          body: JSON.stringify(
          formData
          
          ),
        });
        let data = await res.json();
        // let all=data.formData
        // onAdd(all)
        // let a=data.formData
        // localStorage.setItem("menu", JSON.stringify(a) )

        // console.log(data.formData);
      };


    return (
        <div className=''>
           <h1 className='heading'>Foddy App</h1>
           
        <div className='main-div'>
         
            <form onSubmit={handleSubmit} className='form' >
                <div className="grid" >
                    <label>Name : </label>
                    <input type="text" placeholder='Enter the Food Name' name='title' className='name' onChange={handleClick} />
                </div>
                <div className="grid">
                    <label>Rating : </label>
                    <input type="number" step="any" placeholder='Rating' name='rating' className='name' onChange={handleClick} />
                </div>
                <div className="grid">
                    <label>Image URL : </label>
                    <input type="text" placeholder='Enter Images URL' className='name' name='imgurl' onChange={handleClick} />
                </div>
                <div className="grid">
                    <label>Price : </label>
                    <input type="number" placeholder='price' name='price' onChange={handleClick} className='name'/>
                </div>
                <div className="grid">
                    <label>Catagory : </label>
                    <input type="text" placeholder='Catagory' name='category' onChange={handleClick} className='name' />
                </div>
                <div className="grid">
                    <label>Catagory : </label>
                    <input type="number" placeholder='Discount' name='discount' onChange={handleClick} className='name' />
                </div>

                {/* <div className="grid">
                    <label>Catagory : </label>
                    <select name='category' onChange={handleClick} id='department'  className='name'>
                        <option value="Lunch">Lunch</option>
                        <option value="Dinner">Dinner</option>
                        <option value="Breakfast">Breakfast</option>
                        <option value="Others">Others</option>
                    </select>
                </div> */}
                <div className="grid">
                    <label> Description : </label>
                <textarea name="description" form="usrform" placeholder='Enter Text here..'
                 onChange={handleClick} className='name' ></textarea>
                </div>
                <div className="grid">
                    <input type="submit" className='submit' onClick={()=>{
                    //    let value=formData;
                            setFormData(formData)
                            postTodo(formData)
                            // console.log(formData);
                        
                    }}/>
                </div>
              



            </form>
            <div>
{/*            
            <ShowForm data={formData}/> */}

            {/* <Resturent onAdd={formData}/> */}
            </div>
          

        </div>
        </div>
    )
}

export default Form
