import styles from "./page.module.scss";
import Herosection from "@/components/Herosection";
// import Intro from "@/components/Intro";
import UsersProcess from "@/components/UsersProcess";
// import FeaturedListings from "@/components/FeaturedListings";
// import PopularListings from "@/components/PopularListings";
// import GetStarted from "@/components/GetStarted";
import UsersCategory from "@/components/UsersCategory";
// import Categories from "@/components/Categories";
import Faqs from "@/components/Faqs";
import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import Head from "next/head";

export default function Home() {
  <Head>
    <link
      href="https://api.fontshare.com/v2/css?f[]=satoshi@1,900,700,500,300,400&amp;display=swap"
      rel="stylesheet"
    />
  </Head>
  return (
   <div className={ styles["home"] }>
      <Herosection />
      <UsersProcess />
      {/* <Intro /> */}
      <UsersCategory />
      {/* <FeaturedListings />
      <PopularListings /> */}
      {/* <GetStarted /> */}
      {/* <Categories /> */}
      <Faqs />
      <Banner />
      <Footer />
   </div>
  )
}
