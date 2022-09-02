import React from 'react';
import {
    useParams
  } from "react-router-dom";
import GaneshWishes from '../../components/GaneshWishes/GaneshWishes';

 
function withParams(Component:any) {
    return (props: any) => <Component {...props} params={useParams()} />;
  }

class WishesHomeShare extends React.Component<any, any> {
  constructor(props:any) {
    super(props);
    this.state = {date: new Date(),name: this.props.params.name};
  }

  componentDidMount(){
    console.log(this.props.params)
    // this.setState({
        
    // })
  }

  render() {
    return (
      <div>
        <GaneshWishes name={this.state.name} share={true}></GaneshWishes>
        {/* <h1>Hello, world!{this.state.name}</h1> */}
        {/* <h2>It is {this.state.date.toLocaleTimeString()}.</h2> */}
      </div>
    );
  }
}

export default withParams(WishesHomeShare);