import Input from "./Input"

function GeneralInfo({cvData, inputChange}) {
  
  return (
    <div className="w-full shadow-lg p-4">
      <h2 className="text-3xl">General Information</h2>
      <form>
        <div className="flex-cols">
          <label htmlFor="name">Name</label>
          <input type="text" name="name" onChange={inputChange} value={cvData.generalInfo.name} className="w-full bg-stone-100 p-2 text-stone-700 rounded-md"/>
        </div>

        <div>
          <label htmlFor="address">Address</label>
          <input type="text" name="address" onChange={inputChange} value={cvData.generalInfo.address}/>
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" onChange={inputChange} value={cvData.generalInfo.email}/>
        </div>

        <div>
          <label htmlFor="phone">Phone Number</label>
          <input type="phone" name="phone" onChange={inputChange} value={cvData.generalInfo.phone}/>
        </div>

        <div>
          <label htmlFor="linkedIn">Linkedin</label>
          <input type="text" name="linkedIn" onChange={inputChange} value={cvData.generalInfo.linkedIn}/>
        </div>

        
      </form>
    </div>
  )
}

export default GeneralInfo