import React from 'react';
import user from '../Media/assets/user.png'; // corrected import statement

const Men = () => { // changed function name to uppercase
  return (
    <div className='container'>
        <div className='row py-5'>
            <div className='col my-3'>
                <div className='media'>
                    <img src={user} alt='' className='mr-3' />
                    <div className='media-body'>
                        <h5 className='mt-0'>Neeraj Kumar</h5>
                        <p>This class combination ensures that the modal dialog
                           is centered both vertically and horizontally within the viewport</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Men; // corrected export name to uppercase
