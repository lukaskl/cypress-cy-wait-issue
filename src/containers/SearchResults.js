import React, { Component } from 'react';
import axios from 'axios';
import cache from '../cache';

export const client = axios.create({
  baseURL: 'http://www.example.com',
  headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
  responseType: 'json',
});

class SearchResults extends Component {

  async getSearchResults() {

    try {

      let searchIdResponse = cache['searchIdResponse']

      if (!searchIdResponse) {
        searchIdResponse = await client.post('api/getSearchId', {
          testParam: 'testParamValue'
        });
        cache['searchIdResponse'] = searchIdResponse;
      }

      this.setState({ searchIdResponse: searchIdResponse.data })

      let searchResultsResponse = cache['searchResultsResponse']
      if (!searchResultsResponse) {
        const searchId = searchIdResponse.data.searchId;
        searchResultsResponse = await client.post('api/getSearchResults', { searchId });
        cache['searchResultsResponse'] = searchResultsResponse;
      }

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
