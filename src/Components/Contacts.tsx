import React from "react";
// import axios from "axios";
import { TabIndexes } from "../utils";
// import { TypeAnimation } from 'react-type-animation';
import { Contact, type ContactType, GoogleScript } from "../utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "../Context/Toast/ToastContext";
import { useForm, type SubmitHandler } from "react-hook-form";
const Contacts: React.FC = () => {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const toast = useToast();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors }
  } = useForm<ContactType>({ resolver: zodResolver(Contact) });

  const contactSubmit: SubmitHandler<ContactType> = async (data) => {
    setIsLoading(true);
    try {
      const contactForm = new FormData();
      Object.entries(data).forEach(([k, v]) => {
        contactForm.append(k, v);
        setValue(k as ('Name' | 'Email' | 'Message'), '');
      });

      const { status } = await GoogleScript.post(import.meta.env.VITE_API_ROUTE, contactForm);
      if (status !== 200) throw new Error('An error occured, respnse code:' + status);
      toast.open('Message send successfully.', true, 2000, { toastPosition: ["toast-start", "toast-bottom"], toastVariant: "alert-success" });
    } catch (error) {
      toast.open((error as Error)?.message || 'An error occured', true, 2000, { toastPosition: ["toast-start", "toast-bottom"], toastVariant: "alert-error" });
    }
    setIsLoading(false);
  }
  return (
    <React.Fragment >
      <div className="hero bg-base-200 min-h-[100dvh] scroll-smooth transition-all snap-y snap-mandatory" id={TabIndexes[3]} data-aos="zoom-in-up" data-aos-delay='100'>
        <div className="hero bg-base-200 min-h-screen">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold">Contact Me</h1>
              <p className="p-6">
                Thanks for visiting my portfolio. Drop me a message,I'm always open to new opportunities and collaborations in tech.
              </p>
            </div>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
              <div className="card-body">
                <fieldset className="fieldset">
                  <label className="label" htmlFor="NameInput">
                    Name {errors.Name && (<span className="text-red-500" children={errors.Name.message} />)}
                  </label>
                  <input type="text" className="input" id="NameInput" {...register('Name')} placeholder="your name" required disabled={isLoading} />
                  <label className="label" htmlFor="EmailInput">
                    Email {errors.Email && (<span className="text-red-500" children={errors.Email.message} />)}
                  </label>
                  <input type="text" className="input" id="EmailInput" {...register('Email')} placeholder="your email id" required disabled={isLoading} />
                  <label className="label" htmlFor="MessageInput">
                    Message {errors.Message && (<span className="text-red-500" children={errors.Message.message} />)}
                  </label>
                  <textarea className="textarea" id="MessageInput" {...register('Message')} placeholder="Drop a message" required disabled={isLoading}></textarea>
                  <button className="btn btn-neutral mt-4 w-80 hover:btn-accent" type="submit" onClick={handleSubmit(contactSubmit)} disabled={isLoading}>
                    {isLoading && <span className="loading loading-dots loading-md text-accent" />}
                    Send message
                  </button>
                </fieldset>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment >
  );
}
export default Contacts; 