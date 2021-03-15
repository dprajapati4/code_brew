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
    return (
      <div className="fl w-25 tc">
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
            src="https://media.istockphoto.com/vectors/friends-drink-coffee-icon-elements-of-friendship-in-neon-style-icons-vector-id1093810888?k=6&m=1093810888&s=170667a&w=0&h=R1nYdtCqu7KbDUnYnMkhcylljFnOg1s8ncloBK0JONc="
            alt="coffee cup"
            className="br1 h3 w3 dib"
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
