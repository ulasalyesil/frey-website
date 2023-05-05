import { useState } from "react";
import { Toaster, toast } from "sonner";
import { motion } from "framer-motion";
import Button from "./Button";
import plane from "../assets/icons/paper-plane.svg";

export default function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [validationError, setValidationError] = useState("");

  // submit form data to Airtable
  const BASE_ID = process.env.REACT_APP_BASE_ID;
  const TABLE_ID = process.env.REACT_APP_TABLE_ID;
  const TOKEN = process.env.REACT_APP_ACCESS_TOKEN;
  const URL = `https://api.airtable.com/v0/${BASE_ID}/${TABLE_ID}`;

  const handleSubmit = (event) => {
    event.preventDefault();

    // validate email
    if (!validateEmail(email)) {
      setValidationError("Please enter a valid email address.");
      return;
    }

    fetch(URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ fields: { email: email } }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        setSubmitted(true);
      })
      .catch((error) => {
        console.error("Error submitting form:", error);
      });
  };

  const validateEmail = (email) => {
    // source: https://stackoverflow.com/a/46181/4082526
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setValidationError("");
  };

  return (
    <>
      {!submitted ? (
        <form
          className="flex flex-col items-center justify-center gap-4"
          onSubmit={handleSubmit}
        >
          <div className="flex p-3 bg-black rounded-full shadow-xl relative">
            <input
              type="email"
              placeholder="Email"
              className="rounded-full p-3 h-8 w-72 sm:h-11 sm:w-80 focus:outline-none"
              value={email}
              onChange={handleEmailChange}
            />
            <button
              type="submit"
              className="flex w-14 h-14 sm:w-11 sm:h-11 bg-black border-2 border-white rounded-full items-center justify-center absolute self-center right-0 sm:right-3 shadow-lg"
            >
              <img src={plane} alt="send icon" />
            </button>
          </div>
          <Toaster theme="dark" position="top-right" />
          <Button
            label={"Join the waitlist"}
            buttonStyle={"primaryLong"}
            type={"submit"}
            onClick={() =>
              toast.success(
                "You have successfully joined our waitlist. We'll be in touch soon."
              )
            }
          />
          {validationError && (
            <p className="text-red-500 text-sm">{validationError}</p>
          )}
        </form>
      ) : (
        <motion.div
          className="flex flex-col items-center justify-center gap-4 bg-black/80 backdrop-blur-md text-white p-24 rounded-2xl absolute z-20 shadow-2xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-3xl font-bold mb-2">Thanks for signing up!</h1>
          <p className="text-lg">We'll be in touch soon.</p>
        </motion.div>
      )}
    </>
  );
}
