import './App.css'

function Test({name}){
 //function Test(props)
  console.log({name});
  return(
  <h1>Hello {name}</h1>
  //<h1>Hello {props.name}</h1>
  )
}

function App() {
  return (
    <div>
      <Test name='sneha' />
      <Test name='asin' />
      <Test name='shriya_saran' />
      <Test name='Nivetha_pethuraj' />
    </div>
  )
}

export default App
