import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Resources.css';

const Resources = () => {
return (
    <section id="resources">
            <Container>
                <div>
                    <div className='article my-5'>
                    <Link to="" className='mt-4 link_section'><span className='button_section'>Article</span></Link>
                    </div>

                    <div className='article'>
                        <Link to="" className='mt-5 link_section'><span className='button_section'>E-Book</span></Link>
                    </div>
                </div>


            </Container>
    </section>
        
    );
};

export default Resources;