import React, { Component } from "react";

/* Import Components */
import Text from "./components/text";
import Button from "./components/submit";
import Select from "./components/select";
//import Registrations from "./components/registrations";

class Container extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newUser: {
        firstname: "",
        lastname: "",
        npinum: "",
        address1: "",
        address2: "",
        city: "",
        state: "",
        zip: "",
        // address: {
        //     address1: "",
        //     address2: "",
        //     city: "",
        //     state: "",
        //     zip: "",
        //   },
        phone: "",
        email: ""
      },
      registrations: [],
      stateOptions: [ 'AL', 'AK', 'AS', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC', 'FM', 'FL', 'GA', 'GU', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MH', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'MP', 'OH', 'OK', 'OR', 'PW', 'PA', 'PR', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VI', 'VA', 'WA', 'WV', 'WI', 'WY' ]
    };

    this.handleText = this.handleText.bind(this); //Text controls
    this.handleState = this.handleState.bind(this); //Select State control
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);
  }

  handleText(e) {
    let value = e.target.value;
    let name = e.target.name;
    this.setState(
      prevState => ({
        newUser: {
          ...prevState.newUser,
          [name]: value
        }
      }),
    );
  }

  handleState(e) {
    let value = e.target.value;
    this.setState(
      prevState => ({
        newUser: {
          ...prevState.newUser,
          state: value
        }
      }),
    );
  }

  handleFormSubmit(e) {
    e.preventDefault();
    let userData = this.state.newUser;
    let registers = this.state.registrations.slice();
    console.log(userData);
    console.log(registers);
    registers.push(userData);

    this.setState({
        registrations: registers 
    })
    
    console.log(this.registrations);
  }

  handleClearForm(e) {
    e.preventDefault();
    this.setState({
      newUser: {
        firstname: "",
        lastname: "",
        npinum: "",
        address1: "",
        address2: "",
        city: "",
        state: "",
        zip: "",
        // address: {
        //     address1: "",
        //     address2: "",
        //     city: "",
        //     state: "",
        //     zip: "",
        //   },
        phone: "",
        email: ""
      }
    });
  }

  render() {
    return (
      <form className="container-fluid" onSubmit={this.handleFormSubmit}>
        {/* First Name */}
        <Text
          inputType={"text"}
          title={"First Name:"}
          name={"firstname"}
          value={this.state.newUser.firstname}
          placeholder={"Enter your first name"}
          handleChange={this.handleText}
        />{" "}
        {/* Last Name */}
        <Text
          inputType={"text"}
          title={"Last Name:"}
          name={"lastname"}
          value={this.state.newUser.lastname}
          placeholder={"Enter your last name"}
          handleChange={this.handleText}
        />{" "}
        {/* NPI Number */}
        <Text
          title={"NPI Number:"}
          name={"npinum"}
          options={this.state.npinum}
          value={this.state.newUser.npinum}
          placeholder={"Enter your NIP Number"}
          handleChange={this.handleText}
        />{" "}
        {/* Address 1 */}
        <Text
          title={"Address 1:"}
          name={"address1"}
          options={this.state.address1}
          value={this.state.newUser.address1}
          placeholder={"Enter first part of address"}
          handleChange={this.handleText}
        />{" "}
        {/* Address 2 */}
        <Text
          title={"Address 2:"}
          name={"address2"}
          options={this.state.address2}
          value={this.state.newUser.address2}
          placeholder={"Enter second part of address"}
          handleChange={this.handleText}
        />{" "}
        {/* City */}
        <Text
          title={"City:"}
          name={"city"}
          options={this.state.city}
          value={this.state.newUser.city}
          placeholder={"Enter city"}
          handleChange={this.handleText}
        />{" "}
        {/* Zip */}
        <Text
          inputType={"number"}
          title={"Zip Code:"}
          name={"zip"}
          options={this.state.zip}
          value={this.state.newUser.zip}
          placeholder={"Enter Zip code"}
          handleChange={this.handleText}
        />{" "}
        {/* State */}
        <Select
          title={"State"}
          name={"state"}
          options={this.state.stateOptions}
          value={this.state.newUser.state}
          placeholder={"Select State"}
          handleChange={this.handleState}
        />{" "}
        {/* Phone Number */}
        <Text
          inputType={"number"}
          title={"Phone Number:"}
          name={"phone"}
          value={this.state.newUser.phone}
          handleChange={this.handleText}
          placeholder={"Enter your phone number"}
        />
        {/* Phone Number */}
        <Text
          title={"Email Address:"}
          name={"email"}
          value={this.state.newUser.email}
          handleChange={this.handleText}
          placeholder={"Enter your email"}
        />
        {/* Submit */}
        <Button
          action={this.handleFormSubmit}
          type={"primary"}
          title={"Submit"}
          style={buttonStyle}
        />{" "}
        {/*Clear */}
        <Button
          action={this.handleClearForm}
          type={"secondary"}
          title={"Clear"}
          style={buttonStyle}
        />{" "}
        {/* Clear the form */}
        <hr/>
        <h3>Registrations:</h3>
        <ol>
            {this.state.registrations.map(user => (
                <li>
                    {user.firstname}, {user.lastname}, {user.npinum}
                </li>
            ))}
        </ol>
      </form>
    );
  }
}

const buttonStyle = {
  margin: "10px 10px 10px 10px"
};

export default Container;
