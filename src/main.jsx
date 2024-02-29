import ReactDOM from 'react-dom/client'
import './index.css'
import './output.css'
import Hero from './components/Hero'
import Beneficio from './components/Beneficio'
import Servico from './components/Servico'
import Footer from './components/Footer'
import FlutterBttn from './components/FlutterBttn'


ReactDOM.createRoot(document.getElementById('root')).render(
  <div>
    <Hero />
    <Beneficio />
    <Servico />
    <Footer />
    <FlutterBttn />
  </div>
)
