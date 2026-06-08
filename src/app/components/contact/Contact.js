'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import NextLink from 'next/link';
import { FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { SiUpwork } from 'react-icons/si';

const FormSchema = z.object({
  username: z.string().min(2, "Name must be at least 2 characters").max(45).regex(/^[a-zA-Z\s-]+$/, "Only letters, spaces, hyphens"),
  email: z.string().email("Please enter a valid email"),
  subject: z.string().min(1, "Subject required"),
  phoneNumber: z.string().regex(/^\d+$/, "Digits only").min(10).max(15),
  message: z.string().min(1, "Message required"),
});

const socials = [
  { label: 'GitHub',   href: 'https://github.com/Arisekola177/',                          Icon: FaGithub },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/azeez-saibu-43b554190/',         Icon: FaLinkedinIn },
  { label: 'Twitter',  href: 'https://twitter.com/Harysekola',                             Icon: FaTwitter },
  { label: 'Upwork',   href: 'https://www.upwork.com/freelancers/~013f7ea7fb8e780c46',     Icon: SiUpwork },
];

const Contact = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm({ resolver: zodResolver(FormSchema) });
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (data) => {
    try {
      toast('Sending…');
      setIsLoading(true);
      const formData = new URLSearchParams();
      formData.append("Name", data.username);
      formData.append("Email", data.email);
      formData.append("Phone Number", data.phoneNumber);
      formData.append("Subject", data.subject);
      formData.append("Message", data.message);
      formData.append("_captcha", "false");
      formData.append("_subject", `New Portfolio Message: ${data.subject}`);
      await fetch('https://formsubmit.co/shuaibazeez14@gmail.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: formData,
        mode: 'no-cors',
      });
      toast.success('Message sent!');
      reset();
    } catch (e) {
      toast.error('Something went wrong. Try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="w-full border-t border-inkBorder">
      <div className="max-w-screen-xl mx-auto px-6">

        {/* Section header */}
        <div className="flex items-start gap-6 py-12 border-b border-inkBorder">
          <span className="font-mono text-[11px] text-dusty min-w-[48px]">05</span>
          <span className="font-mono text-[11px] text-dusty uppercase tracking-widest">Contact</span>
        </div>

        {/* Big CTA heading */}
        <div className="py-16 grid grid-cols-1 lgl:grid-cols-[1fr_2fr] gap-12 border-b border-inkBorder">
          <div />
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="font-serif text-[clamp(2.2rem,5vw,4rem)] leading-tight text-bone">
              Have a project in mind?{' '}
              <em className="text-bone/40">Let's build it.</em>
            </h2>
            <p className="font-sans text-[14px] text-dusty mt-6 leading-7 max-w-md">
              I'm currently available for freelance work and full-time remote opportunities. Drop me a message and I'll get back to you within 24 hours.
            </p>
            <div className="flex flex-wrap gap-6 mt-8">
              <a href="mailto:shuaibazeez14@gmail.com" className="font-mono text-[11px] text-bone hover-line uppercase tracking-widest">
                shuaibazeez14@gmail.com
              </a>
            </div>
          </motion.div>
        </div>

        {/* Form + info grid */}
        <div className="py-16 grid grid-cols-1 lgl:grid-cols-[1fr_2fr] gap-12">

          {/* Left: socials */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-8"
          >
            <div>
              <p className="font-mono text-[10px] text-dusty uppercase tracking-widest mb-4">Find me on</p>
              <div className="flex flex-col gap-3">
                {socials.map(({ label, href, Icon }) => (
                  <NextLink key={label} href={href} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-3 group">
                    <Icon className="text-dusty group-hover:text-bone transition-colors" size={14} />
                    <span className="font-mono text-[11px] text-dusty group-hover:text-bone transition-colors uppercase tracking-widest hover-line">
                      {label}
                    </span>
                  </NextLink>
                ))}
              </div>
            </div>

            <div>
              <p className="font-mono text-[10px] text-dusty uppercase tracking-widest mb-2">Based in</p>
              <p className="font-serif text-base text-bone">Lagos, Nigeria</p>
              <p className="font-mono text-[11px] text-dusty mt-1">Open to remote worldwide</p>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.form
            onSubmit={handleSubmit(onSubmit)}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col gap-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col gap-1">
                <label className="font-mono text-[10px] text-dusty uppercase tracking-widest">Name</label>
                <input {...register("username")} type="text" placeholder="Your name" className="contact-input" />
                {errors.username && <span className="font-mono text-[10px] text-red-400">{errors.username.message}</span>}
              </div>
              <div className="flex flex-col gap-1">
                <label className="font-mono text-[10px] text-dusty uppercase tracking-widest">Phone</label>
                <input {...register("phoneNumber")} type="text" placeholder="+234 000 0000" className="contact-input" />
                {errors.phoneNumber && <span className="font-mono text-[10px] text-red-400">{errors.phoneNumber.message}</span>}
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <label className="font-mono text-[10px] text-dusty uppercase tracking-widest">Email</label>
              <input {...register("email")} type="email" placeholder="you@company.com" className="contact-input" />
              {errors.email && <span className="font-mono text-[10px] text-red-400">{errors.email.message}</span>}
            </div>

            <div className="flex flex-col gap-1">
              <label className="font-mono text-[10px] text-dusty uppercase tracking-widest">Subject</label>
              <input {...register("subject")} type="text" placeholder="What's this about?" className="contact-input" />
              {errors.subject && <span className="font-mono text-[10px] text-red-400">{errors.subject.message}</span>}
            </div>

            <div className="flex flex-col gap-1">
              <label className="font-mono text-[10px] text-dusty uppercase tracking-widest">Message</label>
              <textarea {...register("message")} rows={6} placeholder="Tell me about your project…" className="contact-input resize-none" />
              {errors.message && <span className="font-mono text-[10px] text-red-400">{errors.message.message}</span>}
            </div>

            <div>
              <button
                type="submit"
                disabled={isLoading}
                className="font-mono text-[11px] tracking-widest uppercase text-ink bg-bone px-8 py-3.5 hover:bg-bone/80 transition-colors disabled:opacity-50"
              >
                {isLoading ? 'Sending…' : 'Send Message →'}
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
