import React from 'react';
import '../Button/Button.css'
import logo2 from './assets/logo2.jpeg'; 

const VerticalCard = () => {
  return (
    <div className='container my-5'>
        <div className='row my-5'>
            <div className='col-md-7'>
                <div className='card'>
                    <div className='row'>
                        <div className='col-md-4'>
                            <img className='card-img' src={logo2} alt= ''/>
                        </div>
                        <div className='col-md-8'>
                            <div className='card-body'>
                                <h3 className='card-title'>Card Title</h3>
                                <p className='card-text'>The ChatGPT is me! I'm a large language model developed by OpenAI called GPT (Generative Pre-trained Transformer),
                                   specifically trained for conversational purposes. My purpose is to engage in </p> {/* Added class for card text */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default VerticalCard;
