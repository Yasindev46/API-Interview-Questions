import React, { useEffect, useState } from "react";
import axios from "axios";
import { EshoppItem } from "./Eshopitem";
import { Grid } from "@mui/material";

export const Eshopp = () => {
  const [data, setData] = useState([]);
  const [filtData, setFiltData] = useState([]);
  const [txtSearch, setTxtSearch] = useState("");
  

  const getData = async () => {
    try{
    const result = await axios.get("https://fakestoreapi.com/products");
    setData(result.data);
    setFiltData(result.data);
    }catch(error){
      setTimeout(() => {
        setErrormsg(error.message)
    }, 1000);
    }
  
  };
  useEffect(() => {
    const filtered = data.filter(
      (item) =>
        item.title.toUpperCase().includes(txtSearch.toUpperCase()) ||
        item.description.toUpperCase().includes(txtSearch.toUpperCase()) ||
        item.category.toUpperCase().includes(txtSearch.toUpperCase())
    );
    setFiltData([...filtered]);
  }, [txtSearch]);

  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="sub2">
      <Grid container spacing={1}>
        <Grid item xs={2}>
          <h3>Product E Shopp</h3>
        </Grid>
        <Grid item xs={6}>
          <input
            className="srch"
            type="text"
            onChange={(e) => setTxtSearch(e.target.value)}
          />
        </Grid>
        <Grid item xs={4}></Grid>
        {filtData.map((item) => (
          <Grid item xs={3}>
            <EshoppItem prod={item} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};