import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      term: ''
    };
    this.search = this.search.bind(this);
    this.handleTermChange = this.handleTermChange.bind(this);
  }

  search(term){
    this.props.onSearch(this.state.term)
  }

  onKey(event){
    const e = event.which || event.keyCode;
    if(e === 13){
      this.search();
    }
  }

  handleTermChange(event){
    this.setState({term: event.target.value});
  }

  render(){
   return (
     <div className="SearchBar">
       <input onkeypress={this.onKey()} onChange={this.handleTermChange} placeholder="Enter A Song, Album, or Artist" />
       <a onClick={this.search}>SEARCH</a>
     </div>
   );
  }
}

export default SearchBar;
