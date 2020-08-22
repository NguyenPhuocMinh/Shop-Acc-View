import React from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import { get } from 'lodash';

const GridCard = props => {
  const { value, classes } = props;
  const id = get(value, 'id');
  const thumbnail = get(value, 'thumbnail');
  const price = get(value, 'price');
  const hero = get(value, 'hero');
  const gold = get(value, 'gold');
  const skin = get(value, 'skin');
  const pearl_points = get(value, 'pearl_points');
  const rank = get(value, 'rank');

  return (
    <Grid key={id} item>
      <Card className={classes.root}>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" style={{ backgroundColor: '#8bc34a' }}>
              <StarBorderIcon />
            </Avatar>
          }
          style={{ color: '#9e9e9e' }}
          title="Shrimp and Chorizo Paella"
        />
        <CardMedia
          className={classes.media}
          image={thumbnail}
          title="Paella dish"
        />
        <br />
        <CardContent>
          <Typography
            variant="body2"
            component="p"
            align="center"
            style={{ color: '#9e9e9e' }}
          >
            {price && price.toLocaleString() + ' VND'}
          </Typography>
          <div className={classes.typography}>
            <Typography
              variant="body2"
              component="p"
            >
              Tướng: {hero}
            </Typography>
            <Typography
              variant="body2"
              component="p"
            >
              Vàng: {gold && gold.toLocaleString()}
            </Typography>
          </div>
          <div className={classes.typography}>
            <Typography
              variant="body2"
              component="p"
            >
              Trang phục: {skin}
            </Typography>
            <Typography
              variant="body2"
              component="p"
            >
              Điểm ngọc: {pearl_points}
            </Typography>
          </div>
          <Typography
            variant="body2"
            component="p"
            align="center"
            style={{ color: '#9e9e9e' }}
          >
            {rank}
          </Typography>
        </CardContent>
        <CardActions disableSpacing style={{ justifyContent: 'space-around' }}>
          <Button
            variant="outlined"
            style={{ background: 'black', color: 'white', border: '1px ridge #9e9e9e' }}>
            Xem Acc
          </Button>
          <Button
            variant="outlined"
            style={{ background: '#8bc34a', color: 'white' }}>
            Mua Ngay
          </Button>
        </CardActions>
      </Card>
    </Grid>
  )
};

export default GridCard;