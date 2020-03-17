import React from 'react';
import git from '../api/git';
import SearchBar from './SearchBar';

class App extends React.Component {

  state = { data: [] };

  onSearchSubmit = async (term) => {
    const response = await git.get(`/users/${term}`);
      // .then((response) => {
      // we can use then method also to set response in state
      //   this.setState({ images: response.data.results });
      // })
      debugger
      this.setState({ data: response.data.results });
  }

  render(){
    return (
      <div className="ui container" style={{ marginTop: '10px' }}>
        <SearchBar searchText={this.onSearchSubmit}/>
        Found: {this.state.data.length} images
      </div>
    )
  }
}

export default App;