import React, {Component} from 'react';
import './App.css';

import InputForm from '../InputForm'
import Table from '../Table'

class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      trainings: [],
      editing: ''
    }
  }

  handleTraining = (newTraining) => {
    const trainings = [...this.state.trainings]

    let isNew = true

    for (let training of trainings) {
      if (training.date === newTraining.date) {
        training.distance = newTraining.distance
        isNew = !isNew
        break
      }
    }

    if (isNew) {
      trainings.push(newTraining)
      trainings.sort((prevTrain, nextTrain) => {
        return prevTrain.date > nextTrain.date ? 1 : -1
      })
    }

    this.setState({
      trainings:[...trainings],
      editing: ''
    })
  }

  deleteItem = (index) => {
    let trainings = [...this.state.trainings]
    trainings = [...trainings.slice(0, index), ...trainings.slice(index + 1)];
    this.setState({
      trainings:[...trainings]
    })
  }

  editItem = (index) => {
    this.setState({
      editing: this.state.trainings[index]
    })

  }

  render() {
    return (
      <div className='trainings-app'>
        <InputForm handleTraining={this.handleTraining} editing={this.state.editing}/>
        <Table trainings={this.state.trainings} deleteItem={this.deleteItem} editItem={this.editItem}/>
      </div>
    );    
  }
}

export default App;
