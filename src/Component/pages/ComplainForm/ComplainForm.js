import React from 'react';
import './ComplainForm.css';
import ProgressBar from "@ramonak/react-progress-bar";
import {faArrowRight} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {Link} from 'react-router-dom';

const ComplainForm=()=>{
    const rightarrow=<FontAwesomeIcon icon={faArrowRight} />



    return(
        <>
        <div style={{color:'white'}} className='container mt-5 complainForm'>
        <h1 >অভিযোগ ফরম</h1>
        <p>জরুরী প্রয়োজনেঃ ০১৬১১ ৮৬০ ৯৯৯ নাম্বারে ফোন দিন ।</p>
        <ProgressBar completed={33} bgColor='#0ED7A8' className='my-3'/>
        <p># অভিযোগ করার পূর্বে নিচের বিষয় গুলো সম্পর্কে জানুন । <br/>
            * আপনার অভিযোগ করার পূর্বে চেষ্টা করবেন কিছু তথ্য অ্যাড করতে । যেমন ( কোন বাক্তি আপনাকে নিয়ে অশ্লীল বক্তব্য করছে । 
            স্কিনশর্ট বা সে বেক্তির আইডি এর লিংক অবশ্যই আপনাকে আমাদের কাছে পাঠাতে হবে ।<br/>

        # অভিযোগ ফরম সম্পর্কেঃ<br/>
        আমরা আপনার করা অভিযোগ টি বাংলাদেশ ডিজিটাল নিরাপরত্তা আইন অনুযায়ী দেখবো এবং প্রাথমিক ভাবে আমরা রিভিউ করে আমাদের সাইবার এক্সপার্ট দিয়ে সমাধান 
        করার চেষ্টা করবো যদি গুরুতর ঘটনা ঘটে সে ক্ষেত্রে তা পুলিশের নিকট প্রেরণ করবো ।<br/>
        #আমরা শুধু মাত্র এই ওয়েব সাইটের মাধ্যমে তাদের ওয়েব সাইট গ্রহন করবো যাদের বয়স ১৩-১৯ বছর<br/>
        # আপনার বেক্তিগত তথ্যঃ<br/>
        আপনি আমাদের এই ফরমে যে তথ্য গুলো সাবমিট করবেন আমরা তা অবশ্যই অবশ্যই গোপন রাখব এবং আপনার অনুমতি ব্যাতিত আমরা আপনার তথ্য
        কোথাও পাবলিশ করবো না ।<br/>
        আপনার মোবাইল নাম্বার খোলা রাখবেন । প্রয়োজনে আপনার সাথে যোগাযোগ করা হবে<br/>
        অভিযোগ করার পূর্বে প্রয়োজনে 01611860999 এই নাম্বারে ফোন দিয়ে কথা বলে নিতে পারেন।</p>

        <Link className='complain-button' to='/complainform'>পরবর্তী ধাপ {rightarrow} </Link>

        </div>
       
        </>
    )
}

export default ComplainForm;