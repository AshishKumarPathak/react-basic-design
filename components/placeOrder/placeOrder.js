import React, {Component} from 'react';
import './placeOrder.scss'
import Menu from '../menu/menu';
import { withRouter } from '../../withRouter';
import axios from 'axios';
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import * as placeOrderActions from "../../store/placeOrder/actions";
export  class placeOrder extends Component {
     constructor(props) {
         super(props);
         let cid = localStorage.getItem("cid");
         this.state = {
          customerId:cid,
          menuId:'',
          vendorId:'',
          walSource:'',
          qty:'',
          comments:'',
          wallets:[]
         };
     }
     changeCustomerId(event) {  
      this.setState({  
          customerId : event.target.value
      });
    }  

      changeVendorId(event) {  
        this.setState({  
            vendorId : event.target.value
        });  
      }

      changeMenuId(event) {  
        this.setState({  
            menuId : event.target.value
        });  
      }

      changeWalSource(event){  
        this.setState({  
            walSource : event.target.value
        });  
      }

      changeQty(event){  
        this.setState({  
            qty : event.target.value
        });  
      }

      changeComments(event){  
        this.setState({  
            comments : event.target.value
        });  
      }

      placeOrd = () => {
        axios.post('http://localhost:1111/placeOrder',
      { cusId: this.state.customerId, venId: this.state.vendorId, 
        menId: this.state.menuId, walSource: this.state.walSource, 
        ordQuantity: this.state.qty, ordComments: this.state.comments },)
      .then(res => {
        console.log(res);
        console.log(res.data);
        this.state.result = res.data
        alert(res.data)
      })
      }

      componentDidMount(){
        axios.get('http://localhost:1111/getallwalletsource/'+this.state.customerId)
        .then(response=>{
          this.setState({
            wallets: response.data
          })
        })
      }
      

    render() {
      const {wallets} = this.state;

      let walletList = wallets.length > 0
		  && wallets.map((item) => {
		    return (
			    <option value={item}>{item}</option>
		    )
	    }, this);
      return <div className="component-place-order">
        <Menu/>
        <table border="3" align="center" class="styled-table-place">
          <thead>
        <tr>
          <th colSpan="2">Place Order</th>
        </tr>
        </thead>
        
        <tr>
          <th>Customer Id</th>
          <td><input type="text" id="customerId" value={this.state.customerId} onChange={this.changeCustomerId.bind(this)}></input></td>
        </tr>
        <tr>
          <th>Menu Id</th>
          <td><input type="text" id = "menuId" value={this.state.menuId} onChange={this.changeMenuId.bind(this)}></input></td>
        </tr>
        <tr>
          <th>Vendor Id</th>
          <td><input type="text" id = "vendorId" value={this.state.vendorId} onChange={this.changeVendorId.bind(this)}></input></td>
        </tr>
        <tr>
          <th>Select Wallet</th>
          <td><select onChange = {this.changeWalSource.bind(this)}>
              {walletList}
            </select></td>
          {/* <td><input type="text" id="walSource" value={this.state.walSource} onChange={this.changeWalSource.bind(this)}></input></td> */}
        </tr>
        <tr>
          <th>Order Quantity</th>
          <td><input type="text" id="qty" value={this.state.qty} onChange={this.changeQty.bind(this)}></input></td>
        </tr>
        <tr>
          <th>Order Comments</th>
          <td><input type="text" id="comments" value={this.state.comments} onChange={this.changeComments.bind(this)}></input></td>
        </tr>
        <tr>
          <td colSpan="3"><input type="button" value="PlaceOrder" onClick={this.placeOrd} id="btn"></input></td>
        </tr>
        </table>
        </div>;
    }
  }
  export default withRouter(placeOrder);
// export default connect(
//     ({ placeOrder }) => ({ ...placeOrder }),
//     dispatch => bindActionCreators({ ...placeOrderActions }, dispatch)
//   )( placeOrder );