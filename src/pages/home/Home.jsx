import Blogs from "../blogs/Blogs.jsx"
import TrendingProducts from "../shop/TrendingProducts.jsx"
import Banner from "./Banner.jsx"
import Categories from "./Categories.jsx"
import DealsSection from "./DealsSection.jsx"
import HeroSection from "./HeroSection.jsx"
import PromoBanner from "./PromoBanner.jsx"

const Home = () => {
  return (
    <>
       <Banner/>
       <Categories/>
       <HeroSection/>
       <TrendingProducts/>
       <DealsSection/>
       <PromoBanner/>
       <Blogs/>
    </>
  )
}

export default Home
