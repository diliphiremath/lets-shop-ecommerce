import React from 'react';
import {
    useParams
  } from "react-router-dom";


function withParams(Component:any) {
    return (props: any) => <Component {...props} params={useParams()} />;
  }

class WishesHome extends React.Component<any, any> {
  constructor(props:any) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount(){
    console.log(this.props.params)
    this.setState({
        name: this.props.params.name
    })
  }

  render() {
    return (
      <div>
        <h1>Hello, world!{this.state.name}</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

export default withParams(WishesHome);