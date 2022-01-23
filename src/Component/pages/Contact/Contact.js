import React from 'react';
import { Button, Card, Form } from 'react-bootstrap';
import './Contact.css'
const Contact = () => {
    return (
        <div className='bg-col'>
            <div className='row'>
                <div className='col-md-5'>
                    <Card className='card-col'>
                        <Card.Body>
                            <Card.Title>
                                <h4>
                                Contact Form
                                </h4>
                            </Card.Title>
                            <Card.Text>
                                <h6>Contact with  us if you need any kind of help about cyber security or harassment.You can directly contact us or describe your problem in this form. We will contact you as soon as possible.</h6>
                            </Card.Text>
                            <Form className='form-bg'>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>
                                        <h5>
                                            Name
                                        </h5>
                                    </Form.Label>
                                    <Form.Control className='form-col' type="name" placeholder="Enter your name" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>
                                        <h5>
                                            Email Address
                                        </h5>
                                    </Form.Label>
                                    <Form.Control className='form-col' type="email" placeholder="name@example.com" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                    <Form.Label>
                                        <h5>
                                            Describe Your Problem
                                        </h5>
                                    </Form.Label>
                                    
                                    <Form.Control className='form-col' as='textarea'  rows={3} placeholder="Your name and problem should hidden" />
                                </Form.Group>
                                <Button className='btn-col' type="submit">
                                    Submit
                                </Button>
                            </Form>
                        </Card.Body>

                    </Card>
                </div>
                <div className='col-md-5'>
                    <Card className='card-col'>
                        <Card.Body>
                            <Card.Title>
                                <h4>
                                   Location,Number & Mail Address
                                </h4>
                                
    
                            </Card.Title>
                            <Card.Text>
                                <h6>
                                If you have  any kind of problem to contact us form, you can directly contact us via our mail and phone number. We are here to help you anytime. Your confidential information and problems should be hidden from others. So feel free to contact and share your problem with us.
                                </h6>
                            </Card.Text>
                            <Card.Text>
                                <h5>
                                    Location <br />
                                </h5>
                                <h6>
                                    Jessore,Khulna,Bangladesh
                                    
                                </h6>
                                
                               
                                <div className='mapouter'><div className='gmap_canvas'><iframe width="463" height="102" id="gmap_canvas" src="https://maps.google.com/maps?q=East%20Barandi%20Para,jessore&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://123movies-to.org"></a><a href="https://www.embedgooglemap.net">responsive google map</a></div></div>
                            </Card.Text>
                            <Card.Text>
                                <h5>
                                    Phone <br />
                                </h5>
                                <h6>
                                    +8801722769661 
                                   
                                </h6>
                            </Card.Text>
                            <Card.Text>
                                <h5>
                                    Email <br />
                                </h5>
                                <h6>
                                support@bongodemy.com
                                </h6>
                            </Card.Text>
                        </Card.Body>

                    </Card>
                </div>
            </div>
        </div>
    );
};

export default Contact;
