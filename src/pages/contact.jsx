import React, { useState } from "react";
import FullWidthText from "../components/FullWidthText";

import Layout from "../components/Layout";

const stepList = [
  "Start a Conversation about a new business",
  "Tell us more about you. What's your business information",
];
const stepaList = ["General Inquiries", "New Project", "Media"];
const stepbList = ["General Inquiries", "New Project", "Media"];
const stepcList = ["General Inquiries", "New Project", "Media"];

export default function Contact() {
  const [step, setStep] = useState(1);
  const [stepa, setStepa] = useState("");
  const [stepb, setStepb] = useState("");
  const [stepc, setStepc] = useState("");

  const nextStep = () => {
    if (step === 3) {
      setStep(1);
    } else {
      setStep(step + 1);
    }
  };

  const prevStep = () => {
    if (step === 1) {
      setStep(1);
    } else {
      setStep(step - 1);
    }
  };
  return (
    <Layout>
      <div className="w-screen min-h-screen grid grid-cols-1 md:grid-cols-2 gap-8 sunset p-4 md:px-8 text-white dark:text-white pt-16 md:pt-20">
        <div className="">
          <FullWidthText word1="CONTACT" />
        </div>
        <div className="flex flex-col md:flex-row items-end justify-start">
          <div className="flex md:w-1/2 flex-col items-start justify-between">
            <p className="md:text-5xl text-3xl w-11/12">{stepList[step - 1]}</p>
            <div className="w-4/5 md:text-[20vh] text-[10vh] leading-none flex">
              <div className=" md:w-1/3">{step}</div>
              <div className="flex w-1/2">/3</div>
            </div>
          </div>
          <div className="flex md:w-1/2 w-full relative z-10  flex-col items-start justify-between">
            <div className="flex flex-col w-full">
              {step === 1 &&
                stepaList.map((step, ind) => (
                  <button
                    key={ind}
                    onClick={() => setStepa(step)}
                    className="footer-link flex items-center justify-start"
                  >
                    <div
                      className={`w-4 h-4 mr-2 border border-white rounded-full ${
                        stepa === step ? "bg-white" : ""
                      }`}
                    ></div>
                    {step}
                  </button>
                ))}
              {step === 2 && (
                <div>
                  <input
                    className="bg-white/5 p-4 w-full placeholder-white/50 hover:bg-white/10 focus:bg-white/20 transition-all duration-300 ring ring-transparent hover:ring-white/5 focus:ring-white/10 "
                    placeholder="Your Name"
                  />
                  <input
                    className="bg-white/5 mt-8 p-4 w-full placeholder-white/50 hover:bg-white/10 focus:bg-white/20 transition-all duration-300 ring ring-transparent hover:ring-white/5 focus:ring-white/10 "
                    placeholder="Your Company Name"
                  />
                </div>
              )}
            </div>
            <div className="flex w-full items-center justify-between">
              {step > 1 && (
                <button
                  onClick={() => prevStep()}
                  className="btn disabled:bg-white/5 mt-12 px-12"
                >
                  Previous
                </button>
              )}
              <div className=""></div>
              {step < 3 && (
                <button
                  onClick={() => nextStep()}
                  className="btn disabled:bg-white/5 mt-12 px-12"
                >
                  Next
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
