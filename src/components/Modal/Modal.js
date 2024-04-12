import React from 'react';
// import '../Button/Button.css';

const Modal = () => {
  return (
    <div className='container'> 
      <h2 className='text-center py-3'>Modal class</h2>
      <div className='row py-3 justify-content-center'>
        {/* ////-----Button--------///// */}
        <div className='col-md-3'>
          <button className='btn btn-primary' data-bs-toggle='modal' data-bs-target="#myModal">Launch Modal</button>
          <div className='modal' id='myModal'>
            <div className='modal-dialog'>
              <div className='modal-content'>   
              <div className='modal-footer'>
                <h5 className='modal-title'>Modal Title</h5>
                <button className='close' data-bs-dismiss='modal'>
                    <span>&times;</span>
                </button>
              </div>
              <div className='modal-body'>
              For example, if you have a button that you want to open a modal with the ID "myModal",
               you would use data-bs-toggle="modal" on the button and data-bs-target="#myModal" to specify
                the target modal. When the button is clicked, Bootstrap will locate the modal with the ID "myModal"
                 and open it.
              </div>
              <div className='modal-footer'>
                <button className="btn btn-danger " data-bs-dismiss='modal'>Close</button>
                <button className="btn btn-success " data-bs-dismiss='modal'>Save</button>
              </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>   
    </div>
  );
}

export default Modal;

