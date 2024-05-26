import React from 'react'
import { BarcodeScanner, useTorch } from 'react-barcode-scanner'

const App = () => {
  const [isSupportTorch, isOpen, onTorchSwitch] = useTorch()
  const [result, setResults] = React.useState(null)

  const handleScan = data => {
    setResults(data)
  }

  return (
    <div className='barcode'>
      <BarcodeScanner onScan={handleScan} />
      {result ? (
        <div>
          <code>{result}</code>
        </div>
      ) : null}
      {isSupportTorch ? (
        <button onClick={onTorchSwitch}>Swtich Torch</button>
      ) : null}
    </div>
  )
}

export default App
