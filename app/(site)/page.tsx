import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Feature from "@/components/Features";
import About from "@/components/About";
import FeaturesTab from "@/components/FeaturesTab";
import FunFact from "@/components/FunFact";
import Integration from "@/components/Integration";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import Testimonial from "@/components/Testimonial";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
export const metadata: Metadata = {
  title: "Automate all your workflows with Sahaai",
  description: "This is Home for Sahaai",
  // other metadata
};

export default async function Home() {
  const session = await auth();
  if (session && session.user) {
    redirect("/chatbot");
  }
  return (
    <main>
      <Hero />
      <Feature />
      <About />
      <FeaturesTab />
      <FunFact />
      <Integration />
      <CTA />
      <FAQ />
      <Testimonial />
      <Pricing />
      <Contact />
    </main>
  );
}
