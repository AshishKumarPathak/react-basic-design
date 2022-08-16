import React, {Component} from 'react';
import './customerDashBoard.scss'
import Menu from '../menu/menu';
import axios from 'axios';
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import * as customerDashBoardActions from "../../store/customerDashBoard/actions";
export default class customerDashBoard extends Component {
    constructor(props) {
        super(props);
        this.state = {
          customer : {}
        };
    }
    componentDidMount() {
      let user = localStorage.getItem("cuser")
      axios.get("http://localhost:1111/searchByUser/"+user)
      .then(response => {
        this.setState({
          customer : response.data
        })
        console.log(response.data)
        localStorage.setItem("cid",response.data.cusId);
   //     alert(localStorage.getItem("cid"))
      })
    }
    render() {
      const {customer} = this.state
      return <div className="component-customer-dash-board">
        <Menu></Menu>
        <table border="2" align="center" class="styled-table-dash">
        <thead><tr>
            
            <td colSpan="2">Customer Info</td>
          </tr></thead>
          <tr>
            <th>Customer Id :</th>
            <td>{customer.cusId}</td>
          </tr>
          <tr>
            <th>Customer Name :</th>
            <td>{customer.cusName}</td>
          </tr>
          <tr>
            <th>Customer Phone No :</th>
            <td>{customer.cusPhnNo}</td>
          </tr>
          <tr>
            <th>Customer User Name :</th>
            <td>{customer.cusUsername}</td>
          </tr>
          <tr>
            <th>Customer Password :</th>
            <td>{customer.cusPassword}</td>
          </tr>
          <tr>
            <th>Customer Email :</th>
            <td>{customer.cusEmail}</td>
          </tr>
        </table>
        </div>;
    }
  }
// export default connect(
//     ({ customerDashBoard }) => ({ ...customerDashBoard }),
//     dispatch => bindActionCreators({ ...customerDashBoardActions }, dispatch)
//   )( customerDashBoard );