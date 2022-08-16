import React, {Component} from 'react';
import { withRouter } from '../../withRouter';
import './vendorLogin.scss'
import axios from 'axios';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Outlet
} from "react-router-dom";
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import * as vendorLoginActions from "../../store/vendorLogin/actions";
export class vendorLogin extends Component {
     constructor(props) {
         super(props);
         this.state = {
          userName:'',
          passWord:'',
          result : ''
         };
     }

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
    venlogin = () => {
      let venuser = this.state.userName
      let venpwd = this.state.passWord
      axios.get("http://localhost:1111/vendorAuthenticate/"+venuser+"/"+venpwd)
      .then(response => {
        if (response.data=='1') {
          localStorage.setItem("vuser",venuser)
          this.props.navigate("/vendorDashboard")
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


    render() {
      return <div className="component-vendor-login">
        <div id="navbar-vlogin"><Link to="/" className='tabs' id='logouttab-vlogin'>&laquo; Back</Link></div>
        <table border="3" align='center' class="styled-table-venlogin">
          <thead>
            <tr>
              <th colSpan="2" align="center">
                Vendor Login
              </th>
            </tr></thead>
            
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
                <input type="button" value="Login" onClick={this.venlogin} id="btn-v"/>
              </th>
            </tr>
            </table>
      </div>;
    }
  }
  export default withRouter(vendorLogin);
// export default connect(
//     ({ vendorLogin }) => ({ ...vendorLogin }),
//     dispatch => bindActionCreators({ ...vendorLoginActions }, dispatch)
//   )( vendorLogin );