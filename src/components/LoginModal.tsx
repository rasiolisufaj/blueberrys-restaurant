import React, {createRef, RefObject} from 'react';
import {FormInstance} from 'antd/es/form'
import {Button, Checkbox, Form, Input, Modal} from 'antd';
import LogoImage from "../assets/img/LoginPageLogo.svg";
import {faClose} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import AuthService from "./../services/auth.service";
import { FormUser} from "../types/user.type";
import AdvancedForm, {Schema} from "./AdvancedForm";
import LoginForm from "./LoginForm";
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
  // formUser: FormUser
  // formRef: RefObject<FormInstance>
  // submitButton: RefObject<HTMLButtonElement>
}

export default class LoginModal extends React.Component <Props, State> {
  // readonly  form = Form.useForm()

  state: State = {
    // formUser : {
    //   user: {
    //     name: "n",
    //     password: "p",
    //     email: "e",
    //     phone: "p",
    //   }
    // },
    // formRef: createRef<FormInstance>(),
    // submitButton: React.createRef<HTMLButtonElement>(),
  }

  // getSchema = (): Schema[] => {
  //   // const {user} = this.state
  //
  //   // return [
  //   //   {
  //   //     name: 'name',
  //   //     type: 'text',
  //   //     label: "Name",
  //   //     placeholder: "Name",
  //   //     rules: [{required: true, message: 'Please insert your name'}],
  //   //     defaultValue: user.name
  //   //   }
  //   // ]
  // }

  async componentDidMount() {

    // const {formUser, formRef} = this.state
    // formRef: createRef<FormInstance>()
    // // const { formFields } = this.props
    // // const [form] = Form.useForm()
    // console.log("LoginModal", formUser);
    // this.setState(formRef)
  }

  // login() {
  //   AuthService.login("ermal"); //test
  //   this.handleRefresh();
  // }

  handleSubmit () {

    // const {formUser} = this.state
    // console.log("formUser", formUser);

    // const formRefList = [formRef]
    // const formValidationsResult = formRefList.map((formRef) => formRef.current)
    //   .map(formInstance => formInstance?.validateFields())
    //   .filter(formInstanceValidation => formInstanceValidation !== undefined);
    //
    // console.debug("formValidationsResult:", formValidationsResult)
    //
    // Promise.all(formValidationsResult).then(async () => {
    //   console.info("Calling backend for savind data");
    // })
  }

  // handleRefresh() {
  //   window.location.reload();
  // }

  handleFulfillmentSubmit = () => {
    // this.setState(() => this.state.submitButton.current?.click())
  }

  render() {
    // let [form] = Form.useForm()
    // const {formUser} = this.state;
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

                  {/*<AdvancedForm*/}
                    {/*// formRef={this.props.formRef}*/}
                    {/*schema={this.getSchema()}*/}
                    {/*values={user}*/}
                    {/*// onValuesChange={this.props.onValuesChange}*/}
                    {/*submitButton={{*/}
                      {/*text: "Submit",*/}
                      {/*onPress: this.handleFulfillmentSubmit,*/}
                      {/*// col: 12,*/}
                    {/*}}*/}
                  {/*/>*/}

                </div>

                <div className="loginForm">
                  <h2>Login</h2>
                  <LoginForm
                    onCancel={this.props.onCancel}
                    // formUser={formUser}
                    // fulfillmentFormSubmitButtonRef={fulfillmentFormSubmitButtonRef}
                  />
                  {/*<Form*/}
                    {/*layout="vertical"*/}
                    {/*name="basic"*/}
                    {/*// labelCol={{span: 8}}*/}
                    {/*// wrapperCol={{span: 16}}*/}
                    {/*initialValues={{remember: true}}*/}
                    {/*// onFinish={onFinish}*/}
                    {/*// onFinishFailed={onFinishFailed}*/}
                    {/*autoComplete="on">*/}
                    {/*<Form.Item name="email" label="Username or email address"*/}
                               {/*rules={[{required: true, message: 'Please input your email'}]}>*/}
                      {/*<Input/>*/}
                    {/*</Form.Item>*/}

                    {/*<Form.Item name="password" label="Password"*/}
                               {/*rules={[{required: true, message: 'Please input your password'}]}>*/}
                      {/*<Input/>*/}
                    {/*</Form.Item>*/}

                    {/*<Form.Item name="remember" valuePropName="checked"*/}
                               {/*wrapperCol={{offset: 8, span: 16}}>*/}
                      {/*<Checkbox className="checkboxCustom">Remember me</Checkbox>*/}
                    {/*</Form.Item>*/}

                    {/*<Button type="primary" htmlType="submit" className="mainButton marginTop-20 marginBottom-10"*/}
                            {/*onClick={this.login}>*/}
                      {/*Login*/}
                    {/*</Button>*/}
                    {/*<Button type="primary" className="mainButton lostPasswordButton">*/}
                      {/*LOST YOUR PASSWORD?*/}
                    {/*</Button>*/}
                  {/*</Form>*/}
                </div>
              </div>
            </div>
          </section>
        </Modal>
      </>
    )
  };
}