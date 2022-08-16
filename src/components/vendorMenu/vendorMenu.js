import React, {Component} from 'react';
import './vendorMenu.scss'
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Outlet
} from "react-router-dom";
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import * as vendorMenuActions from "../../store/vendorMenu/actions";
export default class vendorMenu extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {};
    // }
    render() {
      return <div className="component-vendor-menu" class="style-menu">
        <div id="navbar1">
      <Link to="/vendorDashboard" className='tabs1' >Vendor Dashboard</Link>
      
      <Link to="/vendorOrders" className='tabs1' >Vendor Orders</Link>
      
      <Link to="/vendorPendingOrders" className='tabs1' >Vendor Pending Orders</Link>
      
      <Link to="/acceptorReject" className='tabs1' >Accept or Reject Order</Link>

      <Link to="/" className='tabs1' id="logouttab1">Logout</Link>
      </div>
      </div>;
    }
  }
// export default connect(
//     ({ vendorMenu }) => ({ ...vendorMenu }),
//     dispatch => bindActionCreators({ ...vendorMenuActions }, dispatch)
//   )( vendorMenu );