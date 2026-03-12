import Categories from "@/components/home/Categories";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import GSMGuide from "@/components/home/GSMGuide";
import Hero from "@/components/home/Hero";
import WhyUs from "@/components/home/WhyUs";
import Image from "next/image";

export default function Home() {
  return (
    <main>
       <main className="">
       <Hero />
       <Categories />
       <FeaturedProducts />
       <GSMGuide />
       <WhyUs />
    </main>
    </main>
  );
}
