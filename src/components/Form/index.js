import react, { createRef, useState } from "react"

import styled from "styled-components"
import Button from '@material-ui/core/Button'
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers'
import DateFnsUtils from '@date-io/date-fns'

import "./Form.styles.scss"

import {db} from "../../firebase"
import firebase from "firebase"
import { setDate } from "date-fns"

const Card = styled.section`
  background-color: #ffeeb7;
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 0px 4px, rgba(0, 0, 0, 0.1) 0px 0px 25px;
  margin: 0 -30px;
  padding: 20px;
`

const Fields = styled.div`
  @media only screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
  }
`

const Fillout = styled.form`
`

const Group = styled.div`
  margin-bottom: 16px;
`

const Title = styled.h2`
  color: #ef233c;
  font-family: "Concert One", sans-serif;
  font-size: 20px;
  margin-bottom: 12px;
  text-transform: uppercase;
`

const Label = styled.label`
  color: #8B4513;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-weight: 700;
  position: relative;
  margin-bottom: 7px;
  display: inline-block;

  &::after {
    content: "*";
    position: absolute;
    top: -5px;
    right: -12px;;
  }
`

const Field = styled.div`
  margin-bottom: 7px;
  width: 100%;

  @media only screen and (min-width: 768px) {
    max-width: 48%;
  }
`

const form = createRef()

function Form() {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [request, setRequest] = useState("")
  const [date, setSelectedDate] = useState(null);
  const handleSelectedDate = (date) => {
    setSelectedDate(date)
  }

  const sendData = (firstName, lastName, date, request) => {
    db.collection("requests").add({
      firstName,
      lastName,
      date,
      request,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    setFirstName("")
    setLastName("")
    setSelectedDate(new Date('2020-08-18T21:11:54'))
    setRequest("")
  }

  return (
    <Card>
      <Title>Make a request</Title>
      <Fillout ref={form}>
        <Group>
          <Label>Name</Label>
          <Fields>
            <Field className="firstname__field"><input value={firstName} onChange={(el) => setFirstName(el.target.value)} id="name" /></Field>
            <Field className="lastname__field"><input value={lastName} onChange={(el) => setLastName(el.target.value)}  /></Field>
          </Fields>
        </Group>
        <Group>
          <Label>Date</Label>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
              className="date-picker__field"
              disableToolbar
              variant="inline"
              format="MM/dd/yyyy"
              margin="normal"
              id="date-picker-inline"
              KeyboardButtonProps={{
                'aria-label': 'change date',
              }} 
              value={date}
              onChange={handleSelectedDate}
            />
          </MuiPickersUtilsProvider>
        </Group>
        <Group>
          <Label for="request">Request</Label>
          <input value={request} onChange={(el) => setRequest(el.target.value)} id="request" />
        </Group>
        <Button onClick={() => sendData(firstName, lastName, date, request)}  className="request-button">Request</Button>
      </Fillout>
    </Card>
  )
}

export default Form