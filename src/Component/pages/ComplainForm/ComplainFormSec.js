import React from "react";
import "./ComplainForm.css";
import { faTimesCircle, faArrowRight ,faArrowLeft} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import ProgressBar from "@ramonak/react-progress-bar";

const ComplainFormSec = () => {
  const cross = <FontAwesomeIcon icon={faTimesCircle} />;
  const rightarrow = <FontAwesomeIcon icon={faArrowRight} />;
  const leftarrow = <FontAwesomeIcon icon={faArrowLeft} />;
  return (
    <div
      style={{ color: "white", textAlign: "initial" }}
      className="container mt-5"
    >
      <h1>অভিযোগ ফরম</h1>
      <ProgressBar completed={63} bgColor="#0ED7A8" className="my-3" />
      <p>জরুরী প্রয়োজনেঃ ০১৬১১ ৮৬০ ৯৯৯ নাম্বারে ফোন দিন ।</p>
      <h5>তুমি যে মাধ্যমে হয়রানি (সাইবার বুলিং) এর শিকার হয়েছে ? *</h5>

      <select class="form-select">
        <option selected>Please select</option>
        <option value="1">Facebook</option>
        <option value="2">Website</option>
        <option value="3">What'sapp</option>
        <option value="3">Messenger</option>
        <option value="3">Instagram</option>
        <option value="3">SMS</option>
        <option value="3">Email</option>
      </select>
      <h5 className="mt-3">{cross}তুমি কি রিপোর্ট করেছ?</h5>
      <div class="form-check">
        <input
          class="form-check-input"
          type="checkbox"
          id="inlineCheckbox1"
          value="option1"
        />
        <label class="form-check-label" for="inlineCheckbox1">
          {" "}
          হ্যাঁ
        </label>
      </div>
      <div class="form-check ">
        <input
          class="form-check-input"
          type="checkbox"
          id="inlineCheckbox2"
          value="option2"
        />
        <label class="form-check-label" for="inlineCheckbox2">
          {" "}
          না
        </label>
      </div>
      <h5 className="mt-3">
        অভিযোগের ভিত্তিতে তোমার কাছে যদি কোন প্রমাণ থাকে ( স্ক্রিনশর্ট, কলরেকর্ড
        ইত্যাদি) এখানে আপলোড করো*
      </h5>
      <input type="file" id="inputGroupFile01" />

      <h5 className="mt-3">অভিযোগের ভিত্তিতে লিংক দাও</h5>
      <input
        type="text"
        class="form-control"
        aria-label="Username"
        aria-describedby="basic-addon1"
      ></input>
      <small>
        <i>
          ধরুন যদি কোন ফেক আইডি আপনাকে হয়রানি করে তাহলে তার লিংকটি এখানে দিন
        </i>
      </small>

      <h5 className="mt-3">তোমার সাথে যা হয়েছে বিস্তারিত বলো *</h5>
      <textarea
        class="form-control"
        id="exampleFormControlTextarea1"
        rows="6"
      ></textarea>

      <h5 className="mt-3">যে আপনাকে হয়রানি করছে তার সম্পর্কে তথ্য দিন</h5>
      <textarea
        class="form-control"
        id="exampleFormControlTextarea1"
        rows="6"
      ></textarea>
      <small>
        <i>
          অভিযুক্ত বাক্তির নাম ,মোবাইল নাম্বার , ঠিকানা ইত্যাদি জানা থাকলে দিন
        </i>
      </small><br></br>

      <Link to="/complainformsec" className="me-4">
        <button className="complain-button">{leftarrow}পিছনে যান </button>
      </Link>
      <Link to="/complainformthird">
        <button className="complain-button">পরবর্তী ধাপ {rightarrow}</button>
      </Link>
    </div>
  );
};
export default ComplainFormSec;
