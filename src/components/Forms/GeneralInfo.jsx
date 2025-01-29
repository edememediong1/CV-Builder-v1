import Input from "./Input"

function GeneralInfo({inputChange}) {
  return (
    <div>
      <h2>General Information</h2>
      <form>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" onChange={inputChange}/>
        </div>

        <div>
          <label htmlFor="address">Address</label>
          <input type="text" name="address" onChange={inputChange}/>
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" onChange={inputChange}/>
        </div>

        <div>
          <label htmlFor="phone">Phone Number</label>
          <input type="phone" name="phone" onChange={inputChange}/>
        </div>

        <div>
          <label htmlFor="linkedIn">Linkedin</label>
          <input type="text" name="linkedIn" onChange={inputChange}/>
        </div>

        
      </form>
    </div>
  )
}

export default GeneralInfo