import HeroBanner from "../components/home/HeroBanner";
import ShopByCategory from "../components/home/ShopByCategory";
import ForHerForHim from "../components/home/ForHerForHim";
import VideoSection from "../components/home/VideoSection";
import FeaturedForYou from "../components/home/FeaturedForYou";
import VideoCards from "../components/home/VideoCards";
import WhyDiamantra from "../components/home/WhyDiamantra";
import ForMenSection from "../components/home/ForMenSection";
import Product from "../components/home/Product";
import AsSeenIn from "../components/home/AsSeenIn";
import CustomerReviews from "../components/home/CustomerReviews";
import NewsletterCTA from "../components/common/newsletter/NewsletterCTA";

export default function Home() {
  return (
    <main>
      <HeroBanner />
      <ShopByCategory />
      <ForHerForHim />
      <VideoSection />
      <FeaturedForYou />
      <VideoCards />
      <WhyDiamantra />
      <ForMenSection />
      <Product />
      <AsSeenIn />
      <CustomerReviews />
      <NewsletterCTA />
    </main>
  );
}
