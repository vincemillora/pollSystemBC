import React, { Component } from 'react';
import M from 'materialize-css';
import { Progress } from 'react-sweet-progress';

class HomePage extends Component {
  render() {
    return (
      <div className="body">
        <h1 className="title">Title</h1>
        <div>
          <p className="creator">Creator</p>
          <p className="date">Date</p>
        </div>
        <p className="description"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultrices in iaculis nunc sed. Arcu dictum varius duis at. Viverra adipiscing at in tellus integer. Accumsan sit amet nulla facilisi. Aliquet eget sit amet tellus cras adipiscing enim. Dictum fusce ut placerat orci nulla. Ipsum dolor sit amet consectetur adipiscing elit duis. Neque convallis a cras semper auctor neque. Ipsum a arcu cursus vitae congue. Volutpat est velit egestas dui. Odio ut sem nulla pharetra diam sit amet nisl suscipit. Habitant morbi tristique senectus et. Leo vel fringilla est ullamcorper eget nulla facilisi. Orci nulla pellentesque dignissim enim. Ut tortor pretium viverra suspendisse potenti. Netus et malesuada fames ac. Elementum nibh tellus molestie nunc non blandit massa enim nec. Sit amet commodo nulla facilisi nullam vehicula ipsum a arcu. Tincidunt praesent semper feugiat nibh sed pulvinar. Faucibus scelerisque eleifend donec pretium vulputate sapien nec sagittis aliquam. Tempor orci dapibus ultrices in iaculis. Duis convallis convallis tellus id interdum. Nullam vehicula ipsum a arcu cursus. Condimentum vitae sapien pellentesque habitant morbi tristique senectus et netus. Elementum tempus egestas sed sed risus pretium quam vulputate. Pretium lectus quam id leo in vitae turpis. Non odio euismod lacinia at quis risus sed vulputate. Metus vulputate eu scelerisque felis imperdiet proin fermentum. Urna neque viverra justo nec. Luctus accumsan tortor posuere ac ut. Interdum velit laoreet id donec. Etiam dignissim diam quis enim. </p>
        <div class="divider"></div>
          <div className="pollArea">
            <button class="btn right green waves-effect waves-light" type="submit" name="action">Add
              <i class="material-icons right">add</i>
            </button>
            <div className="candidates">
              <table>
                <tr>
                  <th width="5%"><button class="btn-floating btn-small waves-effect waves-light red left" type="submit" name="action">Vote</button></th>
                  <th><Progress theme={{active: {color: '#ff5722', symbol: 'Name'}}} percent={69}/></th>
                </tr>
                <tr>
                  <th width="5%"><button class="btn-floating btn-small waves-effect waves-light red left" type="submit" name="action">Vote</button></th>
                  <th><Progress theme={{active: {color: '#ff5722', symbol: 'Name'}}} percent={69}/></th>
                </tr>
                <tr>
                  <th width="5%"><button class="btn-floating btn-small waves-effect waves-light red left" type="submit" name="action">Vote</button></th>
                  <th><Progress theme={{active: {color: '#ff5722', symbol: 'Name'}}} percent={69}/></th>
                </tr>
              </table>  
            </div>
          </div>
      </div>
    )
  }
}
export default HomePage;