import { Button } from 'primereact/button'
import './App.css'
import { InputText } from 'primereact/inputtext'
import { useState } from 'react'

function App() {
  const [isVisible, setIsVisible] = useState(false)

  return (
    <div>
      <h1>Irei descobrir o seu nome!!</h1>
      <div className="input-wrapper">
        <label htmlFor="username">Nome</label>
        <div className="p-inputgroup flex-1">
          <InputText />
          <Button onClick={() => setIsVisible(true)} style={{
            backgroundColor: '#FFC107',
            borderRadius: '0px 4px 4px 0px',
          }} label='Descobrir' className="p-button-warning" />
        </div>
        <small id="username-help">
          Digite seu nome
        </small>
      </div>
      {isVisible && (
        <div>
          <p style={{
            margin: 0,
            marginTop: 20,
          }}>Seu nome é:</p>
          <h2 style={{
            margin: 0,
          }}>Hello World</h2>
        </div>
      )}
    </div>
  )
}

export default App
