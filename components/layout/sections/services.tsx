"use client";

import { sampleMaterials, sampleMaterialsHeading } from "@/components/data/siteData";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";


export const ServicesSection = () => {
  return (
    <section id="sample-materials" className="container py-24 sm:py-32">
      <h2 className="text-xl text-primary text-center mb-2 tracking-wider">
        {sampleMaterialsHeading.subtitle}
      </h2>

      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        {sampleMaterialsHeading.title}
      </h2>

      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8">
        {sampleMaterialsHeading.description}
      </h3>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full mx-auto">
        {sampleMaterials.map(({ grade, pdfUrl }) => (
          <Card key={grade} className="bg-muted/60 dark:bg-card h-full">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-primary">Grade {grade}</CardTitle>
              <CardDescription>
                View a preview of the learning material for Grade {grade}.
              </CardDescription>
              <Button asChild className="mt-4 w-fit" variant={pdfUrl ? 'default' : 'outline'}>
                {pdfUrl ? (
                  <a href={pdfUrl} target="_blank" rel="noopener noreferrer">
                    View Sample
                  </a>
                ) : (
                  <a href="#">Coming Soon</a>
                )}
              </Button>
            </CardHeader>
          </Card>
        ))}
      </div>
    </section>
  );
};
