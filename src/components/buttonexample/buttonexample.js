import React, {Component} from 'react';
import './buttonexample.scss'
import Menu from '../menu/menu';
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import * as buttonexampleActions from "../../store/buttonexample/actions";
export default class buttonexample extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {};
    // }
    prathameshEvent = () => {
      alert("Hi I am Prathamesh...")
    }

    pranavEvent = () => {
      alert("Hi I am Pranav...")
    }
    priyaEvent = () => {
      alert("Hi I am Priya...")
    }
    render() {
      return <div className="component-buttonexample">
     <Menu></Menu>
     <input type="button" onClick={this.prathameshEvent} 
              value="Saurabh" />                  
      &nbsp;&nbsp;&nbsp;
      <input type="button" value="Girish" onClick={this.pranavEvent} />
      &nbsp;&nbsp;&nbsp;
      <input type="button" value="Priya" onClick={this.priyaEvent} />
        </div>
    }
  }
// export default connect(
//     ({ buttonexample }) => ({ ...buttonexample }),
//     dispatch => bindActionCreators({ ...buttonexampleActions }, dispatch)
//   )( buttonexample );