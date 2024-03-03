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
    <td>Potato</td>
    <td>RS. 10</td>

  </tr>
  <tr>
    <td>Ginger</td>
    <td>RS. 25</td>

  </tr>
  <tr>
    <td>Carrot</td>
    <td>RS. 25</td>

  </tr>
  <tr>
    <td>Peas</td>
    <td>RS. 25</td>

  </tr>
  <tr>
    <td>Capsicum</td>
    <td>RS. 25</td>

  </tr>
  <tr>
    <td>Garlic</td>
    <td>RS. 25</td>

  </tr>
  <tr>
    <td>Cabbage</td>
    <td>RS. 25</td>

  </tr>
  <tr>
    <td>Coriander</td>
    <td>RS. 25</td>

  </tr>
  <tr>
    <td>Mint</td>
    <td>RS. 25</td>

  </tr>
  <tr>
    <td>Chili</td>
    <td>RS. 25</td>

  </tr>
  <tr>
    <td>Onion</td>
    <td>RS. 25</td>

  </tr>
  <tr>
    <td>Onion</td>
    <td>RS. 25</td>

  </tr>
  <tr>
    <td>Onion</td>
    <td>RS. 25</td>

  </tr>
  <tr>
    <td>Onion</td>
    <td>RS. 25</td>

  </tr>
</table>
     </header>
    </>
  )
}

export default App
