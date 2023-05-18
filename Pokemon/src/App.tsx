import './App.css'
import { NavBar } from './components/navbar'
//import { Carousel } from './components/Carousel'
//import $ from 'jquery'
import { Pag } from './components/paginacao'
function App() {

  return (
    <>
      <nav>
        {NavBar()}

      </nav>

      {/* <section>
        {Carousel()}

      </section> */}

      <div>
        {/* <p>Cards Pokemons</p> */}

      </div>

      <div id="spinner" className="text-center" hidden>
        <div className="spinner-border" role="status">
          
        </div><br/>
        <span className="sumir">Loading...</span>

      </div>


      <div id='Poke' >

        <div id='pai' className="contanier">

          {/* <input className="btn btn-primary ajuste" id='gera' type="button" defaultValue="Gerar"/> */}

          <div className="teste_gera">

          </div>
        </div>

      </div>


      {Pag()}
    </>
  )
}

export default App
