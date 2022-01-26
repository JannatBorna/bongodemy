import React from 'react';
import { Container } from 'react-bootstrap';
import './Resources.css';


const Resources = () => {

return (
    <section id="resources">
            <Container>
          
                <div>
                    <div className='article my-5'>
                    <button to="" className='mt-4 resources_text'>Article</button>
                    </div>

                    <div className='article'>
                    <button to="" className='mt-4 resources_text'>E-Book</button>
                    </div>
                </div>


            </Container>
    </section>
        
    );
};

export default Resources;