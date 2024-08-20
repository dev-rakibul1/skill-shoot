import LandingPage from "@/components/hero-section/Hero";
import Client from "@/components/home/client/Client";
import Course from "@/components/home/course/Course";
import SubscribeCourse from "@/components/home/course/SubscribeCourse";
import SkillShort from "@/components/home/skill-shorts/Skill-shorts";
import Slider from "@/components/home/slider/Slider";
import Pricing from "@/components/home/subscribe/Subscribe";
import Testimonial from "@/components/home/testimonial/Testimonial";
import WhyDoWeExistSection from "@/components/home/WhyDoWeExistSection/WhyDoWeExistSection";

const HomePage = () => {
  return (
    <div className="">
      <LandingPage />
      <Client />
      <Course />
      <WhyDoWeExistSection />
      <Slider />
      <SkillShort />
      <SubscribeCourse />
      <Pricing />
      <Testimonial />

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default HomePage;
