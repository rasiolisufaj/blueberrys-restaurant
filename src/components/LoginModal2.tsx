import React from 'react';
import {Button, Checkbox, Form, Input, Modal} from 'antd';
import LogoImage from "../assets/img/LoginPageLogo.svg";
import {faClose} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import AuthService from "./../services/auth.service";
import User from "../types/user.type";
// import {withTheme} from "@rjsf/core";
// import { Theme as AntDTheme } from '@rjsf/antd'
// const FormT = withTheme(AntDTheme)
// import Form from "react-validation/build/form";

interface Props {
  showLoginDialog: boolean
  onCancel: () => void
  // form: FormT

}


interface State {
  user: User
  // form : any
}

export default class LoginModal extends React.Component <Props> {
  // readonly  form = Form.useForm()

  state: State = {
    user: {
      name: "n",
      password: "p",
      email: "e",
      phone: "p",
    },
    // form: undefined
  }

  login() {
    AuthService.login("ermal"); //test
    this.handleRefresh();
  }

  handleSubmit(e) {
    e.preventDefault();
    // this.props.form.validateFields((err, values) => {
    //   if (!err) {
    //     console.log('Received values of form: ', values);
    //   }
    // });
  }

  handleRefresh() {
    window.location.reload();
  }

  async componentDidMount() {
    const {user} = this.state
    // const { formFields } = this.props
    // const [form] = Form.useForm()
    console.log("LoginModal", user);
    // this.setState(form)
  }

  async onCheck() {
    try {
      // const [form] = Form.useForm()
      // form.submit()
      // const [form] = Form.useForm();

      // const values = await form.validateFields();
      // console.log('Success:', values);
    } catch (errorInfo) {
      console.log('Failed:', errorInfo);
    }
  };

  render() {
    // let [form] = Form.useForm()
    const {user} = this.state;
    const {onCancel, showLoginDialog} = this.props;
    // const { getFieldDecorator } = this.props.form;
    const closeIcon = <FontAwesomeIcon icon={faClose}/>
    return (
      <>
        <Modal
          visible={showLoginDialog}
          footer={null}
          width={1100}
          className={"customPopup"}
          onCancel={onCancel}
          closeIcon={closeIcon}>

          <section id="loginPopupSection">
            <div className="loginPopupContainer">

              <div className="registerOrLoginMessageDiv">
                <div>
                  <img src={LogoImage} alt=""/>
                </div>
                <div className="loginText">
                  <b>Register</b> or <b>log in </b> <br/>to your account
                </div>
              </div>

              <div className="registerAndLoginFormDiv">
                <div className="registerForm">
                  <h2>Register</h2>
                  <Form layout="vertical"
                        name="basic"
                        labelCol={{span: 8}}
                        wrapperCol={{span: 16}}
                        fields={[user]}
                        // initialValues={{remember: true}}
                        // form={form}
                        // onSubmit={this.handleSubmit}
                    // onFinish={onFinish}

                    // onFinishFailed={onFinishFailed}
                        autoComplete="off">

                    <Form.Item name="name" label="Name" className="formItem"
                               rules={[{required: true, message: 'Please input your name'}]}>
                      <Input className="formInput"/>
                    </Form.Item>
                    <Form.Item name="phone" label="phone"
                               rules={[{required: false, message: 'Please input your name'}]}>
                      <Input/>
                    </Form.Item>

                    <Form.Item name="email" label="email" style={{flex: 1}}
                               rules={[{required: true, message: 'Please input your email'}]}>
                      <Input/>
                    </Form.Item>

                    <Form.Item name="password" label="password" className="formItem"
                               rules={[{required: true, message: ''}]}>
                      <Input className="formInput"/>
                    </Form.Item>

                    <Form.Item name="repeatPwd" label="repeatPwd"
                               rules={[{required: true, message: 'Please repeatPwd'}]}>
                      <Input/>
                    </Form.Item>

                    <Form.Item wrapperCol={{offset: 8, span: 16}}>
                      <Button type="primary" htmlType="submit" className="mainButton">
                        Submit
                      </Button>
                    </Form.Item>
                  </Form>
                </div>

                <div className="loginForm">
                  <h2>Login</h2>
                  <Form
                    layout="vertical"
                    name="basic"
                    // labelCol={{span: 8}}
                    // wrapperCol={{span: 16}}
                    initialValues={{remember: true}}
                    // onFinish={onFinish}
                    // onFinishFailed={onFinishFailed}
                    autoComplete="on">
                    <Form.Item name="email" label="Username or email address"
                               rules={[{required: true, message: 'Please input your email'}]}>
                      <Input/>
                    </Form.Item>

                    <Form.Item name="password" label="Password"
                               rules={[{required: true, message: 'Please input your password'}]}>
                      <Input/>
                    </Form.Item>

                    <Form.Item name="remember" valuePropName="checked"
                               wrapperCol={{offset: 8, span: 16}}>
                      <Checkbox className="checkboxCustom">Remember me</Checkbox>
                    </Form.Item>

                    <Button type="primary" htmlType="submit" className="mainButton marginTop-20 marginBottom-10"
                            onClick={this.login}>
                      Login
                    </Button>
                    <Button type="primary" className="mainButton lostPasswordButton">
                      LOST YOUR PASSWORD?
                    </Button>
                  </Form>
                </div>
              </div>
            </div>
          </section>
        </Modal>
      </>
    )
  };
}