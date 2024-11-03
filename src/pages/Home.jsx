import FeedBack from "../components/Home/FeedBack/FeedBack";
import Hero from "../components/Home/Hero/Hero";
import NewsLetter from "../components/Home/NewsLetter/NewsLetter";
import OurTeam from "../components/Home/OurTeam/OurTeam";
import Partner from "../components/Home/Partner/Partner";
import Service from "../components/Home/Service/Service";
import Footer from "../components/Shared/Footer/Footer";
import Navbar from "../components/Shared/Navbar/Navbar";
import NavbarTopInfo from "../components/Shared/NavbarTopInfo/NavbarTopInfo";
import VideoLg from "../components/Shared/VideoCombo/VideoLg";

function Home() {
  return (
    <>
      <header>
        <NavbarTopInfo />
        <Navbar />
        <Hero />
      </header>
      <main className={"bg-secondaryLightGray"}>
        <Service />
        <section>
          <Partner />
          <FeedBack />
          <OurTeam />
        </section>
        <section>
          <VideoLg />
          <NewsLetter />
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Home;
