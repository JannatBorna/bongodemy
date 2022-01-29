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
                            <h6 className="card-subtitle mb-2 text-muted"><button type="button" className="btn btn-outline-secondary border border-dark">Register</button>
                            </h6>
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



            <div class="card learn py-3" >
                <h5 class="card-title">What you will learn?</h5>
                <div class="container align-items-start">
                    <li>Secure Lab Setup and Essential Linux system commands.</li>
                    <li >Website penetration testing.</li>
                    <li>System hacking using Metasploit</li>
                    <li>Buffer Overflow.</li>
                    <li>Cryptography.</li>
                    <li>Footprinting & Information Gathering.</li>

                </div>

            </div>
            <div className='curriculum my-5 py-3 '>
                <div class="container">
                    <div class="row justify-content-start">
                        <div class="col-4">
                            <h6>curriculum for the course</h6>
                            <h5>Requirments</h5>
                            <h6 className=''>
                                <li>Linux fundamentals</li>
                                <li>Essential networking terms</li>
                                <li>Essential hacking terms</li>
                            </h6>


                        </div>
                        <div class="container">
                            <div class="row justify-content-start">

                                <div class="col-8">
                                    <table class="table  table-bordered container">
                                        <thead>
                                            <tr>

                                                <th scope="col">Week</th>
                                                <th scope="col">Day</th>
                                                <th scope="col">Topic</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>

                                                <td>Week 1</td>
                                                <td>Day 1</td>

                                                <td>
                                                    <li>Introduction to the course</li>
                                                    <li> Introduction to cyber security</li>

                                                    <li> Setting up Environment</li>
                                                    <li>VirtualBox & VMware installation</li>

                                                    <li>Kali Linux Installation</li>

                                                    <li>OWASP Installation</li>


                                                </td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>Day 2</td>
                                                <td><li>Linux fundamentals.</li>

                                                    <li>Linux Basic Commands.</li> </td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>Day 3</td>
                                                <td>
                                                    <li> Essential networking terms.  </li>

                                                    <li> Essential hacking terms.  </li>

                                                    <li> Additional Kali tools to install.  </li>


                                                    <li> Changing MAC address.</li>



                                                </td>
                                            </tr>
                                            <tr>

                                                <td>Week 2</td>
                                                <td>Day 4</td>

                                                <td>
                                                    <li>Nmap Basic to Advance.</li>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>Day 5</td>
                                                <td>Test 1

                                                </td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>Day 6</td>
                                                <td><li> HTTP request</li>

                                                    <li> HTTP response.</li>

                                                    <li>Burp Suite configuration.</li>

                                                    <li> Editing packets in Burp Suite. </li>                             </td>
                                            </tr>
                                            <tr>

                                                <td>Week 3</td>
                                                <td>Day 7</td>

                                                <td>
                                                    <li> Data Tampering</li>

                                                    <li> Broken Authentication vulnerability</li>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>Day 8</td>
                                                <td><li>Sensitive Data Exposure</li>

                                                    <li> XML vulnerability</li>

                                                </td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>Day 9</td>
                                                <td><li>Whatweb and Dirb </li>

                                                    <li> Password recovery attack </li>
                                                    <li>Burp Suite login Brute Force </li>
                                                    <li>Hydra login Brute Force</li>

                                                </td>
                                            </tr>
                                            <tr>

                                                <td>Week 4</td>
                                                <td>Day 10</td>

                                                <td>
                                                    <li> Anonymity</li>

                                                    <li> Tor Network</li>

                                                    <li> Deep & Dark Web</li>

                                                    <li> Broken Authentication vulnerability</li>
                                                </td>
                                            </tr>
                                            <tr>

                                                <td>Week 5</td>
                                                <td>Day 11</td>

                                                <td>
                                                    <li>Injection attacks</li>

                                                    <li> Simple command injection </li>

                                                    <li>
                                                        Exploiting command injection </li>

                                                    <li> vulnerability</li>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>Day 12</td>
                                                <td>Test 2

                                                </td>
                                            </tr>




                                        </tbody>
                                    </table></div></div></div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Courses;