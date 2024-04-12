import React from 'react';
import "../Button/Button.css";

const Button = () => {
  return (
    <div className='container'>
        <div className='row mt-3 mb-5'>
            <div className='col'>
                <button type='button' className='btn btn-primary mx-2 btn-lg'>Home1</button>
                <button type='button' className='btn btn-success mx-2'>Home2</button>
                <button type='button' className='btn btn-warning mx-2 btn-sm'>Home3</button>
                <button type='button' className='btn btn-danger mx-2' disabled>Home4</button>
                <button type='button' className='btn btn-outline-info mx-2'>Home5</button>
                <button type='button' className='btn btn-outline-danger mx-2'>Home6</button>
                <input type='button' className='btn btn-outline-danger' value="submit" />
            </div>
        </div>
        <div className='row'>
    <div className='col-md-6'>
    <button type='button' className='btn btn-primary w-100'>Home3</button>
    </div>
</div>

      
    </div>
  )
}

export default Button;
