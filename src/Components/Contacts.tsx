import React from "react";
import axios from "axios";
import { TabIndexes } from "../consts";
import { TypeAnimation } from 'react-type-animation';
import { Contact, type ContactType } from "../consts";
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
      const response = await axios.post(import.meta.env.VITE_API, data);
      console.log(response.status);
      toast.open(
        response.statusText, true, 2000,
        { toastPosition: ["toast-end", "toast-top"], toastVariant: "alert-success" }
      );
    } catch (error) {
      toast.open(
        (error as Error).message, true, 2000,
        { toastPosition: ["toast-end", "toast-top"], toastVariant: "alert-error" }
      );
    }
    setIsLoading(false);
    setValue('Name', '');
    setValue('Email', '');
    setValue('Message', '');
  }
  return (
    <React.Fragment >
      <div className="hero bg-base-200 min-h-[100dvh] scroll-smooth transition-all snap-y snap-mandatory" id={TabIndexes[3]} data-aos="zoom-in-up" data-aos-delay='100'>
        <div className="hero bg-base-200 min-h-screen">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold">Contact Me</h1>
              <p className="py-6">
                {<TypeAnimation
                  sequence={['Thank you for coming.', 1000, 'Nice to meet you.', 1000]}
                  wrapper="span"
                  speed={40}
                  style={{ fontSize: '1.2em', display: 'inline-block' }}
                  repeat={Infinity}
                />}
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
                  <textarea className="textarea" id="MessageInput" {...register('Message')} placeholder="write purpose" required disabled={isLoading}></textarea>
                  <button className="btn btn-neutral mt-4 w-80" type="submit" onClick={handleSubmit(contactSubmit)} disabled={isLoading}>
                    {isLoading && <span className="loading loading-dots loading-md text-accent" />}
                    Submit
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