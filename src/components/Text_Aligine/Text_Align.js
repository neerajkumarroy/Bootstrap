import React from 'react';
import "../Text_Aligine/Text.css"
import { Link } from 'react-router-dom';

const Text_Align = () => {
  return (
    <div className='container'>
      <h3 className='mt-3 mb-5 text-center fw-light  '>Text Formating Class</h3>
      <div className='row'>
        <div className='col-md-4'>
          {/* <ul className='list-unstyled'> */}
          <ul className='list-inline'>
            <li className='list-inline-item'>Orange</li>
            <li className='list-inline-item'>Banana</li>
            <li className='list-inline-item'>Apple</li>
            <li className='list-inline-item'>Mango</li>

          </ul>
        </div>
        <div className='col-md-4 bg-success py-3 '>
          <h2 className=' text-danger display-none'>Sub heading one  </h2>
          {/* <Link className='text-reset' to='/about'>About Me</Link> */}
          <p className='text-lg-center user-select-none '>
              Redux simplifies state management by enforcing a unidirectional data
             flow and maintaining the state in a single immutable data store.
             This predictability makes it easier to understand how data flows
             through an application and debug issues related to state changes.</p>
             {/* <h1 className='fs-3'>his predictability makes it easier to understand how data flows */}
             {/* through an application and debug issues related to state changes</h1> */}
        </div>        
      </div>
      {/* <div className='row'>
        <div className='col-md-12'>
          <blockquote>
            <p className='user-select-all'> flow and maintaining the state in a single immutable data store.
             This predictability makes it easier to understand how data flows
             through an application and debug issues related to state changes.</p>
             <footer className='blockquote-footer'>Neeraj Kumar</footer>
          </blockquote>
        </div> */}
      {/* </div> */}
      
    </div>
  )
}

export default  Text_Align;
