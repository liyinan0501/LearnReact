import React, { Component } from 'react'
import { createRoot } from 'react-dom/client'

class App extends Component {
  constructor() {
    super()
    this.state = {
      persons: [
        { lastName: 'John', firstName: 'Wick' },
        { lastName: 'Elon', firstName: 'Musk' },
      ],
      newlastName: '',
      newfirstName: '',
    }
  }
  handleChange = (e) => {
    console.log(e.target)
    this.setState({
      [e.target.name]: e.target.value,
    })
  }
  addContact = (e) => {
    e.preventDefault()
    const { persons, newlastName, newfirstName } = this.state
    for (let i in persons) {
      if (
        persons[i].lastName === newlastName &&
        persons[i].firstName === newfirstName
      ) {
        alert('Directory already includes the name!')
        return
      }
    }
    this.setState({
      persons: [
        {
          lastName: newlastName,
          firstName: newfirstName,
        },
        ...persons,
      ],
      newlastName: '',
      newfirstName: '',
    })
  }
  clear = () => {
    this.setState({
      newlastName: '',
      newfirstName: '',
    })
  }
  render() {
    return (
      <React.Fragment>
        <style>
          {`
          table {
            border-collapse: collapse;
          }
          table, tr, td, th{
          border:1px solid black;
          }
          td, th {
            padding:4px;
            text-align: center;
          }
         `}
        </style>
        <div>
          <div>
            <h2>Contacts</h2>
            <AddContact
              persons={this.state.persons}
              newlastName={this.state.newlastName}
              newfirstName={this.state.newfirstName}
              handleChange={this.handleChange}
              addContact={this.addContact}
              clear={this.clear}
            ></AddContact>
          </div>
          <div>
            <h2>Records</h2>
            <ViewContact persons={this.state.persons}></ViewContact>
          </div>
        </div>
      </React.Fragment>
    )
  }
}
const AddContact = (props) => {
  const { newlastName, newfirstName, handleChange, addContact, clear } = props
  return (
    <div>
      <label htmlFor="newlastName">Last Name: </label>
      <input
        type="text"
        id="newlastName"
        name="newlastName"
        value={newlastName}
        onChange={handleChange}
      />
      <br />
      <br />
      <label htmlFor="newfirstName">First Name: </label>
      <input
        type="text"
        id="newfirstName"
        name="newfirstName"
        value={newfirstName}
        onChange={handleChange}
      />
      <br />
      <br />
      <button onClick={clear}>Clear</button>
      <button onClick={addContact}>Save</button>
    </div>
  )
}

const ViewContact = (props) => {
  return (
    <table>
      <tbody>
        <tr>
          <th>Last Name</th>
          <th>First Name</th>
        </tr>
        {props.persons.map((item) => (
          <tr key={item.firstName}>
            <td>{item.lastName}</td>
            <td>{item.firstName}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

createRoot(document.getElementById('root')).render(<App />)
