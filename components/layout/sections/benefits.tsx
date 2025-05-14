import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { icons } from "lucide-react";

interface AboutProps {
  icon: string;
  title: string;
  description: string;
}

const aboutList: AboutProps[] = [
  {
    icon: "School",
    title: "Experienced Faculty",
    description:
      "At DPS Tuition, we have a team of highly experienced and qualified teachers who specialize in providing personalized learning experiences for each student.",
  },
  {
    icon: "Book",
    title: "Comprehensive Curriculum",
    description:
      "We follow a structured and comprehensive curriculum that ensures every student gains in-depth knowledge and understanding of their subjects, from basics to advanced levels.",
  },
  {
    icon: "Clipboard",
    title: "Result-Oriented Approach",
    description:
      "Our tuition sessions focus on achieving tangible results, enhancing both academic performance and personal growth through regular assessments and personalized feedback.",
  },
  {
    icon: "ThumbsUp",
    title: "Student-Centric Environment",
    description:
      "We believe in fostering a supportive and nurturing environment where students can thrive. Our teachers are always available to address queries and provide guidance to ensure success.",
  },
];

export const AboutDpsSection = () => {
  return (
    <section id="about" className="container py-24 sm:py-32">
      <div className="grid lg:grid-cols-2 place-items-center lg:gap-24">
        <div>
          <h2 className="text-xl text-primary mb-2 tracking-wider">About DPS Tuition</h2>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Empowering Students for Success
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            DPS Tuition is dedicated to providing a transformative learning experience for students of all ages. With a focus on academic excellence and personal growth, our goal is to ensure that each student reaches their full potential.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-4 w-full">
          {aboutList.map(({ icon, title, description }, index) => (
            <Card
              key={title}
              className="bg-muted/50 dark:bg-card hover:bg-background transition-all delay-75 group/number"
            >
              <CardHeader>
                <div className="flex justify-between">
                  <Icon
                    name={icon as keyof typeof icons}
                    size={32}
                    color="hsl(var(--primary))"
                    className="mb-6 text-primary"
                  />
                  <span className="text-5xl text-muted-foreground/15 font-medium transition-all delay-75 group-hover/number:text-muted-foreground/30">
                    0{index + 1}
                  </span>
                </div>

                <CardTitle>{title}</CardTitle>
              </CardHeader>

              <CardContent className="text-muted-foreground">
                {description}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
