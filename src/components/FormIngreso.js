function FormIngreso({handlerClick}) {
    return (
    <>
        <label for='numMin'>Valor mínimo</label>
        <input type='number' id='numMin' name='numMin'></input>
        <br></br>
        <label for='numMax'>Valor máximo</label>
        <input type='number' id='numMax' name='numMax'></input>
        <br></br>
        <label for='cantRandoms'>Cantidad</label>
        <input type='number' id='cantRandoms' name='cantRandoms'></input>
        <br></br>
        <button type='button' onClick = {handlerClick}>Generar numeros</button>
    </>
  )
}
export default FormIngreso;