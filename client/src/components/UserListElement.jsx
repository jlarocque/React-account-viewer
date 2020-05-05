import React from 'react';
import {FlippingCard, FlippingCardFront, FlippingCardBack} from 'react-ui-cards'

export default function UserListElement(props) {
  return (
    <div>
      <FlippingCard>
        <FlippingCardBack>
        <div>Employer: {props.user.employer}</div>
        <div>Email: {props.user.email}</div>
        <div>Phone: {props.user.phone}</div>
        <div>Address: {props.user.address}</div>
        <div>Comments: {props.user.comments}</div>
        <div>Created At: {props.user.created}</div>
        <div>Tags {props.user.tags}</div>
  	  </FlippingCardBack>
  	  <FlippingCardFront>
        <img src={props.user.picture} alt="Profile Picture" style={{width: 150, height: 180}}></img>
        <div>Name: {props.user.name_first + ' ' + props.user.name_last}</div>
        <div>Id: {props.user.id}</div>
        <div>Balance: {props.user.balance}</div>
        <div>Credit Score: {props.user.credit}</div>
  	  </FlippingCardFront>
  </FlippingCard>
    </div>
  )
}