import React from 'react';
import axios from 'axios';

class Starships extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            starships: [],
            starshipsUrl: 'https://swapi.dev/api/starships/?page=1',
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
              let starshipslist = response.data.results
              let next = response.data.next
              let prev = response.data.previous
              let size = response.data.count / 10 + 1
              this.setState({starships: starshipslist, nextUrl: next, prevUrl: prev, pageSize: size})
            })
            .catch(error => {
              console.log(
                "Error with the loading starships.",
                error,
              )
            })
    }

    componentDidMount() {
        this.loadingData(this.state.starshipsUrl)
    }

    handleClick(event) {
        const {innerText} = event.target

        let curUrl = ''

        if(innerText === 'prev')
            curUrl = this.state.prevUrl
        else if(innerText === 'next')
            curUrl = this.state.nextUrl
        else
            curUrl = `https://swapi.dev/api/starships/?page=${innerText}`

        this.loadingData(curUrl)
    }


    render() {
        let arrButtons = []
        for (let i = 1; i < this.state.pageSize; i++) {
            arrButtons.push(<button className="m-2" onClick={this.handleClick}>{i}</button>)
    }

    return (
        <div>
            <h1 className="text-center">Star Wars Starships</h1>

            <div className="elem-wrap elem-center">
                {this.state.starships.map((starship, i) => (
                    <div className="starship-elem starship-border">

                        {/* <div> 
                            <img src={process.env.PUBLIC_URL + `/images/${(starship.name.replace(/ /g, '-'))}.jpg`} alt="" className="elem-center-h100"/>                        
                        </div> */}

                        <div className="starship-prop">
                            <div> Name: </div>
                            <div key={i}>{starship.name}</div>
                        </div>

                        <div className="starship-prop">
                            <div> Model: </div>
                            <div key={i}>{starship.model}</div>
                        </div>

                        <div className="starship-prop">
                            <div> Manufacturer: </div>
                            <div key={i}>{starship.manufacturer}</div>
                        </div>

                        <div className="starship-prop">
                            <div> Cost in credits: </div>
                            <div key={i}>{starship.cost_in_credits}</div>
                        </div>

                        <div className="starship-prop">
                            <div> Length: </div>
                            <div key={i}>{starship.length}</div>
                        </div>

                        <div className="starship-prop">
                            <div> Max atmosphering speed: </div>
                            <div key={i}>{starship.max_atmosphering_speed}</div>
                        </div>

                        <div className="starship-prop">
                            <div> Crew: </div>
                            <div key={i}>{starship.crew}</div>
                        </div>

                        <div className="starship-prop">
                            <div> Passengers: </div>
                            <div key={i}>{starship.passengers}</div>
                        </div>

                        <div className="starship-prop">
                            <div> Cargo capacity: </div>
                            <div key={i}>{starship.cargo_capacity}</div>
                        </div>

                        <div className="starship-prop">
                            <div> Consumables: </div>
                            <div key={i}>{starship.consumables}</div>
                        </div>

                        <div className="starship-prop">
                            <div> Hyperdrive rating: </div>
                            <div key={i}>{starship.hyperdrive_rating}</div>
                        </div>

                        <div className="starship-prop">
                            <div> MGLT: </div>
                            <div key={i}>{starship.MGLT}</div>
                        </div>

                        <div className="starship-prop">
                            <div> Starship class: </div>
                            <div key={i}>{starship.starship_class}</div>
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

export default Starships
