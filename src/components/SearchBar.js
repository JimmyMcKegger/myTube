import React from 'react';

class SearchBar extends React.Component {
  state = { term: '' };

  onInputChange = event => {
    this.setState({ term: event.target.value});
  };

  onFormSubmit = event => {
    //console.log(`searching for ${this.state.term}`)
    event.preventDefault();
    
    this.props.onFormSubmit(this.state.term);
  };

  render() {
    return (<div className="searb-bar ui segment">
            <form onSubmit={this.onFormSubmit} className="ui form">
              <div className="field">
                <label>Video Search</label>
                 <input 
                 type="text" 
                 placeholder='Search'
                 value={ this.state.term }
                 onChange={ this.onInputChange }

                 />
              </div>
            </form>
          </div>
    );
  }
}
export default SearchBar