import React, {Component} from 'react';
import './showMenu.scss'
import Menu from '../menu/menu';
import  axios  from 'axios';
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import * as showMenuActions from "../../store/showMenu/actions";
export default class showMenu extends Component {
     constructor(props) {
         super(props);
         this.state = {
          menu:[]
         };
     }

     componentDidMount() {
      axios.get("http://localhost:1111/showMenu")
      .then(response => {
        this.setState({
          menu : response.data 
        })
        console.log(response.data)
      })
    
    }
    render() {
      const {menu} = this.state
      return <div className="component-show-menu">
        <Menu/>
        <table border="3" align='center' class="styled-table-menu">
          <thead>
      <tr>
        <th>Menu Id</th>
        <th>Item</th>
        <th>Price</th>
        <th>Calories</th>
        <th>Speciality</th>
      </tr></thead>
      
      {
        menu.map( customer => 
          <tr>
            <td>{customer.menId}</td>
            <td>{customer.menItem}</td>
            <td>{customer.menPrice}</td>
            <td>{customer.menCalories}</td>
            <td>{customer.menSpeciality}</td>
          </tr>
      )
      }
    </table>
      </div>;
    }
  }
// export default connect(
//     ({ showMenu }) => ({ ...showMenu }),
//     dispatch => bindActionCreators({ ...showMenuActions }, dispatch)
//   )( showMenu );