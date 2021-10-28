// import Button from '@restart/ui/esm/Button'
import React, { useState } from 'react'
import { Row, Col, Table, Container, Button } from 'react-bootstrap'
import AddListModal from '../addListModal/AddListModal'
import CalendarModal from '../calendarModal/CalendarModal'
import DeleteConfirmation from '../deleteConfirmation/DeleteConfirm'
import './CalendarList.css'
import SubmitModal from './../submitModal/SubmitModal';
import { Avatar, IconButton } from '@material-ui/core';
import ViewCalendar from './../viewCalendar/ViewCalendar';

function CalendarList() {

    //calendar list data (mainPAGE)
    const [listData, setlistData] = useState([]);

    // console.log("listData", listData);

    //getting data from calendar component
    const [dataFromCalendar, setdataFromCalendar] = useState()

    const [isShowAddList, setisShowAddList] = useState(false)
    const [isShowCalendar, setisShowCalendar] = useState(false)
    const [isShowViewCalendar, setisShowViewCalendar] = useState(false)
    const [isShowSubmitModal, setisShowSubmitModal] = useState(false);

    //delete modal
    const [delIndex, setdelIndex] = useState();
    const [isShowDelete, setisShowDelete] = useState(false);

    // getting data from calendar component
    const eventFromCalendar = (data) => {
        setdataFromCalendar(data)
    }

    console.log("dataFromCalendar:parent", dataFromCalendar);


    //send del index to modal
    const sendDelIndex = (index) => {
        setdelIndex(index);
    };

    //delete Calendar List
    const getDeleteDataIndex = (index) => {
        const newlistData = [...listData];
        newlistData.splice(index, 1);
        setlistData(newlistData);

        setisShowCalendar(false)
    };

    // getting data from addList modal

    const getDataFromAddListModal = (data) => {
        let listDataCopy = [...listData];
        listDataCopy.push(data);
        setlistData(
            listDataCopy
        )
    }
    // console.log("listData",listData);

    return (
        <div>
            <Container fluid>
                <Row>
                    <Col md={2} className="calendarList_left" >

                        <img src="assets/logo2.png" alt="logo" width="130px" style={{ display: "block" }} />
                        <div className="calendarList_Sidebar">
                            <div>
                                <i className="fas fa-user-friends"></i>
                            </div>
                            <div >Batches</div>
                        </div>

                        <div className="calendarList_Sidebar">
                            <div>
                                <i className="far fa-calendar"></i>
                            </div>
                            <div>Calendar</div>
                        </div>
                    </Col>

                    <Col md={10} className="calendarList_right" >

                        <Row className="calendarList_User">
                            <Col md={10}></Col>
                            
                            <Col md={2}>
                                <div className="calendarList_User_avatar">
                                    <h6 className="calendarList_User_avatar_name">Satz</h6>
                                    <Avatar src="https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg" />
                                </div>
                            </Col>
                        </Row>

                        <Row>
                            <div className="calendarList_Header">
                                <Col md={2}><h5 style={{ fontWeight: "bolder", fontSize: "24px" }}>Calendar List</h5></Col>
                                <Col md={6}></Col>
                                <Col md={2} className="calendarList_HeaderSearch"><input type="search" className="calendarList_HeaderSearchInput" placeholder="Search" /></Col>
                                <Col md={2}><Button className="calendarList_Header_generateBtn" onClick={() => { setisShowAddList(true) }} size="sm">Generate Calendar</Button>
                                </Col>
                            </div>
                        </Row>
                        <Row>
                            <Col >
                                <Table >
                                    <thead className="calendarList_thead">
                                        <tr>
                                            <th>Sl No.</th>
                                            <th>Batch Name</th>
                                            <th>Technology</th>
                                            <th>Start Date</th>
                                            <th>End Date</th>
                                            <th>Status</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody >
                                        {
                                            listData.map((value, index) => {
                                                return (
                                                    <tr key={index}>
                                                        <td className="calendarTable_SL">{index + 1}</td>
                                                        <td className="calendarTable_content">{value.batchName}</td>
                                                        <td className="calendarTable_content">{value.technology}</td>
                                                        <td className="calendarTable_content">{value.startDate}</td>
                                                        <td className="calendarTable_content">{value.endDate}</td>
                                                        <td className="calendarTable_content">{value.includes}</td>
                                                        <td>
                                                            <div className="calendarTable_ActionIcons">
                                                                <div>
                                                                    <i className="far fa-eye"
                                                                        onClick={() => { setisShowCalendar(false); setisShowViewCalendar(true) }}></i>
                                                                </div>

                                                                <div>
                                                                    <i className="fas fa-pencil-alt"
                                                                        onClick={() => { setisShowViewCalendar(false); setisShowCalendar(true) }}></i>
                                                                </div>

                                                                <div>
                                                                    <i className="far fa-trash-alt"
                                                                        onClick={() => {
                                                                            sendDelIndex(index);
                                                                            setisShowDelete(true);
                                                                        }}></i>
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                )
                                            })
                                        }
                                    </tbody>
                                </Table>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>

            {isShowAddList && <AddListModal setisShowAddList={setisShowAddList} setlistData={setlistData}
                getDataFromAddListModal={getDataFromAddListModal}
                setisShowSubmitModal={setisShowSubmitModal} />}

            {isShowCalendar && <CalendarModal setisShowCalendar={setisShowCalendar}
                eventFromCalendar={eventFromCalendar} />}

            {isShowDelete && (
                <DeleteConfirmation
                    setisShowDelete={setisShowDelete}
                    delIndex={delIndex}
                    getDeleteDataIndex={getDeleteDataIndex}
                />
            )}

            {isShowSubmitModal && (
                <SubmitModal setisShowSubmitModal={setisShowSubmitModal} />
            )}
            {isShowViewCalendar && <ViewCalendar dataFromCalendar={dataFromCalendar} setisShowViewCalendar={setisShowViewCalendar} />}
        </div>
    )
}
export default CalendarList