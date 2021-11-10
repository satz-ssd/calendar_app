import React from 'react'
// import ReactDOM from "react-dom";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import resourceTimeGridPlugin from "@fullcalendar/resource-timegrid";

// import "@fullcalendar/core/main.css";
import "./ViewCalendar.css"
import "@fullcalendar/daygrid/main.css";
import "@fullcalendar/daygrid/main.css";
import { Modal, Button } from "react-bootstrap";

function ViewCalendar(props) {
    let index= props.indexOfCalList
      // console.log('index in caledar',index);

    return (
        <div>
            
            <Modal size="lg" className="ViewModal__main" show={() => props.setisShowViewCalendar(true)}
                onHide={() => props.setisShowViewCalendar(false)} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>View Calendar</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <FullCalendar
                        schedulerLicenseKey="GPL-My-Project-Is-Open-Source"
                        // ref={this.calendarComponentRef} 
                        defaultView="dayGridMonth"
                        // dateClick={this.handleDateClick} 
                        displayEventTime={true}
                        header={{
                            left: "prev,next today",
                            center: "title",
                            right: "dayGridMonth,timeGridWeek,timeGridDay,listWeek"
                        }}
                        selectable={true}
                        plugins={[
                            dayGridPlugin,
                            interactionPlugin,
                            timeGridPlugin,
                            resourceTimeGridPlugin
                        ]}
                        // eventClick={event => {
                        //   console.log(event.event._def.publicId);
                        // }}
                        events={props.listData[index].events}
                        // select={this.handleSelectedDates} 
                        eventLimit={3}
                    />
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default ViewCalendar
