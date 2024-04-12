import React from 'react';
import "../Button/Button.css";

const Button_Group = () => {
  return (
    <div className='container'>

      <div className='row'>
        <div className='col'>
          <div className='btn-group py-3 btn-group-lg'>
          <button type='button' className='btn btn-primary'><i className="fas fa-car"></i></button>
          <button type='button' className='btn btn-success'><i className="far fa-smile"></i></button>
            <button type='button' className='btn btn-warning'>Home3</button>
          </div>
        </div>
      </div>

      <div className='row'>
        <div className='col'>
          <div className='btn-group py-3 '>
            <button type='button' className='btn btn-primary '>Home1</button>
            <button type='button' className='btn btn-success '>Home2</button>
            <button type='button' className='btn btn-warning'>Home3</button>
          </div>
        </div>
      </div>

      <div className='row'>
        <div className='col'>
          <div className='btn-group py-3 btn-group-sm'>
            <button type='button' className='btn btn-primary '>Home1</button>
            <button type='button' className='btn btn-success '>Home2</button>
            <button type='button' className='btn btn-warning'>Home3</button>
          </div>
          </div>
          </div>
          <div className='row'>
            <div className='col-md-6'>
              <div className='btn-group-vertical'>
              <button type='button' className='btn btn-primary '>Home1</button>
            <button type='button' className='btn btn-success '>Home2</button>
            <button type='button' className='btn btn-warning'>Home3</button>
              </div>
              
          
        </div>
      </div>
    </div>
  );
};

export default Button_Group;

