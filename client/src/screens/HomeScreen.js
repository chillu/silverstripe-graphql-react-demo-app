import React, { Component } from 'react';
import { gql, graphql } from 'react-apollo';
import List, { ListItem, ListItemText } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import FolderIcon from 'material-ui-icons/Folder';

const DogQuery = gql`
query readDogs {
  readDogs {
    edges {
      node {
        ID
        Name
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
      return (
        <ListItem key={edge.node.ID}>
          <Avatar>
            <FolderIcon />
          </Avatar>
          <ListItemText primary={edge.node.Name} />
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
