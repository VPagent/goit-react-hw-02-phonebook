import { Component } from 'react';
import {nanoid} from 'nanoid'

class Form extends Component {
  state = {
    name: '',
    number: '' 
  };
  handleSubmit = (event) => {
    const {onSetApp} = this.props
    const {name, number} = this.state
    const arr = []
    event.preventDefault()
    console.log(this.props.options)
    const key = nanoid(3)
    const obj = {userName: name, id: key, tel: number}
    const inspect = this.props.options.some(elem => elem.userName === name)
    if(inspect){
        return alert(`${name}is already in contacts` )
    }
    arr.push(obj)
    onSetApp(arr)
    this.reset()
  }
  handleChange = (event) => {
    const inputName = event.target.name
    const value = event.target.value.toLowerCase() 
    this.setState({[inputName]: value})
  }
  reset = () => {
    this.setState({name: "", number: ""})
  }

  render() {
    
    return (
      <form action="" onSubmit={this.handleSubmit}>
        <label>
          Name
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={this.state.name}
            onChange={this.handleChange}
          />
        </label>
        <label>
          Tel
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={this.handleChange}
            value={this.state.number}
          />
        </label>

        <button type="submit">Add contact</button>
      </form>
    );
  }
}
export default Form;

