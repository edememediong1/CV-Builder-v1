

function Input({inputChange, name, ...props}) {
  return (
    <div>
        <label htmlFor={name}>{name}</label>
        <input name={name} onChange={inputChange}/>
    </div>
  )
}

export default Input