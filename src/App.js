import React from 'react';
import './App.css';
import Profile from './Profile';


class App extends React.Component{
  state={
    isLoading:true,
    count : 0
  }
  
  add=() => {
    this.setState(current => ({count:current.count +1}));
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 500);
  }

  render(){
    const {isLoading, count}=this.state;
    return (
    <section className="container">
       {isLoading ? (
          <div className="loader">
            <span className="loader_text">Loading...</span>
            <h1>Count! Do Your Best!{this.state.count}</h1>
            <button onClick={this.add}>CLICK</button>
            {/* <button onClick={this.minus}>Minus</button> */}
          </div>
        ) : (
          <div className="profilePage">
          <h2>Your Count Is {count}</h2>
          <Profile />
          </div>
        )}

    </section>)
  }
}

export default App;