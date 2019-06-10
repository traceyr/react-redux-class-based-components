import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './seasonDisplay';
import Spinner from './Spinner';

class App extends React.Component {
  state = { lat: null, errMsg: '' };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
       (position) => this.setState({ lat: position.coords.latitude }),
       (err) => this.setState({ errMsg: err.message })
     );
  }

  renderContent() {
    if(this.state.errMsg && !this.state.lat) {
      return <div>Error: { this.state.errMsg }</div>
    } else if (!this.state.errMsg && this.state.lat){
      return <SeasonDisplay lat={ this.state.lat }/>
    } else {
      return <div><Spinner message="Please accept location request"/></div>
    }
  }
  //React componment. MUST USE
  //No css for this class. Just removing multiple returns from render. showing how to add one property no matter what is rendered.
  render() {
    return (
      <div className="border red">
        {this.renderContent()}
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
);
