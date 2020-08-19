import React, { Component } from 'react';
import axios from "axios"
import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

class App extends Component {
  state = {
    isLoading: true
  }
  async componentDidMount() {
    let galleryData = await axios.get("https://picsum.photos/v2/list")
    console.log(galleryData.data)
    this.setState({ galleryArr: galleryData.data })
    this.setState({ isLoading: false })
  }
  render() {
    return (
      <div className="App">

        {this.state.isLoading ? "wait for it..." :
          this.state.galleryArr.map((elt) => {
            return <Card className="container" key={elt.id} >
              <Card.Img variant="top" src={elt.download_url} />
              <Card.Body>
                <Card.Title>{elt.author}</Card.Title>
                <Button className="btn">See more</Button>
              </Card.Body>
            </Card>
          })
        }
      </div>);
  }
}

export default App;