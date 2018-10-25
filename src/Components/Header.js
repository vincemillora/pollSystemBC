import React, { Component } from 'react';

class Header extends Component {  
    constructor() {
      super();
      this.state = {
        selectedId: 0,
      }
    }

    /* 
     * @details: Handles the function when Create Button is clicked.
     */
    handleCreate(e) {
      e.preventDefault();
      this.props.handleCreate(this.state.selectedId);
    }
  
    /* 
     * @details: Handles the function when Search Button is clicked.
     */
    handleSubmit(e) {
      e.preventDefault();
      this.setState({
      selectedId: this.refs.id.value}, ()=>{
        this.props.handleSelected(this.state.selectedId);
      });
    }

    /* 
     * @details: renders the view.
     */
    render() {  
      return (
        <nav>
          <div class="nav-wrapper navColor">
            <a href="#" class="brand-logo"> <img src="Poll.png"></img></a>
            <div>
                <button onClick={this.handleCreate.bind(this)} class="waves-effect grey darken-4 waves-light right btn-large">Create <i class="material-icons right">mode_edit</i> </button>
                <form onSubmit={this.handleSubmit.bind(this)}>
                  <button id="nav-mobile" class="waves-effect waves-light btn-large right grey darken-4" type="submit">Search <i class="material-icons right">search</i></button>
                  <div class="input-field-active inline right">
                    <input id="pollsearch" placeholder="Search Here..." type="text" class="validate _input" ref="id"></input>
                  </div>
                </form>
            </div>
          </div>
        </nav>
      );
    }
}

export default Header;