import './App.css';
import FormIngreso from './components/FormIngreso';
import ListadoComponentes from './components/ListadoValores'

function App() {

  let tem = [11, 22, 34]

  

  function solicitarRandoms() {
    //"http://www.randomnumberapi.com/api/v1.0/random?min=100&max=1000&count=5"
    let url_base = "http://www.randomnumberapi.com/api/v1.0/"
    let numMin = document.getElementById('numMin').value
    let numMax = document.getElementById('numMax').value
    let cant = document.getElementById('cantRandoms').value
    let url = url_base + 'random?min=' + numMin + '&max=' + numMax + '&count=' + cant
    console.log(url)
    fetch(url, {
      method: 'GET',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json'
      },
      
    })
      .then(function (response) {
        if (!response.ok) {
          throw Error('Ocurrio un error: ' + response.statusText)
        }
      })
      .then(function (response) {
        return response.json()
      })
      .then(function (data) {
        console.log(data);
      })
      .catch(function (error) {
        console.log("Ocurrio un error: " + error);
      });
  }

  return (
    <>
      <h1>Uso de API para generar randoms</h1>
      <FormIngreso handlerClick={solicitarRandoms}></FormIngreso>
      <ListadoComponentes numeros={tem}></ListadoComponentes>
    </>
  );
}

export default App;
