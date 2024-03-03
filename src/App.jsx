import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <nav>
        <div className="logo">
          <img src="Images/logo.jpg" alt="" />
        </div>
        <div className="search">
          <input type="text" />
          <button>Search</button>
        </div>
      </nav>
      <header>
        <table>
          <tr>
            <th>Vegetable</th>
            <th>Value</th>
          </tr>
          <tr>
            <td>Potato (आलू)</td>
            <td>RS. 10</td>

          </tr>
          <tr>
            <td>Onion (प्याज़)</td>
            <td>RS. 25</td>

          </tr>
          <tr>
            <td>Tomato (टमाटर)</td>
            <td>RS. 25</td>

          </tr>
          <tr>
            <td>Radish (मूली)</td>
            <td>RS. 25</td>

          </tr>
          <tr>
            <td>Carrot (गाज़र)</td>
            <td>RS. 25</td>

          </tr>
          <tr>
            <td>Cucumber (खीरा)</td>
            <td>RS. 25</td>

          </tr>
          <tr>
            <td>Cauliflower (फूलगोभी)</td>
            <td>RS. 25</td>

          </tr>
          <tr>
            <td>Cabbage (पत्तागोभी)</td>
            <td>RS. 25</td>

          </tr>
          <tr>
            <td>Broccoli (ब्रोक्ली)</td>
            <td>RS. 25</td>

          </tr>
          <tr>
            <td>Peas  (मटर )</td>
            <td>RS. 25</td>

          </tr>
          <tr>
            <td>Beetroot (चुकंदर)</td>
            <td>RS. 25</td>

          </tr>
          <tr>
            <td>Capsicum (शिमला मिर्च )</td>
            <td>RS. 25</td>

          </tr>
          <tr>
            <td>Jackfruit (कटहल)</td>
            <td>RS. 25</td>

          </tr>
          <tr>
            <td>Beans (बीन्स)</td>
            <td>RS. 25</td>

          </tr>
          <tr>
            <td>Mushroom (मशरूम)</td>
            <td>RS. 25</td>

          </tr>
          <tr>
            <td>Lady finger  (भिन्डी)</td>
            <td>RS. 25</td>

          </tr>
          <tr>
            <td>Sweet potato (शकरकंद)</td>
            <td>RS. 25</td>

          </tr>
          <tr>
            <td>Gourd (लौकी)</td>
            <td>RS. 25</td>

          </tr>
          <tr>
            <td>Turnip (शलगम)</td>
            <td>RS. 25</td>

          </tr>
          <tr>
            <td>Brinjal (बैंगन) </td>
            <td>RS. 25</td>

          </tr>
        </table>
      </header>
    </>
  )
}

export default App
