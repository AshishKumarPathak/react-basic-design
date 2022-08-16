import React, {Component} from 'react';
import './homePage.scss'
import {
  BrowserRouter,
  Link,
  Routes,
  Route,
  Outlet
}from "react-router-dom";
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import * as homePageActions from "../../store/homePage/actions";
export default class homePage extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {};
    // }
    render() {
      return <div className="component-home-page">
        <h2 id="header-new">Welcome To CAFE SUPREME</h2>
        <br/>
        <div id="navbar-home">
        <Link to="/login" className='hometab' >Customer Login</Link>
           
        <Link to="/vendorLogin" className='hometab' >Vendor Login</Link></div>
        <br/><br/><br/><br/><br/><br/><br/><br/>
        <div className='para'>
        <p>ONLINE FOOD ORDER SYSTEM is mainly designed primarily function for use in the food delivery industry. 
        This system will allow hotels and restaurants to increase online food ordering such type of business. The customers
         can be selected food menu items just few minutes. In the modern food industries allows to quickly and easily delivery
          on customer place. Restaurant employees then use these orders through an easy to delivery on customer place easy find
           out navigate graphical interface for efficient processing.In a modern generation Online food ordering is a mobility of food delivery or takeout from a local 
          restaurant or food cooperative. Now days the rapid growth in the use of internet and the technologies associated 
          with it, the several opportunities are coming up on the web or mobile application.  This  is  made  possible  
          through  the  use  of  electronic  payment  system.  The payment  can  be  done  through  the  customer’s  
          credit  card,  debit  card.  It  is  possible  for everyone to  order any  goods from  anywhere the internet 
          and have the  goods delivered  at his/her home. All types made be internet le transaction ads to the economic 
          of digital cash, the  necessary  tool  for  this  process  telecommunication  with  customers.</p></div>
      </div>;
      
    }
  }
// export default connect(
//     ({ homePage }) => ({ ...homePage }),
//     dispatch => bindActionCreators({ ...homePageActions }, dispatch)
//   )( homePage );