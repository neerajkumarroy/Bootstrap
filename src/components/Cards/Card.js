import React from 'react';
import "../Button/Button.css";
import {Link} from 'react-router-dom'
import logo2 from "./assets/logo2.jpeg";
import logo3 from "./assets/logo3.jpeg";
import logo4 from "./assets/logo4.jpeg";



const Card = () => {
  return (
    <div className='container'>
        <h2 className='text-center mt-3 '>Bootstarp Card classes</h2>
        <div className='row my-5'>
            {/* ////////////////////////////---------------Image Top card------------------------///////////// */}
            <div className='col-md-3 '>
                <div className='card'>
                    <img className='card-img-top' src={logo2} alt=''></img>
                    <div className='card-body'>
                        <h3 className='card-title'>Duck Image</h3>
                        <p className='card-text'>The ChatGPT is me! I'm a large language model developed by OpenAI called GPT
                            (Generative Pre-trained Transformer), specifically trained for conversational
                            purposes. My purpose is to engage in dialogue, answer questions, provide information,
                            and assist with various tasks to the best of my abilities. Feel free to ask me anything!</p>
                            <button className='btn btn-success'>Rede More</button>
                    </div>
                    
                </div>
            </div>
{/* /////////////////////////-----------------Image Bottom card----------------////////////////// */}
            <div className='col-md-3 '>
                <div className='card'>
                    <div className='card-body'>
                        <h3 className='card-title'>Dog Image</h3>
                        <p className='card-text'>The ChatGPT is me! I'm a large language model developed by OpenAI called GPT
                            (Generative Pre-trained Transformer), specifically trained for conversational
                            purposes. My purpose is to engage in dialogue, answer questions, provide information,
                            and assist with various tasks to the best of my abilities. Feel free to ask me anything!</p>
                            <button className='btn btn-success'>Rede More</button>

                    </div>
                    <img className='card-img-bottom' src={logo3} alt=''></img>

                </div>
            </div>

{/* /////////////////////-----------------------Withoute Image Card--------------------------////////////// */}
            <div className='col-md-3 '>
                <div className='card border-primary text-primary'>
                    {/* <img className='card-img-top' src={logo2} alt=''></img> */}
                    <div className='card-header'>Header Gose Here</div>

                    <div className='card-body'>
                        <h3 className='card-title'>Plane Card</h3>
                        <h5 className='card-subtitle text-muted'>Sub Title</h5>
                        <p className='card-text'>The ChatGPT is me! I'm a large language model developed by OpenAI called GPT
                            (Generative Pre-trained Transformer), specifically trained for conversational
                            purposes. My purpose is to engage in dialogue, answer questions, provide information,
                            and assist with various tasks to the best of my abilities. Feel free to ask me anything!</p>
                            <Link className='card-link ' to='/read'>Read More</Link>
                            <Link className='card-link btn btn-secondary' to='/something'>Read Something</Link>
                    </div>
                    <div className='card-footer'>Footer Gose Here</div>

                </div>
            </div>


{/* /////////////////////----------------------- Image Overlay Card--------------------------////////////// */}
<div className='col-md-3 '>
                <div className='card text-white'>
                    <img className='card-img-top' src={logo4} alt=''></img>
                    <div className='card-img-overlay'>
                        <h3 className='card-title'>Plane Card</h3>
                        <p className='card-text'>The ChatGPT is me! I'm a large language model developed by OpenAI called GPT
                            (Generative Pre-trained Transformer), specifically trained for conversational
                            </p>
                            <button className='btn btn-success'>Rede More</button>
                    </div>
                </div>
            </div>
{/* /////////////////////----------------------- Card with list-Group--------------------------////////////// */}

            <div className='col-md-3 '>
                <div className='card text-white'>
                    <img className='card-img-top' src={logo4} alt=''></img>                    
                    <ul className='list-group'>
                        <li className='list-group-item'>List Group One</li>
                        <li className='list-group-item'>List Group tow</li>
                        <li className='list-group-item'>List Group three</li>
                        <li className='list-group-item'>List Group four</li>
                    </ul>                  
                </div>
            </div>

{/* ////////////////////////////--------------nav Links ---------------//////////// */}
<div className='col-md-3 mt-3 '>
                <div className='card border-primary text-primary  bg-success text-black'>
                    {/* <img className='card-img-top' src={logo2} alt=''></img> */}
                    <div className='card-header'>
                        <ul className='nav nav-pills card-header-pills'>
                            <li className='nav-item '><Link className='nav-link text-white' >Link1</Link></li>
                            <li className='nav-item'><Link className='nav-link text-white'>Link2</Link></li>
                            <li className='nav-item'><Link className='nav-link text-white'>Link3</Link></li>
                            <li className='nav-item'><Link className='nav-link text-white'>Link4</Link></li>
                        </ul>
                    </div>
                    <div className='card-body'>
                        <h3 className='card-title'>Plane Card</h3>
                        <h5 className='card-subtitle text-muted'>Sub Title</h5>
                        <p className='card-text'>The ChatGPT is me! I'm a large language model developed by OpenAI called GPT
                            (Generative Pre-trained Transformer), specifically trained for conversational
                            purposes. </p>                          
                    </div>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Card;
