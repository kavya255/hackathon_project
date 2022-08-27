import React from "react";
import { Box } from "./Reusecomp/Box";
import { Textcomp } from "./Reusecomp/Textcomp";
import { Imgcomp } from "./Reusecomp/Imgcomp";
import firstpage from "../../images/firstpage.png";
import plusbutton from "../../images/plusbutton.png";
import Link from "next/link";

export const Firstpage = () => {
  


  return (
    <Box
      name="firstpage"
      cssStyle={{
        padding: "88px 500px 0 500px",
        marginBottom: "150px",
      }}
    >
      <Imgcomp source={firstpage} alternative="landing page" />
      <Box
        cssStyle={{
          position: "absolute",
          left: "520px",
          top: "564px",
        }}
      >

        <Textcomp
          cssStyles={{
            fontSize: "16px",
            lineHeight: "130%",
            letterSpacing: "0.03em",
          }}
          value="There are no schedules get started by creating schedules"
        />
       <Link href="/Createschedule"><a>
       <Box
          name="button"
          cssStyle={{
            color: "#fff",
            backgroundColor: "#5375E2",
            display: "flex",
            width: "192px",
            borderRadius: "5px",
            margin: "30px 0 0 90px",
          }}
        
        >
          <Imgcomp
            source={plusbutton}
            alternative="plusbtn"
            cssStyles={{
              padding: "15px 11px 13px 21px",
              width: "15px",
              height: "15px",
            }}
          />

          <Textcomp
            Comp="div"
            cssStyles={{
              fontWeight: 400,
              fontSize: "20px",
              padding: "10px 23px 8px 12px",
              lineHeight: "27px",
            }}
            value="Create New"
          />
        </Box>
      
    
       </a></Link> 
       </Box>
       </Box>
  );
};
