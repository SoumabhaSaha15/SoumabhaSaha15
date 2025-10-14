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
    reset,
    formState: { errors }
  } = useForm<ContactType>({ resolver: zodResolver(Contact) });

  const contactSubmit: SubmitHandler<ContactType> = async (data) => {
    setIsLoading(true);
    try {
      const contactForm = new FormData();
      Object.entries(data).forEach(([key, value]) => contactForm.append(key, value));
      const { status } = await GoogleScript.post(import.meta.env.VITE_API_ROUTE, contactForm);
      if (status !== 200) throw new Error('An error occured, response code:' + status);
      toast.open('Message sent successfully.', true, 2000, { toastPosition: ["toast-start", "toast-bottom"], toastVariant: "alert-success" });
      reset();
    } catch (error) {
      toast.open((error as Error)?.message || 'An error occured', true, 2000, { toastPosition: ["toast-start", "toast-bottom"], toastVariant: "alert-error" });
    }
    setIsLoading(false);
  }

  return (
    <React.Fragment>
      <div className="hero bg-base-200 min-h-[100dvh] scroll-smooth transition-all snap-y snap-mandatory" id={TabIndexes[3]} data-aos="zoom-in-up" data-aos-delay='100'>
        <div className="hero bg-base-200 min-h-screen px-4 py-8">
          <div className="hero-content flex-col lg:flex-row-reverse w-full max-w-6xl gap-8">
            <div className="text-center lg:text-left lg:flex-1">
              <h1 className="text-4xl sm:text-5xl font-bold text-secondary">Get In Touch</h1>
              <p className="py-6 px-2 sm:px-6">
                Thanks for visiting my portfolio. Drop me a message, I'm always open to new opportunities and collaborations in tech.
              </p>
            </div>
            <div className="card bg-base-100 w-full max-w-sm lg:max-w-md shrink-0 shadow-2xl">
              <div className="card-body p-4 sm:p-8">
                <form className="fieldset space-y-4" onSubmit={handleSubmit(contactSubmit)}>
                  <div>
                    <label className="label" htmlFor="NameInput">
                      <span className="label-text">Name</span>
                      {errors.Name && (<span className="text-error text-sm ml-2">{errors.Name.message}</span>)}
                    </label>
                    <input 
                      type="text" 
                      className="input input-bordered w-full" 
                      id="NameInput" 
                      {...register('Name')} 
                      placeholder="Your name" 
                      required 
                      disabled={isLoading} 
                    />
                  </div>

                  <div>
                    <label className="label" htmlFor="EmailInput">
                      <span className="label-text">Email</span>
                      {errors.Email && (<span className="text-error text-sm ml-2">{errors.Email.message}</span>)}
                    </label>
                    <input 
                      type="email" 
                      className="input input-bordered w-full" 
                      id="EmailInput" 
                      {...register('Email')} 
                      placeholder="your.email@example.com" 
                      required 
                      disabled={isLoading} 
                    />
                  </div>

                  <div>
                    <label className="label" htmlFor="MessageInput">
                      <span className="label-text">Message</span>
                      {errors.Message && (<span className="text-error text-sm ml-2">{errors.Message.message}</span>)}
                    </label>
                    <textarea 
                      className="textarea textarea-bordered w-full min-h-[120px]" 
                      id="MessageInput" 
                      {...register('Message')} 
                      placeholder="Drop a message" 
                      required 
                      disabled={isLoading}
                    />
                  </div>

                  <button 
                    className="btn btn-neutral w-full hover:btn-accent" 
                    type="submit" 
                    disabled={isLoading}
                  >
                    {isLoading && <span className="loading loading-dots loading-md text-accent" />}
                    Send message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Contacts;