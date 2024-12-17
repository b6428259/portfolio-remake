'use client';

import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { toast } from 'react-hot-toast';
import emailjs from '@emailjs/browser';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';
import { personalInfo } from '@/lib/constants';

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Section animation variants
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  // Heading animation variants
  const headingVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  // Form container variants
  const containerVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  // Contact info container variants
  const infoContainerVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    try {
      setIsSubmitting(true);
      const result = await emailjs.sendForm(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        formRef.current,
        'YOUR_PUBLIC_KEY'
      );

      if (result.text === 'OK') {
        toast.success('Message sent successfully!');
        formRef.current.reset();
      }
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Input field animation
  const inputVariants = {
    focus: { scale: 1.02, transition: { duration: 0.2 } },
  };

  return (
    <section id="contact" className="py-20">
      <motion.div
        className="container mx-auto px-4 sm:px-6 lg:px-8"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div
          variants={headingVariants}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Get In Touch
            </h2>
            <p className="text-muted-foreground">
              Have a question or want to work together? Feel free to reach out!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              variants={infoContainerVariants}
              className="space-y-6"
            >
              <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
              <div className="space-y-4">
                <ContactItem
                  icon={HiMail}
                  label="Email"
                  value={personalInfo.email}
                  href={`mailto:${personalInfo.email}`}
                />
                <ContactItem
                  icon={FaGithub}
                  label="GitHub"
                  value="GitHub Profile"
                  href={personalInfo.github}
                />
                <ContactItem
                  icon={FaLinkedin}
                  label="LinkedIn"
                  value="LinkedIn Profile"
                  href={personalInfo.linkedin}
                />
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={containerVariants}>
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                <motion.div
                  whileFocus="focus"
                  variants={inputVariants}
                >
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-2 rounded-lg border bg-background border-border 
                      focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
                  />
                </motion.div>

                <motion.div
                  whileFocus="focus"
                  variants={inputVariants}
                >
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-2 rounded-lg border bg-background border-border 
                      focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
                  />
                </motion.div>

                <motion.div
                  whileFocus="focus"
                  variants={inputVariants}
                >
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    className="w-full px-4 py-2 rounded-lg border bg-background border-border 
                      focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300 resize-none"
                  />
                </motion.div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-8 py-3 rounded-lg bg-primary text-primary-foreground font-medium 
                    hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="inline-block"
                    >
                      ⭐
                    </motion.div>
                  ) : (
                    'Send Message'
                  )}
                </motion.button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

interface ContactItemProps {
  icon: React.ElementType;
  label: string;
  value: string;
  href: string;
}

function ContactItem({ icon: Icon, label, value, href }: ContactItemProps) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ x: 5 }}
      className="flex items-center space-x-3 text-muted-foreground hover:text-foreground transition-colors"
    >
      <motion.div
        whileHover={{ rotate: 15 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <Icon className="w-5 h-5" />
      </motion.div>
      <div>
        <p className="font-medium">{label}</p>
        <p className="text-sm">{value}</p>
      </div>
    </motion.a>
  );
}