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
          <div className='modal fade ta' id='myModal' tabindex="-1"  >
            {/* /////----modal-dialog-centered, modal-dialog-scrollable,  data-bs-backdrop ='static' , tabindex="-1"*/}
          <div className='modal-dialog modal-lg'>
              <div className='modal-content'>   
                <div className='modal-header'>
                  <h5 className='modal-title text-start'>Modal Title</h5>
                  <button className='btn-close' data-bs-dismiss='modal' aria-label='Close'></button>
                </div>
                <div className='modal-body'>
                 <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-md-6'>col 1</div>
                        <div className='col-md-6'>Col 2</div>
                    </div>
                    <div className='row'>
                        <div className='col-md-4'> Clo 3</div>
                        <div className='col-md-8' > Col 4</div>
                    </div>
                 </div>
                </div>
                <div className='modal-footer'>
                  <button className="btn btn-danger" data-bs-dismiss='modal'>Close</button>
                  <button className="btn btn-success" data-bs-dismiss='modal'>Save</button>
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
