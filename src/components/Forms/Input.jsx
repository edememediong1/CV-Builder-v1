

function Input({inputChange, name, type}) {
  return (
    <div>
        <label htmlFor={name}>{name}</label>
        <input type={type} name={name} onChange={inputChange} id={name}/>
    </div>
  )
}

export default Input