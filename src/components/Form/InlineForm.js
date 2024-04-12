import React from 'react';
import "../Button/Button.css";

const InlineForm = () => {
  return (
    <div className='container mt-5'>
        <div className='row py-3'>
            <div className='col'>
                <form action='' className='row g-3 align-items-center'>
                  <div className='col-auto'>
                    <label htmlFor='username1' className='visually-hidden'>User Name</label>
                    <input type='text' id='username1' className='form-control' placeholder='User Name'></input>
                  </div>
                  <div className='col-auto'>
                    <label htmlFor='username2' className='visually-hidden'>User Name</label>
                    <input type='text' id='username2' className='form-control' placeholder='User Name'></input>
                  </div>
                  <div className='col-auto'>
                    <label htmlFor='username3' className='visually-hidden'>User Name</label>
                    <input type='text' id='username3' className='form-control' placeholder='User Name'></input>                    
                  </div>
                  <div className='col-auto'>
                  <button type='button' className='btn btn-primary'>submit</button>                   
                  </div>                
                </form>
            </div>
        </div>
    </div>
  )
}

export default InlineForm;

