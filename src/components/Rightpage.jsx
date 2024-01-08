import React from 'react';
import './Rightpage.css';
import { Plus } from 'react-feather';



function Rightpage() {
    return (
        <>

            <div style={{marginTop:"40px"}}>
                <div className='bell'><i style={{color:"blue"}} class="fa-solid fa-bell"></i></div>
            </div>
            <div>
                <div className='plus' style={{backgroundColor:"#BAC8F7", borderRadius:"50%",padding:"2px",color:"#DC1EAE", height:"30px",width:"30px"}}><Plus /></div>
            </div>


        </>
    )
}

export default Rightpage