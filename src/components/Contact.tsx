import { useState } from "react";
import emailjs from "emailjs-com"; // Import EmailJS
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { FiSend, FiUser, FiPhone, FiMail, FiMessageSquare } from "react-icons/fi";
import ContactLeft from "./ContactLeft";
import Title from "./Title";
import { FadeIn } from "./FadeIn";
import { useTheme } from "../context/ThemeContext";

// Validation schema
const contactSchema = z.object({
  username: z.string().min(2, "Name must be at least 2 characters"),
  phoneNumber: z.string().min(10, "Phone number must be at least 10 digits"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const { theme } = useTheme();
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  // Handle Form Submission
  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSuccessMsg("");

    try {
      const templateParams = {
        from_name: data.username,
        from_email: data.email,
        phone: data.phoneNumber,
        subject: data.subject,
        message: data.message,
      };

      await emailjs.send(
        "service_xloht2l",
        "template_0nm5grc",
        templateParams,
        "3i3DQCbM9nO5d5f2b"
      );

      setSuccessMsg(`Thank you, ${data.username}! Your message has been sent successfully.`);
      reset();
    } catch (error) {
      console.log("FAILED...", error);
      setSuccessMsg("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className={`w-full py-20 border-b-[1px] ${
      theme === 'dark' ? 'border-b-gray-700' : 'border-b-slate-300'
    }`}>
      <FadeIn>
        <div className="flex justify-center items-center text-center">
          <Title title="CONTACT" des="Contact With Me" />
        </div>
        <div className="w-full">
          <div className="w-full h-auto flex flex-col lgl:flex-row justify-between">
            <ContactLeft />
            <div className={`w-full lgl:w-[60%] h-full py-10 flex flex-col gap-8 p-4 lgl:p-8 rounded-lg ${
              theme === 'dark' 
                ? 'bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne' 
                : 'bg-gradient-to-r from-slate-50 via-slate-100 to-slate-200 shadow-lg shadow-slate-300/50 border border-slate-200'
            }`}>
              <form onSubmit={handleSubmit(onSubmit)} className="w-full flex flex-col gap-6 py-2 lgl:py-5">
                {successMsg && (
                  <div className={`p-4 rounded-lg ${
                    successMsg.includes('Thank you') 
                      ? 'bg-green-100 border border-green-400 text-green-700' 
                      : 'bg-red-100 border border-red-400 text-red-700'
                  }`}>
                    {successMsg}
                  </div>
                )}

                <div className="w-full flex flex-col lgl:flex-row gap-6">
                  <div className="w-full lgl:w-1/2 flex flex-col gap-2">
                    <label className={`text-sm uppercase tracking-wide flex items-center gap-2 ${
                      theme === 'dark' ? 'text-gray-400' : 'text-slate-600'
                    }`}>
                      <FiUser className="text-designColor" />
                      Your Name
                    </label>
                    <div className="relative">
                      <input
                        {...register("username")}
                        className={`w-full h-12 rounded-lg border px-4 pl-10 transition-all duration-300 focus:outline-none focus:ring-2 ${
                          theme === 'dark' 
                            ? 'bg-[#191b1e] border-gray-600 text-lightText focus:ring-designColor focus:border-transparent' 
                            : 'bg-slate-100 border-slate-300 text-slate-800 focus:ring-designColor focus:border-transparent'
                        } ${errors.username ? 'border-red-500' : ''}`}
                        type="text"
                        placeholder="Enter your name"
                      />
                    </div>
                    {errors.username && (
                      <p className="text-red-500 text-sm mt-1">{errors.username.message}</p>
                    )}
                  </div>
                  <div className="w-full lgl:w-1/2 flex flex-col gap-2">
                    <label className={`text-sm uppercase tracking-wide flex items-center gap-2 ${
                      theme === 'dark' ? 'text-gray-400' : 'text-slate-600'
                    }`}>
                      <FiPhone className="text-designColor" />
                      Phone Number
                    </label>
                    <div className="relative">
                      <input
                        {...register("phoneNumber")}
                        className={`w-full h-12 rounded-lg border px-4 pl-10 transition-all duration-300 focus:outline-none focus:ring-2 ${
                          theme === 'dark' 
                            ? 'bg-[#191b1e] border-gray-600 text-lightText focus:ring-designColor focus:border-transparent' 
                            : 'bg-slate-100 border-slate-300 text-slate-800 focus:ring-designColor focus:border-transparent'
                        } ${errors.phoneNumber ? 'border-red-500' : ''}`}
                        type="tel"
                        placeholder="Enter your phone number"
                      />
                    </div>
                    {errors.phoneNumber && (
                      <p className="text-red-500 text-sm mt-1">{errors.phoneNumber.message}</p>
                    )}
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className={`text-sm uppercase tracking-wide flex items-center gap-2 ${
                    theme === 'dark' ? 'text-gray-400' : 'text-slate-600'
                  }`}>
                    <FiMail className="text-designColor" />
                    Email
                  </label>
                  <div className="relative">
                    <input
                      {...register("email")}
                      className={`w-full h-12 rounded-lg border px-4 pl-10 transition-all duration-300 focus:outline-none focus:ring-2 ${
                        theme === 'dark' 
                          ? 'bg-[#191b1e] border-gray-600 text-lightText focus:ring-designColor focus:border-transparent' 
                          : 'bg-slate-100 border-slate-300 text-slate-800 focus:ring-designColor focus:border-transparent'
                      } ${errors.email ? 'border-red-500' : ''}`}
                      type="email"
                      placeholder="Enter your email"
                    />
                  </div>
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                  )}
                </div>

                <div className="flex flex-col gap-2">
                  <label className={`text-sm uppercase tracking-wide flex items-center gap-2 ${
                    theme === 'dark' ? 'text-gray-400' : 'text-slate-600'
                  }`}>
                    <FiMessageSquare className="text-designColor" />
                    Subject
                  </label>
                  <div className="relative">
                    <input
                      {...register("subject")}
                      className={`w-full h-12 rounded-lg border px-4 pl-10 transition-all duration-300 focus:outline-none focus:ring-2 ${
                        theme === 'dark' 
                          ? 'bg-[#191b1e] border-gray-600 text-lightText focus:ring-designColor focus:border-transparent' 
                          : 'bg-slate-100 border-slate-300 text-slate-800 focus:ring-designColor focus:border-transparent'
                      } ${errors.subject ? 'border-red-500' : ''}`}
                      type="text"
                      placeholder="Enter subject"
                    />
                  </div>
                  {errors.subject && (
                    <p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>
                  )}
                </div>

                <div className="flex flex-col gap-2">
                  <label className={`text-sm uppercase tracking-wide flex items-center gap-2 ${
                    theme === 'dark' ? 'text-gray-400' : 'text-slate-600'
                  }`}>
                    <FiMessageSquare className="text-designColor" />
                    Message
                  </label>
                  <div className="relative">
                    <textarea
                      {...register("message")}
                      className={`w-full rounded-lg border px-4 py-3 pl-10 transition-all duration-300 focus:outline-none focus:ring-2 resize-none ${
                        theme === 'dark' 
                          ? 'bg-[#191b1e] border-gray-600 text-lightText focus:ring-designColor focus:border-transparent' 
                          : 'bg-slate-100 border-slate-300 text-slate-800 focus:ring-designColor focus:border-transparent'
                      } ${errors.message ? 'border-red-500' : ''}`}
                      rows={6}
                      placeholder="Enter your message"
                    />
                  </div>
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
                  )}
                </div>

                <div className="w-full">
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className={`w-full h-12 rounded-lg text-base tracking-wider uppercase duration-300 hover:border-[1px] hover:border-designColor border-transparent flex items-center justify-center gap-2 ${
                      theme === 'dark' 
                        ? 'bg-[#141518] text-gray-400 hover:text-white disabled:opacity-50' 
                        : 'bg-slate-300 text-slate-700 hover:text-slate-900 hover:bg-slate-400 disabled:opacity-50'
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <FiSend />
                        Send Message
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
};

export default Contact;
