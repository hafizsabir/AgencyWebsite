import { useState } from "react";
import emailjs from "emailjs-com"; // Import EmailJS
import ContactLeft from "./ContactLeft";
import Title from "./Title";
import { FadeIn } from "./FadeIn";

const Contact = () => {
  const [username, setUsername] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  // Email Validation
  const emailValidation = (email: string) => {
    return String(email)
      .toLowerCase()
      .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
  };

  // Handle Form Submission
  const handleSend = (e: any) => {
    e.preventDefault();

    if (username === "") {
      setErrMsg("Username is required!");
      return;
    }
    if (phoneNumber === "") {
      setErrMsg("Phone number is required!");
      return;
    }
    if (email === "") {
      setErrMsg("Please provide your Email!");
      return;
    }
    if (!emailValidation(email)) {
      setErrMsg("Provide a valid Email!");
      return;
    }
    if (subject === "") {
      setErrMsg("Please provide a Subject!");
      return;
    }
    if (message === "") {
      setErrMsg("Message is required!");
      return;
    }

    // Send Email using EmailJS
    const templateParams = {
      from_name: username,
      from_email: email,
      phone: phoneNumber,
      subject: subject,
      message: message,
    };

    emailjs
      .send(
        "service_xloht2l", // Replace with your actual Service ID
        "template_0nm5grc", // Replace with your actual Template ID
        templateParams,
        "3i3DQCbM9nO5d5f2b" // Replace with your actual Public Key
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setSuccessMsg(`Thank you, ${username}! Your message has been sent successfully.`);
          setErrMsg("");
          setUsername("");
          setPhoneNumber("");
          setEmail("");
          setSubject("");
          setMessage("");
        },
        (error) => {
          console.log("FAILED...", error);
          setErrMsg("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <section id="contact" className="w-full py-20 border-b-[1px] border-b-gray-700">
      <FadeIn>
        <div className="flex justify-center items-center text-center">
          <Title title="CONTACT" des="Contact With Me" />
        </div>
        <div className="w-full">
          <div className="w-full h-auto flex flex-col lgl:flex-row justify-between">
            <ContactLeft />
            <div className="w-full lgl:w-[60%] h-full py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] flex flex-col gap-8 p-4 lgl:p-8 rounded-lg shadow-shadowOne">
              <form onSubmit={handleSend} className="w-full flex flex-col gap-4 lgl:gap-6 py-2 lgl:py-5">
                {errMsg && <p className="text-red-500">{errMsg}</p>}
                {successMsg && <p className="text-green-500">{successMsg}</p>}

                <div className="w-full flex flex-col lgl:flex-row gap-10">
                  <div className="w-full lgl:w-1/2 flex flex-col gap-4">
                    <p className="text-sm text-gray-400 uppercase tracking-wide">Your Name</p>
                    <input
                      onChange={(e) => setUsername(e.target.value)}
                      value={username}
                      className="contactInput"
                      type="text"
                      required
                    />
                  </div>
                  <div className="w-full lgl:w-1/2 flex flex-col gap-4">
                    <p className="text-sm text-gray-400 uppercase tracking-wide">Phone Number</p>
                    <input
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      value={phoneNumber}
                      className="contactInput"
                      type="text"
                      required
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-4">
                  <p className="text-sm text-gray-400 uppercase tracking-wide">Email</p>
                  <input
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    className="contactInput"
                    type="email"
                    required
                  />
                </div>

                <div className="flex flex-col gap-4">
                  <p className="text-sm text-gray-400 uppercase tracking-wide">Subject</p>
                  <input
                    onChange={(e) => setSubject(e.target.value)}
                    value={subject}
                    className="contactInput"
                    type="text"
                    required
                  />
                </div>

                <div className="flex flex-col gap-4">
                  <p className="text-sm text-gray-400 uppercase tracking-wide">Message</p>
                  <textarea
                    onChange={(e) => setMessage(e.target.value)}
                    value={message}
                    className="contactTextArea"
                    cols={30}
                    rows={8}
                    required
                  ></textarea>
                </div>

                <div className="w-full">
                  <button type="submit" className="w-full h-12 bg-[#141518] rounded-lg text-base text-gray-400 tracking-wider uppercase hover:text-white duration-300 hover:border-[1px] hover:border-designColor border-transparent">
                    Send Message
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
