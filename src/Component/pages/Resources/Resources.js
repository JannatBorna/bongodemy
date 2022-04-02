import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import './Resources.css';



const Resources = () => {
 

return (
    <section id="resources">
            <Container>
          
                <div>
                    <div className='article my-5'>
                    <Link  to="/comingPage" className='resources_text'>Article</Link>
                    </div>

                <div className='article mb-5'>
                    <Link to="/comingPage" className='resources_text'>E-Book</Link>
                    </div>
                </div>

            </Container>
    </section>
        
    );
};

export default Resources;