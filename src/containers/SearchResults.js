import React, { Component } from 'react';
import axios from 'axios';

export const client = axios.create({
  baseURL: 'http://www.example.com',
  headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
  responseType: 'json',
});

class SearchResults extends Component {

  async getSearchResults() {
    try {
      const searchIdResponse = await client.post('/getSearchId', {
        testParam: 'testParamValue'
      });

      this.setState({ searchIdResponse: searchIdResponse.data })
      const searchId = searchIdResponse.data.searchId;

      const searchResultsResponse = await client.post('/getSearchResults', { searchId });
      this.setState({ searchResults: searchResultsResponse.data })
    } catch (err) {
      this.setState({ err: err.message })
    }
  }

  componentWillMount() {
    this.getSearchResults();
  }

  render() {

    return (
      <div>
        <h1>SearchResults</h1>
        <div>{JSON.stringify(this.state)}</div>
      </div>
    );
  }

}

export default SearchResults;
