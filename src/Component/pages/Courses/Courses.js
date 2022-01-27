import React from 'react';
import "./Course.css"
const Courses = () => {
    return (
        <div>
            <div className='d-flex justify-content-between' >
                <div className='text-white my-5 px-3 ' >
                    <h2>Introduction to Cyber Security course</h2>
                    <h6>The demand for a Cyber Security Specialist is growing day by day. There are currently over a million Cyber Security job openings global and demand is greatly outpacing supply which means more opportunity, job security and higher pay for you! By the end of the course, you will not only learn about cyber security but also you are on the way to becoming a cyber security specialist.</h6>
                </div>
                <div className='px-3 course-card'>
                    <div className="card" >
                        <div className="card-body">
                            <h3 className="card-title">TK 2000</h3>
                            <h6 className="card-subtitle mb-2 text-muted"><button type="button" className="btn btn-outline-secondary border border-dark">Register</button></h6>
                            <h6 className="card-text">includes</h6>
                            <li>Begginner</li>
                            <li>
                                Live session</li>
                            <li>0 Lessons</li>
                            <li>Full lifetime access</li>
                            <li>Access on mobile and tv</li>
                            <li>Certificate after completion</li>
                            <li>24 hours Refund Policy</li>


                        </div>
                    </div>
                </div>



            </div>



            <div class="card learn " >
                <h5 class="card-title">What you will learn?</h5>
                <div class="container align-items-start card-body">

                    <li>Secure Lab Setup and Essential Linux system commands.</li>
                    <li >Website penetration testing.</li>
                    <li>System hacking using Metasploit</li>
                    <li>Secure Lab Setup and Essential Linux system commands.</li>
                    <li>Secure Lab Setup and Essential Linux system commands.</li>
                    <li>Secure Lab Setup and Essential Linux system commands.</li>

                </div>

            </div>
            <div className='curriculum'>

                <h2>curriculum for the course</h2></div>
        </div >
    );
};

export default Courses;