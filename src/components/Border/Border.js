import React from 'react';
import '../Button/Button.css';

const Border = () => {
  return (
    <div className='container mb-5'>
        <div className='row my-5'>
            <div className='col-md-4 mx-auto '>
                <div id='box' className='border border shadow-none p-5'>
                  The ChatGPT is me! I'm a large language model developed by OpenAI called GPT
                  Generative Pre-trained Transformer, specifically trained for conversational
                  purposes. My purpose is to engage in dialogue, answer questions, provide information,
                  and assist with various tasks to the best of my abilities. Feel free to ask me anything!
                </div>
            </div>
        </div>      
    </div>
     )
}
export default Border;
