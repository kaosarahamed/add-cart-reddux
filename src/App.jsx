import { Provider } from 'react-redux'
import './App.css'
import Preview from './components/Preview'
import store from './redux/store'

function App() {
  

  return (
    <Provider store={store}>
      <Preview />
    </Provider>
  )
}

export default App
