import React, {Component} from 'react';

class SomethingRandom extends Component {
  render() {
    return(
      <div className='SomethingRandom'>
        <h1>Look mom, I made a react app!</h1>
        <p>Yeah, and he made it say, "{ this.props.itSays }"!</p>
      </div>
    );
  }
}

export default SomethingRandom;