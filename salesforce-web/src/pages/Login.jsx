import React, { Fragment, useState } from 'react';
import { Button, Col, Input, Label, Modal, ModalBody, ModalHeader, Row } from 'reactstrap';
import { LOGIN_API } from '../Constant/Api_endpoints/loginEndPoint';
import { get } from '../helper/ApiHelper';

export const Login = (props) => {
    const {modal,toggle} = props;
    const [user, setUser] = useState();
    const [pass, setPass] = useState();
    const SaleForce = async () => {
        const payload = {
            userName: user,
            password: pass
        }
        const loginUser = await get(LOGIN_API.login());
        console.log(loginUser);
    }

  return (
    <Fragment>
        <Modal isOpen={modal} toggle={toggle} centered>
        <ModalHeader toggle={toggle}>Login - Salesforce</ModalHeader>
        <ModalBody>
          <Row className='d-flex justify-content-center'>
            <Col md={9}>
            <Label>User Name</Label>
            <Input type='text' onChange={(e)=> setUser(e.target.value)} />
            </Col>

            <Col md={9}>
            <Label>Password</Label>
            <Input type='password' onChange={(e)=> setPass(e.target.value)} />
            </Col>

            <Col md={9}>
                <Button className='mt-3' color='primary' onClick={SaleForce}>Login</Button>
            </Col>
            
          </Row>
        </ModalBody>
        
      </Modal>
    </Fragment>
  )
}
