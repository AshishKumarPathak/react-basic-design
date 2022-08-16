import React, {Component} from 'react';
import './vendorShow.scss'
import axios from 'axios';
import VendorMenu from '../vendorMenu/vendorMenu';
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import * as vendorShowActions from "../../store/vendorShow/actions";
export default class vendorShow extends Component {
     constructor(props) {
         super(props);
         this.state = {
          vendors : []
         };
     }

     componentDidMount() {
      axios.get("http://localhost:1111/showVendor")
      .then(response => {
        this.setState({
          vendors : response.data 
        })
        console.log(response.data)
      })
    
    }

    render() {
      const {vendors} = this.state
      return <div className="component-vendor-show">
        <VendorMenu/>
        <table border="3" align='center'>
      <tr>
        <th>Vendor Id</th>
        <th>Vendor Name</th>
        <th>Phone No</th>
        <th>UserName</th>
        <th>Password</th>
        <th>Email</th>
      </tr>
      {
        vendors.map( vendor => 
          <tr>
            <td>{vendor.venId}</td>
            <td>{vendor.venName}</td>
            <td>{vendor.venPhnNo}</td>
            <td>{vendor.venUsername}</td>
            <td>{vendor.venPassword}</td>
            <td>{vendor.venEmail}</td>
          </tr>
      )
      }
    </table>
      </div>;
    }
  }
// export default connect(
//     ({ vendorShow }) => ({ ...vendorShow }),
//     dispatch => bindActionCreators({ ...vendorShowActions }, dispatch)
//   )( vendorShow );