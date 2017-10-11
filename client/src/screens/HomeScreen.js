import React, { Component } from 'react';
import { gql, graphql } from 'react-apollo';

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
      return <li key={edge.node.ID}>{edge.node.Name}</li>;
    });
    return (
      <ul>
        {dogs}
      </ul>
    );
  }
}

export default graphql(DogQuery)(HomeScreen);
