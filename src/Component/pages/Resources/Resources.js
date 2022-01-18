import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Resources.css';

const Resources = () => {
return (
    <section id="resources">
        <div className="contact_section">
            <Container>
                <div>
                    <div className='article my-5'>
                        <Link to=""><Button className='mt-4 link_section'><span>Article</span></Button></Link>
                    </div>

                    <div className='article'>
                        <Link to="" className='mt-5 link_section'><span className='button_section mt-5'>E-Book</span></Link>
                    </div>
                </div>


            </Container>
        </div>
    </section>
        
    );
};

export default Resources;