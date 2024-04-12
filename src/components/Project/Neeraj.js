import React from 'react';
import { Link } from 'react-router-dom'; // Corrected import statement
import '../Project/Neeraj.css';

const Neeraj = () => {
  return (
    <>
    <div className='header'>
        <div className='container'>
            <div className='row'>
                <div className='col-md-4'>
                    <h1 className='logo'>Company Name</h1>
                </div>
                <div className='col-md-8'>
                    <ul className='menu float-md-end'>
                        <li><Link to='/home'>Home</Link></li>
                        <li><Link to='/about'>About</Link></li>
                        <li><Link to='/gallery'>Gallery</Link></li>
                        <li><Link to='/products'>Products</Link></li>
                        <li><Link to='/contact'>Contact Us</Link></li>
                    </ul>
                </div>
            </div>
        </div>      
    </div>
    <div className='banner py-5'>
        <div className='container'>
            <div className='row'>
                <div className='col-md-8 col-lg-6'>
                <div className='banner-title'>
                    <h1 >Heading Gose Here</h1>
                    <p className='lead'>To set the cursor to a pointer when hovering over the menu items,
                       you can use the cursor property in CSS. Here's the updated CSS file
                       with the cursor set to pointe</p>
                </div>
                </div>
                
            </div>
        </div>
    </div>
    <div className='container section'>
        <div className='row'>
            <div className='col-md-12'>
                <h2 className='section-head'>Some Heading Gose Here</h2>                
            </div>
            <div className='col-md-12'>
                <div className='service-box'>
                    <li></li>
                    <h3>Some Heading </h3>
                    <p>
                        In CSS, when specifying URLs for background images,
                        you need to provide the path relative to the CSS file. Assuming the CSS
                    </p>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Neeraj;
