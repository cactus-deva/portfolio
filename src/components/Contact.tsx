import { useState } from "react";
import { Button } from "./Button";

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
  
  const handleOnSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      return window.alert("Please input all fields before submit");
    }
    window.alert("Thank you for submit. This is demo website only.")
    setFormData({
      name: "",
      email: "",
      message: ""
    })
  };

  return (
    <main
      className="min-h-screen flex flex-col items-center justify-center"
      data-aos="fade-up"
    >
      <div className="flex flex-col justify-around items-center h-30 max-w-150 text-center mt-30 px-20">
        <h1 className="text-lg md:text-4xl font-bold">CONTACT</h1>
        <span className="text-sm md:text-lg">
          Feel free to Contact me by submitting the form below and I will get
          back to you as soon as possible
        </span>
      </div>
      <form
        onSubmit={handleOnSubmit}
        className="flex flex-col bg-gray-100 w-2/3 p-4 rounded-md my-20 mx-auto text-xs md:text-lg"
      >
        <div className="flex flex-col m-1 md:m-4">
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
        <div className="flex flex-col m-1 md:m-4">
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
        <div className="flex flex-col m-1 md:m-4">
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

        <div className="flex justify-center my-4">
          <div
            id="recaptcha-container"
            className="my-4 mx-auto"
          ></div>
        </div>
        <div className="flex justify-end m-1 md:m-4">
          <Button type="submit" padding="py-2 md:py-3 px-5 md:px-15">
            SUBMIT
          </Button>
        </div>
      </form>
    </main>
  );
};
