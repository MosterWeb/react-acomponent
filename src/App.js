import logo from './logo.svg';
import './App.css';
import Card from './components/Card.js';




function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Task Academlo | Componentes</h1>


        <div className="gridApp">
          <div>

            <Card
              color="red"
              title="Jason Rodríguez"
              text1="Venezolano"
              text2="Desarrollador Full Stack"
              text3="Vivo en Lima-Perú"

            />


          </div>

          <div>
            <Card
              color="green"
              title="Hobbies"
              text1="Desarrollar aplicaciones"
              text2="Escribir novelas"
              text3="Cantar"
            />

          </div>

          <div>
            <Card className="component3"
              color="blue"
              title="Películas favoritas"
              text1="The Batman"
              text2="Harry Potter"
              text3="Red Social"

            />
          </div>
        </div>

      </header>
    </div>
  );
}

export default App;
