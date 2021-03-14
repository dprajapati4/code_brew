import React from "react";
import { sendSms } from "../helper-function/sendSms";

export default class Invite extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      phoneNumber: "",
      showForm: false,
      submitted: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // TODO: add modal
  async sendMessage(event) {
    try {
      // const sentMessage = await sendSms(this.state.phoneNumber);
      // if (sentMessage) {
       this.setState({ submitted: false, phoneNumber: "" });

      // }
    } catch (error) {
      console.log("error in invite sendMessage", error);
    }
  }

  handleChange(event) {
    event.preventDefault();
    this.setState({ [event.target.name]: event.target.value });
  }

  async handleSubmit(event) {
    event.preventDefault();
    this.setState({ submitted: true, showForm: false }); // show user that message is sending
       setTimeout(() => this.sendMessage(this.state.phoneNumber), 1500);
    // try {
    // } catch (error) {
    //   console.log("error in invite handleSubmit", error);
    // }
  }

  render() {
    const { showForm, submitted } = this.state;
    console.log("_____INVITE STATE_____", this.state);
    return (
      <div id="mo">
        <h4>Invite A Friend</h4>
        {showForm ? (
          <form onSubmit={this.handleSubmit}>
            <input
              name="phoneNumber"
              value={this.state.phoneNumber}
              onChange={this.handleChange}
              placeholder="+123456789"
            />
            <input type="submit" value="Invite" />
          </form>
        ) : (
          <img
            src="http://clipart-library.com/images/di48x8LAT.jpg"
            alt="coffee cup"
            width="50"
            height="50"
            onClick={() => {
              this.setState({ showForm: true });
            }}
          />
        )}
        {submitted && <div> Sending your friend an invite :D </div>}
      </div>
    );
  }
}
