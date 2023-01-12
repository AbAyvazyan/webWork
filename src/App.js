import './App.css';
import Header from "./Components/Header/Header";
import MainLayout from "./Components/MainLayout/MainLayout";
import SaleSection from "./Components/SaleeSection/SaleSection";
import BenefitSection from "./Components/BenefitSection/BenefitSection";
import AwardsSection from "./Components/AwardsSection/AwardsSection";
import FeatureSection from './Components/FeatureSection/FeatureSection'
import PartnersSection from './Components/PertnersSection/PartnersSection'
import Footer from "./Components/Footer/Footer";
import AOS from 'aos'
import {useEffect} from "react";

function App() {

    useEffect(()=>{
        AOS.init({
            delay:300,
            duration:1000,
        })
    },[])


    return (
    <>
      <Header/>

      <MainLayout>
          <SaleSection/>
          <BenefitSection/>
          <AwardsSection/>
          <FeatureSection/>
          <PartnersSection/>
      </MainLayout>

      <Footer/>
    </>
  );
}

export default App;
