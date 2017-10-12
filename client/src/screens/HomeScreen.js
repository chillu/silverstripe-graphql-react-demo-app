import React, { Component } from 'react';
import { gql, graphql } from 'react-apollo';
import List, { ListItem, ListItemText } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import MoodIcon from 'material-ui-icons/Mood';

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
  render() {
    const { data: { loading, readDogs} } = this.props;

    if (loading) {
      return 'Loading';
    }

    const dogs = readDogs.edges.map(edge => {
      const dog = edge.node;
      const icon = dog.Thumbnail ? null : <MoodIcon />;
      return (
        <ListItem key={edge.node.ID}>
          <Avatar src={dog.Thumbnail}>
            {icon}
          </Avatar>
          <ListItemText
            primary={dog.Name}
            secondary={dog.Breed.Name}
          />
        </ListItem>
      );
    });
    return (
      <List>
        {dogs}
      </List>
    );
  }
}

export default graphql(DogQuery)(HomeScreen);
