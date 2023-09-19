// import axios from 'axios';
// import React, { useRef, useState } from 'react';

// const App = () => {
//   const inputRef = useRef(null);
//   const [weatherData, setWeatherData] = useState(null);

//   // const getWeather = async (event) => {
//   //   event.preventDefault();

//   //   try {
//   //     const response = await axios.get(`http://api.weatherapi.com/v1/current.json?key=08a4d0ed280b4d79b34192642231709&q=${inputRef.current.value}&aqi=no`);

//   //     // Store the response data in the state
//   //     setWeatherData(response.data);
//   //   } catch (error) {
//   //     console.error(error);
//   //   }

//   //   // const arr=[...weatherData];



//   // }

//   const getWeather = async (event) => {
//     event.preventDefault();

//     try {
//       const response = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${inputRef.current.value}`
//       );

//       // Store the response data in the state
//       setWeatherData(response.data);
//     } catch (error) {
//       console.error(error);
//     }

//     // const arr=[...weatherData];



//   }


//   return (
//     <div>
//       <h1 className='text-center display-1'>Weather App</h1>
//       <div className="container mt-5">
//         <form onSubmit={getWeather}>
//           <div className="form-group">
//             <label htmlFor="CityName">Your Word:</label>
//             <input
//               type="text"
//               className="form-control"
//               id="CityName"
//               name="inputField"
//               required
//               ref={inputRef}
//             />
//           </div>
//           <button type="submit" className="btn btn-primary mt-5 btn-center">Get Meaning</button>
//         </form>
//       </div>

//       {/* <div className="container mt-5">
//         {weatherData && (
//           <div className="card" style={{ width: '18rem' }}>
//             {/* <img className="card-img-top" src={weatherData.current.condition.icon} alt="Card image cap" /> */}
//             {/* <div className="card-body">
//               <h2 className="card-text"> Name:{weatherData.name}</h2>
//               <h2 className="card-text">Region:{weatherData.phonetic}</h2>
//               <h2 className="card-text">Country:{weatherData.orgin}</h2> */}
//               {/* <h2 className="card-text">Temperature:{weatherData.current.temp_c}</h2> */}
// {/* 
//             </div>
//           </div>





//         )}



//       </div> */} 
// <div className="container mt-5">
//   {weatherData && (
//     <div className="container">
//       <textarea
//         className="form-control"
//         rows="5" // Adjust the number of rows as needed
//         value={`Word: ${weatherData[0].word}\nPhonetic: ${weatherData[0].phonetic}\nOrigin: ${weatherData[0].origin}\n\nMeanings:\n${weatherData[0].meanings.map((meaning, index) => (
//           `Part of Speech: ${meaning.partOfSpeech}\nDefinition: ${meaning.definitions[0].definition}\nExample: ${meaning.definitions[0].example}\n\n`
//         )).join("")}`}
//         readOnly
//       />
//     </div>
//   )}
// </div>



//     </div>
//   );
// }

// export default App;

































// // import React from 'react';
// // import { useRef , useState } from 'react';

// // const App = () => {
// // const [Name, setName] = useState("");
// // const [Number, setNumber] = useState("");
// // const [City, setCity] = useState("");
// // const [Code, setCode] = useState("");


// // const Nameref=useRef(null);
// // const Numberref=useRef(null);
// // const Coderef=useRef(null);
// // const Cityref=useRef(null);



// // const changehandler=(event)=>{
// // event.preventDefault();
// // setName(Nameref.current.value);
// // setNumber(Numberref.current.value);
// // setCity(Cityref.current.value);
// // setCode(Coderef.current.value);
// // }



// //   return (
// //     <div>
// //       <div className="contianer">
// //       <form onSubmit={changehandler}>
// //         <div className="form-group">
// //           <label htmlFor="Name">Name:</label>
// //           <input
// //           ref={Nameref}
// //             type="text"
// //             className="form-control"
// //             id="Name"
// //             name="Name"
// //             placeholder="Enter your name"
// //           />
// //         </div>
// //         <div className="form-group">
// //           <label htmlFor="Number">Number:</label>
// //           <input
// //           ref={Numberref}
// //             type="text"
// //             className="form-control"
// //             id="Number"
// //             name="Number"
// //             placeholder="Enter your number"
// //           />
// //         </div>
// //         <div className="form-group">
// //           <label htmlFor="City">City:</label>
// //           <input
// //           ref={Cityref}
// //             type="text"
// //             className="form-control"
// //             id="City"
// //             name="City"
// //             placeholder="Enter your city"
// //           />
// //         </div>
// //         <div className="form-group">
// //           <label htmlFor="Code">Code:</label>
// //           <input
// //           ref={Coderef}
// //             type="text"
// //             className="form-control"
// //             id="Code"
// //             name="Code"
// //             placeholder="Enter your code"
// //           />
// //         </div>
// //         <button type="submit" className="btn btn-primary">Submit</button>
// //       </form>

// // <table className='table'>

// // <thead>
// //  <tr>
// //  <th>Name</th>
// //   <th>City</th>
// //   <th>Code</th>
// //   <th>Number</th>
// //  </tr>
// // </thead>
// // <tbody>
// //   <tr>
// //     <td>{Name}</td>
// //     <td>{City}</td>
// //     <td>{Number}</td>
// //     <td>{Code}</td>
// //   </tr>
// // </tbody>

// // </table>





// //     </div>

// //       </div>
  
// //   );
// // }

// // export default App;
import React, { useRef, useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const inputRef = useRef(null);
  const [weatherData, setWeatherData] = useState({
    0: {
      word: 'Enter the word',
      phonetic: '',
      origin: '',
      meanings: [],
    },
  });

  const getWeather = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${inputRef.current.value}`);

      // Store the response data in the state
      setWeatherData(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    // Fetch data from the API when the component mounts
    fetchData(); // Uncomment this line to fetch data on component mount
  }, []);

  // Function to fetch data from the API
  const fetchData = async () => {
    try {
      const response = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/your-default-word`);

      // Store the response data in the state
      setWeatherData(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className=" text-white"
    style={{backgroundColor:'#D1E8E2' , }}>
      <h1 className='text-center display-1'
      
      
      
      style={{color:"#19747E"}}
      
      
      >Dictionary App</h1>
      <div className="container mt-5">
        <form onSubmit={getWeather}>
          <div className="form-group">
            <label htmlFor="Word"
            
            
             
      
      style={{color:"#19747E"}}
      
            
            
            > Enter Your Word:</label>
            <input
              type="text"
              className="form-control"
              id="Word"
              name="inputField"
              required
              ref={inputRef}
            />
          </div>
          <button type="submit" className="btn  btn-primary mt-5  btn-center"
          
          style={{marginLeft:"40%" , color:"#19747E" , backgroundColor:"#D1E8E2" , borderColor:"#19747E"}}
          
          >Get Meaning</button>
        </form>
      </div>

      <div className="container mt-5">
        <div className="container">
          <textarea
          style={{height:"300px", color:"#19747E"}}
            className="form-control"
            rows="5"
            value={`Word: ${weatherData[0].word}\nPhonetic: ${weatherData[0].phonetic}\nOrigin: ${weatherData[0].origin}\n\nMeanings:\n${weatherData[0].meanings.map((meaning, index) => (
              `Part of Speech: ${meaning.partOfSpeech}\nDefinition: ${meaning.definitions[0].definition}\nExample: ${meaning.definitions[0].example}\n\n`
            )).join("")}`}
            readOnly
          />
        </div>
      </div>
    </div>
  );
}

export default App;
