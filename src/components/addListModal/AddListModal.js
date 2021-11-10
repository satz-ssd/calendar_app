import React, { useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap';
// import ReactDatePicker from 'react-datepicker'; 
import 'react-datepicker/dist/react-datepicker.min.css'
import "./AddListModal.css"

function AddListModal(props) {
    // datepicker
    // const [selectDate, setselectDate] = useState() 
    
    // console.log("selectDate",typeof(selectDate));

    const [addListData, setaddListData] = useState({
        batchName: "",
        technology: "",
        startDate: "",
        endDate: "",
        includes: "",
        events:[]
    })

    // console.log("addListData", addListData);
    
    const onshow = () => {
        props.setisShowAddList(true)
    }

    const handleClose = () => {
        props.setisShowAddList(false)
    }

    //updating data to addList state
    const updateAddListData = (e) => {
        setaddListData(
            {
                ...addListData,
                [e.target.name]: e.target.value,
                // endDate:selectDate
            })
    }
    // console.log("addListData",addListData);

    //saving data on submit
    const saveListData = () => {
        props.getDataFromAddListModal(addListData)
        setaddListData({
            batchName: "",
            technology: "",
            startDate: "",
            endDate: "",
            includes: "",
        })
        handleClose()
        props.setisShowSubmitModal(true)
    }

    return (
        <div>
            <Modal show={onshow} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title> New Calendar Generation</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <div className="add__modal">
                            <Form.Control size="lg" type="text" placeholder="Batch Name"
                                name="batchName"
                                onChange={(e) => { updateAddListData(e) }}
                                value={addListData.batchName} />
                            <br />

                            <Form.Select size="lg" aria-label="Floating label select example"
                                name="technology"
                                onChange={(e) => { updateAddListData(e) }}
                                value={addListData.technology}>                                <option>Technology</option>
                                <option value="React Js">React Js</option>
                                <option value="Node Js">Node Js</option>
                                <option value="Mongo dB">Mongo dB</option>
                            </Form.Select>

                            <br />
                            <Form.Group className="mb-3" >
                                <Form.Control size="lg" placeholder="Enter Start Date"
                                    name="startDate" onFocus={(event) => { event.target.type = 'date' }}
                                    onBlur={(event) => { event.target.type = 'start date' }}
                                    onChange={(e) => { updateAddListData(e) }}
                                    value={addListData.startDate} />
                            </Form.Group>

                            <Form.Group className="mb-3" >
                                <Form.Control size="lg" placeholder="Enter End Date"
                                    name="endDate" onFocus={(event) => { event.target.type = 'date' }}
                                    onBlur={(event) => { event.target.type = 'End date' }}
                                    onChange={(e) => { updateAddListData(e) }}
                                    value={addListData.endDate} />
                            </Form.Group>

                            {/* <Form.Group className="mb-3" >
                            <ReactDatePicker id='todate'
                                placeholderText='To Date'
                                selected={selectDate} onChange={date=>{setselectDate(date)}}
                                dateFormat='yyyy/MM/dd'
                                // dateFormat='dd/MM/yyyy'
                                maxDate={new Date()}
                                showYearDropdown
                                showMonthDropdown
                                name="endDate"
                                scrollableMonthYearDropdown />
                            </Form.Group> */}

                            <Form.Select size="lg" aria-label="Floating label select example"
                                name="includes"
                                onChange={(e) => { updateAddListData(e) }}
                                value={addListData.includes}>
                                <option>Includes</option>
                            </Form.Select>
                        </div>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button className="addListModal__btn" onClick={() => { saveListData() }}>
                        Generate Calendar
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default AddListModal