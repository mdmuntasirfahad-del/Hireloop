import JobCTA from "@/components/JobCTA";
import JobDiscovery from "@/components/JobDiscovery";
import JobFeatures from "@/components/JobFeatures";
import JobHero from "@/components/JobHero";
import JobPricing from "@/components/JobPricing";
import JobStats from "@/components/JobStats";
import Image from "next/image";

export default function Home() {
  return (
    <div className=" relative bg-zinc-50 font-sans dark:bg-black">
      <JobHero></JobHero>
      <JobStats className='relative z-50'></JobStats>
      <JobDiscovery className='relative z-0'></JobDiscovery>
      <JobFeatures></JobFeatures>
      <JobPricing></JobPricing>
      <JobCTA></JobCTA>

    </div>
  );
}
