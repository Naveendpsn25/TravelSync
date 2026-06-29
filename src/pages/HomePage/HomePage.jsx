import HeroSection from "../../components/home/HeroSection/HeroSection";
import PopularDestinations from "../../components/home/PopularDestinations/PopularDestinations";
import FeaturedPackages from "../../components/home/FeaturedPackages/FeaturedPackages";
import WhyChooseUs from "../../components/home/WhyChooseUs/WhyChooseUs";
import Testimonials from "../../components/home/Testimonials/Testimonials";
import Newsletter from "../../components/home/Newsletter/Newsletter";
import "./HomePage.css";

function HomePage() {
  return (
    <>
      <HeroSection />
      <PopularDestinations />
      <FeaturedPackages />
      <WhyChooseUs />
      <Testimonials />
      <Newsletter />
    </>
  );
}

export default HomePage;