import React, {Component} from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Outlet
} from "react-router-dom";

import './menu.scss'
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import * as menuActions from "../../store/menu/actions";
export default class menu extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {};
    // }
    render() {
      return <div className="component-menu">
              {/* <Link to="/">First</Link>{' '}
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; */}
      {/* <Link to="/first">First</Link>

      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; */}
      

      <div id="navbar">
      <Link to="/customerDashboard" style={{ textDecoration: 'none' }}  className="tabs">My Profile</Link>
      
      <Link to="/showMenu" style={{ textDecoration: 'none' }} className="tabs">Show Menu</Link>
      
      <Link to="/customerWallet" style={{ textDecoration: 'none' }} className="tabs">Customer Wallet</Link>
      
      <Link to="/customerOrders" style={{ textDecoration: 'none' }} className="tabs">Customer Orders</Link>
      
      <Link to="/customerPendingOrders" style={{ textDecoration: 'none' }} className="tabs">Customer Pending Orders</Link>
      
      <Link to="/placeOrders" style={{ textDecoration: 'none' }} className="tabs">Place Order</Link>

      <Link to="/" className='tabs' id='logouttab'>Logout</Link>

      
      </div>
      {/* &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <Link to="/second">Second</Link>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <Link to="/third">Third</Link>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <Link to="/fourth">Fourth</Link>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <Link to="/fifth">Fifth</Link>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <Link to="/six">six</Link>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <Link to="/seven">seven</Link>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <Link to="/button">Button Example</Link>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <Link to="/multiForm">MultiForm Example</Link>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <Link to="/calc">Calculation</Link>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <Link to="/dropDown">DropDown Example</Link> */}

        </div>;
    }
  }
// export default connect(
//     ({ menu }) => ({ ...menu }),
//     dispatch => bindActionCreators({ ...menuActions }, dispatch)
//   )( menu );