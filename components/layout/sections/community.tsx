"use client";

import { latestUpdates, whatsLatestHeading } from "@/components/data/siteData";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const WhatsLatestSection = () => {
  return (
    <section id="team" className="py-12">
      <hr className="border-secondary" />
      <div className="container py-20 sm:py-20">
        <div className="lg:w-[80%] mx-auto text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold">
            {whatsLatestHeading.title}
          </h2>
          <p className="text-lg text-muted-foreground mt-4">
            {whatsLatestHeading.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {latestUpdates.map((update, index) => (
            <Card
              key={index}
              className="bg-background border-none shadow-md flex flex-col transform transition duration-300 hover:scale-[1.03] hover:shadow-lg"
            >
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
