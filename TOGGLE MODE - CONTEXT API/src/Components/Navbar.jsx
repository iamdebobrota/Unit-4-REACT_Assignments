import React from 'react'
import './Style.css'
import Switch from '@mui/material/Switch';
import Slider from '@mui/material/Slider';




const label = { inputProps: { 'aria-label': 'Switch demo' } };


const Navbar = ({ themeToggle }) => {




    return (
        <div className='body'>
            <div className='div'>

          
     




                <h2>My Dashboard</h2>


                <div className='right'>

                    <label htmlFor="Switch">Dark Mood</label>
                    <Switch {...label} defaultChecked onClick={() => themeToggle()} color="secondary"/>

                </div>
            </div>

<div className="sidebar">

    <img src="https://avatars.githubusercontent.com/u/99647439?v=4" alt="me"/>
  
 
</div>







            <div style={{ textAlign: "center" }} className='content'>
                <div className='user-div'>
                    <div className='active-user'>
                        <h5>Active User</h5>
                        <p>for August 2020</p>
                    </div>
                    <div>
                        <div className='name-div'>
                        <div> <img src="https://www.businessinsider.in/photo/78277386/Roshni-Nadar-Divya-Gokulnath-Ameera-Shah-and-Vinati-Saraf-Indias-most-powerful-businesswomen-of-2020-according-to-Forbes.jpg" alt="nr" className='img' /></div>
                        <div>  <h4>Namita</h4>
                            <p>Bangalore, India</p>
                            </div>
                        </div>
                            <Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto" color="success"/>
                        <div className='active-user'>
                            <p>Professional Level 15</p>
                            <p>4723 Point</p>
                        </div>
                    </div>
              

                <div>


                    <div className='name-div'>
                        <img src="https://dmerharyana.org/wp-content/uploads/2021/12/Namita-Thappar.png" alt="aa"  className='img'/>
                        <div> <h4>Sandhya</h4>
                        <p>Bangalore, India</p>
                    </div>
                    </div>
                        <Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto" />
                    <div className='active-user'>
                        <p>Professional Level 15</p>
                        <p>4723 Point</p>
                    </div>
                </div>
                <div>
                    <div className='name-div'>
                       <div> <img src="https://avatars.githubusercontent.com/u/99647439?v=4" alt="me" className='img'/></div>
                       <div><h4>Debobrota haldar</h4>
                        <p>West Bengal, India</p>
                    </div>
                    </div> 

                        <Slider
        aria-label="Temperature" defaultValue={30} 
        color="secondary"/>
                    <div className='active-user'>
                        <p>Professional Level 15</p>
                        <p>4723 Point</p>
                    </div>
                </div>
                </div>

            </div>
        </div>
    )
}

export default Navbar
