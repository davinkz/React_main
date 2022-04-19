import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

class Car{
  constructor(name){
    this.name = name;
  }

  present(){
 return "hello "+ this.name;
  }
}

class Rain extends Car{
 
  constructor(name, type){
    super(name);
    this.model = type;
  }
  
  Show(){
    return "My name is "+this.present()+ " I drive a "+this.model
  }
}

// const myCar = new Car("Damilola");
const myRain = new Rain("Solo","benz");
const shoe = myRain.Show();
//const shoe = myCar.present();

//const myFirstElement = "Hello Dammy";



function Hello(){
  return "I am the best";
}

//
Hello =()=>{
  return "I am the best";
}

// Hi=()=> "boy";

// Hi= (val) => "boy "+ val;
const myArray = ["a", "b", "c","d" ,"e", "f", "g"];
const myList = myArray.map((item) => <p>{item}</p>);

const vehicles = ["mustang", "foo", "explorer"];
//const [car, truck, suv] = vehicles;

const [car, , suv] = vehicles;

const vehicleone ={
  name : 'Sola',
  model: 'Mustang',
  type: 'car',
  year: 2021, 
  color: 'red',
  registration: {
    city: 'Houston',
    state: 'Texas',
    country: 'USA'
  }

}


//old
// function vehicle(veh){
// return "my name is "+veh.name+ " and my car model is "+veh.model;
// }
// const y = vehicle(vehicleone);

//new
// function vehicle({name, model, type, year}){
//   return "my name is "+name+ " and my car model is "+model;
//   }
//   const y = vehicle(vehicleone);

// function vehicle({name, model, registration : {state}}){
//     return "my name is "+name+ " and my car model is "+model+ "in my state: "+state;
//     }
//     const y = vehicle(vehicleone);

const a = [1,2,3];
const b = [4,5,6];

const c = [...a,...b];

const [one,...rest] = a;

//object
const  myvehicle ={
 d : 1,
 e : 2,
 f : 'x'
}

const vehicle = {
  a : 'a',
  b : 'b',
  c : 'c'
}

const azs = {...myvehicle, ...vehicle};
console.log(azs);

const hi = (
  <p>Hello there!</p>
);


const hello = <p>This is cool</p>;
let names = "Dammy";
const pip = <p>Hi guys i am {5 + 5} and my name is {names}</p>

const y = 10;
if(y > 5){
  names = "sola";
}
else{
  names = "tola";
}

const myele = <h1>{y> 12? "Sola": "Dammy"}</h1>
//const hey = 
//document.write(azs);
// ReactDOM.render([one,...rest], document.getElementById('root'));
// ReactDOM.render(hi, document.getElementById('root'));
// ReactDOM.render(names, document.getElementById('pop'));
// ReactDOM.render({y}  > 5? "sola" :  "tola", document.getElementById('pop'));
// ReactDOM.render(myele, document.getElementById('pop'));
function Dad(){
  return <h2>Hello Dammy</h2>;
}

function Mum(shoe){
  return <h2>Hello Dammy {shoe.color}</h2>;
}

function Child(){
  return (
  <>
   <h3>I am good</h3>
  <Dad />
  </>
  )

}

function Son(pro){
  return <h1>Hi {pro.name}</h1>
}

const dsa = <Son name ="Dammy"/>

function Dat(prop){
  return <h2>i am a {prop.name}</h2>
}

function Bat(){
  const ap = "sugar Boy";
  return ( 
  <>
  <h3>This is so me</h3> 
  {/* <Dat name="man"/> */}
  <Dat name = {ap} />
  </>
   )
  }

   function Dats(prop){
    return <h2>i am a {prop.name.model}</h2>
  }

  function Cats(){
    const xv = {namex : "sola", model : "Benz", age : 10};
    return (
      <>
        <p>Hello Dammy</p>
        <Dats name = {xv} />
      </>
    )
  }

  function Football(){
    const shoot =() =>{
      alert("Boy");
    }

    return <button onClick={shoot}>Click Me</button>;
  }
  //(
       
     function Bop(){
       const pol =(a) => {
         alert(a);
       }

       return <button onClick = {() => pol("Goal")}>Hi there</button>
     }   
     
     function Cop(){
       const aop = (a,b) => {
         alert(b.type);
       }

       return <button onClick={(event) => aop("Hello there!", event)} >Hi</button>
     }


     function Carz(prop){
      const pips = prop.pipsx;
      return (

        <>
        {
      //  pips.length == 0 &&
        <p>I have {pips.length} in my garage</p>
        }
        </>
      )
     }

     const pips = [ "hi", 2, "deep"];
         
       
     ReactDOM.render(<Carz pipsx={pips}  />, document.getElementById('pop'));

// ReactDOM.render(<Mum color="red" />, document.getElementById('pop'));
// ReactDOM.render(<Child />, document.getElementById('pop'));
// ReactDOM.render(dsa, document.getElementById('pop'));
// ReactDOM.render(<Cats />, document.getElementById('pop'));
// ReactDOM.render(<Football />, document.getElementById('pop'));
// ReactDOM.render(<Bop />, document.getElementById('pop'));
// ReactDOM.render(<Cop />, document.getElementById('pop'));

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
