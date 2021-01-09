import React from 'react';
import axios from 'axios';

class Planets extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            planets: [],
            planetsUrl: 'https://swapi.dev/api/planets/?page=1',
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
              let planetslist = response.data.results
              let next = response.data.next
              let prev = response.data.previous
              let size = response.data.count / 10 + 1
              this.setState({planets: planetslist, nextUrl: next, prevUrl: prev, pageSize: size})
            })
            .catch(error => {
              console.log(
                "Error with the loading planets.",
                error,
              )
            })
    }

    componentDidMount() {
        this.loadingData(this.state.planetsUrl)
    }

    handleClick(event) {
        const {innerText} = event.target

        let curUrl = ''

        if(innerText === 'prev')
            curUrl = this.state.prevUrl
        else if(innerText === 'next')
            curUrl = this.state.nextUrl
        else
            curUrl = `https://swapi.dev/api/planets/?page=${innerText}`

        this.loadingData(curUrl)
    }


    render() {
        let arrButtons = []
        for (let i = 1; i < this.state.pageSize; i++) {
            arrButtons.push(<button className="m-2" onClick={this.handleClick}>{i}</button>)
    }

    return (
        <div>
            <h1 className="text-center">Star Wars Planets</h1>

            <div className="elem-wrap elem-center">
                {this.state.planets.map((planet, i) => (
                    <div className="planet-elem planet-border">

                        <div> 
                            <img src={process.env.PUBLIC_URL + `/images/${(planet.name.replace(/ /g, '-'))}.jpg`} alt="" className="elem-center-h100"/>                        
                        </div>

                        <div className="planet-prop">
                            <div> Name: </div>
                            <div key={i}>{planet.name}</div>
                        </div>

                        <div className="planet-prop">
                            <div> Rotation period: </div>
                            <div key={i}>{planet.rotation_period}</div>
                        </div>

                        <div className="planet-prop">
                            <div> Orbital period: </div>
                            <div key={i}>{planet.orbital_period}</div>
                        </div>

                        <div className="planet-prop">
                            <div> Diameter: </div>
                            <div key={i}>{planet.diameter}</div>
                        </div>

                        <div className="planet-prop">
                            <div> Climate: </div>
                            <div key={i}>{planet.climate}</div>
                        </div>

                        <div className="planet-prop">
                            <div> Gravity: </div>
                            <div key={i}>{planet.gravity}</div>
                        </div>

                        <div className="planet-prop">
                            <div> Terrain: </div>
                            <div key={i}>{planet.terrain}</div>
                        </div>

                        <div className="planet-prop">
                            <div> Surface water: </div>
                            <div key={i}>{planet.surface_water}</div>
                        </div>

                        <div className="planet-prop">
                            <div> Population: </div>
                            <div key={i}>{planet.population}</div>
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

export default Planets