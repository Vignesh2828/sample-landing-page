import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { icons } from "lucide-react";

interface FeaturesProps {
  icon: string;
  title: string;
  description: string;
}

const featureList: FeaturesProps[] = [
  {
    icon: "UserCheck",
    title: "Experienced Tutors",
    description:
      "Our team of qualified, experienced tutors brings years of expertise in helping students grasp difficult concepts and excel in their academic pursuits.",
  },
  {
    icon: "BookOpen",
    title: "Comprehensive Curriculum",
    description:
      "We offer a comprehensive and structured curriculum that aligns with school syllabi, ensuring students are well-prepared for exams and academic challenges.",
  },
  {
    icon: "Clock",
    title: "Flexible Timing",
    description:
      "With flexible scheduling options, students can attend classes at times that best fit their individual needs and extracurricular activities.",
  },
  {
    icon: "Award",
    title: "Proven Track Record",
    description:
      "Our tuition center has a history of producing top performers, with many students achieving high grades in their final exams and standardized tests.",
  },
  {
    icon: "Users",
    title: "Small Group Sizes",
    description:
      "We focus on small group classes to ensure each student receives personalized attention, fostering an environment where they can thrive and ask questions freely.",
  },
  {
    icon: "ShieldCheck",
    title: "Holistic Development",
    description:
      "In addition to academic support, we focus on the overall development of the student, including critical thinking, time management, and stress management skills.",
  },
];

export const FeaturesSection = () => {
  return (
    <section id="whyUs" className="container py-24 sm:py-32">
      <h2 className="text-xl text-primary text-center mb-2 tracking-wider">
        Why Choose DPS Tuition
      </h2>

      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        What Sets Us Apart
      </h2>

      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8">
        At DPS Tuition, we prioritize the academic success and personal growth of every student. Here&rsquo;s what makes us different:
      </h3>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {featureList.map(({ icon, title, description }) => (
          <div key={title}>
            <Card className="h-full bg-background border-0 shadow-none">
              <CardHeader className="flex justify-center items-center">
                <div className="bg-primary/20 p-2 rounded-full ring-8 ring-primary/10 mb-4">
                  <Icon
                    name={icon as keyof typeof icons}
                    size={24}
                    color="hsl(var(--primary))"
                    className="text-primary"
                  />
                </div>

                <CardTitle>{title}</CardTitle>
              </CardHeader>

              <CardContent className="text-muted-foreground text-center">
                {description}
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
};
