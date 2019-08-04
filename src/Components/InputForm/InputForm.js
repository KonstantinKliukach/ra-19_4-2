import React, { Component } from 'react'

import './InputForm.css'

class InputForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: Date.now(),
      distance: ''
    }
  }

  handleChange =({target}) =>{
    const name = target.name
    const value = target.value
    this.setState({
      [name]: value
    })
  }

  submitForm = (e) =>{
    e.preventDefault()
    this.props.handleTraining({...this.state})
    this.setState({
      date: Date.now(),
      distance: ''
    })
  }

  componentDidUpdate(prevProps) {
    if (prevProps.editing !== this.props.editing) {
      const {date, distance} = this.props.editing
      this.setState({
        date: date,
        distance: distance
      })
    }
  }

  render() {
    let {date, distance} = this.state
    return (
      <form className='input-form' onSubmit={this.submitForm}>
        <div className="form-row align-items-center">
          <div className="col-md-4">
            <label htmlFor="inputDate">Дата</label>
          </div>
          <div className="col-md-4">
            <label htmlFor="inputDistance">Пройдено км</label>
          </div>
        </div>
        <div className="form-row align-items-center">
          <div className="col-md-4">
            <input type="date" className="form-control" id="inputDate" placeholder="Введите дату" name="date" value={date} onChange={this.handleChange}/>
          </div>
          <div className="col-md-4">
            <input className="form-control" id="inputDistance" placeholder="Введите расстояние" name="distance" value={distance} onChange={this.handleChange}/>
          </div>
          <div className="col-md-2">
            <button type="submit" className="btn btn-outline-secondary">Ок</button>
          </div>
        </div>
      </form>
    )
  }
}

export default InputForm
