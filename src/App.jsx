// import { useState } from 'react'

// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <nav>
//         <div className="logo">
//           <img src="Images/logo.jpg" alt="" />
//         </div>
//         <div className="search">
//           <input type="text" />
//           <button>Search</button>
//         </div>
//       </nav>
//       <header>
//         <table>
//           <tr>
//             <th>Vegetable</th>
//             <th>Value</th>
//           </tr>
//           <tr>
//             <td>Potato (आलू)</td>
//             <td>RS. 16</td>

//           </tr>
//           <tr>
//             <td>Onion (प्याज़)</td>
//             <td>RS. 30</td>

//           </tr>
//           <tr>
//             <td>Tomato (टमाटर)</td>
//             <td>RS. 30</td>

//           </tr>
//           <tr>
//             <td>Radish (मूली)</td>
//             <td>RS. 25</td>

//           </tr>
//           <tr>
//             <td>Carrot (गाज़र)</td>
//             <td>RS. 20</td>

//           </tr>
//           <tr>
//             <td>Cucumber (खीरा)</td>
//             <td>RS. 40</td>

//           </tr>
//           <tr>
//             <td>Cauliflower (फूलगोभी)</td>
//             <td>RS. 30</td>

//           </tr>
//           <tr>
//             <td>Cabbage (पत्तागोभी)</td>
//             <td>RS. 25</td>

//           </tr>
//           <tr>
//             <td>Broccoli (ब्रोक्ली)</td>
//             <td>RS. 1000</td>

//           </tr>
//           <tr>
//             <td>Peas  (मटर )</td>
//             <td>RS. 25</td>

//           </tr>
//           <tr>
//             <td>Beetroot (चुकंदर)</td>
//             <td>RS. 25</td>

//           </tr>
//           <tr>
//             <td>Capsicum (शिमला मिर्च )</td>
//             <td>RS. 25</td>

//           </tr>
//           <tr>
//             <td>Jackfruit (कटहल)</td>
//             <td>RS. 25</td>

//           </tr>
//           <tr>
//             <td>Beans (बीन्स)</td>
//             <td>RS. 25</td>

//           </tr>
//           <tr>
//             <td>Mushroom (मशरूम)</td>
//             <td>RS. 25</td>

//           </tr>
//           <tr>
//             <td>Lady finger  (भिन्डी)</td>
//             <td>RS. 25</td>

//           </tr>
//           <tr>
//             <td>Sweet potato (शकरकंद)</td>
//             <td>RS. 25</td>

//           </tr>
//           <tr>
//             <td>Gourd (लौकी)</td>
//             <td>RS. 25</td>

//           </tr>
//           <tr>
//             <td>Turnip (शलगम)</td>
//             <td>RS. 25</td>

//           </tr>
//           <tr>
//             <td>Brinjal (बैंगन) </td>
//             <td>RS. 25</td>

//           </tr>
//         </table>
//       </header>
//     </>
//   )
// }

// export default App

import './App.css';

