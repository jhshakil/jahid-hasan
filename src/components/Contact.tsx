"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Mail, MapPin, Phone } from "lucide-react";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { TProfile } from "@/types";
import { envConfig } from "@/config/envConfig";
import { toast } from "sonner";

const contactFormSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  subject: z.string().min(5, {
    message: "Subject must be at least 5 characters.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

type Props = {
  profileData: TProfile;
};

const Contact = ({ profileData }: Props) => {
  const { email, address, phoneNumber } = profileData || {};
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  function onSubmit(data: ContactFormValues) {
    console.log(data);

    fetch(`${envConfig.baseUrl}/contact`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok " + response.statusText);
        }
        return response.json();
      })
      .then(() => {
        toast("Email Send");
        form.reset();
      })
      .catch(() => {
        toast("Fail to send email");
      });
  }

  return (
    <section className="w-full px-4 py-16 text-gray-200 md:py-24" id="contact">
      <div className="container mx-auto max-w-6xl">
        <div className="grid gap-8 md:grid-cols-2">
          {/* Left Column - Contact Information */}
          <div className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-sm font-light">Contact Us</h2>
              <h3 className="text-4xl font-bold text-white md:text-5xl">
                Get In Touch
              </h3>
            </div>

            <p className="max-w-md text-sm text-gray-400">
              Have questions, feedback, or just want to say hello? We’re here to
              help and would love to hear from you.
            </p>

            <div className="space-y-4 pt-4">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-gray-400" />
                <div>
                  <span className="text-sm font-light">Email:</span>
                  <a
                    href={`mailto:${email}`}
                    className="ml-2 text-sm text-gray-400 hover:text-blue-400"
                  >
                    {email}
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-gray-400" />
                <div>
                  <span className="text-sm font-light">Address:</span>
                  <span className="ml-2 text-sm text-gray-400">{address}</span>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-gray-400" />
                <div>
                  <span className="text-sm font-light">Mobile:</span>
                  <span className="ml-2 text-sm text-gray-400">
                    {phoneNumber}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="space-y-4">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-4"
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-200">Name</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Your name"
                          {...field}
                          className="border-gray-700 bg-[#1B2631] text-gray-200 placeholder:text-gray-500 focus:border-blue-400"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-200">Email</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Your email"
                          {...field}
                          className="border-gray-700 bg-[#1B2631] text-gray-200 placeholder:text-gray-500 focus:border-blue-400"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-200">Subject</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Your subject"
                          {...field}
                          className="border-gray-700 bg-[#1B2631] text-gray-200 placeholder:text-gray-500 focus:border-blue-400"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-200">Message</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Your message"
                          {...field}
                          className="min-h-[160px] border-gray-700 bg-[#1B2631] text-gray-200 placeholder:text-gray-500 focus:border-blue-400"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="flex space-x-4 pt-4">
                  <Button
                    type="submit"
                    className="bg-[#517C96] text-white hover:bg-[#416379]"
                  >
                    Submit
                  </Button>
                  <Button
                    type="reset"
                    variant="outline"
                    onClick={() => form.reset()}
                    className="border-gray-700 text-gray-200"
                  >
                    Reset
                  </Button>
                </div>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
