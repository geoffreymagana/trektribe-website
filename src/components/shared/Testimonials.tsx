"use client";
import React from "react";
import { motion } from "framer-motion";
import { testimonials as allTestimonials } from "@/lib/data";
import type { Testimonial } from "@/lib/types";

const TestimonialsColumn = (props: {
  className?: string;
  testimonials: Testimonial[];
  duration?: number;
}) => {
  return (
    <div className={props.className}>
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6"
      >
        {[...new Array(2)].flatMap((_, index) =>
          props.testimonials.map((testimonial, i) => (
            <div
              className="p-6 rounded-2xl border bg-card shadow-sm max-w-sm w-full"
              key={`${index}-${i}`}
            >
              <div className="text-card-foreground/80">"{testimonial.quote}"</div>
              <div className="flex items-center gap-4 mt-5">
                <img
                  width={40}
                  height={40}
                  src={testimonial.image.url}
                  alt={testimonial.name}
                  className="h-10 w-10 rounded-full object-cover"
                  data-ai-hint={testimonial.image.hint}
                />
                <div className="flex flex-col">
                  <div className="font-medium tracking-tight leading-5 text-card-foreground">
                    {testimonial.name}
                  </div>
                  <div className="leading-5 text-muted-foreground tracking-tight">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </motion.div>
    </div>
  );
};

export function Testimonials() {
  const testimonials1 = allTestimonials.filter((_, i) => i % 3 === 0);
  const testimonials2 = allTestimonials.filter((_, i) => i % 3 === 1);
  const testimonials3 = allTestimonials.filter((_, i) => i % 3 === 2);

  return (
    <section className="py-16 md:py-24 bg-card overflow-hidden">
        <div className="container text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">
            From the Community
          </h2>
          <p className="text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">
            See what our adventurers and organizers are saying about TrekTribe.
          </p>
        </div>
      <div className="container">
        <div className="relative flex justify-center gap-6 max-h-[40rem] overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)]">
            <TestimonialsColumn
            testimonials={testimonials1}
            className="hidden lg:block"
            duration={25}
            />
            <TestimonialsColumn
            testimonials={testimonials2}
            className="hidden sm:block"
            duration={30}
            />
            <TestimonialsColumn
            testimonials={testimonials3}
            className="block"
            duration={28}
            />
        </div>
      </div>
    </section>
  );
}