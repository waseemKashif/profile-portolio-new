"use client";
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const ContactMeSection = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .max(15, "Must be 15 characters or less")
        .min(3, "Must be 3 characters")
        .required("Name is Required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      message: Yup.string()
        .required("Message is Required")
        .min(15, "must be 15 char or more"),
    }),
    onSubmit: async (values, { resetForm }) => {
      try {
        const response = await fetch("/api/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        });

        if (response.ok) {
          alert("Message sent successfully!");
          resetForm();
        } else {
          alert("Failed to send the message. Please try again.");
        }
      } catch (error) {
        console.error("Error sending message:", error);
        alert("An error occurred. Please try again later.");
      }
    },
  });

  return (
    <div className="flex flex-col gap-x-16 gap-y-8 justify-between px-2 pb-12  md:px-10 text-gray-200">
      <form onSubmit={formik.handleSubmit}>
        <h2 className="md:text-[40px] text-3xl md:leading-[61px] leading-[50px]  font-semibold max-w-[506px] pb-2  md:pb-7 tracking-tight">
          I Would Love To Hear From You, Get in touch 👋
        </h2>
        <div className="flex flex-col gap-y-1  md:gap-y-4">
          <div className="pb-2">
            <label
              htmlFor="name"
              className="block text-base font-medium text-gray-400 pb-1  "
            >
              Your name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="appearance-none text-[#334052] text-sm block w-full px-3 py-2.5 outline-[#E5E6E5] border border-[#E5E6E5]  rounded-md shadow-sm focus:outline-none focus:ring-[#4146B8] focus:border-[#4146B8]"
              placeholder="First Name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
            />
            {formik.errors.name ? (
              <span className=" mt-1 text-red-500 font-light text-base">
                {formik.errors.name}{" "}
              </span>
            ) : null}
          </div>
          <div className="pb-2">
            <label
              htmlFor="email"
              className="block text-base font-medium text-gray-400 pb-1  "
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="appearance-none text-[#334052] text-sm  block w-full px-3 py-2.5 outline-[#E5E6E5] border border-[#E5E6E5]  rounded-md shadow-sm focus:outline-none focus:ring-[#4146B8] focus:border-[#4146B8]"
              placeholder="Email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {formik.errors.email ? (
              <p className="pt-1 text-red-500 font-light text-sm">
                {formik.errors.email}{" "}
              </p>
            ) : null}
          </div>
          <div className="pb-2">
            <label
              htmlFor="message"
              className=" text-base font-medium text-gray-400 pb-1 flex items-center justify-between"
            >
              Message{" "}
              {formik.errors.message ? (
                <p className="pl-2 text-red-500 font-light text-sm">
                  {formik.errors.message}{" "}
                </p>
              ) : null}
            </label>
            <textarea
              rows={8}
              id="message"
              className="appearance-none text-[#334052] text-sm block w-full  outline-[#E5E6E5] border border-[#E5E6E5]  rounded-md shadow-sm focus:outline-none focus:ring-[#4146B8] focus:border-[#4146B8] px-3 py-1"
              placeholder="Leave us a message"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.message}
            />
          </div>
          <button
            type="submit"
            className=" bg-indigo-700 hover:bg-indigo-500 text-white rounded-lg w-full px-4 py-2"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactMeSection;
