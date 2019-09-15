import React from "react";
import NavBar from "../components/NavBar";
import MaterialTable from "material-table";
import axios from "axios";

class BookingList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { bookings: [], user: "", isLoading: true , error:false};
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
            adminemail: localStorage.getItem("user_email")
          }
          /* query: { } */
        },
        console.log("token request", localStorage.getItem("token")),
        console.log("email request", localStorage.getItem("user_email"),)
      )
      .then(response => {
        console.log("response 1 ", response);
        return response.json();
      })
      .then(json => {
        this.setState({
		  bookings: JSON.parse(json.map(data =>({label:data.Name,value:data.value}))),
		  isLoading: false,

        });
        console.log("asda", json);
	  })
	  .catch(error => {
		this.setState({
			isLoading: false,
            error:true
		  });
	  })
  };

  componentDidMount() {
	const user = JSON.parse( localStorage.getItem( "user" ) );
	this.setState( { user } );
	console.log(user)
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
          There was an error loading .{" "}ヾ"("＾∇＾")"
          <button onClick={this.loadData}>Try again</button>
        </h1>
		</div>
      );
    }
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
          data={bookings}
        ></MaterialTable>
      </div>
    );
  }
}

export default BookingList;
