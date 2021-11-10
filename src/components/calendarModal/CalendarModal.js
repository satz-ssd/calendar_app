import React from "react";
// import ReactDOM from "react-dom";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import resourceTimeGridPlugin from "@fullcalendar/resource-timegrid";

// import "@fullcalendar/core/main.css";
import "./styles.css"
import "@fullcalendar/daygrid/main.css";
import "@fullcalendar/daygrid/main.css";
import { Modal, Button } from "react-bootstrap";

export class CalendarModal extends React.PureComponent {
  calendarComponentRef = React.createRef();
  constructor(props) {
    super(props)
    this.state = {
      events: [
        // { id: 999, title: "event 1", date: "2021-11-28" },
        // {
        //   title: "event 2",
        //   start: "2021-11-10",
        //   end: "2021-11-11",
        //   allDay: true,
        //   HostName: "William"
        // },
        // {
        //   title: "event 3",
        //   start: "2021-11-15",
        //   end: "2021-11-15",
        //   allDay: true
        // },
        // {
        //   title: "event 4",
        //   start: "2021-11-11",
        //   end: "2021-11-11",
        //   allDay: true
        // },
        // {
        //   title: "event 5",
        //   start: "2021-11-20",
        //   end: "2021-11-20",
        //   allDay: true
        // },
        // {
        //   title: "event 6",
        //   start: "2021-11-22",
        //   end: "2021-11-22",
        //   allDay: true
        // }
      ]
    };

    console.log("event", this.state.events);
  };

  handleDateClick = arg => {
    // alert(arg.dateStr);
  };

  handleSelectedDates = info => {
    // alert("selected " + info.startStr + " to " + info.endStr);
    const title = prompt("Name of the topic or event");
    console.log(info);
    if (title != null) {
      const newEvent = {
        title,
        start: info.startStr,
        end: info.endStr,
        allDay: true
      };
      //sending cal events to parent
      this.props.eventFromCalendar(newEvent)

      const data = [...this.state.events, newEvent];
      this.setState({ events: data });

      console.log("here", data);
    } else {
      console.log("nothing");
    }
  };
  
  render() {
    // getting index of clicked list 
    let index= this.props.indexOfCalList

    return (
      <Modal size="lg" show={() => this.props.setisShowCalendar(true)}
        onHide={() => this.props.setisShowCalendar(false)} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Calendar Generation</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FullCalendar
            schedulerLicenseKey="GPL-My-Project-Is-Open-Source"
            ref={this.calendarComponentRef}
            defaultView="dayGridMonth"
            dateClick={this.handleDateClick}
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
            eventClick={event => {
              console.log(event.event._def.publicId);
            }}
            events={this.props.listData[index].events}
            // events={this.state.events}
            select={this.handleSelectedDates}
            eventLimit={3}
          />
        </Modal.Body>
      </Modal>

    );
  }
}

export default CalendarModal
