import { Grid,Card } from "@mui/material";
import React from "react";
import { useNavigate,useLocation } from "react-router-dom";
import "./Course.css"

export const Course=()=>{
    const navigate=useNavigate()
    const recieved=useLocation()    //recieve ITEM from Previous page

    const handleback=()=>{
        navigate(`/courselist`)     //Navigate BACK to Home Page
    }

    return(
        <Grid container>
            <Grid item>
                <Card className="detailsCard" >
                        <h2>{recieved.state.name}</h2>
                        <img src={recieved.state.imageUrl} alt="" height={"200px"}  width={"200px"} className="imageDetails"/>
                        <h4>Subject Name:- {recieved.state.subjectName}</h4>
                        <p>Description:- {recieved.state.info}</p>
                        <p>Course ID:- {recieved.state.idCourse}</p>
                        <p>Course Duration:- {recieved.state.duration}</p>
                </Card>
            <button onClick={handleback} className="backbtn">Home</button>
        </Grid>
        </Grid>
    )
}


            //Notes By Yasin Sir @ PICKUPBIZ//