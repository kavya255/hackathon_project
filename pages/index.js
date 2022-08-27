import React from "react";
import { Header } from "../src/Component/Header";
import { Firstpage } from "../src/Component/Firstpage";
import { Footer } from "../src/Component/Footer"; 
import {Createschedule} from "./Createschedule";
const Homepage = ()=>{
    return (
        <>
            
            <Header />
            <Firstpage />
            <Footer />
        </>
        
    )
}

export default Homepage;