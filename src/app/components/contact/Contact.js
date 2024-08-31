'use client';
import { useState } from 'react';
import Title from '../layouts/Title';
import ContactLeft from './ContactLeft';
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const FormSchema = z.object({
  username: z
    .string()
    .min(2, "Full name must be at least 2 characters")
    .max(45, "Full name must be less than 45 characters")
    .regex(/^[a-zA-Z\s-]+$/, "Only alphabets, spaces, and hyphens are allowed"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(1, "Message cannot be empty"),
  phoneNumber: z
    .string()
    .regex(/^\d+$/, "Phone number must contain only digits")
    .min(10, "Phone number must be at least 10 digits")
    .max(15, "Phone number must be less than 15 digits"),
  message: z
    .string()
    .min(1, "Message cannot be empty"),
});

const Contact = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    resolver: zodResolver(FormSchema)
  });

  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (data) => {
    try {
      toast('Sending, Please wait.....')
      setIsLoading(true);
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast.success('Message sent successfully!');
        reset();
      } else {
        toast.error('Failed to send message. Please try again later.');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      toast.error('An error occurred. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="w-full py-20 border-b-[1px] border-b-black">
      <div className="flex justify-center items-center text-center">
        <Title title="CONTACT" des="Contact Me" />
      </div>
      <div className="w-full">
        <div className="w-full h-auto flex flex-col lgl:flex-row justify-between">
          <ContactLeft />
          <div className="w-full lgl:w-[60%] h-full py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] flex flex-col gap-8 p-4 lgl:p-8 rounded-lg shadow-shadowOne">
            <form onSubmit={handleSubmit(onSubmit)} className="w-full flex flex-col gap-4 lgl:gap-6 py-2 lgl:py-5">
              <div className="relative w-full flex flex-col lgl:flex-row gap-10">
                <div className="relative w-full lgl:w-1/2 flex flex-col gap-4">
                  <p className="text-sm text-gray-400 uppercase tracking-wide">Your name</p>
                  <input
                    type="text"
                    {...register("username")}
                    className='contactInput'
                  />
                  {errors.username && (
                    <div className="absolute left-0 top-full mt-1 text-red-500 text-xs">
                      {errors.username.message}
                    </div>
                  )}
                </div>
                <div className="relative w-full lgl:w-1/2 flex flex-col gap-4">
                  <p className="text-sm text-gray-400 uppercase tracking-wide">Phone Number</p>
                  <input
                    {...register("phoneNumber")}
                    type="text"
                    className='contactInput'
                  />
                  {errors.phoneNumber && (
                    <div className="absolute left-0 top-full mt-1 text-red-500 text-xs">
                      {errors.phoneNumber.message}
                    </div>
                  )}
                </div>
              </div>
              <div className="relative flex flex-col gap-4">
                <p className="text-sm text-gray-400 uppercase tracking-wide">Email</p>
                <input
                  {...register("email")}
                  type="email"
                  className='contactInput'
                />
                {errors.email && (
                  <div className="absolute left-0 top-full mt-1 text-red-500 text-xs">
                    {errors.email.message}
                  </div>
                )}
              </div>
              <div className="relative flex flex-col gap-4">
                <p className="text-sm text-gray-400 uppercase tracking-wide">Subject</p>
                <input
                  {...register("subject")}
                  type="text"
                  className='contactInput'
                />
                {errors.subject && (
                  <div className="absolute left-0 top-full mt-1 text-red-500 text-xs">
                    {errors.subject.message}
                  </div>
                )}
              </div>
              <div className="relative flex flex-col gap-4">
                <p className="text-sm text-gray-400 uppercase tracking-wide">Message</p>
                <textarea
                  {...register("message")}
                  cols="30"
                  rows="8"
                  className='contactTextArea'
                ></textarea>
                {errors.message && (
                  <div className="absolute left-0 top-full mt-1 text-red-500 text-xs">
                    {errors.message.message}
                  </div>
                )}
              </div>
              <div className="w-full">
                <button
                  type="submit"
                  className="w-full h-12 bg-[#141518] rounded-lg text-base text-gray-400 tracking-wider uppercase hover:text-white duration-300 hover:border-[1px] hover:border-designColor border-transparent"
                >
                  {isLoading ? 'Sending...' : 'Send Message'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
