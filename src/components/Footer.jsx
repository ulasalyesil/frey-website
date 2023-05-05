import logo from "../assets/images/logo-footer.svg";
import Button from "./Button";
import globalConsts from "../globalConsts.json";

const formURL = globalConsts.urls.waitlistForm;
const twitter = globalConsts.urls.twitter;
const mail = globalConsts.urls.email;
const privacy = globalConsts.urls.privacy;
const terms = globalConsts.urls.terms;

export default function Footer() {
  return (
    <div className="mt-16 sm:mt-32 w-full flex flex-col items-center">
      <div className="flex flex-col rounded-0 sm:m-auto items-center gap-6 w-full max-w-[1200px] sm:rounded-2xl py-12 bg-neutral-100">
        <p className="font-medium text-neutral-500 text-xl">
          Do you want to learn more?
        </p>
        <a href={formURL} target="_blank" rel="noreferrer">
          <Button label={"Join the waitlist"} buttonStyle={"primaryLong"} />
        </a>
      </div> 

      <div className="flex justify-center sm:justify-between items-center w-full max-w-[1200px] p-11">
        <div className="flex flex-col items-center sm:items-end sm:flex-row gap-4">
          <img src={logo} className="w-32" alt="frey logo" />
          <p className="text-sm text-neutral-400">All Rights Reserved. 2023</p>
        </div>
        <ol className="gap-8 hidden sm:flex">
          <li>
            <a
              href={twitter}
              target="_blank"
              rel="noreferrer"
              className="font-medium text-neutral-400"
            >
              Twitter
            </a>
          </li>
          <li>
            <a
              href={mail}
              target="_blank"
              rel="noreferrer"
              className="font-medium text-neutral-400"
            >
              Contact Us
            </a>
          </li>
          <li>
            <a
              href={privacy}
              target="_blank"
              rel="noreferrer"
              className="font-medium text-neutral-400"
            >
              Privacy Policy
            </a>
          </li>
          <li>
            <a
              href={terms}
              target="_blank"
              rel="noreferrer"
              className="font-medium text-neutral-400"
            >
              Terms of Use
            </a>
          </li>
        </ol>
      </div>
    </div>
  );
}
