import React from 'react'

 const App = () => {


  const [height, setHeight] = React.useState('')
  const [weight, setWeight] = React.useState('')
  const [bmi, setBmi] = React.useState(null)

  const calculateBmi = () => {
    if(!height || !weight) {
      setBmi("Please enter valid height and weight")
      return
    }
     const heightInMeters = height / 100 
     const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2)

    let bmiCategory = ''
    if(bmiValue < 18.5) {
      bmiCategory = 'Underweight'
    } else if(bmiValue >= 18.5 && bmiValue < 24.9) {
      bmiCategory = 'Normal weight'
    } else if(bmiValue >= 25 && bmiValue < 29.9) {
      bmiCategory = 'Overweight'
    } else {
      bmiCategory = 'Obesity'
    }
    
    setBmi(` ${bmiValue} (${bmiCategory})`)
  }


  return (
    <div>
      <div className="container">
        <h1>BMI Calculator</h1>
        {/* Input fields for height*/}
        <label htmlFor="height">Height (cm):</label>
        <input type="number" id="height" placeholder='eg 170'
        value={height} 
        onChange={(e) => setHeight(e.target.value)} />

        {/* Input fields for weight*/}
        <label htmlFor="weight">Weight (kg):</label>
        <input type="number" id="weight" placeholder='70kg' 
        value={weight}
        onChange={(e) => setWeight(e.target.value)} />
        {/* Calculate Button */}
        <button onClick={calculateBmi}>Calculate BMI</button>

        {/* Display BMI Result */}
        <div className="result">
          <h2>Your BMI is: </h2>
          {bmi}
        </div>
      </div>
    </div>
  )
  
}

export default App