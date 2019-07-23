import React from 'react';
import './bootstrap.min.css'

class Twitter extends React.Component {
    constructor(props) {
      super(props);
     this.state = {
         value: 0
     }
     this.inc=this.inc.bind(this);
    }
    inc(){
        this.setState({value: this.state.value + 1})
    }
    
  
    render() {
      return (
        <div>
            <div class="dropdown">
  <a class="btn" href="javascript:void(0)" onClick={this.inc} role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
  <span className="fas fa-user"></span> {this.state.value}
  </a>

  <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
    <a class="dropdown-item" href="#" onClick={this.inc}>Retweet Alone</a>
    <a class="dropdown-item" href="#" onClick={this.inc}>Retweet with post</a>
  </div>
</div>
        </div>

      );
    }
  }

  export default Twitter;