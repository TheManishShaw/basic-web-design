import React, { useState } from 'react'
import FormInput from './FormInput';
import emailjs from "@emailjs/browser";

const Result = () =>{
  return (
    <p>Your message send sucessfully</p>
  )
}
const Contact = () => {
  const [values, setValues] = useState({
    fullname:"",
    email:"",
    phone:"",
    message:"",
    });
    const inputs = [
      {
        id: 1,
        name: "fullname",
        type: "text",
        placeholder: "Full Name",
        required: true,
        label: "Full Name*",
      },
      {
        id: 2,
        name: "email",
        type: "email",
        placeholder: "example@yourmail.com",
        errorMessage: "It should be a valid email address!",
        label: "Email*",
        required: true,
      },
      {
        id: 3,
        name: "phone",
        type: "text",
        placeholder: "+91 8777780732",
        errorMessage: "It should be a valid number!",
        pattern: "^+?([0-9]{2}))?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$",
        label: "Phone*",
        required: true,
      },
      {
        id: 4,
        name: "message",
        type: "text",
        placeholder: "Write something",
        errorMessage: "Write something",
        label: "Message*",
        required: true,
      },
    ];
    const handleSubmit = (e) =>{
      e.preventDefault();
    }
    const onChange = (e) =>{
        setValues({...values, [e.target.name]:e.target.value});
    }

    const [result, showResult] = useState(false);
 const sendEmail = (e) => {
   e.preventDefault();

   emailjs
     .sendForm(
       "service_czht6ts",
       "template_dq4h1zg",
       e.target,
       "K0eX0YkfwE6JNsQCA"
     )
     .then(
       (result) => {
         console.log(result.text);
       },
       (error) => {
         console.log(error.text);
       }
     );
     e.target.reset();
     showResult(true);
     

 };


  return (
    <section id="contact" className="relative py-15 md:py-[80px] ">
      <div className="container px-4 ">
        <div className="-mx-4 flex flex-wrap items-center ">
          <div className="w-full mb-28 px-4 lg:w-7/12 xl:w-8/12">
            <div className="ud-contact-content-wrapper">
              <div className="ud-contact-title mb-12 lg:mb-[150px]">
                <h2 className="text-[35px] font-semibold pb-7">
                  Lets talk about
                  <br />
                  Love to hear from you!
                </h2>
                <div className="mb-12 flex flex-wrap justify-between lg:mb-0">
                  <div className="mb-8 flex w-[330px] max-w-full">
                    <div className="mr-6 text-[32px] text-primary">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h5 className="mb-6 text-xl font-semibold">Call Us</h5>
                      <p className="text-lg text-body-color font-semibold">
                        <a href="tel:+44 7947772257"> +44 7947772257 </a>
                      </p>
                      <p className="text-lg text-body-color font-semibold">
                        <a href="tel:+91-7777907777">+91-7777907777</a>
                      </p>
                    </div>
                  </div>
                  <div className="mb-8 flex w-[330px] max-w-full">
                    <div className="mr-6 text-[32px] text-primary">
                      <svg
                        width="34"
                        height="25"
                        viewBox="0 0 34 25"
                        className="fill-current"
                      >
                        <path d="M30.5156 0.960938H3.17188C1.42188 0.960938 0 2.38281 0 4.13281V20.9219C0 22.6719 1.42188 24.0938 3.17188 24.0938H30.5156C32.2656 24.0938 33.6875 22.6719 33.6875 20.9219V4.13281C33.6875 2.38281 32.2656 0.960938 30.5156 0.960938ZM30.5156 2.875C30.7891 2.875 31.0078 2.92969 31.2266 3.09375L17.6094 11.3516C17.1172 11.625 16.5703 11.625 16.0781 11.3516L2.46094 3.09375C2.67969 2.98438 2.89844 2.875 3.17188 2.875H30.5156ZM30.5156 22.125H3.17188C2.51562 22.125 1.91406 21.5781 1.91406 20.8672V5.00781L15.0391 12.9922C15.5859 13.3203 16.1875 13.4844 16.7891 13.4844C17.3906 13.4844 17.9922 13.3203 18.5391 12.9922L31.6641 5.00781V20.8672C31.7734 21.5781 31.1719 22.125 30.5156 22.125Z" />
                      </svg>
                    </div>
                    <div>
                      <h5 className="mb-6 text-xl font-semibold">
                        How Can We Help?
                      </h5>
                      <p className="text-lg text-body-color font-semibold">
                        <a href="mailto:sales@techblic.com">
                          sales@techblic.com
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full px-4 lg:w-5/12 xl:w-4/12">
            <div
              className="wow fadeInUp rounded-lg bg-white py-10 px-8  sm:py-12 sm:px-10 md:p-[60px] lg:p-10 lg:py-12 lg:px-10 2xl:p-[60px]"
              data-wow-delay=".2s
              "
            >
              <h3 className="mb-8 text-2xl font-semibold md:text-[26px]">
                Send us a Message
              </h3>
              <form onSubmit={sendEmail} >
                {inputs.map((input) => (
                  <FormInput
                    key={input.id}
                    {...input}
                    value={values[input.name]}
                    onChange={onChange}
                  />
                ))}
                <div className="mb-0">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center rounded bg-primary py-4 px-6 text-base font-medium text-white transition duration-300 ease-in-out hover:bg-dark"
                  >
                    Send Message
                  </button>
                </div>
                <div>{result ? <Result /> : null}</div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 z-[-1] h-1/2 w-full bg-[#f3f4fe] lg:h-[4%] xl:h-1/2">
        <div className="absolute inset-0 bg-[#f3f4fe]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8733.492659373163!2d72.53175672442777!3d23.024457531876713!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e8555282e0cbf%3A0x21347c8e76fbf474!2sTecblic%20Private%20Limited!5e0!3m2!1sen!2sin!4v1651147293578!5m2!1sen!2sin"
            width="100%"
            height="100%"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
}

export default Contact