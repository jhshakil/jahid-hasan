"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Add your form submission logic here
    setTimeout(() => setIsSubmitting(false), 1000);
  };

  return (
    <section className="py-20" id="contact">
      <h2 className="text-2xl font-bold mb-8 text-center">Get In Touch</h2>
      <div className="max-w-xl mx-auto">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <Input
              placeholder="Name"
              required
              className="bg-[#232730] border-none"
            />
            <Input
              type="email"
              placeholder="Email"
              required
              className="bg-[#232730] border-none"
            />
          </div>
          <Input
            placeholder="Subject"
            required
            className="bg-[#232730] border-none"
          />
          <Textarea
            placeholder="Message"
            required
            className="bg-[#232730] border-none min-h-[150px]"
          />
          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? "Sending..." : "Send Message"}
          </Button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
