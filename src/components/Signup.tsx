'use client';

import React, { useState, useEffect } from "react";
import { Link2, ChevronRight } from 'lucide-react';

type FormData = {
  name: string;
  email: string;
  company: string;
  eventInterest: string;
  phone: string;
  attendees: string;
  agreed: boolean;
};

type Step = {
  id: keyof FormData;
  question: string;
  type: string;
  placeholder: string;
};

const SHEETDB_API_URL = 'https://sheetdb.io/api/v1/5v6e41htqrlbj';

let dbSheet: FormData[] = [];

export default function RequestDemo() {
  const [showSuccess, setShowSuccess] = useState(false);
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isDuplicate, setDuplicate] = useState(false);
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [typedText, setTypedText] = useState('');
  const welcomeText = "Hello! Welcome to Eventify's Event request form";

  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    eventInterest: '',
    phone: '',
    attendees: '',
    agreed: false
  });

  const steps: Step[] = [
    { id: 'email', question: 'What is your email address?', type: 'email', placeholder: 'Enter your email' },
    { id: 'name', question: "What's your full name?", type: 'text', placeholder: 'Enter your name' },
    { id: 'company', question: 'Which company or organization do you represent?', type: 'text', placeholder: 'Enter company name' },
    { id: 'eventInterest', question: 'What kind of event are you interested in?', type: 'text', placeholder: 'Enter event type (e.g., conference, workshop)' },
    { id: 'phone', question: "Can we have your contact number?", type: 'tel', placeholder: 'Enter your phone number' },
    { id: 'attendees', question: 'How many attendees are you expecting?', type: 'number', placeholder: 'Enter number of attendees' },
    { id: 'agreed', question: 'Please agree to our terms and conditions to proceed.', type: 'checkbox', placeholder: '' }
  ];

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= welcomeText.length) {
        setTypedText(welcomeText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      company: '',
      eventInterest: '',
      phone: '',
      attendees: '',
      agreed: false
    });
    setCurrentStepIndex(0);
  };

  const duplicateEntry = () => {
    for (const entry of dbSheet) {
      if (entry.email === formData.email) {
        setDuplicate(true);
        setIsValidEmail(true);
        return false;
      }
    }
    return true;
  };

  const validEmail = () => {
    const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    const isValid = emailPattern.test(formData.email);
    setIsValidEmail(isValid);
    return isValid;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement> | boolean, field: keyof FormData) => {
    if (typeof e === 'boolean') {
      setFormData(prev => ({ ...prev, [field]: e }));
    } else {
      setFormData(prev => ({ ...prev, [field]: e.target.value }));
      if (field === 'email') {
        setDuplicate(false);
        setIsValidEmail(true);
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (currentStepIndex < steps.length - 1) {
      if (currentStepIndex === 0 && !validEmail()) {
        return;
      }
      setCurrentStepIndex(prev => prev + 1);
    } else {
      if (formData.name && formData.email && validEmail()) {
        if (duplicateEntry()) {
          try {
            const response = await fetch(SHEETDB_API_URL, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({ data: [formData] })
            });

            if (response.ok) {
              dbSheet.push(formData);
              setShowSuccess(true);
              resetForm();
              setTimeout(() => {
                setShowSuccess(false);
              }, 3000);
            } else {
              console.error('Failed to submit form data.');
            }
          } catch (error) {
            console.error('Error:', error);
          }
        }
      }
    }
  };

  const renderInput = (step: Step) => {
    if (step.type === 'checkbox') {
      return (
        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            id="terms"
            checked={formData.agreed}
            onChange={(e) => handleInputChange(e.target.checked, 'agreed')}
            className="rounded border-gray-300 text-green-600 shadow-sm focus:border-green-300 focus:ring focus:ring-green-200 focus:ring-opacity-50"
          />
          <label htmlFor="terms" className="text-sm text-zinc-400">
            I agree to the{" "}
            <a href="#" className="text-green-500 hover:underline">
              terms and conditions
            </a>
          </label>
        </div>
      );
    }

    return (
      <div className="flex items-center space-x-2 text-zinc-400">
        <ChevronRight className="h-4 w-4" />
        <span>~</span>
        <input
          type={step.type}
          value={formData[step.id].toString()}
          onChange={(e) => handleInputChange(e, step.id)}
          className="bg-transparent border-none focus:outline-none text-zinc-100 flex-1 font-mono"
          placeholder={step.placeholder}
          required
        />
      </div>
    );
  };

  const CustomButton: React.FC<{
    type?: 'button' | 'submit' | 'reset';
    onClick?: (e: React.FormEvent) => Promise<void>;
    disabled?: boolean;
    children: React.ReactNode;
  }> = ({ type = 'button', onClick, disabled = false, children }) => {
    return (
      <button
        type={type}
        onClick={onClick}
        disabled={disabled}
        className="w-full bg-gradient-to-r from-blue-400 to-blue-600 hover:from-blue-500 hover:to-blue-700 focus:outline-none focus:ring-offset-2 focus:ring-blue-500 transform hover:scale-35 hover:shadow-lg group text-white py-2 px-8 rounded disabled:opacity-50 disabled:cursor-not-allowed  transition-colors duration-200 ease-in-out "
      >
        {children}
      </button>
    );
  };

  const currentStep = steps[currentStepIndex];

  return (
    <div className="min-h-screen bg-slate-900 text-white p-24">
      <div id="stars"></div>
      
      <section className="body-font relative ">
        <div className="container mx-auto">
          <div className="flex justify-center overflow-hidden">
            <div className="container flex justify-center">
              <div className="w-full md:w-3/4">
                <div className="flex flex-wrap w-full py-5 md:py-28 relative">
                  <div className="text-center md:pl-20 relative z-10 w-full">
                    <h2 className="text-2xl md:text-6xl lg:ml-[-50px] text-white font-medium title-font mb-2 text-animation">
                      Request Demo_
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="container mx-auto h-[400px] flex flex-col justify-center items-center">
            <div className="lg:w-1/2 md:w-2/3 mx-auto px-5 ">
              <div className="w-full bg-slate-900/50 backdrop-blur-xl rounded-lg shadow-xl overflow-hidden py-20">
              <div className="flex space-x-2 px-6 mt-[-20px] mb-8">
                  <div className="h-3 w-3 rounded-full bg-red-500" />
                  <div className="h-3 w-3 rounded-full bg-yellow-500" />
                  <div className="h-3 w-3 rounded-full bg-green-500" />
                </div>
                <div className="flex items-center px-4 py-2 pb-6 bg-slate-900/50 ">
                  <div className="flex-1 px-2 text-sm text-zinc-400 font-mono">
                    Eventify - Make Your Event Engaging and Memorable!
                  </div>
                  <Link2 className="h-4 w-4 text-zinc-400 hover:text-zinc-100" />
                </div>

                <form onSubmit={handleSubmit} className="px-6 pt-4 pb-6 space-y-6">
                  {showSuccess && (
                    <p className="text-green-400">request submitted successfully!</p>
                  )}

                  {!showSuccess && (
                    <>
                      <p className="text-zinc-400 font-mono text-sm">{typedText} <Link2 className="inline h-5 w-5"/></p>
                      <div>
                        <h2 className="text-md font-mono ">{currentStep.question}</h2>
                        <div className="mt-4 mb-6">
                          {renderInput(currentStep)}
                        </div>
                      </div>
                      <CustomButton
                        type={currentStepIndex === steps.length - 1 ? 'submit' : 'button'}
                        onClick={handleSubmit}
                        disabled={currentStep.id === 'agreed' && !formData.agreed}
                      >
                        {currentStepIndex === steps.length - 1 ? 'Submit' : 'Next'}
                      </CustomButton>
                    </>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
