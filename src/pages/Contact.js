/*  Project: Revel Fitness.
    Developer: Sahan K. Karunaratne.
    Keywords: React, Firebase, Stripe, EmailJS, Google Maps. */

import {React, useEffect, useRef, useState} from 'react';
import {useNavigate} from "react-router-dom"
import emailjs from '@emailjs/browser';
import {RxReload} from "react-icons/rx";
import Swal from 'sweetalert2';

export const Contact = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    const form = useRef();

    const Navigate = useNavigate();

    const [Phone, SetPhone] = useState("");
    const [Error, SetError] = useState("");
    const [Email, SetEmail] = useState("");
    const [Message, SetMessage] = useState("");

    const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ojth2gu', 'template_30n0jup', form.current, '01qBOJYjvbhEtC0y6')
      .then((result) => {
          console.log(result.text);
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Message Sent.',
            showConfirmButton: false,
            timer: 3000
          });window.location.reload(false);
      }, (error) => {
          console.log(error.text);
          Swal.fire({
            position: 'top-end',
            icon: 'error',
            title: 'Not Sent.',
            showConfirmButton: false,
            timer: 3000
          });
      });
  };

  const CheckPhone= (e) => {
    var Regex = /^[0-9]{9}$/;
    var PhoneValue = e.target.value;
    SetPhone(PhoneValue)
    if (Phone.match(Regex)){
        SetError("");
    } else {
        SetError("Enter a valid phone number. Ex: 0777123456");
    }
};

const CheckEmail = (e) => {
  var Regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  var EmailValue = e.target.value;
  SetEmail(EmailValue)
  if (Email.match(Regex)){
      SetMessage("");
  } else {
      SetMessage("Invalid email address.");
  }
};

  return (
    <div className="py-10 flex flex-col items-center bg-gradient-to-r from-cyan-950 to-gray-900">
        <div className="h-auto w-[600px] flex justify-center items-center bg-gray-900 border-[1px] border-slate-400 rounded-lg">
            <div className="flex flex-col items-center">
                <p className="text-xl text-amber-500 font-bold font-headFont uppercase mt-5">Contact Us</p>
                <div className="h-1 w-36 bg-amber-500"/>
                <div className="flex flex-col gap-2">
                    <form ref={form} onSubmit={sendEmail}>
                    <label className="flex text-emerald-700 uppercase mt-10 mb-2">Name</label>
                    <input className="h-10 w-[300px] bg-transparent text-slate-200 outline-none" type="text" name="user_name" placeholder="John Doe"/>
                    <div className="h-[2px] w-[300px] bg-emerald-700"/>
                    <label className="flex text-emerald-700 uppercase mt-5 mb-2">Email</label>
                    <input className="h-10 w-[300px] bg-transparent text-slate-200 outline-none" type="email" name="user_email" placeholder="johndoe@gmail.com"
                    value={Email} onChange={CheckEmail}/>
                    <div className="h-[2px] w-[300px] bg-emerald-700"/>
                    <p className="w-[300px] py-1 text-sm text-red-700" type={Message}>{Message}</p>
                    <label className="flex text-emerald-700 uppercase mt-5 mb-2">Phone</label>
                    <input className="h-10 w-[300px] bg-transparent text-slate-200 outline-none appearance-none hover:appearance-none [appearance:textfield]
                    [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none" type="number" pattern="[1-9]{1}[0-9]{9}" name="user_phone"
                    placeholder="0777123456" value={Phone} onChange={CheckPhone}/>
                    <div className="h-[2px] w-[300px] bg-emerald-700"/>
                    <p className="w-[300px] py-1 text-sm text-red-700" type={Error}>{Error}</p>
                    <label className="flex flex-col text-emerald-700 uppercase mt-5 mb-4">Message</label>
                    <textarea className="flex flex-col h-[100px] w-[400px] bg-transparent text-slate-200 outline-none" name="message"
                    placeholder="Tell us how we can improve. Comment all good and bad. This will help us to improve our service and provide you with more convenient service.
                    We always appriciate your ideas and thoughts."/>
                    <div className="h-[2px] w-[400px] bg-emerald-700"/>
                    <ul className="flex justify-center items-center">
                        <li><RxReload className="h-6 w-6 text-slate-400 mt-3 cursor-pointer hover:text-white hover:text-amber-500" onClick={() => window.location.reload(false)}/></li>
                        <li><button className="h-8 w-24 bg-emerald-700 text-gray-900 font-bold mt-10 mb-5 rounded-xl ml-[304px] hover:bg-amber-500" type="submit" value="Send">Send</button></li>
                    </ul>
                    </form>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Contact;