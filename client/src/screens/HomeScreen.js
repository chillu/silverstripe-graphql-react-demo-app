import React, { Component } from 'react';
import { gql, graphql, compose } from 'react-apollo';
import { withStyles } from 'material-ui/styles';
import { CircularProgress } from 'material-ui/Progress';
import DogCard from '../components/DogCard';

const styles = theme => ({
  progress: {
    margin: '100px'
  }
});

const DogQuery = gql`
query readDogs {
  readDogs {
    edges {
      node {
        ID
        Name
        Thumbnail
        Owner {
          Name
        }
        Breed {
          Name
        }
      }
    }
  }
}
`;

class HomeScreen extends Component {
  render () {
    const { classes, data: { loading, readDogs } } = this.props;

    if (loading) {
      return <CircularProgress className={classes.progress} />;
    }

    return readDogs.edges.map(edge => {
      return <DogCard {...edge.node} key={edge.node.ID} />;
    });
  }
}

export default compose(
  withStyles(styles),
  graphql(DogQuery)
)(HomeScreen);
