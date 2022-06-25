import React from 'react';
import theme from "./../theme/theme";
import {Button, Modal} from 'antd';

interface Props {
  showLoginDialog: boolean
  onCancel: () => void
  onOk: () => void
}

export default class LoginModal extends React.Component<Props> {

  async componentDidMount() {
    console.log("LoginModal");
  }

  render() {
    const {onCancel, onOk, showLoginDialog} = this.props;

    return (
      <>
        <Modal
          visible={showLoginDialog}
          footer={null}
          width={600}
          onCancel={onCancel}
          onOk={onOk}
          style={{textAlign: 'center'}}>

          <h2 style={{marginRight: 12, marginLeft: 12}}>title</h2>
          <p style={{marginRight: 12, marginLeft: 12}}>message</p>

          <div>
            <Button style={{height: 40, flex: 1, marginRight: 20}} type="default"
                    onClick={onCancel}>
              Cancel
            </Button>
            <Button style={{height: 40, flex: 1, ...theme.appPrimaryButton}} type="primary"
                    onClick={onOk}>
              OK
            </Button>
          </div>
        </Modal>

      </>
    )
  };
}