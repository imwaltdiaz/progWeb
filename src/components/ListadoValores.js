function ListadoValores({numeros}) {
  let listItems = numeros.map( n => <li>{n}</li>)

  return (
    <>
      <ul>
        {listItems}
      </ul>
    </>
  )
}
export default ListadoValores;