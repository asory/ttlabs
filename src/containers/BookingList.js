import React from "react";
import NavBar from "../components/NavBar";
import MaterialTable from "material-table";
import axios from "axios";

class BookingList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { bookings: [], user: "" };
  }

  fillData = () => {
    axios
      .get(
        "https://dev.tuten.cl/TutenREST/rest/user/contacto%40tuten.cl/bookings?current=true",
        {
          email: "contacto@tuten.cl",
          headers: {
            "Content-type": "application/json; charset=UTF-8",
            token: localStorage.getItem.token,
            app: "APP_BCK",
            adminemail: this.state.user.email
          },
          query: { current: true }
        }
      )
      .then(response => {
		console.log("response 1 ", response)

		return response.json();

      })
      .then(json => {
        this.setState({
		  bookings: json
		});
		console.log("asda", json)
      });
  };

  componentDidMount() {
    let user = localStorage.getItem("user");
	this.setState({user:user});
	console.log("AQUI USER", user)
	console.log("AQUI firstname ", user.firstname)

    this.fillData();
  }

  render() {
    return (
      <div>
        <NavBar /* name={this.user.firstname} */ />
       <MaterialTable
          title="Bookings "
          columns={[
            { title: "BookingID", field: "bookingId" },
            { title: "Cliente", field: "Name " },
            { title: "Fecha de Creación", field: "BookingTime", type: "date" },
            { title: "Dirección", field: "streetAddress" },
            { title: "bookingPrice", field: "Precio", type: "numeric" }
          ]}
          data={this.state.bookings}
        ></MaterialTable> 
      </div>
    );
  }
}

export default BookingList;
