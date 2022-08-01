import { Sidebar, MainContent } from './components'
import './styles/components/app.sass'

export default function App() {

  return (
    <div id="portfolio">
      <h1>Tiago Tavares Lopes</h1>
      <Sidebar />
      <MainContent />
    </div>
  )
}