"use client";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Building2, Clock, Mail, Phone } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { connectUs } from "@/components/data/siteData";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import { useState } from "react";

// Updated Schema
const formSchema = z.object({
  name: z.string().min(2).max(255),
  grade: z.string(),
  subject: z.string(),
  email: z.string().email(),
  referral: z.string(),
  message: z.string(),
});

export const ContactSection = () => {
  const [loading, setLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      grade: "Grade 6",
      subject: "Mathematics",
      email: "",
      referral: "Friends",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true);
    const { name, email, subject, grade, referral, message } = values;

    const templateParams = {
      name,
      email,
      subject,
      grade,
      referral,
      message,
    };

    emailjs
      .send(
        "service_361d1ri",
        "template_5qvo4iv",
        templateParams,
        "l7UNKCoBp7l3fxVJc"
      )
      .then((response) => {
        toast.success("Enquiry sent successfully!");
        setLoading(false);
      })
      .catch((err) => {
        toast.error("Failed to send message.");
        setLoading(false);
      });
  }

  const today = new Date().toLocaleDateString("en-US", { weekday: "long" });
  const isSunday = today === "Sunday";

  return (
    <section id="contact" className="container py-24 sm:py-32">
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Side - Contact Info */}
        <div>
          <div className="mb-4">
            <h2 className="text-lg text-primary mb-2 tracking-wider">
              Contact
            </h2>
            <h2 className="text-3xl md:text-4xl font-bold">Connect With Us</h2>
          </div>
          <p className="mb-8 text-muted-foreground lg:w-5/6">
            Reach out to us to enroll your child or learn more about our tuition
            programs.
          </p>

          <div className="flex flex-col gap-4">
            <div>
              <div className="flex gap-2 mb-1">
                <Building2 />
                <div className="font-bold">Find us</div>
              </div>
              <div>{connectUs.findUs}</div>
            </div>

            <div>
              <div className="flex gap-2 mb-1">
                <Phone />
                <div className="font-bold">Call us</div>
              </div>
              <div>{connectUs.callUs1}</div>
              <div>{connectUs.callUs2}</div>
            </div>

            <div>
              <div className="flex gap-2 mb-1">
                <Mail />
                <div className="font-bold">Mail us</div>
              </div>
              <div>{connectUs.mailUs}</div>
            </div>

            <div>
              <div className="flex gap-2">
                <Clock />
                <div className="font-bold">Opening Time Today</div>
              </div>
              <div>
                <div>{today}</div>
                <div>
                  {isSunday ? connectUs.sundayVisitTime : connectUs.visitUsTime}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Form */}
        <Card className="bg-muted/60 dark:bg-card">
          <CardHeader className="text-primary text-2xl"> </CardHeader>
          <CardContent>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="grid w-full gap-4"
              >
                {/* Name */}
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Student&rsquo;s Name</FormLabel>
                      <FormControl>
                        <Input placeholder="John Doe" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Grade */}
                <FormField
                  control={form.control}
                  name="grade"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Grade</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select grade" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {Array.from({ length: 9 }, (_, i) => (
                            <SelectItem key={i} value={`Grade ${i + 4}`}>
                              Grade {i + 4}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Subject */}
                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Subject</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select subject" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="Mathematics">
                            Mathematics
                          </SelectItem>
                          <SelectItem value="Science">Science</SelectItem>
                          <SelectItem value="English">English</SelectItem>
                          <SelectItem value="Social Studies">
                            Social Studies
                          </SelectItem>
                          <SelectItem value="Computer Science">
                            Computer Science
                          </SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Email */}
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="your@email.com"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Referral */}
                <FormField
                  control={form.control}
                  name="referral"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>How did you hear about us?</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select option" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="Friends">Friends</SelectItem>
                          <SelectItem value="Relatives">Relatives</SelectItem>
                          <SelectItem value="Teachers">Teachers</SelectItem>
                          <SelectItem value="Social Media">
                            Social Media
                          </SelectItem>
                          <SelectItem value="Other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Message */}
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea
                          rows={5}
                          placeholder="Your message..."
                          className="resize-none"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button className="mt-4" type="submit" disabled={loading}>
                  {loading ? (
                    <svg
                      className="animate-spin h-5 w-5 mr-2 inline-block text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                      ></path>
                    </svg>
                  ) : (
                    "Send message"
                  )}
                </Button>
              </form>
            </Form>
          </CardContent>
          <CardFooter></CardFooter>
        </Card>
      </section>
    </section>
  );
};
