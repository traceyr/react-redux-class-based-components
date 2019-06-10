import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  //JS component. Overwrites React.Components contructor fnt. By calling super(props), references React.Components constructor fnt
  constructor(props) {
    super(props);

    //This is the only time we directly change state;
    this.state = { lat: null, errMsg: '' };
  }

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
       (position) => this.setState({ lat: position.coords.latitude }),
       (err) => this.setState({ errMsg: err.message })
     );
    // console.log('My component was rendered to the screen');
  }

  componentDidUpdate() {
    console.log('My component updated and render was called again.');
  }
  //React componment. MUST USE
  render() {
    console.log('yipee');
    if(this.state.errMsg && !this.state.lat) {
      return <div>Error: { this.state.errMsg }</div>
    } else if (!this.state.errMsg && this.state.lat){
      return <div>Latitude: { this.state.lat }</div>
    } else {
      return <div>Loading!</div>
    }
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
);
