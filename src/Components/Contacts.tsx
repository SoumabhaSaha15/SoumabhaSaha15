import useRipple from "use-ripple-hook";
import { type FC, useState } from "react";
import { IoMdSend } from "react-icons/io";
import { serialize } from "object-to-formdata";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "../Context/Toast/ToastContext";
import { useForm, type SubmitHandler } from "react-hook-form";
import { ContactSchema, type ContactType, GoogleScript, TabIndexes } from "../utils";

const Contacts: FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [ripple, event] = useRipple({ timingFunction: 'linear' });
  const toast = useToast();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<ContactType>({ resolver: zodResolver(ContactSchema) });

  const contactSubmit: SubmitHandler<ContactType> = async (data) => {
    setIsLoading(true);
    try {
      const { status } = await GoogleScript.post(import.meta.env.VITE_API_ROUTE,serialize(data));
      if (status !== 200) throw new Error('An error occured, response code:' + status);
      toast.open('Message sent successfully.', true, 2000, { toastPosition: ["toast-start", "toast-bottom"], toastVariant: "alert-success" });
      reset();
    } catch (error) {
      toast.open((error as Error)?.message || 'An error occured', true, 2000, { toastPosition: ["toast-start", "toast-bottom"], toastVariant: "alert-error" });
    }
    setIsLoading(false);
  }

  return (
    <>
      <div className="h-0 bg-base-200" id={TabIndexes[3]}></div>
      <div className="hero bg-base-200 min-h-dvh scroll-smooth transition-all snap-y snap-mandatory" id={TabIndexes[3] + "content"}>
        <div className="hero bg-base-200 min-h-screen px-4 py-8">
          <div className="hero-content flex-col lg:flex-row-reverse w-full max-w-6xl gap-8">
            <div className="text-center lg:text-left lg:flex-1">
              <h1 className="text-4xl sm:text-5xl font-bold text-secondary">Get In Touch</h1>
              <p className="py-6 px-2 sm:px-6">
                Thanks for visiting my portfolio. Drop me a message, I'm always open to new opportunities and collaborations in tech.
              </p>
            </div>
            <div className="card bg-base-100 w-full max-w-sm lg:max-w-md shrink-0 shadow-2xl rounded-2xl hover:scale-110 transition-transform">
              <div className="card-body p-4 sm:p-8">
                <form className="fieldset space-y-4" onSubmit={handleSubmit(contactSubmit)}>

                  <div>
                    {errors.Name && (<span className="">{ }</span>)}
                    <label className="floating-label" htmlFor="NameInput">
                      <span className={errors.Name ? ("text-error text-sm ml-2") : ("")} children={errors.Name ? (errors.Name.message) : ("Name")} />
                      <input
                        type="text"
                        className="validator input input-bordered w-full focus:outline-none focus:ring-0 focus:ring-accent rounded-full"
                        id="NameInput"
                        {...register('Name')}
                        placeholder="Your name"
                        disabled={isLoading}
                        required
                      />
                    </label>
                  </div>

                  <div>
                    <label className="floating-label" htmlFor="EmailInput">
                      <span className={errors.Email ? ("text-error text-sm ml-2") : ("")} children={errors.Email ? (errors.Email.message) : ("Email")} />
                      <input
                        type="email"
                        className="validator input input-bordered w-full focus:outline-none focus:ring-0 focus:ring-accent rounded-full"
                        id="EmailInput"
                        {...register('Email')}
                        placeholder="your.email@example.com"
                        disabled={isLoading}
                        required
                      />
                    </label>
                    {errors.Email && (<span className="validator-hint text-error text-sm ml-2">{errors.Email.message}</span>)}
                  </div>

                  <div>
                    <label className="label" htmlFor="MessageInput">
                      {errors.Message && (<span className="text-error text-sm ml-2">{errors.Message.message}</span>)}
                    </label>
                    <textarea
                      className="validator textarea textarea-bordered w-full min-h-[120px] focus:outline-none focus:ring-0 focus:ring-accent rounded-2xl"
                      id="MessageInput"
                      {...register('Message')}
                      placeholder="Drop a message"
                      required
                      disabled={isLoading}
                    />
                  </div>

                  <button
                    ref={ripple}
                    type="submit"
                    disabled={isLoading}
                    onPointerDown={event}
                    className="btn btn-neutral w-full hover:btn-accent rounded-full"
                    children={isLoading ? (
                      <>
                        <span className="loading loading-dots loading-md text-accent" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send message
                        <IoMdSend size={20}/>
                      </>
                    )}
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contacts;