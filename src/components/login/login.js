import React, {Component} from 'react';
import { withRouter } from '../../withRouter';
import './login.scss'
import  axios  from 'axios';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Outlet
} from "react-router-dom";

// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import * as loginActions from "../../store/login/actions";
export  class login extends Component {
   
  changeUserName(event) {  
    this.setState({  
        userName: event.target.value
    });  
  }
  changePassword(event) {  
    this.setState({  
        passWord: event.target.value
    });  
  }
  login = () => {
    let user = this.state.userName
    let pwd = this.state.passWord
    axios.get("http://localhost:1111/custAuthenticate/"+user+"/"+pwd)
    .then(response => {
      if (response.data=='1') {
        localStorage.setItem("cuser",user)
        this.props.navigate("/customerDashboard")
      }
     // alert(response.data)
     // result = response.data
      // this.setState({
      //   customers : response.data 
      // })
      console.log(response.data)
    })
    // if (this.state.userName=="Hexaware" && this.state.passWord=="Hexaware") {
    //   //alert("Correct Credentails...");
    //   this.props.navigate("/menu")
    // } else {
    //   alert("Invalid Credentials...")
    // }
  }
  constructor(props) {
        super(props);
        this.state = {
          userName:'',
          passWord:'',
          result : ''
        };
    }
    render() {
      return <div className="component-login">
        <div id="navbar-login"><Link to="/" className='tabs' id='logouttab-login'>&laquo; Back</Link></div>
          <table border="3" align='center' class="styled-table-login">
            <thead>
            <tr>
              <th colSpan="2">
                Customer Login 
              </th>
            </tr>
            </thead>
            
            <tr>
              <th>User Name </th>
              <td>
              <input type="text" id="userName"
                 value={this.state.userName} 
                 onChange={this.changeUserName.bind(this)} />
              </td>
            </tr>
            <tr>
              <th>Password</th>
              <td>
                <input type="password" id="passWord"
                   value={this.state.passWord}
                   onChange={this.changePassword.bind(this)} />
              </td>
            </tr>
            <tr>
              <th colSpan="2">
                <input type="button" value="Login" onClick={this.login} id="btn-l"/>
              </th>
            </tr>
            </table>
            
            
            
        </div>;
    }
  }
  export default withRouter(login);
// export default connect(
//     ({ login }) => ({ ...login }),
//     dispatch => bindActionCreators({ ...loginActions }, dispatch)
//   )( login );