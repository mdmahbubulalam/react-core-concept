import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';

function App() {
  var name = 'Dr. Mahfuz';
  var person = {
    name:'Limon',
    age:30
  }

  var style ={
    color: 'red',
    backgroundColor : 'blue'
  }

  const actors =['Tom','Shakib','Johnny','Shahruk'];
  const products=[
    {name:'Photoshop',price:'$34.99'},
    {name:'Illustrator',price:'$24.99'},
    {name:'PDF Reader',price:'$14.99'},
  ]
  return (
    
    <div className="App">
      <header className="App-header">
      
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          Edit Done <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <h1>My Heading : {2+3}</h1>
        <p>my first react paragraph</p>
        <p>Name : {name}</p>
        <p style={style}>I am {person.name} and I am {person.age} years old</p>
        <p style={{color: 'red',backgroundColor : 'orange'}}> I am {person.name} and I am {person.age} years old</p>
        <Person></Person>
        <Person></Person>
        <Person></Person>
        <Actor name='Lionardo' age='35'></Actor>
        <Actor name='Tom' age='36'></Actor>
        <Actor name={actors[1]} age='45'></Actor>
        {/* <Products name={products[0].name} price={products[0].price}></Products> */}
        <Products product={products[0]}></Products>
        <Products product={products[1]}></Products>
        <Counter></Counter>
        <Users></Users>
        

        <ul>
          {
            actors.map(actor=><li>{actor}</li>)
          }
          {
            products.map(product => <li>{product.name+' '+product.price}</li>)
          }
        </ul>

        {
          products.map(product=><Products product={product}></Products>)
        }

      </header>
    </div>
  );
}

function Person(){
  const personStyle ={
    border: '3px solid red',
    margin: '3px'
  }
  return (
    <div style={personStyle}>
      <h1>Name : Shakib Khan</h1>
      <h3>Hero of the year</h3>
    </div>
  )
}

function Actor(props) {
  const actorStyle = {
    border: '3px solid blue',
    margin: '3px'
  }
  
  return(
    <div style={actorStyle}>
      <h2>Name : {props.name}</h2>
      <h3>Age : {props.age}</h3>
    </div>
  )
}

function Products(props){
  const productStyle={
    backgroundColor:'lightgrey',
    borderRadius:'3px solid blue',
    height:'200px',
    width:'200px',
    marginTop:'5px'
  }
  const {name,price} = props.product;
  console.log(name,price);
  return(
    <div style={productStyle}>
      {/* <h3>{props.name}</h3>
      <h5>{props.price}</h5>
      <h3>{props.product.name}</h3>
      <h5>{props.product.price}</h5> */}
      <h3>{name}</h3>
      <h5>{price}</h5>
      <button>Buy Now</button>
    </div>
  )
}

function Counter() {
  const [count,setCount]= useState(0)
  // const handleIncrease = ()=>{
  //   // const newCount = count+1;
  //   // setCount(newCount);
  //   setCount(count+1);
  // }

  const handleIncrease = ()=>setCount(count+1);

  return(
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleIncrease}>Increase</button>
      <button onMouseMove={()=>setCount(count-1)}>Decrease</button>
    </div>
  )
}

function Users() {
  const [users,setUsers]=useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(data=>setUsers(data))
  },[])
  return(
    <div>
      <h3>Dynamic Users:{users.length}</h3>
       <ul>
         {
           users.map(user=><li>{user.name}</li>)
         }

       </ul>
    </div>
  )
}

export default App;
