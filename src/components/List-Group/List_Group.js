import React from 'react';
import "../Button/Button.css";
import { Link } from 'react-router-dom';

const List_Group = () => {
  return (
    <div className='container'>
        <div className='row'>
            <div className='col-md-5 py-5'>             
                    <ul className='list-group'>
                        <li className='list-group-item list-group-item-success'>Link1</li>
                        <li className='list-group-item list-group-item-danger'>Link2</li>
                        <li className='list-group-item list-group-item-warning'>Link3</li>
                        <li className='list-group-item list-group-item-info'>
                         Actions: Actions are plain JavaScript objects that represent what happened.
                         They are the only way to change the state in a Redux store.
                         Actions must have a type property that indicates the type of action being performed.
                         They can also include additional data.</li>
                        <li className='list-group-item list-group-item-primary'>Link5</li>
                    </ul>                
            </div>
            <div className='col-md-5 py-5'>             
                    <ul className='list-group list-group-flush '>
                        <li className='list-group-item'>Link1</li>
                        <li className='list-group-item '>Link2</li>
                        <li className='list-group-item'>Link3</li>
                        <li className='list-group-item'>Link4</li>
                        <li className='list-group-item'>Link5</li>
                    </ul>                
            </div>
            {/* <div className='col-md-7 py-5'>             
                    <ul className='list-group list-group-horizontal-lg '>
                        <li className='list-group-item'>Link1</li>
                        <li className='list-group-item '>Link2</li>
                        <li className='list-group-item'>Link3</li>
                        <li className='list-group-item'>Link4</li>
                        <li className='list-group-item'>Link5</li>
                    </ul>                
            </div> */}
            <div className='col-md-7 mb -5'>
                <ul className='list-group'>
                    <Link className='list-group-item list-group-item-action list-group-item-success' to="/link1" >Link 1</Link>
                    <Link className='list-group-item list-group-item-action list-group-item-danger' to="/link2" >Link 2</Link>
                    <Link className='list-group-item list-group-item-action group-item-warning' to="/link3" >Link 3</Link>
                    <Link className='list-group-item list-group-item-action list-group-item-info' to="/link4" >Link 4</Link>
                </ul>
            </div>
        </div>
      
    </div>
  )
}

export default List_Group;
