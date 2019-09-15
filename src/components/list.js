import React from 'react';
import { List, Typography, Divider, Avatar,ListItemAvatar,ListItemText,ListItem } from '@material-ui/core';

class BookingList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {bookings: []};
	}
	
	componentDidMount() {
		fetch('https://dev.tuten.cl/TutenREST/rest/user/contacto%40tuten.cl/bookings?current=true', {
			method: 'POST',
			body: JSON.stringify({
				title: 'New title added',
				body: 'New body added. Hello body.',
				userId: 2
			}),
			headers: {
				"Content-type": "application/json; charset=UTF-8",
				"Authorization": localStorage.getItem.token
			}
		}).then(response => {
				return response.json()
			}).then(json => {
				this.setState({
					booking:json
				});
			});
	}
	render() {                            
		return (
<div>
			<List>
			<ListItem alignItems="flex-start">
			  <ListItemText
				primary="Brunch this weekend?"
				secondary={
				  <React.Fragment>
					<Typography
					  component="span"
					  variant="body2"
					  color="textPrimary"
					>
					  Ali Connors
					</Typography>
					{" — I'll be in your neighborhood doing errands this…"}
				  </React.Fragment>
				}
			  />
			</ListItem>
			<Divider variant="inset" component="li" />
			</List>
			
				<p><b>New Resource created in the server as shown below</b></p>
				<t>BookingId: {this.state.TutenBooking.bookingId }</t>
				<th>Cliente : {this.state.TutenUser.firstName }{this.state.TutenUser.lastName}</th>
				<th>Fecha de Creación : {this.state.TutenBooking.bookingTime}</th>
				<th>Dirección : {this.state.TutenLocation.streetAddress}</th>
                <th>bookingPrice: {this.state.booking.bookingPrice}</th>
			</div>
		)
	}
}

export default BookingList;
