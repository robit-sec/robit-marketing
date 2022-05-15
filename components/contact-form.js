import "../styles/index.css";
import React from "react";
import axios from "axios";

class ContactForm extends React.Component {
  state = {
    name: "",
    email: "",
    comments: "",
    showNameFieldMessage: false,
    showEmailFieldMessage: false,
    showCommentsFieldMessage: false,
    showFormSuccessMessage: false,
    showFormFailureMessage: false,
  };

  setFormField = (e) => {
    e.preventDefault();

    switch (e.target.id) {
      case "name":
        this.setState({ name: e.target.value });
        break;
      case "email":
        this.setState({ email: e.target.value });
        break;
      case "comments":
        this.setState({ comments: e.target.value });
        break;
    }
  };

  validateForm() {
    var error = false;

    if (this.state.name == "") {
      this.showMessage("name-field-error");
      error = true;
    }

    if (
      this.state.email == "" ||
      !this.state.email.includes("@") ||
      !this.state.email.includes(".")
    ) {
      this.showMessage("email-field-error");
      error = true;
    }

    if (this.state.comments == "") {
      this.showMessage("comments-field-error");
      error = true;
    }

    return error;
  }

  showMessage(tagID) {
    switch (tagID) {
      case "name-field-error":
        this.setState({ showNameFieldMessage: true });
        setTimeout(() => {
          this.hideMessage(tagID);
        }, 4000);
        break;
      case "email-field-error":
        this.setState({ showEmailFieldMessage: true });
        setTimeout(() => {
          this.hideMessage(tagID);
        }, 4000);
        break;
      case "comments-field-error":
        this.setState({ showCommentsFieldMessage: true });
        setTimeout(() => {
          this.hideMessage(tagID);
        }, 4000);
        break;
      case "contact-form-success":
        this.setState({ showFormSuccessMessage: true });
        setTimeout(() => {
          this.hideMessage(tagID);
        }, 4000);
        break;
      case "contact-form-failure":
        this.setState({ showFormFailureMessage: true });
        setTimeout(() => {
          this.hideMessage(tagID);
        }, 4000);
        break;
    }
  }

  hideMessage(tagID) {
    switch (tagID) {
      case "name-field-error":
        this.setState({ showNameFieldMessage: false });
        break;
      case "email-field-error":
        this.setState({ showEmailFieldMessage: false });
        break;
      case "comments-field-error":
        this.setState({ showCommentsFieldMessage: false });
        break;
      case "contact-form-success":
        this.setState({ showFormSuccessMessage: false });
        break;
      case "contact-form-failure":
        this.setState({ showFormFailureMessage: false });
        break;
    }
  }

  handleFormSubmit = (e) => {
    e.preventDefault();
    if (!this.validateForm()) {
      axios
        .post("https://api.robit.dev/v1/contact", {
          name: this.state.name,
          email: this.state.email,
          comments: this.state.comments,
        })
        .then(
          (response) => {
            console.log(response);
            this.showMessage("contact-form-success");
            this.setState({ name: "", email: "", comments: "" });
          },
          (error) => {
            console.log(error);
            this.showMessage("contact-form-failure");
          }
        );
    } else {
      this.showMessage("contact-form-failure");
    }
  };

  render() {
    return (
      <div
        id="contact"
        className="w-full py-12 lg:text-left text-center bg-robitPurple"
      >
        <h1 className="text-white text-5xl px-24 pb-12">Let's Get to Work</h1>
        <div className="w-5/6 md:w-1/2 bg-white rounded-lg mx-auto">
          <form
            className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
            onSubmit={(e) => this.handleFormSubmit(e)}
          >
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2 border-b-2 border-robitBlue"
                htmlFor="name"
              >
                Your Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                value={this.state.name}
                type="text"
                placeholder="Jane Doe"
                onChange={(e) => this.setFormField(e)}
              />
              <span
                className={
                  "text-xs text-red-600 " +
                  (this.state.showNameFieldMessage ? "block" : "hidden")
                }
                id="name-field-error"
              >
                You forgot your name!
              </span>
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold border-b-2 border-robitBlue"
                htmlFor="email"
              >
                Your Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                value={this.state.email}
                type="text"
                placeholder="jane@example.com"
                onChange={(e) => this.setFormField(e)}
              />
              <span
                className={
                  "text-xs text-red-600 " +
                  (this.state.showEmailFieldMessage ? "block" : "hidden")
                }
                id="email-field-error"
              >
                Enter a valid email address
              </span>
            </div>
            <div className="mb-8">
              <label
                className="block text-gray-700 text-sm font-bold mb-2 border-b-2 border-robitBlue"
                htmlFor="idea"
              >
                What Do You Have in Mind?
              </label>
              <textarea
                rows="3"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="comments"
                value={this.state.comments}
                type="text-area"
                placeholder="Please tell us about your company"
                onChange={(e) => this.setFormField(e)}
              />
              <span
                className={
                  "text-xs text-red-600 " +
                  (this.state.showCommentsFieldMessage ? "block" : "hidden")
                }
                id="comments-field-error"
              >
                Comments shouldn't be empty!
              </span>
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-robitBlue hover:bg-robitPurple text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Let's Talk
              </button>
              <span
                className={
                  "text-xs text-robitBlue " +
                  (this.state.showFormSuccessMessage ? "block" : "hidden")
                }
                id="contact-form-success"
              >
                We'll be in touch!
              </span>
              <span
                className={
                  "text-xs text-red-600 " +
                  (this.state.showFormFailureMessage ? "block" : "hidden")
                }
                id="contact-form-failure"
              >
                Error... please try again.
              </span>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default ContactForm;
