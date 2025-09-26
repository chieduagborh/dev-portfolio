"use client";
import { useForm, ValidationError } from "@formspree/react";
export default function ContactForm() {
  const [state, handleSubmit] = useForm("xnnbealw");
  if (state.succeeded) {
    return (
      <p className="text-center">
        Message received. I'll reply as soon as I can
      </p>
    );
  }
  return (
    <form
      onSubmit={handleSubmit}
      className={`grid grid-cols-1 mx-auto gap-10 md:w-[60%]`}
    >
      <div className="flex gap-x-6">
        <div className="relative md:w-[50%]">
          <label htmlFor="name" className="">
            Your name *
          </label>
          <input
            id="name"
            name="name"
            required
            className="block w-full bg-transparent outline-none border-b py-2"
            placeholder="Enter your name"
          />
          <ValidationError prefix="Name" field="name" errors={state.errors} />
        </div>

        <div className="relative md:w-[50%]">
          <label htmlFor="email" className="text-sm">
            Your email *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="block w-full bg-transparent outline-none border-b py-2"
            placeholder="Enter your email"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>
      </div>

      <div className="relative md:col-span-2">
        <label htmlFor="message" className="text-sm">
          Your message *
        </label>
        <textarea
          id="message"
          name="message"
          rows={3}
          required
          className="block w-full md:w-[95%] bg-transparent outline-none border-b py-3"
          placeholder="Write your message here..."
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
      </div>

      <div className="md:col-span-2 text-center">
        <button
          type="submit"
          disabled={state.submitting}
          className="px-6 py-3 rounded-full border disabled:opacity-60 w-[90%] md:w-[25%] cursor-pointer flex gap-x-4 text-xl justify-center mx-auto"
        >
          {state.submitting ? "Sending…" : "Send"}
          <img src="/assets/icon-send.svg" alt="send icon" />
        </button>
        <ValidationError errors={state.errors} />
      </div>
    </form>
  );
}
