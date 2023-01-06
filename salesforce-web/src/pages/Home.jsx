import axios from 'axios';
import React, { Fragment, useState } from 'react';
import { Button, DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown } from 'reactstrap';

const Home = () => {
  const [filter, setFilter] = useState("production");
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  const SaleForce = async () => {
    const loginUser = await axios.post("http://localhost:8080/auth/login",{filter});
    // console.log(loginUser);
    window.location.href = loginUser.data.url;
    console.log(filter);


}
  return (
    <Fragment>
        <div className="mt-5 d-flex justify-content-center">
        
            <UncontrolledDropdown group>
                  <DropdownToggle caret color="primary">
                    {filter ? filter : "select please"}
                  </DropdownToggle>
                  <DropdownMenu>
                    
                    <DropdownItem onClick={() => setFilter("sandbox")}>
                      SandBox
                    </DropdownItem>
                    <DropdownItem onClick={() => setFilter("production")}>
                      Production
                    </DropdownItem>
                   
                  </DropdownMenu>
                </UncontrolledDropdown>

                <Button onClick={SaleForce} color="primary" className='ms-3'>Login</Button>
               {/*  <Login 
                modal={modal}
                toggle={toggle}
                /> */}
          
        </div>
        
        
    </Fragment> 
  )
}

export default Home