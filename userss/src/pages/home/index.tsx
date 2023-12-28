import React from "react";
import { Button as MuiButton } from "@mui/material";
import Asynchronous from "../../Components/search";
import Search from "../../Components/search";
import RecipeReviewCard from "../../Components/card";
import Navbar from "../../layout/navbar";

type Props = {};

function Home({}: Props) {
  return (
    <>
    <Navbar/>
    <div className="container"style={{
          margin: "0 auto",
          width: "90%",
          display: "flex",
          justifyContent:"center",
          alignItems:"center",
          flexWrap: "wrap",
          gap: "20px",
          border:"1px solid black"
        }}>
          <div style={{width:"400px"}}><RecipeReviewCard />
          <RecipeReviewCard />
          </div>
          
        </div>
      
    </>
  );
}

export default Home;
