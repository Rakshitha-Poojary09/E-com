import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';


import axios from 'axios';
import { useEffect,useState } from 'react';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function Products() {
  const [expanded, setExpanded] = React.useState(false);
  const [products,setproduct]=useState([])
  useEffect(()=>{
    axios.get('https://dummyjson.com/products').then((res)=>{
      console.log(res)
      setproduct(res.data.products)
    }).catch((error)=>{
      console.log(error)
    })
  },[])
  console.log(products,"productdetails")
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
const handleSearch=(e)=>{
  let data=e.target.value;
  console.log(data);
  data=data.toLowerCase()

axios.get(`https://dummyjson.com/products/search?q=${data}`).then((res)=>{
  console.log(res);
  setproduct(res.data.products)
}).catch((error)=>{
  console.log(error);
})}
  return (
    <>
    <Typography 
      gutterBottom
      varient="h4"
      component="div"
      sx={{color:"black",  textAlign:"center"}}
      margin="10px"
      >

        Shop Products
        </Typography>
        <Box sx={{ display: 'flex', alignItems:'flex-end' ,justifyContent:"flex-end",  marginRight:"150px"}}>
        <SearchIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <TextField id="input-with-sx" label="Search for Products" variant="standard"  sx={{width:"500px"}} onChange={handleSearch} />
      
      </Box>
    
  <div style={{display:"flex",alignItems:"center",justifyContent:"center",flexWrap:"wrap",gap:"20px",margin:"20px" }}>
  
    { products.length>0?products.map((item,index)=>{
      return(
        <Card sx={{ maxWidth: 345 ,width:"345px" }}>
      <CardHeader
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon sx={{color:"#bd3376"}} />
          </IconButton>
        }
        title={item.title}
        subheader="feb 27, 2024"
        sx={{color:"#bd3376"}}
      />
      <CardMedia
        component="img"
        height="194"
       image={item.thumbnail}
        alt="nails art "
        sx={{color:"#bd3376"}}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
       {item.discription}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{color:"#bd3376"}}>
      <h1> Rs/{item.price}</h1>
        </Typography>

      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon  sx={{color:"#bd3376"}}/>
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon  sx={{color:"#bd3376"}} />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <div style={{display:"flex",gap:"20px"}}>
          <Typography paragraph style={{color:"#c51162"}}>brand:</Typography>
          <Typography paragraph>
            {item.brand}
          </Typography>
          </div>
          <div style={{display:"flex",gap:"20px"}}>
          <Typography paragraph style={{color:"#c51162"}}>shippingInformation:</Typography>
          <Typography paragraph>
            {item.brand}
          </Typography>
          </div>
          <div style={{display:"flex",gap:"20px"}}>
          <Typography paragraph style={{color:"#c51162"}}>shippingInformation:</Typography>
          <Typography paragraph>
            {item.brand}
          </Typography>
          </div>
        </CardContent>
      </Collapse>
    </Card>
      )

    })
  :"no data found"}    </div>
   
   
    </>
  );
}
