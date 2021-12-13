import "./ProductItem.css";
import { Link } from "react-router-dom";
import  { useContext } from "react";
import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red, grey } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Button from "@mui/material/Button";
import { GlobalState } from "../../../../GlobalState";

// const ExpandMore = styled((props) => {
//     const { expand, ...other } = props;
//     return <IconButton {...other} />;
//   })(({ theme, expand }) => ({
//     transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
//     marginLeft: 'auto',
//     transition: theme.transitions.create('transform', {
//       duration: theme.transitions.duration.shortest,
//     }),
//   }));



const ProductItem = ({ product }) => {
  const state = useContext(GlobalState)
  const addCart = state.userApi.addCart
  return (
    <div className="product_card">
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="280"
          image={product.imagen.url}
          alt="Paella dish"
        />
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              R
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <FavoriteIcon />
            </IconButton>
          }
          title={product.nombre}
          subheader={`s/.${product.precio}`}
        />

        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {product.descripcion}
          </Typography>
        </CardContent>
        <CardActions className="botones"> 
        {/* dentro del CardAction estaba la propiedad "disableSpacing" */}
          {/* <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton> */}
          <Link to={`/detail/${product._id}`}>
            <Button
              sx={{ bgcolor: grey[900] }}
              size="small"
              variant="contained"
            >
              Detalles
            </Button>
          </Link>
          <Link to="#!" onClick={()=> addCart(product)}>
            <Button
              sx={{ bgcolor: grey[900] }}
              size="small"
              variant="contained"
            >
              Comprar
            </Button>
          </Link>

          {/* <IconButton aria-label="share">
                <ShareIcon />
              </IconButton> */}
          {/* <ExpandMore
                expand={expanded}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </ExpandMore> */}
        </CardActions>
      </Card>
    </div>
  );
  //     <div className="product_card">
  //        <img src={product.imagen.url} alt=""/>
  //        <div className="product_box">
  //            <h2 title={product.nombre}>{product.nombre}</h2>
  //            <p>{product.descripcion}</p>
  //            <span>s/.{product.precio}</span>
  //        </div>
  //        <BtnRender product={ product } />
  //     </div>
  // )
};

export default ProductItem;
