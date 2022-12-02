import React from 'react';
import {withTheme} from "@rjsf/core";
import {Theme as AntDTheme} from '@rjsf/antd'
import AuthService from "./../services/auth.service";

const Form = withTheme(AntDTheme)

interface Props {
  onCancel: () => void
}

export default class LoginForm extends React.Component <Props> {

  getFormData = () => {
    let user = {
      // "$id": "1",
      // "title": "Login",
      "type": "object",
      "required": [
        "email",
        "password"
      ],
      "properties": {
        "email": {
          "type": "string",
          "format": "text",
          "title": "Username or email address"
        },
        "password": {
          "type": "string",
          "format": "text",
          "title": "Password"
        }
      }
    }

    const dataAsString = JSON.stringify(user)
    const formData = JSON.parse(dataAsString)
    return formData;
  }

  onSubmit = (callbackData) => {
    console.log("onSubmit, formData", callbackData.formData);
    // this.props.onCancel.call(path => {});
    var that = this;
    AuthService.login(callbackData.formData.email, callbackData.formData.password)
      .then(function () {
        console.log('Login success for  user', callbackData.formData.email);
        that.props.onCancel.call(path => {});
        that.handleRefresh();
      })
      .catch(() => {
        console.log('Login error')
      })
  }

  handleRefresh() {
    window.location.reload();
  }

  render() {
    return (
      <>
        <Form
          schema={this.getFormData()}
          // formData={user}
          showErrorList={false}
          onSubmit={this.onSubmit}
          // onChange={this.onChange(user)}
          disabled={false}
          noValidate={false}
        >
          <button className="mainButton marginTop-20 marginBottom-10">
            Login
          </button>
        </Form>
      </>
    )
  };
}