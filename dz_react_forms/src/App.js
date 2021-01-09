import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Button from 'react-bootstrap/Button';

class App extends React.Component {
    constructor() {
        super()
        this.state = {
          firstname: "",
          lastname: "",
          age: "",
          gender: "",
          destination: "",
          dietrestrictions:  {            
            omnivorousFood: false,
            separateFeeding: false,
            fractionalNutrition: false,
            vegetarianism: false,
            veganity: false,
            rawFood: false,
            ayurverdicFood: false,
            fructorianism: false,
            lifeWithoutFood: false
          }
        }

      this.handleChange = this.handleChange.bind(this)
      this.handleSubmit = this.handleSubmit.bind(this)
    } 

    handleSubmit(event) {
      event.preventDefault()
    }

    handleChange(event) {
      const {name, value, type, checked} = event.target
      type === "checkbox" ? this.setState({ dietrestrictions: { [name]: checked } }) 
                          : this.setState({ [name]: value }) 
    }
    
    render() {
      return (
        <main className="elem">
            <form>
              <div className="elem-center">
                <div>
                  <div className="elem-center">
                    <div>
                      <input placeholder="First Name" name="firstname" value={this.state.firstname} 
                            onChange={this.handleChange} />
                    </div>

                    <div>
                      <input placeholder="Last Name" name="lastname" value={this.state.lastName} 
                            onChange={this.handleChange} />
                    </div>

                    <div>
                      <input placeholder="Age" name="age" value={this.state.age} onChange={this.handleChange} />
                    </div>
                  </div>

                  <div className="elem-center m-3">
                    <div>
                      <label>
                        <input type="radio" name="gender" value="Male" checked={this.state.gender === "Male"} 
                              onChange={this.handleChange} /> Male
                      </label>
                    </div>

                    <div>
                      <label>
                          <input type="radio" name="gender" value="Female" checked={this.state.gender === "Female"}
                                onChange={this.handleChange} /> Female
                      </label>
                    </div>
                  </div>

                  <div className="elem-center">
                    <select value={this.state.destination} name="destination" onChange={this.handleChange}>
                        <option value="">-- Destination --</option>
                        <option value="Ukraine">Ukraine</option>
                        <option value="Italy">Italy</option>
                        <option value="Spain">Spain</option>
                        <option value="Croatia">Croatia</option>
                        <option value="Montenego">Montenego</option>
                        <option value="United Kingdom">United Kingdom</option>
                        <option value="Canada">Canada</option>
                    </select>
                  </div>                    

                    <div  className="elem3">
                      <div className="text-uppercase font-weight-bold mt-3">dietary restrictions:</div>
                    </div>
                    <div className="elem-center">
                    <div>
                      <div>
                        <label>
                            <input type="checkbox" name="omnivorousFood" onChange={this.handleChange}
                                  checked={this.state.dietrestrictions.omnivorousFood}
                            /> Omnivorous food
                        </label>
                      </div>

                      <div>
                        <label>
                            <input type="checkbox" name="separateFeeding" onChange={this.handleChange}
                                  checked={this.state.dietrestrictions.separateFeeding}
                            /> Separate feeding
                        </label>
                      </div>

                      <div>
                        <label>
                            <input type="checkbox" name="fractionalNutrition" onChange={this.handleChange}
                                  checked={this.state.dietrestrictions.fractionalNutrition}
                            /> Fractional nutrition
                        </label>
                      </div>

                      <div>
                        <label>
                            <input type="checkbox" name="vegetarianism" onChange={this.handleChange}
                                  checked={this.state.dietrestrictions.vegetarianism}
                            /> Vegetarianism
                        </label>
                      </div>

                      <div>
                        <label>
                            <input type="checkbox" name="veganity" onChange={this.handleChange}
                                  checked={this.state.dietrestrictions.veganity}
                            /> Veganity
                        </label>
                      </div>
                  </div>

                  <div>
                      <div>
                        <label>
                            <input type="checkbox" name="rawFood" onChange={this.handleChange}
                                  checked={this.state.dietrestrictions.rawFood}
                            /> Raw food
                        </label>
                      </div>

                      <div>
                        <label>
                            <input type="checkbox" name="ayurverdicFood" onChange={this.handleChange}
                                  checked={this.state.dietrestrictions.ayurverdicFood}
                            /> Ayurverdic food
                        </label>
                      </div>

                      <div>
                        <label>
                            <input type="checkbox" name="fructorianism" onChange={this.handleChange}
                                  checked={this.state.dietrestrictions.fructorianism}
                            /> Fructorianism
                        </label>
                      </div>                  

                      <div>
                        <label>
                            <input type="checkbox" name="lifeWithoutFood" onChange={this.handleChange}
                                  checked={this.state.dietrestrictions.lifeWithoutFood}
                            /> Life without food
                        </label>
                      </div> 
                    </div> 
                  </div>              
                    
                  <div className="elem-center">
                    <Button variant="outline-primary" className="btn-custom">Submit</Button>
                  </div>
                
                </div>
              </div>
            </form>
            <hr />
            
            <h2><font color="#3AC1EF">Entered information:</font></h2>
            
            <p>Your name: {this.state.firstname} {this.state.lastname}</p>
            
            <p>Your age: {this.state.age}</p>
            
            <p>Your gender: {this.state.gender}</p>
            
            <p>Your destination: {this.state.destination}</p>
            
            <p>Your dietary restrictions:</p>
            <ul>
              <li>{this.state.dietrestrictions.omnivorousFood ? "OmnivorousFood" : "NonOmnivorousFood"}</li>
              <li>{this.state.dietrestrictions.separateFeeding ? "SeparateFeeding" : "NonSeparateFeeding"}</li>
              <li>{this.state.dietrestrictions.fractionalNutrition ? "FractionalNutrition" : "NonFractionalNutrition"}</li>
              <li>{this.state.dietrestrictions.vegetarianism ? "Vegetarianism" : "NonVegetarianism"}</li>
              <li>{this.state.dietrestrictions.veganity ? "veganity" : "NonVeganity"}</li>
              <li>{this.state.dietrestrictions.rawFood ? "RawFood" : "NonRawFood"}</li>
              <li>{this.state.dietrestrictions.ayurverdicFood ? "AyurverdicFood" : "NonAyurverdicFood"}</li>
              <li>{this.state.dietrestrictions.fructorianism ? "Fructorianism" : "NonFructorianism"}</li>
              <li>{this.state.dietrestrictions.lifeWithoutFood ? "LifeWithoutFood" : "NonLifeWithoutFood"}</li>              
            </ul>
        </main>
    )
  }
}

export default App