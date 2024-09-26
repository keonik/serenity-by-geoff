import Autoplay from "embla-carousel-autoplay";
import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { Button } from "~/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "~/components/ui/carousel";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import HeroScroll from "~/components/hero-scroll";
// import { HeroParallax } from "~/components/aceternity/hero-parallax";

export const meta: MetaFunction = () => {
  return [
    { title: "Serenity by Geoff | Scent-sational Candles" },
    {
      name: "description",
      content:
        "Experience the aroma of serenity with Geoff's handcrafted candles. Inspired by 'that's what she said' moments.",
    },
  ];
};
const testimonials = [
  {
    id: 1,
    quote:
      "Serenity by Geoff is kicking ass and taking names. You remember last week when that girl went missing? Guess whose candles they used for the vigil?",
    author: "Jan Levinson",
  },
  {
    id: 2,
    quote: "Thank God they found her, too.",
    author: "Kevin Malone",
  },
  {
    id: 3,
    quote: "Oh, they found her?",
    author: "Jan Levinson",
  },
  {
    id: 4,
    quote:
      "Are you seriously trying to get us to invest in your husband's candle business?",
    author: "David Wallace",
  },
];

export default function Index() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <HeroScroll />
      {/* <HeroParallax
        products={[
          {
            link: "/",
            thumbnail:
              "https://images.unsplash.com/photo-1625055887171-4a3186a42b39?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "Lavender lemonade",
          },
        ]}
      /> */}
      {/* <section className="relative h-screen flex items-center justify-center text-primary-foreground">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1603006905003-be475563bc59?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
            alt="Serenity by Geoff candles"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-background/50" />
        </div>
        <motion.div
          className="z-10 text-center text-black dark:text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl font-bold mb-4">Serenity by Geoff</h1>
          <p className="text-xl mb-8">
            Scent-sational candles that's what she said about
          </p>
          <Button asChild size="lg">
            <Link to="/shop">Shop Now, That's What She Said</Link>
          </Button>
        </motion.div>
      </section> */}

      {/* Features Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose Serenity by Geoff?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                image:
                  "https://images.unsplash.com/photo-1602874801007-bd458bb1b8b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
                title: "100% Natural-ish Ingredients",
                description:
                  "Our candles are made with love, laughter, and a hint of 'that's what she said'.",
              },
              {
                image:
                  "https://images.unsplash.com/photo-1636103775596-3a519c4da522?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80",
                title: "Handcrafted by Geoff",
                description:
                  "Each candle is carefully crafted while binge-watching The Office.",
              },
              {
                image:
                  "https://images.unsplash.com/photo-1639501295122-28c362f2a571?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
                title: "Unique Office-Inspired Scents",
                description:
                  "From 'Dunder Mifflin Pine' to 'Michael's Morning Mist', we've got it all.",
              },
            ].map((feature, index) => (
              <AnimatedFeatureCard
                key={feature.title}
                {...feature}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Behind the Process Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <motion.div
              className="md:w-1/2 md:pr-8 mb-8 md:mb-0"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-4">Behind the Process</h2>
              <p className="text-lg mb-4">
                At Serenity by Geoff, every candle is a labor of love,
                handcrafted with the same care and attention to detail that
                Geoff applies to his famous chili recipe.
              </p>
              <p className="text-lg mb-4">
                Using only the finest ingredients (and occasionally spilling
                them on the carpet), Geoff pours his heart and soul into each
                candle. The process involves careful measuring, mixing, and a
                fair amount of "that's what she said" jokes.
              </p>
              <p className="text-lg">
                From selecting the perfect scent combinations to hand-pouring
                the wax, every step is performed with precision and a touch of
                Dunder Mifflin magic. The result? Candles that bring the essence
                of The Office right into your home.
              </p>
            </motion.div>
            <motion.div
              className="md:w-1/2"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Carousel
                className="w-full mx-auto"
                plugins={[Autoplay({ delay: 3000 })]}
              >
                <CarouselContent>
                  {["/images/geoff-desk.jpg", "/images/counselors.jpg"].map(
                    (src) => (
                      <CarouselItem key={src}>
                        <div className="p-1">
                          <div className="aspect-square relative overflow-hidden rounded-lg">
                            <img
                              src={src}
                              alt={`Geoff's process`}
                              className="object-cover w-full h-full"
                            />
                          </div>
                        </div>
                      </CarouselItem>
                    )
                  )}
                </CarouselContent>
              </Carousel>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-background overflow-hidden">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            What Our Customers Are Saying
          </h2>
          <div className="relative">
            <div className="testimonial-scroll">
              {[...testimonials, ...testimonials].map((testimonial, index) => (
                <div key={testimonial.id} className="testimonial-item">
                  <AnimatedTestimonialCard {...testimonial} index={index} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground text-center">
        <motion.div
          className="container mx-auto px-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-4">
            Ready to Make Your Space That's What She Said?
          </h2>
          <p className="text-xl mb-8">
            Join thousands of satisfied customers and bring the magic of
            Serenity by Geoff into your home office.
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link to="/shop">Explore Our Scent-sational Collection</Link>
          </Button>
        </motion.div>
      </section>
    </div>
  );
}

function AnimatedFeatureCard({
  image,
  title,
  description,
  index,
}: {
  image: string;
  title: string;
  description: string;
  index: number;
}) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="bg-card text-card-foreground rounded-lg shadow-md overflow-hidden"
    >
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </motion.div>
  );
}

function AnimatedTestimonialCard({
  quote,
  author,
  index,
}: {
  quote: string;
  author: string;
  index: number;
}) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-muted rounded-lg p-4 sm:p-5 md:p-6 shadow-md max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto"
    >
      <p className="text-base sm:text-lg md:text-xl mb-3 sm:mb-4 italic">
        "{quote}"
      </p>
      <p className="text-right text-sm sm:text-base md:text-lg font-semibold">
        - {author}
      </p>
    </motion.div>
  );
}
