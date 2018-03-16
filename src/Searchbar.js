import React from 'react';

class SearchBar extends React.Component{
  constructor(props){
    super(props);
    this.state={
      term:''
    }
  }
  onInputChange(term){
     this.setState({
      term

     });
     this.props.onSearchTeamChange(term);
  }
  render(){
    return(
      <div className="search-bar">
         <h3> Youtube Search bar</h3>
        <input 
         placeholder={this.props.placeholder}
         value={this.state.term}
         onChange={event=>this.onInputChange(event.target.value)}
        />
      </div>
    )
  }
}
SearchBar.defaultProps = {  
  placeholder: "Please enter search keyword"  
    
} 
export default SearchBar;