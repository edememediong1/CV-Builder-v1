import Input from "./Input"

function GeneralInfo({inputChange}) {
  return (
    <div>
      <h2>General Information</h2>
      <form>
        
        <div>
          <Input inputChange={inputChange} name="Name" type="text"/>
        </div>
        <div>
          <input type="email" onChange={inputChange} name="email"/>
        </div>
      </form>
    </div>
  )
}

export default GeneralInfo