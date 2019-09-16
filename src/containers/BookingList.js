import React from 'react';
import NavBar from "../components/NavBar";
import MaterialTable from "material-table";
import axios from "axios";
import forwardRef from "react"
import ArrowUpward from '@material-ui/icons/ArrowUpward';
import Clear from '@material-ui/icons/Clear';
import FilterList from '@material-ui/icons/FilterList';
import Search from '@material-ui/icons/Search';


const tableIcons = {
  Filter: () => <FilterList  />,
  Search: () => <Search  />,
  ResetSearch: () => <Clear  />,
  SortArrow: () => <ArrowUpward  />,
  Clear: () => <Clear  />,

};


class BookingList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { bookings: [], user: "", isLoading:true , error: false };
  }

  loadData = () => {
    axios
      .get(
        "https://dev.tuten.cl/TutenREST/rest/user/contacto%40tuten.cl/bookings?current=true",
        {
          email: "contacto@tuten.cl",
          current: true,
          headers: {
            "Content-type": "application/json; charset=UTF-8",
            token: localStorage.getItem("token"),
            app: "APP_BCK",
            adminemail: localStorage.getItem("email")
          }
        },
        )
      .then(response =>  {
        this.setState({
          bookings: response.data,
          isLoading: false
        });
        console.log("asda",response.data);
      })
      .catch(err =>{ console.log(err)
        this.setState({
            isLoading: false,
            error: true
          });
        });
  };

  componentDidMount() {
     const user = localStorage.getItem("user");
    this.setState({ user }); 
    this.loadData();
  }

  
  render() {
    const { isLoading, error, bookings } = this.state;
    if (isLoading) {
      return <h1>Loading ...</h1>;
    }
    if (error) {
      return (
        <div>
          <NavBar /* name={this.user.firstname} */ />
          <h1>
            There was an error loading . ヾ"("＾∇＾")"
            <button onClick={this.loadData}>Try again</button>
          </h1>
        </div>
      );
    }
  
    return (
    
      <div>
        <NavBar props={this.props} />
        <MaterialTable
          icons={tableIcons}
          title="Bookings "
                   columns={[
            { title: "BookingID", field: "bookingId" },
            { title: "Clie", field: "lookup" , lookup: { name: "tutenUserClient.firstName",  last: "tutenUserClient.lastName" } },
            { title:  "nte", field: "tutenUserClient.lastName" , cellStyle: {
              paddingLeft: 0,
              color: '#FFF'
            }, },
            { title: "Fecha de Creación", field: "bookingTime", type: "datetime" },
            { title: "Dirección", field: "locationId.streetAddress" },
            { title: "Precio", field: "bookingPrice", type: "numeric" }
          ]}
          data={bookings}
          options={{
            paging: false
          }}
   
        ></MaterialTable>
      </div>
    );
  }
}

export default BookingList;
