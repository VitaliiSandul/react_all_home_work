import React from 'react';
import axios from 'axios';

class Vehicles extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            vehicles: [],
            vehiclesUrl: 'https://swapi.dev/api/vehicles/?page=1',
            nextUrl: '',
            prevUrl: '',            
            pageSize: 0
        }

        this.handleClick = this.handleClick.bind(this)
        this.loadingData = this.loadingData.bind(this)
    }

    loadingData(Url){
        axios({
            method: 'GET',
            url: Url,
          })
            .then(response => {
              console.log(response)
              let vehicleslist = response.data.results
              let next = response.data.next
              let prev = response.data.previous
              let size = response.data.count / 10 + 1
              this.setState({vehicles: vehicleslist, nextUrl: next, prevUrl: prev, pageSize: size})
            })
            .catch(error => {
              console.log(
                "Error with the loading vehicles.",
                error,
              )
            })
    }

    componentDidMount() {
        this.loadingData(this.state.vehiclesUrl)
    }

    handleClick(event) {
        const {innerText} = event.target

        let curUrl = ''

        if(innerText === 'prev')
            curUrl = this.state.prevUrl
        else if(innerText === 'next')
            curUrl = this.state.nextUrl
        else
            curUrl = `https://swapi.dev/api/vehicles/?page=${innerText}`

        this.loadingData(curUrl)
    }


    render() {
        let arrButtons = []
        for (let i = 1; i < this.state.pageSize; i++) {
            arrButtons.push(<button className="m-2" onClick={this.handleClick}>{i}</button>)
    }

    return (
        <div>
            <h1 className="text-center">Star Wars vehicles</h1>

            <div className="elem-wrap elem-center">
                {this.state.vehicles.map((vehicle, i) => (
                    <div className="vehicle-elem vehicle-border">

                        {/* <div> 
                            <img src={process.env.PUBLIC_URL + `/images/${(vehicle.name.replace(/ /g, '-'))}.jpg`} alt="" className="elem-center-h100"/>                        
                        </div> */}

                        <div className="vehicle-prop">
                            <div> Name: </div>
                            <div key={i}>{vehicle.name}</div>
                        </div>

                        <div className="vehicle-prop">
                            <div> Model: </div>
                            <div key={i}>{vehicle.model}</div>
                        </div>

                        <div className="vehicle-prop">
                            <div> Manufacturer: </div>
                            <div key={i}>{vehicle.manufacturer}</div>
                        </div>

                        <div className="vehicle-prop">
                            <div> Cost in credits: </div>
                            <div key={i}>{vehicle.cost_in_credits}</div>
                        </div>

                        <div className="svehicle-prop">
                            <div> Length: </div>
                            <div key={i}>{vehicle.length}</div>
                        </div>

                        <div className="vehicle-prop">
                            <div> Max atmosphering speed: </div>
                            <div key={i}>{vehicle.max_atmosphering_speed}</div>
                        </div>

                        <div className="vehicle-prop">
                            <div> Crew: </div>
                            <div key={i}>{vehicle.crew}</div>
                        </div>

                        <div className="vehicle-prop">
                            <div> Passengers: </div>
                            <div key={i}>{vehicle.passengers}</div>
                        </div>

                        <div className="vehicle-prop">
                            <div> Cargo capacity: </div>
                            <div key={i}>{vehicle.cargo_capacity}</div>
                        </div>

                        <div className="vehicle-prop">
                            <div> Consumables: </div>
                            <div key={i}>{vehicle.consumables}</div>
                        </div>
                        
                        <div className="vehicle-prop">
                            <div> Vehicle class: </div>
                            <div key={i}>{vehicle.vehicle_class}</div>
                        </div>
                        
                    </div>
                
                ))}
            </div>
            
            <div className="elem-center elem">
                <button className="m-2" onClick={this.handleClick}>prev</button>
                    {arrButtons}
                <button className="m-2" onClick={this.handleClick}>next</button>
            </div>

        </div>
        )
    }
}

export default Vehicles