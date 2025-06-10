import { useState } from "react";
import contactPhoto from "../assets/sparkle-bg.png";
import { Button } from "./Button";
import emailjs from "emailjs-com"

interface FormData {
  name: string;
  email: string;
  message: string;
}
export const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .send(
        "service_kxgqag8",    
        "template_7y3ho88",  
        {...formData},
        "6DIU29r_7C2eR9KTi"    
      )
      .then(() => {
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        console.error("FAILED...", error);
        alert("Oops! Failed to send message.");
      });
  };


  return (
    <main
      className="min-h-screen flex flex-col items-center justify-evenly"
      style={{
        backgroundImage: `url(${contactPhoto})`,
        backgroundSize: "cover",
      }}
    >
      <div className="flex flex-col justify-between items-center h-30 max-w-150 text-center mt-30">
        <h1 className="text-4xl font-bold">CONTACT</h1>
        <span>
          Feel free to Contact me by submitting the form below and I will get
          back to you as soon as possible
        </span>
      </div>
      <form 
      onSubmit={handleOnSubmit}
      className="flex flex-col bg-gray-100 min-w-3xl p-4 rounded-md my-20">
        <div className="flex flex-col m-4">
          <label htmlFor="name" className="my-2">
            Name
          </label>
          <input
            onChange={(e) => {
              setFormData({ ...formData, name: e.target.value });
            }}
            id="name"
            type="text"
            value={formData.name}
            placeholder="Enter Your Name"
            className="bg-gray-200 w-full rounded-md h-10 p-2"
          />
        </div>
        <div className="flex flex-col m-4">
          <label htmlFor="email" className="my-2">
            Email
          </label>
          <input
            onChange={(e) => {
              setFormData({ ...formData, email: e.target.value });
            }}
            id="email"
            type="email"
            value={formData.email}
            placeholder="Enter Your Email"
            className="bg-gray-200 w-full rounded-md h-10 p-2"
          />
        </div>
        <div className="flex flex-col m-4">
          <label htmlFor="message" className="my-2">
            Message
          </label>
          <textarea
            onChange={(e) => {
              setFormData({ ...formData, message: e.target.value });
            }}
            id="message"
            value={formData.message}
            placeholder="Enter Your Message"
            className="bg-gray-200 w-full rounded-md h-50 p-2 resize-none"
          />
        </div>
        <div className="flex justify-end m-4">
          <Button type="submit" padding="py-3 px-15">SUBMIT</Button>
        </div>
      </form>
    </main>
  );
};
