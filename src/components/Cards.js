import React, { useState, useEffect } from "react";
import "./Cards.scss";
import Grid from '@mui/material/Grid';

function Cards(props) {


  return (
    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} className="gallery">
      {props.result.map((image, index) => (
        <Grid item xs={12} sm={4} md={3} className="card" key={`card${index}`}>
          <div className="card-header">
            <img src={image.user.profile_image.medium} className="user-photo" key={`user${index}`} alt="" />
            <p className="user-name" key={`name${index}`}>{image.user.name}</p>
          </div>
          <p className="description" key={`description${index}`}>{image.description}</p>
          <img src={image.urls.thumb} className="photo" key={`image${index}`} alt="" />
        </Grid>
      ))}
    </Grid>
  );
}

export default Cards;
