import React, {Component} from 'react';
import './vendorPendingOrders.scss'
import axios from 'axios';
import VendorMenu from '../vendorMenu/vendorMenu';
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import * as vendorPendingOrdersActions from "../../store/vendorPendingOrders/actions";
export default class vendorPendingOrders extends Component {
     constructor(props) {
         super(props);
         this.state = {
          orders: []
         };
     }

    componentDidMount(){
      let vid = localStorage.getItem("vid")
      axios.get("http://localhost:1111/vendorPendingOrders/"+vid)
      .then(response => {
        this.setState({
          orders : response.data
        })
        console.log(response.data)
      })
     }

    render() {
      const {orders} = this.state
      return <div className="component-vendor-pending-orders">
        <VendorMenu/>
        <table border="3" align="center" class="styled-table-venpenord">
          <thead><tr>
            <th>Order Id</th>
            <th>Customer Id</th>
            <th>Menu Id</th>
            <th>Vendor Id</th>
            <th>Wallet Source</th>
            <th>Order Quantity</th>
            <th>Bill Amount</th>
            <th>Order Status</th>
            <th>Order Comments</th>
          </tr>
          </thead>
          
          {
            orders.map( order =>
              <tr>
                <td>{order.ordId}</td>
                <td>{order.cusId}</td>
                <td>{order.menId}</td>
                <td>{order.venId}</td>
                <td>{order.walSource}</td>
                <td>{order.ordQuantity}</td>
                <td>{order.ordBillamount}</td>
                <td style={{'color': order.ordStatus === 'ACCEPTED' ? 'green' : order.ordStatus === 'DENIED' ? 'red' : 'violet'}}>{order.ordStatus}</td>
                <td>{order.ordComments}</td>
              </tr>
              )
          }
        </table>
        
      </div>;
    }
  }
// export default connect(
//     ({ vendorPendingOrders }) => ({ ...vendorPendingOrders }),
//     dispatch => bindActionCreators({ ...vendorPendingOrdersActions }, dispatch)
//   )( vendorPendingOrders );