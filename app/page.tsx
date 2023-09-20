import styles from "./page.module.scss";
import Herosection from "@/components/Herosection";
// import FeaturedListings from "@/components/FeaturedListings";
// import PopularListings from "@/components/PopularListings";
import GetStarted from "@/components/GetStarted";
import ForBusinesses from "@/components/ForBusinesses";
import ForCustomers from "@/components/ForCustomers";
import Categories from "@/components/Categories";
import Faqs from "@/components/Faqs";
import Banner from "@/components/Banner";
import Footer from "@/components/Footer"

export default function Home() {
  return (
   <div className={ styles["home"] }>
      <Herosection />
      {/* <FeaturedListings />
      <PopularListings /> */}
      <GetStarted />
      <ForBusinesses />
      <ForCustomers />
      <Categories />
      <Faqs />
      <Banner />
      <Footer />
   </div>
  )
}
