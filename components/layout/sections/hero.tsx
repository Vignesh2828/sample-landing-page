"use client";
import { heroData } from "@/components/data/siteData";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export const HeroSection = () => {
  const { theme } = useTheme();
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % heroData.slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="container w-full mt-10">
      <div className="grid place-items-center lg:max-w-screen-xl gap-8 mx-auto py-20 md:py-32">
        <div className="text-center space-y-8">
          <Badge variant="outline" className="text-sm py-2">
            {heroData.badge.isNew && (
              <span className="mr-2 text-primary">
                <Badge>New</Badge>
              </span>
            )}
            <span>{heroData.badge.text}</span>
          </Badge>

          <div className="max-w-screen-md mx-auto text-center text-4xl md:text-6xl font-bold">
            <h1>
              {heroData.title.beforeHighlight}
              <span className="text-transparent px-2 bg-gradient-to-r from-[#D247BF] to-primary bg-clip-text">
                {heroData.title.highlight}
              </span>
            </h1>
          </div>

          <p className="max-w-screen-sm mx-auto text-xl text-muted-foreground">
            {heroData.description}
          </p>

          <div className="space-y-4 md:space-y-0 md:space-x-4">
            <Button asChild className="w-5/6 md:w-1/4 font-bold group/arrow">
              <Link href={heroData.buttons.enroll.href}>
                {heroData.buttons.enroll.label}
                <ArrowRight className="size-5 ml-2 group-hover/arrow:translate-x-1 transition-transform" />
              </Link>
            </Button>

            <Button
              asChild
              variant="secondary"
              className="w-5/6 md:w-1/4 font-bold"
            >
              <Link href={heroData.buttons.curriculum.href}>
                {heroData.buttons.curriculum.label}
              </Link>
            </Button>
          </div>
        </div>

        <div className="relative group mt-14">
          <div className="absolute top-2 lg:-top-8 left-1/2 transform -translate-x-1/2 w-[90%] mx-auto h-24 lg:h-80 bg-primary/50 rounded-full blur-3xl"></div>

          <Image
            key={currentSlide}
            width={1200}
            height={1200}
            className="w-full md:w-[1200px] mx-auto rounded-lg relative leading-none flex items-center border border-t-2 border-secondary border-t-primary/30 transition-all duration-500 ease-in-out"
            src={heroData.slides[currentSlide]}
            alt={`Slide ${currentSlide + 1}`}
          />

          <div className="absolute bottom-0 left-0 w-full h-20 md:h-28 bg-gradient-to-b from-background/0 via-background/50 to-background rounded-lg"></div>
        </div>
      </div>
    </section>
  );
};
