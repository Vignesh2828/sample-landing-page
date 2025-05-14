import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface SampleMaterial {
  grade: number;
  pdfUrl: string;
}

const sampleMaterials: SampleMaterial[] = [
  {
    grade: 5,
    pdfUrl: "https://dpstuition.com/Files/G5%20Worksheet%20-%20Chapter%201.pdf",
  },
  {
    grade: 6,
    pdfUrl:
      "https://dpstuition.com/Files/G6%20UNIT%20TEST%20-%20Chapter%201.pdf",
  },
  {
    grade: 7,
    pdfUrl:
      "https://dpstuition.com/Files/G7%20Perimeter%20and%20Area%20Worksheet.pdf",
  },
  { grade: 8, pdfUrl: "" },
  { grade: 9, pdfUrl: "" },
  {
    grade: 10,
    pdfUrl: "https://dpstuition.com/Files/Class%20Notes_Algebra_class10.pdf",
  },
  { grade: 11, pdfUrl: "" },
  { grade: 12, pdfUrl: "" },
];

export const ServicesSection = () => {
  return (
    <section id="sample-materials" className="container py-24 sm:py-32">
      <h2 className="text-xl text-primary text-center mb-2 tracking-wider">
        Sample Materials
      </h2>

      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        Preview Our Content
      </h2>
      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8">
        Explore grade-specific sample materials to understand the quality and
        structure of our content.
      </h3>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full mx-auto">
        {sampleMaterials.map(({ grade, pdfUrl }) => (
          <Card key={grade} className="bg-muted/60 dark:bg-card h-full">
            <CardHeader>
              <CardTitle>Grade {grade}</CardTitle>
              <CardDescription>
                View a preview of the learning material for Grade {grade}.
              </CardDescription>
              <Button asChild className="mt-4 w-fit" variant="default">
                {pdfUrl !== "" ? (
                  <a href={pdfUrl} target="_blank" rel="noopener noreferrer">
                    View Sample
                  </a>
                ) : (
                  <a href="/">Coming Soon</a>
                )}
              </Button>
            </CardHeader>
          </Card>
        ))}
      </div>
    </section>
  );
};
