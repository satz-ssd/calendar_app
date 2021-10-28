import React, { useState } from 'react'
// import logo from './logo.jpg'
// import SearchIcon from '@mui/icons-material/Search';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Dropdown, DropdownButton, Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap';
// import Button from '@restart/ui/esm/Button';
// import  { ReactDatePicker } from "react-datepicker";

import 'react-datepicker/dist/react-datepicker.min.css'
import './Appbar.css'
import ReactDatePicker from 'react-datepicker';
// import Date1 from '@mui/icons-material'

function Appbar() {

    const [selectedDate, setselectedDate] = useState()
    const [selectDate, setselectDate] = useState()

    return (

        <div>

            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container style={{ margin: "0px" }}>
                    {/* <Navbar.Brand href="#home" > <img src={logo} id="image" alt="" /></Navbar.Brand> */}
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            {/* <Nav.Link href="#features">Features</Nav.Link> */}
                            <DropdownButton id="dropdown-basic-button" title="Technology" className="px-1">
                                <Dropdown.Item href="#/action-1">React JS</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Vue JS</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Angular</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Java</Dropdown.Item>
                                <Dropdown.Item href="#/action-3"> Mongo DB</Dropdown.Item>
                            </DropdownButton>
                            {/* <Nav.Link href="#pricing">Pricing</Nav.Link> */}
                            <DropdownButton id="dropdown-basic-button" title="Level" className="px-1" >
                                <Dropdown.Item href="#/action-1">Easy</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Intermediate</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Expert</Dropdown.Item>
                            </DropdownButton>
                            {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown> */}


                          <Form className="d-flex">
                         
                           <ReactDatePicker id='fromdate'
                                className="px-2 srchicon"
                                placeholderText='From Date'
                                selected={selectedDate} onChange={date => { setselectedDate(date) }}
                                dateFormat='dd/MM/yyyy'
                                maxDate={new Date()}
                                showYearDropdown
                                scrollableMonthYearDropdown 
                                 />
                              
                                <i  className=" cal_icon fas fa-calendar"></i>
                             
                              </Form>

                            <ReactDatePicker id='todate'
                                placeholderText='To Date'
                                selected={selectDate} onChange={date => { setselectDate(date) }}
                                dateFormat='dd/MM/yyyy'
                                maxDate={new Date()}
                                showYearDropdown
                                showMonthDropdown
                                scrollableMonthYearDropdown />
                        </Nav>
                        <Nav>
                            {/* <Nav.Link href="#deets">More deets</Nav.Link> */}
                            <Form className="d-flex">
                                <FormControl
                                    type="search"
                                    placeholder="Search questions"
                                    className="me-2"
                                    aria-label="Search"
                                />
                                <i className="fas fa-search" ></i>
                            </Form>

                            
                            <Nav.Link eventKey={2} href="#memes" >
                                <span style={{ backgroundColor: "orange", color: "white", borderRadius: "4px", textAlign: "center", justifyContent: "center", marign: "auto", alignItems: "center", }}>search</span>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>


        </div>





        // <div>
        //       <Navbar bg="" expand="lg">
        //         <Container fluid>
        //             <img src={logo} id="image" alt="" />
        //             {/* <Navbar.Brand href="#">Navbar scroll</Navbar.Brand> */}
        //             <Navbar.Toggle aria-controls="navbarScroll" />
        //             <Navbar.Collapse id="navbarScroll">
        //                 <Nav
        //                     className="me-auto my-2 my-lg-0"
        //                     style={{ maxHeight: '100px' }}
        //                     navbarScroll
        //                 >
        //                     {/* <Nav.Link href="#action1">Home</Nav.Link>
        //                     <Nav.Link href="#action2">Link</Nav.Link> */}

        //                     <div id="droptech">
        //                         <DropdownButton id="dropdown-basic-button" title="Technology">
        //                             <Dropdown.Item href="#/action-1">React JS</Dropdown.Item>
        //                             <Dropdown.Item href="#/action-2">Vue JS</Dropdown.Item>
        //                             <Dropdown.Item href="#/action-3">Angular</Dropdown.Item>
        //                             <Dropdown.Item href="#/action-3">Java</Dropdown.Item>
        //                             <Dropdown.Item href="#/action-3"> Mongo DB</Dropdown.Item>
        //                         </DropdownButton>
        //                     </div>

        //                     <div id="droplevel">

        //                         <DropdownButton id="dropdown-basic-button" title="Level">
        //                             <Dropdown.Item href="#/action-1">Easy</Dropdown.Item>
        //                             <Dropdown.Item href="#/action-2">Intermediate</Dropdown.Item>
        //                             <Dropdown.Item href="#/action-3">Expert</Dropdown.Item>
        //                         </DropdownButton>
        //                     </div>


        //                     <div>
        //                         <DatePicker id='fromdate'
        //                             placeholderText='From Date'
        //                             selected={selectedDate} onChange={date => { setselectedDate(date) }}
        //                             dateFormat='dd/MM/yyyy'
        //                             maxDate={new Date()}
        //                             showYearDropdown
        //                             scrollableMonthYearDropdown />
        //                     </div>
        //                     {/* <i class="far fa-calendar-minus icon1"></i> */}

        //                     <div>
        //                         <DatePicker id='todate'
        //                             placeholderText='To Date'
        //                             selected={selectDate} onChange={date => { setselectDate(date) }}
        //                             dateFormat='dd/MM/yyyy'
        //                             maxDate={new Date()}
        //                             showYearDropdown
        //                             showMonthDropdown
        //                             scrollableMonthYearDropdown />

        //                     </div>
        //                     {/* <i class="far fa-calendar-minus icon2"></i> */}


        //                 </Nav>
        //                 <Form className="d-flex">
        //                     <FormControl
        //                         type="search"
        //                         placeholder="Search questions"
        //                         className="me-2"
        //                         aria-label="Search"
        //                     />
        //                     <i className="fas fa-search" id="srchicon"></i>
        //                 </Form>



        //                 <Button variant="primary" size="sm" id="button">
        //                     Search
        //                 </Button>{' '}



        //             </Navbar.Collapse>
        //         </Container>
        //     </Navbar>


        // </div >

    )
}

export default Appbar
