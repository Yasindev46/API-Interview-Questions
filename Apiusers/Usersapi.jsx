import React, { useEffect,useState } from 'react'

const Usersapi = () => {
const [data,setdata]=useState([])
const [thdata,setthdata]=useState([])

    const getdata=()=>{

       fetch("https://jsonplaceholder.typicode.com/users")
      .then((response)=>response.json())
      .then((result)=>setdata(result))
      console.log(data)
      if (data.length>0) {
          var a=Object.keys(data[0])
        //   console.log(a);
          setthdata(a)
      } 
    }

    useEffect(()=>{
        getdata()
    },[])

    
  return (
    <div>
        <table>
            <tr>
                {thdata.map((item)=>{
                    return(
                        <th>{item}</th>
                    )
                })}
            </tr>
            {data.map((item,ind)=>{
                return(
                    <tr>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.username}</td>
                        <td>{item.email}</td>
                        <td>{item.address.city}</td>
                        <td>{item.phone}</td>
                        <td>{item.website}</td>
                        <td>{item.company.name}</td>
                    </tr>
                )
            })}
        </table>
    </div>
  )
}

export default Usersapi
