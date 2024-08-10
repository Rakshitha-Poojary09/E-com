import React,{useEffect, useState} from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useParams } from 'react-router-dom';

import axios from 'axios';

export default function FilterProduct() {
    const {catname}=useParams()
    console.log(catname,"catname");
    const[product,setProduct]=useState([])
   useEffect(()=>{
        axios.get(`https://dummyjson.com/products/category/${catname}`).then( (res)=>{
            console.log(res,"res");
           
            setProduct(res.data.products)
              }
          ).catch((error)=>{
           console.log(error);
           
          }
          )
      



    },[])
    console.log(product,"productdetails")
  return (
    <>
     <Typography 
      gutterBottom
      varient="h5"
      component="div"
      sx={{color:"pink",  textAlign:"center", margin:"10px"}}
     
      >

         {catname} Products
        </Typography>

    <div style={{display:"flex", flexWrap:"wrap" ,alignItems:"center" ,justifyContent:"center",margin:"20px",gap:"20px"  }}>
     
       {product.length>0?product?.map((item,i)=>{
            return(

       
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={item.thumbnail}
      />
      <CardContent>
     
      <Typography 
      gutterBottom
      varient="h5"
      component="div"
      sx={{color:"pink" }}
      >

          {item.title}
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
        {item.description}

        </Typography>
        <Typography variant="h3" color="div">
          
        
          Rs/-{item.price}
        </Typography>
        <Typography variant="h3" color="div">
          
        
          {item.title}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" sx={{background:"aqua", color:"#ffffff"}} >Share</Button>
        <Button size="small" sx={{background:"aqua" ,color:"#ffffff"}}>Learn More</Button>
      </CardActions>
    </Card>
         )
        })
        :"no data for this category"}
    </div>
    </>
  );
}                               