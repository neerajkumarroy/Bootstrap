import React from 'react'
import "../Color/Color.css"
const Color = () => {
  return (
    <div className='container'>
        <div className="row">
        <h1 class="mt-5 mb-5 bg-danger">Color and background color</h1>
                    <div className='col-md-3 bg-success'>
                <h3 className='text-danger'>Sub Heading 1</h3>
                <p>Actions: Actions are plain JavaScript objects that represent what happened.
                  They are the only way to change the state in a Redux store. Actions must have
                  a type property that indicates the type of action being performed. They can also
                  include additional data</p>
            </div>
            <div className='col-md-3 bg-secondary'>
                <h3  className='text-warning'>Sub Heading 2</h3>
                <p>Actions: Actions are plain JavaScript objects that represent what happened.
                  They are the only way to change the state in a Redux store. Actions must have
                  a type property that indicates the type of action being performed. They can also
                  include additional data</p>
            </div>
            <div className='col-md-3 bg-warning'>
                <h3  className='text-info'>Sub Heading 3</h3>
                <p>Actions: Actions are plain JavaScript objects that represent what happened.
                  They are the only way to change the state in a Redux store. Actions must have
                  a type property that indicates the type of action being performed. They can also
                  include additional data</p>
            </div>
            <div className='col-md-3 bg-info'>
                <h3  className='text-success'>Sub Heading 4</h3>
                <p>Actions: Actions are plain JavaScript objects that represent what happened.
                  They are the only way to change the state in a Redux store. Actions must have
                  a type property that indicates the type of action being performed. They can also
                  include additional data</p>
            </div>
        </div>
      
    </div>
  )
}

export default Color;
