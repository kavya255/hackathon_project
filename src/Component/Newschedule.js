import React, { useState } from "react";
import { Box } from "./Reusecomp/Box";
import backbutn from "../../images/previous.png";
import { Imgcomp } from "./Reusecomp/Imgcomp";
import { Textcomp } from "./Reusecomp/Textcomp";
import { useRouter } from "next/router";
import { Input } from "./Reusecomp/Input";

export const Newschedule = () => {
  return (
    <Box cssStyle={{ height: "1000px", padding: "35px", margin: 0 }}>
      <Box name="edittheschedule" cssStyle={{}}>
        <Imgcomp
          source={backbutn}
          alternative="backbutton"
          cssStyles={{ width: "24px", marginTop: "10px" }}
        
        />
        <Textcomp
          value="Create new schedule"
          cssStyles={{
            fontWeight: 600,
            fontSize: "24px",
            marginLeft: "20px",
          }}
        />
      </Box>

      <Box name="formschedule">
        <Box name="first"></Box>
      </Box>
    </Box>
  );
};
