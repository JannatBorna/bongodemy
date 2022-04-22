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
                <div className='px-3 course-card shadow' style={{ backgroundColor: "#1E2D40" }} >
                    <div className=" " >
                        <div style={{ backgroundColor: "#1E2D40" }} className="card-body bordar-0">
                            <h3 className="card-title text-white">TK 2000</h3>
                            {/* <h6 className="card-subtitle mb-2 text-muted">
                                <button type="button" className="btn btn-outline-secondary border border-dark text-white">Register</button>
                            </h6> */}
                            <h6 className="card-text text-white">includes</h6>
                            <li className='text-white'>Begginner</li>
                            <li className='text-white'>Live session</li>
                            <li className='text-white'>0 Lessons</li>
                            <li className='text-white'>Full lifetime access</li>
                            <li className='text-white'>Access on mobile and tv</li>
                            <li className='text-white'>Certificate after completion</li>
                            <li className='text-white'>24 hours Refund Policy</li>


                        </div>
                    </div>
                </div>



            </div>



            <div class="card learn py-3 shadow" style={{ backgroundColor: "#1E2D40" }} >
                <h5 class="card-title text-white">What you will learn?</h5>
                <div class="container align-items-start">
                    <li className='text-white'>Secure Lab Setup and Essential Linux system commands.</li>
                    <li className='text-white'>Website penetration testing.</li>
                    <li className='text-white'>System hacking using Metasploit</li>
                    <li className='text-white'>Buffer Overflow.</li>
                    <li className='text-white'>Cryptography.</li>
                    <li className='text-white'>Footprinting & Information Gathering.</li>

                </div>

            </div>
            <div style={{ backgroundColor: "#1E2D40" }}  className='curriculum my-5 py-3 '>
                <div class="container">
                    <div class="row justify-content-start">
                        <div class="col-4">
                            <h6 className='text-white'>curriculum for the course</h6>
                            <h5 className='text-white'>Requirments</h5>
                            <h6 className='text-white'>
                                <li>Linux fundamentals</li>
                                <li>Essential networking terms</li>
                                <li>Essential hacking terms</li>
                            </h6>


                        </div>
                        <div class="container">
                            <div class="row justify-content-start">

                                <div class="col-8">
                                    <table class="table  table-bordered container">
                                        <thead className='text-white'>
                                            <tr className='text-white'>

                                                <th scope="col">Week</th>
                                                <th scope="col">Day</th>
                                                <th scope="col">Topic</th>
                                            </tr>
                                        </thead>
                                        <tbody className='text-white'>
                                            <tr className='text-white'>

                                                <td>Week 1</td>
                                                <td>Day 1</td>

                                                <td className='text-white'>
                                                    <li>Introduction to the course</li>
                                                    <li> Introduction to cyber security</li>

                                                    <li> Setting up Environment</li>
                                                    <li>VirtualBox & VMware installation</li>

                                                    <li>Kali Linux Installation</li>

                                                    <li>OWASP Installation</li>


                                                </td>
                                            </tr>
                                            <tr className='text-white'>
                                                <td></td>
                                                <td>Day 2</td>
                                                <td><li>Linux fundamentals.</li>

                                                    <li>Linux Basic Commands.</li> </td>
                                            </tr>
                                            <tr className='text-white'>
                                                <td></td>
                                                <td>Day 3</td>
                                                <td className='text-white'>
                                                    <li> Essential networking terms.  </li>

                                                    <li> Essential hacking terms.  </li>

                                                    <li> Additional Kali tools to install.  </li>


                                                    <li> Changing MAC address.</li>



                                                </td>
                                            </tr>
                                            <tr className='text-white'>

                                                <td>Week 2</td>
                                                <td>Day 4</td>

                                                <td>
                                                    <li>Nmap Basic to Advance.</li>
                                                </td>
                                            </tr>
                                            <tr className='text-white'>
                                                <td></td>
                                                <td>Day 5</td>
                                                <td>Test 1

                                                </td>
                                            </tr>
                                            <tr className='text-white'>
                                                <td></td>
                                                <td>Day 6</td>
                                                <td><li> HTTP request</li>

                                                    <li> HTTP response.</li>

                                                    <li>Burp Suite configuration.</li>

                                                    <li> Editing packets in Burp Suite. </li>                             </td>
                                            </tr>
                                            <tr className='text-white'>

                                                <td>Week 3</td>
                                                <td>Day 7</td>

                                                <td>
                                                    <li> Data Tampering</li>

                                                    <li> Broken Authentication vulnerability</li>
                                                </td>
                                            </tr>
                                            <tr className='text-white'>
                                                <td></td>
                                                <td>Day 8</td>
                                                <td><li>Sensitive Data Exposure</li>

                                                    <li> XML vulnerability</li>

                                                </td>
                                            </tr>
                                            <tr className='text-white'>
                                                <td></td>
                                                <td>Day 9</td>
                                                <td><li>Whatweb and Dirb </li>

                                                    <li> Password recovery attack </li>
                                                    <li>Burp Suite login Brute Force </li>
                                                    <li>Hydra login Brute Force</li>

                                                </td>
                                            </tr>
                                            <tr className='text-white'>

                                                <td>Week 4</td>
                                                <td>Day 10</td>

                                                <td className='text-white'>
                                                    <li> Anonymity</li>

                                                    <li> Tor Network</li>

                                                    <li> Deep & Dark Web</li>

                                                    <li> Broken Authentication vulnerability</li>
                                                </td>
                                            </tr>
                                            <tr className='text-white'>

                                                <td>Week 5</td>
                                                <td>Day 11</td>

                                                <td className='text-white'>
                                                    <li>Injection attacks</li>

                                                    <li> Simple command injection </li>

                                                    <li>
                                                        Exploiting command injection </li>

                                                    <li> vulnerability</li>
                                                </td>
                                            </tr>
                                            <tr className='text-white'>
                                                <td></td>
                                                <td>Day 12</td>
                                                <td>Test 2

                                                </td>
                                            </tr>




                                        </tbody>
                                    </table>

                                </div>
                                <div className="container">
                                    <div className="row justify-content-start">
                                        <div className='col-4 text-white'>
                                            <h2>student feedback</h2>
                                            <h1>0</h1>
                                            <h6>average rating</h6>
                                        </div>
                                    </div>
                                </div>

                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Courses;