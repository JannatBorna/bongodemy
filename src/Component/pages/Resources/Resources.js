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
                    <Link to="" className=' link_section'><button className='button_section mt-4'>Article</button></Link>
                    </div>

                    <div className='article'>
                        <Link to="" className='link_section '><button className='button_section mt-4'>E-Book</button></Link>
                    </div>
                </div>
        </Container>
    </section>
        
    );
};

export default Resources;            