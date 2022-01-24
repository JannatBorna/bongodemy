import React from 'react';
import { Container } from 'react-bootstrap';
import './Resources.css';

const Resources = () => {
return (
    <section id="resources">
            <Container>
                <div>
                    <div className='article my-5'>
                    <button to="" className='mt-4 link_section'>Article</button>
                    </div>

                    <div className='article'>
                        <button to="" className='mt-4 link_section'>E-Book</button>
                    </div>
                </div>


            </Container>
    </section>
        
    );
};

export default Resources;