import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import IconButtonsDelete, {IconButtonsDetails} from '../material/MaterialButtons'

const useStyles = makeStyles({
  card: {
    maxWidth: "345px",
    //maxHeight: "50%"
  },
  media: {
    height: 140,
  },
});

export default function MediaCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image=""
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography align="left" gutterBottom variant="h5" component="h2">
          {`${props.favorite.name}`}
          </Typography>
          <Typography align="left" variant="button" color="textSecondary" component="p">
          {`${props.favorite.address}`}
          </Typography>
          <Typography align="left" variant="button" color="textSecondary" component="p">
          {`${props.favorite.phone_numbers}`}
          </Typography>
        </CardContent>
        <IconButtonsDelete/>
        <IconButtonsDetails/>
      </CardActionArea>
      <CardActions>
        
      </CardActions>
    </Card>
  );
}
