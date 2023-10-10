import React from 'react';
import { LiaEnvelopeSolid } from 'react-icons/lia';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Toaster, toast } from 'react-hot-toast';
import { FaEnvelope, FaPhone } from 'react-icons/fa';


const Contact = () => {
    const [isLoading, setIsLoading] = useState(false);
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        setIsLoading(true);

        emailjs.sendForm('service_e44vd2w', 'template_xkpaxqd', form.current, 'eHselXqMSy9TYGZe8').then(
            (result) => {
                setIsLoading(false);
                toast.success('Email has been sent successfully!');
                console.log(result);
                
            },
            (error) => {
                setIsLoading(false);
                console.log(error.text);
            }
        );
    };
    return (
        <div><div className='mt-8'>
            <button className='btn btn-md font-bold text-lg rounded-2xl border-emerald-800 hover:bg-violet-800 hover:text-white btn-outline'><LiaEnvelopeSolid className='text-2xl' />Contact</button>
        </div>
            <div className="pt-[60px] pb-[90px] ">

                <h4 className="flex  gap-4 inset-0 text-xl pb-8 text-violet-800 font-semibold" data-aos="fade-left" data-aos-duration="1000"> <FaEnvelope></FaEnvelope>
                    masud.39cu@gmail.com
                </h4>
                <h4 className="flex  gap-4 inset-0 text-xl pb-8 text-violet-800 font-semibold" data-aos="fade-left" data-aos-duration="1000"> <FaPhone/>
                    +8801518372751
                </h4>
                <form ref={form} onSubmit={sendEmail} data-aos="fade-up" data-aos-duration="1000">
                    <div className="flex flex-col lg:flex-row w-full px-8 gap-4">
                        <div className="w-full mb-[34px] ">
                            <label className="block text-sm mb-1  tracking-wider">
                                FULL NAME<span className="text-red-500 text-lg font-semibold">*</span>
                            </label>
                            <input
                                type="text"
                                name="from_name"
                                className="w-full h-14 rounded-lg bg-transparent border border-emerald-800  leading-[30px] tracking-wide text-lg px-3"
                                placeholder="Please type your full name"
                            />
                        </div>

                        <div className="w-full mb-[34px] ">
                            <label className="block text-sm mb-1  tracking-wider">
                                EMAIL<span className="text-red-500 text-lg font-semibold">*</span>
                            </label>
                            <input
                                type="email"
                                name="from_email"
                                className=" w-full h-14 rounded-lg bg-transparent border border-emerald-800  leading-[30px] tracking-wide text-lg p-3"
                                placeholder="Please type your email address"
                            />
                        </div>
                    </div>

                    <div className="w-full mb-[34px] px-8">
                        <label className="block text-sm mb-1  tracking-wider">MESSAGE</label>
                        <textarea
                            name="message"
                            className=" w-full rounded-lg bg-transparent border border-emerald-800  leading-[30px] tracking-wide text-lg p-3"
                            rows="6"
                            placeholder="Write your message here"
                        />
                    </div>
                    <input
                        type="submit"
                        value={isLoading ? 'Sending...' : 'SEND MESSAGE'}
                        className="bg-violet-800 hover:bg-emerald-800 p-3 flex justify-center mx-auto  rounded-2xl cursor-pointer text-white md:font-semibold md:w-[30%] w-[50%]"
                        disabled={isLoading}
                    />
                </form>
            </div>
            <Toaster/>
        </div>
    );
};

export default Contact;