function App() {
  return (
    <>
      <nav>
        <div className="logo">

  <img src="Images/logo.jpg" alt="Farm Fresh" />
        </div >

  {/* <div className="search">
          <input type="text" placeholder="Search for vegetables..." />
          <button>Search</button>
        </div> */}

      </nav >
    <section className="vegetable-list">
      <h2>Daily Vegetable Prices</h2>
      <div className="card-container">
        {/* Replace the table with vegetable cards */}
        <div className="card">
          <img src="Images/potato.jpg" alt="Vegetable" />
          <div className="info">
            <h3>Potato (आलू)</h3>
            <p>Price: RS. 16/Kg</p>
          </div>
        </div>

        <div className="card">
          <img src="Images/onion.jpg" alt="Vegetable" />
          <div className="info">
            <h3>Onion (प्याज़)</h3>
            <p>Price: RS. 30/Kg</p>
          </div>
        </div>
        <div className="card">
          <img src="Images/tomato.jpg" alt="Vegetable" />
          <div className="info">
            <h3>Tomato (टमाटर)</h3>
            <p>Price: RS. 30/Kg</p>
          </div>
        </div>
        <div className="card">
          <img src="Images/radish.jpg" alt="Vegetable" />
          <div className="info">
            <h3>Radish (मूली)</h3>
            <p>Price: RS. 30/Kg</p>
          </div>
        </div>
        <div className="card">
          <img src="Images/carrot.jpg" alt="Vegetable" />
          <div className="info">
            <h3>Carrot (गाज़र)</h3>
            <p>Price: RS. 20/Kg</p>
          </div>
        </div>
        <div className="card">
          <img src="Images/cucumber.jpg" alt="Vegetable" />
          <div className="info">
            <h3>Cucumber (खीरा)</h3>
            <p>Price: RS. 40/Kg</p>
          </div>
        </div>
        <div className="card">
          <img src="Images/cauliflower.jpg" alt="Vegetable" />
          <div className="info">
            <h3>Cauliflower (फूलगोभी)</h3>
            <p>Price: RS. 30/Kg</p>
          </div>
        </div>
        <div className="card">
          <img src="Images/cabbage.jpg" alt="Vegetable" />
          <div className="info">
            <h3>Cabbage (पत्तागोभी)</h3>
            <p>Price: RS. 20/Kg</p>
          </div>
        </div>
        <div className="card">
          <img src="Images/broccoli.jpg" alt="Vegetable" />
          <div className="info">
            <h3>Broccoli (ब्रोक्ली)</h3>
            <p>Price: RS. 100/Kg</p>
          </div>
        </div>
        <div className="card">
          <img src="Images/Peas.jpg" alt="Vegetable" />
          <div className="info">
            <h3>Peas  (मटर )</h3>
            <p>Price: RS. 50/Kg</p>
          </div>
        </div>
        <div className="card">
          <img src="Images/Beetroot.jpg" alt="Vegetable" />
          <div className="info">
            <h3>Beetroot (चुकंदर)</h3>
            <p>Price: RS. 50/Kg</p>
          </div>
        </div>
        <div className="card">
          <img src="Images/Capsicum.jpg" alt="Vegetable" />
          <div className="info">
            <h3>Capsicum (शिमला मिर्च )</h3>
            <p>Price: RS. 80/Kg</p>
          </div>
        </div>
        <div className="card">
          <img src="Images/Jackfruit.jpg" alt="Vegetable" />
          <div className="info">
            <h3>Jackfruit (कटहल)</h3>
            <p>Price: RS. 40/Kg</p>
          </div>
        </div>
        <div className="card">
          <img src="Images/Beans.jpg" alt="Vegetable" />
          <div className="info">
            <h3>Beans (बीन्स)</h3>
            <p>Price: RS. 100/Kg</p>
          </div>
        </div>
        <div className="card">
          <img src="Images/Mushroom.jpg" alt="Vegetable" />
          <div className="info">
            <h3>Mushroom (मशरूम)</h3>
            <p>Price: RS. 30/Kg</p>
          </div>
        </div>
        <div className="card">
          <img src="Images/Ladyfinger.jpg" alt="Vegetable" />
          <div className="info">
            <h3>Lady finger  (भिन्डी)</h3>
            <p>Price: RS. 80/Kg</p>
          </div>
        </div>
        <div className="card">
          <img src="Images/Sweet Potato.jpg" alt="Vegetable" />
          <div className="info">
            <h3>Sweet potato (शकरकंद)</h3>
            <p>Price: RS. /Kg</p>
          </div>
        </div>
        <div className="card">
          <img src="Images/Gourd.jpg" alt="Vegetable" />
          <div className="info">
            <h3>Gourd (लौकी)</h3>
            <p>Price: RS.30/Kg</p>
          </div>
        </div>
        <div className="card">
          <img src="Images/Turnip.jpg" alt="Vegetable" />
          <div className="info">
            <h3>Turnip (शलगम)</h3>
            <p>Price: RS. /Kg</p>
          </div>
        </div>
        <div className="card">
          <img src="Images/Brinjal.jpg" alt="Vegetable" />
          <div className="info">
            <h3>Brinjal (बैंगन)</h3>
            <p>Price: RS. 40/Kg</p>
          </div>
        </div>
        <div className="card">
          <img src="Images/Lemon.jpg" alt="Vegetable" />
          <div className="info">
            <h3>Lemon</h3>
            <p>Price: RS. 130/Kg</p>
          </div>
        </div>
        <div className="card">
          <img src="Images/Spinach.jpg" alt="Vegetable" />
          <div className="info">
            <h3>Spinach</h3>
            <p>Price: RS. 20/Kg</p>
          </div>
        </div>
        <div className="card">
          <img src="Images/Garlic.jpg" alt="Vegetable" />
          <div className="info">
            <h3>Ginger</h3>
            <p>Price: RS. 140/Kg</p>
          </div>
        </div>
        <div className="card">
          <img src="Images/.jpg" alt="Vegetable" />
          <div className="info">
            <h3></h3>
            <p>Price: RS. /Kg</p>
          </div>
        </div>
        <div className="card">
          <img src="Images/Ridge Gourd.jpg" alt="Vegetable" />
          <div className="info">
            <h3>Ridge Gourd</h3>
            <p>Price: RS. 50/Kg</p>
          </div>
        </div>
        <div className="card">
          <img src="Images/Pumpkin.jpg" alt="Vegetable" />
          <div className="info">
            <h3>Pumpkin</h3>
            <p>Price: RS. 25/Kg</p>
          </div>
        </div>
        <div className="card">
          <img src="Images/Red-Yellow Capsicum.jpg" alt="Vegetable" />
          <div className="info">
            <h3>Red-Yellow Capsicum</h3>
            <p>Price: RS. 80/Kg</p>
          </div>
        </div>
        <div className="card">
          <img src="Images/Bitter Gourd.jpg" alt="Vegetable" />
          <div className="info">
            <h3>Bitter Gourd</h3>
            <p>Price: RS. 50/Kg</p>
          </div>
        </div>
        <div className="card">
          <img src="Images/Mint.jpg" alt="Vegetable" />
          <div className="info">
            <h3>Mint</h3>
            <p>Price: RS. 20/Kg</p>
          </div>
        </div>
        <div className="card">
          <img src="Images/Green Onion.jpg" alt="Vegetable" />
          <div className="info">
            <h3>Green Onion</h3>
            <p>Price: RS. 30/Kg</p>
          </div>
        </div>
        <div className="card">
          <img src="Images/Gooseberry.jpg" alt="Vegetable" />
          <div className="info">
            <h3>Gooseberry</h3>
            <p>Price: RS. 40/Kg</p>
          </div>
        </div>
        <div className="card">
          <img src="Images/Fenugreek.jpg" alt="Vegetable" />
          <div className="info">
            <h3>Fenugreek</h3>
            <p>Price: RS. 20/Kg</p>
          </div>
        </div>
        <div className="card">
          <img src="Images/Apple.jpg" alt="Vegetable" />
          <div className="info">
            <h3>Apple</h3>
            <p>Price: RS. 100/Kg</p>
          </div>
        </div>
        <div className="card">
          <img src="Images/Banana.jpg" alt="Vegetable" />
          <div className="info">
            <h3>Banana</h3>
            <p>Price: RS. 30/Kg</p>
          </div>
        </div>
        <div className="card">
          <img src="Images/Orange.jpg" alt="Vegetable" />
          <div className="info">
            <h3>Orange</h3>
            <p>Price: RS. 40/Kg</p>
          </div>
        </div>
        <div className="card">
          <img src="Images/Grapes.jpg" alt="Vegetable" />
          <div className="info">
            <h3>Grapes</h3>
            <p>Price: RS. 80/Kg</p>
          </div>
        </div>
        <div className="card">
          <img src="Images/Chikoo.jpg" alt="Vegetable" />
          <div className="info">
            <h3>Chikoo</h3>
            <p>Price: RS. 80/Kg</p>
          </div>
        </div>
      </div>
    </section>

    </>
  );

}
export default App;



