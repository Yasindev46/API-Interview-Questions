import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { Grid,Card, CardContent } from '@mui/material'

export const AirlinesApi = () => {
    const [apidata,setApidata]=useState([])
    const getdata= async()=>{
        const result=await axios.get("https://raw.githubusercontent.com/pro-react/sample-code/master/chapter%206%20(Flux)/aircheap/public/flights.json")
        console.log(result.data);
        setApidata(result.data)
    }
    useEffect(()=>{
        getdata()
    },[])
  return (
    <div>
        <h1>Airlines Data</h1>
     <Grid container spacing={3}>
        {apidata.map((item)=>{
            return(
                 <Grid item xs={3} >
                    <Card >
                        <Card content>
                            <h4>Company:- {item.company}</h4>
                            <h6>Duration:- {item.duration}</h6>
                            <h6>Points:- {item.points}</h6>
                            {item.segment.map((item)=>{
                                return(
                                    <div>
                                        <p> Origin:- {item.origin}</p>
                                        <p>Destination:- {item.destination}</p>
                                        <p>Connect Duration:- {item.connectionDuration}</p>
                                    </div>
                                )
                            })}
                        </Card>
                    </Card>
              </Grid>
            )})
    }
</Grid>
</div>
)}

