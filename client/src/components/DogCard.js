import React, { Component } from 'react';
import { gql } from 'react-apollo';
import { propType as fragmentPropType } from 'graphql-anywhere';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';

const styles = {
  card: {
    maxWidth: 500
  },
  media: {
    height: 200
  }
};

class DogCard extends Component {
  render () {
    const { classes, dog: { Name, Thumbnail, Owner, Breed } } = this.props;
    return (
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image={Thumbnail}
          title={Name}
        />
        <CardContent>
          <Typography type='headline' component='h2' align='left'>
            {Name}
          </Typography>
          <Typography component='p' align='left'>
            This dog is a {Breed.Name}.
            It's owned by {Owner.Name}.
          </Typography>
        </CardContent>
        <CardActions>
          <Button dense color='primary'>
            Learn More
          </Button>
        </CardActions>
      </Card>
    );
  }
}

DogCard.fragments = {
  dog: gql`
    fragment DogOverview on Dog {
      Name
      Thumbnail
      Owner {
        Name
      }
      Breed {
        Name
      }
    }
  `
};

DogCard.propTypes = {
  dog: fragmentPropType(DogCard.fragments.dog).isRequired
};

export default withStyles(styles)(DogCard);
