import React from 'react';
import logo2 from './assets/logo2.jpeg'; 

const CardGroup = () => {
  return (
    <div className='container mt-5'>
        <div className='row py-3'>
            <div className='col'>
                <div className='row row-cols-1 row-cols-md-2 g-4'>
                    <div className='card'>
                        <img className='card-img' src={logo2} alt='Duck Image' /> 
                        <div className='card-body'>
                            <h3 className='card-title'>Duck Image</h3>
                            <p className='card-text'>The ChatGPT is me! I'm a large language model developed by OpenAI called GPT (Generative Pre-trained Transformer),
                                specifically trained for conversational purposes. My purpose is to engage in </p>
                        </div>
                    </div>
                    <div className='card'>
                        <img className='card-img' src={logo2} alt='Duck Image' /> 
                        <div className='card-body'>
                            <h3 className='card-title'>Duck Image</h3>
                            <p className='card-text'>The ChatGPT is me! I'm a large language model developed by OpenAI called GPT (Generative Pre-trained Transformer),
                                specifically trained for conversational purposes. My purpose is to engage in </p>
                        </div>
                    </div>
                    <div className='card'>
                        <img className='card-img' src={logo2} alt='Duck Image' /> 
                        <div className='card-body'>
                            <h3 className='card-title'>Duck Image</h3>
                            <p className='card-text'>The ChatGPT is me! I'm a large language model developed by OpenAI called GPT (Generative Pre-trained Transformer),
                                specifically trained for conversational purposes. My purpose is to engage in </p>
                        </div>
                    </div>
                    <div className='card'>
                        <img className='card-img' src={logo2} alt='Duck Image' /> 
                        <div className='card-body'>
                            <h3 className='card-title'>Duck Image</h3>
                            <p className='card-text'>The ChatGPT is me! I'm a large language model developed by OpenAI called GPT (Generative Pre-trained Transformer),
                                specifically trained for conversational purposes. My purpose is to engage in </p>
                        </div>
                    </div>
                    <div className='card'>
                        <img className='card-img' src={logo2} alt='Duck Image' />
                        <div className='card-body'>
                            <h3 className='card-title'>Duck Image</h3>
                            <p className='card-text'>The ChatGPT is me! I'm a large language model developed by OpenAI called GPT (Generative Pre-trained Transformer),
                                specifically trained for conversational purposes. My purpose is to engage in </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>      
    </div>
  );
}

export default CardGroup;
