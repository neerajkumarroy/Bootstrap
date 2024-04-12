import React from 'react'
import "../Button/Button.css"

const Form = () => {
  return (
  
    <div className='container'>
          <h2 className='py-3 text-center'>Bootstrap Form Classess</h2>
        <div className='row'>
            <div className='col-md-6 '>
                <div className='from-group'>
                    <label>Name</label>
                   <input type='text' className='form-control'></input>
                </div>
                <div className='form-group  my-2'>
                    <label>Email</label>
                    <input type='text' value="neeraj@test.com" className='form-control-plaintext'  />
                </div>
                <div className='from-group  my-2'>
                    <label>Password</label>
                   <input type='password' className='form-control'></input>
                   <small className='form-text text-muted '>
                      Your Password must be 10-20 character required
                   </small>
                </div>
                <div className='from-group my-2'>
                    <label>Country</label>
                    <select className='form-select'>
                        <option>Dehradun</option>
                        <option>Pune</option>
                        <option>Banglore</option>
                        <option>Delhi</option>
                        <option>Haridware</option>
                    </select>                   
                </div>
                <div className='from-group  my-2'>
                    <label>Message</label>
                 <textarea className='form-control'></textarea>
                </div>
            </div>
            <div className='col-md-6 my-3 '>
                <div className='form-group'>
                    <label>File Uploade</label><br/>
                    <input type='file' className='form-control-file' />
                </div>
                <div className='form-group my-3'>
                    <label>Amount</label><br/>
                    <input type='range'  className='form-control-range ' />
                </div>
                <div className='form-group my-3'>
                    <label>Hobbiess</label><br/>
                   <div className='form-check'>
                    <input type='checkbox' className='form-check-input' id='musicCheck' />
                    <label for='musicCheck' className='form-check-label'>Music</label>
                   </div>
                   <div className='form-check'>
                    <input type='checkbox' className='form-check-input' id='sportsCheck' />
                    <label for='sportsCheck' className='form-check-label'>Sports</label>
                   </div>
                   
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Form;
