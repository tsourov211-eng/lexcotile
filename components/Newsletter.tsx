'use client';

import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
    }
  };

  return (
    <section id="email-signup" className="py-8 px-4 bg-white">
      <div className="max-w-[1200px] mx-auto">
        <div
          className="p-8 md:p-10 border border-[#e49649] bg-white bg-no-repeat bg-right-top flex flex-col md:flex-row items-center justify-between gap-6"
          style={{
            backgroundImage:
              'url(https://www.lexcotile.com/wp-content/themes/lexco/images/bg-email-signup.jpg)',
          }}
        >
          {/* Text Left */}
          <div className="max-w-xl">
            <h3 className="font-roboto font-light text-[20px] text-[#5b4b3f] uppercase tracking-normal mb-1.5">
              Stay Connected
            </h3>
            <p className="font-roboto text-[13px] text-[#333333] leading-relaxed">
              Sign up to receive special offers, event invites and tile trend updates.
            </p>
          </div>

          {/* Form Right */}
          <div className="w-full md:w-auto">
            {submitted ? (
              <div className="text-[#e3903f] font-roboto font-medium text-[14px]">
                ✓ Thank you for subscribing to Kate-Lo Tile &amp; Stone updates!
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex w-full md:w-[380px] shadow-sm">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email*"
                  className="flex-1 px-3.5 py-2 text-[13px] font-roboto text-[#333333] border border-[#dcdcde] border-r-0 bg-white focus:outline-none focus:border-[#e3903f] h-[38px]"
                />
                <button
                  type="submit"
                  className="bg-[#dcdcde] hover:bg-[#77777b] text-[#5b4b3f] hover:text-white px-5 h-[38px] text-[13px] font-roboto font-medium uppercase tracking-wider transition-colors duration-200 flex items-center gap-1.5"
                >
                  <span>Submit</span>
                  <ArrowRight size={14} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
