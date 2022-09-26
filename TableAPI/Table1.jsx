import React,{useEffect,useState} from "react";
import axios from "axios";
import "./Table1.css"

export const Table1=()=>{
    const [apidata,setApidata]=useState([])
    const [apidatacopy,setApidatacopy]=useState([])
    const [selected,setSlected]=useState("")
    const [search,setSearch]=useState("")


    const getdata=async()=>{
        const result=await axios.get("https://www.ag-grid.com/example-assets/olympic-winners.json")
        console.log(result.data)
        setApidata(result.data)
        setApidatacopy(result.data)
    }
    
    useEffect(()=>{
        getdata()
    },[])
    
    useEffect(()=>{
        const filtered=apidatacopy.filter((item)=>item.athlete.toUpperCase().includes(search.toUpperCase()))
        setApidata(filtered)
    },[search])

    useEffect(()=>{
        if(selected==="AZ"){
            const sorted=apidata.sort((acc,cur)=>acc.athlete>cur.athlete?1:-1)
            console.log(sorted)
            setApidata(sorted)
        }
        else if(selected==="ZA"){
            const sorted=apidata.sort((acc,cur)=>acc.athlete<cur.athlete?1:-1)
            setApidata(sorted)
        }
    },[selected])
    
    console.log(selected)
    return(
        <div>
            <input type="text" onChange={(e)=>setSearch(e.target.value)} />
            <table>
                            <tr>
                                <th>Sl No</th>
                                <th>Name
                                    <select onChange={(e)=>setSlected(e.target.value)}>
                                        <option value="">Sort</option>
                                        <option value="AZ">A-Z</option>
                                        <option value="ZA">Z-A</option>
                                    </select>
                                </th>
                                <th>Age</th>
                                <th>Country</th>
                                <th>Sport</th>
                                <th>Year</th>
                                <th>Gold</th>
                                <th>Silver</th>
                                <th>Bronze</th>
                            </tr>
            {apidata.map((item,i)=>{
                return(
                    
                        <tr>
                            <td>{i+1}</td>
                            <td>{item.athlete}</td>
                            <td>{item.age}</td>
                            <td>{item.country}</td>
                            <td>{item.year}</td>
                            <td>{item.sport}</td>
                            <td>{item.gold}</td>
                            <td>{item.silver}</td>
                            <td>{item.bronze}</td>
                            <button>Delete</button>
                        </tr>
                   
                )
            })}
             </table>
        </div>
    )
}