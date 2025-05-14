"use client";
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

interface ReviewProps {
  image: string;
  name: string;
  userName: string;
  comment: string;
  rating: number;
}

const reviewList: ReviewProps[] = [
  {
    image: "https://github.com/shadcn.png",
    name: "Shruti HM",
    userName: "Parent",
    comment:
      "Classes are very effective and we see major improvement in Dhruv in maths subject. Sir gives importance to each and every concept and ensures that Dhruv has understood the same. He gives individual concentration to each and every student and makes them comfortable to ask doubts if any. Overall we are satisfied and happy with Sir's teaching.",
    rating: 5.0,
  },
  {
    image: "https://github.com/shadcn.png",
    name: "VINOD N",
    userName: "Parent",
    comment:
      "My daughter has been attending Parthasararthy sir's Maths tuition for the last 2 years. Attending his classes has made my daughter more confident in solving maths problems now. He makes sure that students understand the concepts clearly and gives a lot of practice exercises. He's very patient with the students and is accessible any time. Thank you, Partha sir, for your excellent support and guidance",
    rating: 5.0,
  },
  {
    image: "https://github.com/shadcn.png",
    name: "M V VYSHNAVI",
    userName: "Student",
    comment:
      "Sir teaches in a best way n makes us understand the concept well also accounts tution is amazing I thank both the sir for motivating me so much so that i could score well in my puc✨",
    rating: 5.0,
  },
  {
    image: "https://github.com/shadcn.png",
    name: "VIJESH RAGHAVAN",
    userName: "Parent",
    comment:
      "I would like to express my heart felt appreciation for guidance and the support you and your team have provided Vyshnavi that helped her to score good marks in II PUC. Thanks a ton!!!",
    rating: 5.0,
  },
  {
    image: "https://github.com/shadcn.png",
    name: "MANIVANNAN S",
    userName: "PARENT",
    comment:
      "He is the best teacher I ever found his coaching and guidance is wonderful...✨✨",
    rating: 5.0,
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Shruti HM",
    userName: "Parent",
    comment:
      "Very good teaching and understandable i have improved a lot and now i can do my  exams very confidently. sir teaching method is very good and understandable",
    rating: 5.0,
  },
  {
    image: "https://github.com/shadcn.png",
    name: "MOHAMED IKRAM",
    userName: "Parent",
    comment:
      "Best One to One Tuition for School Students in recent times.",
    rating: 5.0,
  },
  {
    image: "https://github.com/shadcn.png",
    name: "SUCHI KUMAR",
    userName: "Parent",
    comment:
      "Thanks a lot to Maths teacher Partha sir for motivating my daughter in learning maths without difficulty. He has been good mentor, guide and best teacher for my daughter. My daughter could take time to understand concept which sir explained her with patience and eliminated fear of exams post covid..Sample Question papers during study holidays helped her.I would recommend sir for 10th std board exams students.",
    rating: 5.0,
  },
  {
    image: "https://github.com/shadcn.png",
    name: "MOHAMED YUNUS",
    userName: "Parent",
    comment:
      "Good improvement from my Kids. Very good teaching method through Online Classroom.",
    rating: 5.0,
  },
  {
    image: "https://github.com/shadcn.png",
    name: "KESAVAN SELLAPILLA",
    userName: "Parent",
    comment:
      "Coaching and Mentoring is really good. Taking intiative for every individual of students in studies as well in there personal behaviour. Best Institute. I am happily rating as 5 ⭐ .",
    rating: 5.0,
  },
  {
    image: "https://github.com/shadcn.png",
    name: "RAKSHAAN SHIVAKUMAR",
    userName: "Student",
    comment:
      "Really good teaching method and i have improved a lot and i was able to get more confident with mathematics thanks to Mr Parthasarathy Sir. Finally, if you are struggling with math in any way I highly recommend you guys to join here.",
    rating: 5.0,
  },
  {
    image: "https://github.com/shadcn.png",
    name: "AATHI",
    userName: "Student",
    comment:
      "I am D.Aathiksha one of the student of DPS ,I have been studying in DPS institute for past 4 months .I have joined in the maths class held by parthasarathy sir .he helped me soo much during my maths class preparation.His class was so easy to understand and he was so patient and kind to the students .i was very happy to be a student of DPS.",
    rating: 5.0,
  },
];

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
                    src={review.image}
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
