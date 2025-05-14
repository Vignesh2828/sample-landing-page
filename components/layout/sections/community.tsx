import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export const WhatsLatestSection = () => {
  // Sample panel data with custom images
const latestUpdates = [
  {
    title: "New Course Offering: Advanced Math Tuition",
    description: "We're excited to launch our advanced math course for high school students. Improve your skills and boost your grades with personalized tuition. Enroll now!",
    image: "/baner1.png", // Replace with actual custom image path
    link: "https://discord.com/"
  },
  {
    title: "Enhanced Online Learning: Virtual Classroom Experience",
    description: "Our new virtual classroom platform offers a seamless online learning experience. Join live classes with expert tutors and interact in real-time. Start learning today!",
    image: "/baner2.png", // Replace with actual custom image path
    link: "https://www.example.com"
  },
  {
    title: "Exciting Collaboration: Partnering with Industry Experts",
    description: "We've partnered with top industry professionals to bring specialized courses to our students. Get expert guidance and access to exclusive workshops. Learn from the best!",
    image: "/baner3.png", // Replace with actual custom image path
    link: "https://www.example.com"
  }
];


  return (
    <section id="team" className="py-12 ">
      <hr className="border-secondary" />
      <div className="container py-20 sm:py-20">
        <div className="lg:w-[80%] mx-auto text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold">What's Latest?</h2>
          <p className="text-lg text-muted-foreground mt-4">
            Stay updated with our latest features, announcements, and more. Here’s what’s new!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {latestUpdates.map((update, index) => (
            <Card key={index} className="bg-background border-none shadow-md flex flex-col">

              <CardContent className="flex-grow">
                <img
                  src={update.image}
                  alt={update.title}
                  className="w-full h-auto object-cover rounded-lg mb-4"
                />
                <p className="text-muted-foreground">{update.description}</p>
              </CardContent>

            </Card>
          ))}
        </div>
      </div>
      <hr className="border-secondary" />
    </section>
  );
};
