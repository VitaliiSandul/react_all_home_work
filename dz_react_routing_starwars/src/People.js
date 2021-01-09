import React from 'react';
import axios from 'axios';

class People extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            people: [],
            peopleUrl: 'https://swapi.dev/api/people/?page=1',
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
              let peoplelist = response.data.results
              let next = response.data.next
              let prev = response.data.previous
              let size = response.data.count / 10 + 1
              this.setState({people: peoplelist, nextUrl: next, prevUrl: prev, pageSize: size})
            })
            .catch(error => {
              console.log(
                "Error with the loading people.",
                error,
              )
            })
    }

    componentDidMount() {
        this.loadingData(this.state.peopleUrl)
    }

    handleClick(event) {
        const {innerText} = event.target

        let curUrl = ''

        if(innerText === 'prev')
            curUrl = this.state.prevUrl
        else if(innerText === 'next')
            curUrl = this.state.nextUrl
        else
            curUrl = `https://swapi.dev/api/people/?page=${innerText}`

        this.loadingData(curUrl)
    }


    render() {
        let arrButtons = []
        for (let i = 1; i < this.state.pageSize; i++) {
            arrButtons.push(<button className="m-2" onClick={this.handleClick}>{i}</button>)
    }

    return (
        <div>
            <h1 className="text-center">Star Wars People</h1>

            <div className="elem-wrap elem-center">
                {this.state.people.map((person, i) => (
                    <div className="person-elem person-border">

                        <div> 
                            <img src={process.env.PUBLIC_URL + `/images/${(person.name.replace(/ /g, '-'))}.jpg`} alt="" className="elem-center-h100"/>                        
                        </div>

                        <div className="person-prop">
                            <div> Name: </div>
                            <div key={i}>{person.name}</div>
                        </div>

                        <div className="person-prop">
                            <div> Height: </div>
                            <div key={i}>{person.height}</div>
                        </div>

                        <div className="person-prop">
                            <div> Mass: </div>
                            <div key={i}>{person.mass}</div>
                        </div>

                        <div className="person-prop">
                            <div> Hair color: </div>
                            <div key={i}>{person.hair_color}</div>
                        </div>

                        <div className="person-prop">
                            <div> Skin color: </div>
                            <div key={i}>{person.skin_color}</div>
                        </div>

                        <div className="person-prop">
                            <div> Eye color: </div>
                            <div key={i}>{person.eye_color}</div>
                        </div>

                        <div className="person-prop">
                            <div> Birth year: </div>
                            <div key={i}>{person.birth_year}</div>
                        </div>

                        <div className="person-prop">
                            <div> Gender: </div>
                            <div key={i}>{person.gender}</div>
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

export default People