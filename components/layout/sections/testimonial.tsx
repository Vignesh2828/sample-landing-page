"use client";
import { reviewList } from "@/components/data/siteData";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Star } from "lucide-react";

export const TestimonialSection = () => {
  return (
    <section id="testimonials" className="container py-24 sm:py-32">
  <div className="text-center mb-8">
    <h2 className="text-xl text-primary text-center mb-2 tracking-wider">
      Testimonials
    </h2>

    <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
      Hear What Our 1000+ Clients Say
    </h2>
  </div>

  <Carousel
    opts={{
      align: "start",
    }}
    className="relative w-[80%] sm:w-[90%] lg:max-w-screen-xl mx-auto"
  >
    <CarouselContent>
      {reviewList.map((review) => (
        <CarouselItem
          key={review.name}
          className="md:basis-1/2 lg:basis-1/3"
        >
          <Card className="bg-muted/50 dark:bg-card h-[400px] flex flex-col">
            <CardContent className="pt-6 pb-0 flex-1 overflow-hidden">
              <div className="flex gap-1 pb-6">
                {/* Render stars based on rating */}
                {[...Array(5)].map((_, index) => (
                  <Star
                    key={index}
                    className={`size-4 fill-primary text-primary ${
                      index < review.rating ? "fill-primary" : "fill-muted"
                    }`}
                  />
                ))}
              </div>
              <p className="text-sm">{`"${review.comment}"`}</p>
            </CardContent>

            <CardHeader className="flex-shrink-0">
              <div className="flex flex-row items-center gap-4">
                <Avatar>
                  <AvatarImage
                    src={review.userName === 'Student' ? '/student.png' : '/parents.png'}
                    alt={review.name}
                  />
                  <AvatarFallback>{review.name[0]}</AvatarFallback>
                </Avatar>

                <div className="flex flex-col">
                  <CardTitle className="text-lg">{review.name}</CardTitle>
                  <CardDescription>{review.userName}</CardDescription>
                </div>
              </div>
            </CardHeader>
          </Card>
        </CarouselItem>
      ))}
    </CarouselContent>
    <CarouselPrevious />
    <CarouselNext />
  </Carousel>
</section>

  );
};
