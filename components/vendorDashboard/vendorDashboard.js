import React, {Component} from 'react';
import './vendorDashboard.scss'
import VendorMenu from '../vendorMenu/vendorMenu';
import axios from 'axios';
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import * as vendorDashboardActions from "../../store/vendorDashboard/actions";
export default class vendorDashboard extends Component {
     constructor(props) {
         super(props);
         this.state = {
          vendor : {},
          acceptcount:0
         };
     }
     componentDidMount() {
      let venuser = localStorage.getItem("vuser")
      axios.get("http://localhost:1111/searchByVendor/"+venuser)
      .then(response => {
        this.setState({
          vendor : response.data
        })
        console.log(response.data)
        localStorage.setItem("vid",response.data.venId);
   //     alert(localStorage.getItem("cid"))
      })
      axios.get("http://localhost:1111/showCount/"+localStorage.getItem("vid"))
      .then(response=>
        this.setState({
          acceptcount: response.data
          
        })
        )
    }
    render() {
      const {vendor} = this.state
      let count = this.state.acceptcount
      return <div className="component-vendor-dashboard">
        <VendorMenu/>
        <br/>
        <table border="3" class="styled-table-vendash" align="center">
        <thead>
          <tr><td colSpan="2">Vendor Info</td></tr>
        </thead>
        
        <tr>
          <th>Vendor Id</th>
          <td>{vendor.venId}</td>
        </tr>
        <tr>
          <th>Vendor Name</th>
          <td>{vendor.venName}</td>
        </tr>
        <tr>
          <th>Vendor Phone No</th>
          <td>{vendor.venPhnNo}</td>
        </tr>
        <tr>
          <th>Vendor User Name</th>
          <td>{vendor.venUsername}</td>
        </tr>
        <tr>
          <th>Vendor Password</th>
          <td>{vendor.venPassword}</td>
        </tr>
        <tr>
          <th>Vendor Email</th>
          <td>{vendor.venEmail}</td>
        </tr>
        
        </table>
        <h3 style={{color:"green"}}>Congratulations.!, {vendor.venName} you successfully completed {count} orders..!</h3>
        
      </div>;
    }
  }
// export default connect(
//     ({ vendorDashboard }) => ({ ...vendorDashboard }),
//     dispatch => bindActionCreators({ ...vendorDashboardActions }, dispatch)
//   )( vendorDashboard );