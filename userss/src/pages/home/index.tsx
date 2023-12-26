import React from "react";
import { Button as MuiButton } from "@mui/material";
import Asynchronous from "../../Components/search";
import Search from "../../Components/search";
import RecipeReviewCard from "../../Components/card";

type Props = {};

function Home({}: Props) {
  return (
    <>
      <RecipeReviewCard />
    </>
  );
}

export default Home;
