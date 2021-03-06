import React from 'react';
import { calcAge } from '../logic/calcAge';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    height: '100vh',
    marginLeft: 10,
    marginRight: 10
  },
  media: {
    height: '70%',
    width: '65vw'
  },
};

const Detail = (props) => (
  <div>
     {Object.keys(props.selection).length !== 0 ? 
      <Card className={props.classes.card} data-test='this-card'>
        <CardHeader
          title={props.selection.name}
          subheader={props.selection.website}
        />
        {/* <CardMedia
          className={props.classes.media}
          image={props.selection.imageURL}
          title="Contemplative Reptile"
        /> */}
        <CardContent>
          <Typography component="p">
            {props.selection.phone} {props.selection.username})
          </Typography>
          <Typography component="p">
            {props.selection.email}
          </Typography>
        </CardContent>
      </Card>
    :
      <div></div>
    }
  </div>
)

Detail.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Detail);
