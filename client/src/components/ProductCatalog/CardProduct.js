import Card from "@mui/material/Card";
import * as React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { grey } from "@mui/material/colors";
import Button from "@mui/material/Button";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import { GlobalState } from "../../GlobalState";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import IconButton from "@mui/material/IconButton";

const CardProduct = ({ product }) => {
  const state = useContext(GlobalState);
  const addCart = state.userApi.addCart;

  return (
    <div>
      <Link to={`/detail/${product._id}`}>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            height="194"
            image={product.imagen.url}
            alt="Paella dish"
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              <strong>{product.nombre}</strong>
              <br />
              {product.descripcion}
              <br />
              s/.<strong>{product.precio}</strong>
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
          </CardActions>
        </Card>
      </Link>
    </div>
  );
};

export default CardProduct;
