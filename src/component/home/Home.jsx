import React, { useState, useEffect } from "react";
import Navs from "../navbar/Navs";
import Headingtop from "./headingtop/Headingtop";
import Cruscal from "./Cruscal";
import Amazoncard from "./amazoncard/Amazoncard";
import Crusal2 from "./crusal2/Crusal2";
import Threediv from "./Threediv";
import Footer from "../footer/Footer";
import axios from "axios";

const Home = () => {
  
  const [product1, setProduct1] = useState();
  const crusaldata = [
    
    "https://assets.aboutamazon.com/dims4/default/3414bf7/2147483647/strip/false/crop/3000x1200+0+0/resize/1486x594!/quality/90/?url=https%3A%2F%2Famazon-blogs-brightspot.s3.amazonaws.com%2Fe5%2F05%2Fb146a5444e46a10b9b721cc5b932%2Fbboty-bookwall-3000x1200-final-jb-edit.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wearables/Unrec/GW/August/Unrec_DesktopTallHero_3000x1200._CB630557043_.jpg",
    "https://img.freepik.com/free-photo/excited-girl-open-up-shopping-bags-gasping-amazed-checking-out-gifts-her-with-happy-face-sta_1258-119591.jpg?w=1970",
    "https://images-eu.ssl-images-amazon.com/images/G/31/prime/ACQ/Homepage_DesktopHeroTemplate_3000x1200._CB630403302_.jpg",
  ];
  useEffect(() => {
    const fun = async () => {
      const response1 = await axios.get("http://localhost:8000/fashionimage1");
      setProduct1([response1.data]);
      
    };

    fun();
  }, []);
  return (
    <>
      <Navs />
      <Headingtop />
      <Cruscal arr={crusaldata} />
     
      <Amazoncard />

      {product1 ? <Crusal2 arr={product1} /> : " "}
      <Threediv />
      <Footer />
    </>
  );
};

export default Home;
