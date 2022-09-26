import React,{useState,useEffect} from "react";
import  axios from "axios"
import { Card,Grid,CardContent } from "@mui/material";
import {  useNavigate } from "react-router-dom";
import "./Course.css"

export const Assignment=()=>{
    const navigate=useNavigate()
    const [apidata,setapidata]= useState([])
                                                // Get Data From API
    const getdata=async()=>{
        const result=await axios.get("https://api.bricketc.com/bricketc-backend-php/get_all_courses.php")
        console.log("---",result.data.bady)
        setapidata(result.data.body)
    }
                                    // call getdata function in MOUNTING PHASE
    useEffect(()=>{
        getdata()
    },[])
    
                            // Navigate to CourseDetails PAGE and send data to that page
    const handleshow=(item)=>{
        navigate('/course',{ state:item })
    }
    return(
        <React.Fragment>
            <Grid container spacing={4} mt={3}>
            {apidata.map((item,ind)=>{              //Map on API data
                return(
                  <Grid item>
                    <Card  onClick={()=>handleshow(item)} >   
                    <CardContent>
                        <h5>{item.name.substr(0,20)}</h5><br />
                        <img src={item.imageUrl} alt="" height={"200px"} width={"200px"} className="image"/>
                        <p style={{fontWeight:"bold"}}>{item.subjectName}</p>
                    </CardContent>
                    </Card>
                  </Grid>
                )
            })}
            </Grid>
        </React.Fragment>
    )
}    //Notes By Yasin Sir @ PICKUPBIZ//