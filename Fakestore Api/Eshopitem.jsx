import React from "react";
import { Card, CardContent, Grid, Rating, Badge } from "@mui/material";

export const EshoppItem = ({ prod }) => {
  return (
    <div>
      <Card className="prodcard">
        <CardContent>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <Badge badgeContent={`$ ${prod.price}`} color="secondary">
                <h4>
                  {prod.title.substring(0, 20)}
                  {prod.title.length > 21 && "..."}
                </h4>
              </Badge>
            </Grid>
            <Grid item xs={6}>
              <p>{prod.description.substring(0, 50)}...</p>
            </Grid>
            <Grid item xs={6}>
              <Badge badgeContent={`${prod.rating.count} no.`} color="primary">
                <Rating value={prod.rating.rate} />
              </Badge>
            </Grid>
            <Grid>
              <img className="prodimg" src={prod.image} height={"200px"} width={"200px"}/>
            </Grid>
              <h4 style={{textAlign:"center"}}>{prod.category}</h4>
          </Grid>
        </CardContent>
      </Card>
    </div>
  );
};