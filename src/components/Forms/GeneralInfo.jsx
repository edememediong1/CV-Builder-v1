import { useState } from "react"
// import Input from "./Input"
import up from "../../assets/up.svg"
import down from "../../assets/down.svg"

function GeneralInfo({cvData, inputChange}) {
  const [activeIndex, setActiveIndex] = useState(null)
  const inputClass = "w-full bg-stone-100 p-2 text-stone-700 rounded-md outline-0"

  function handleActive(){
    setActiveIndex(activeIndex === 0 ? null : 0)
  }
  return (
    <div className="w-full shadow-lg p-4">
      <section className="flex justify-between">
        <h2 className="text-2xl font-bold">General Information</h2>
        <img className="w-6 h-6" src={activeIndex === 0 ? up : down} alt="arrow" onClick={handleActive}/>
      </section>
      
      {activeIndex == 0 ? (<form>
        <div className="flex-cols">
          <label htmlFor="name" className="">Name</label>
          <input type="text" name="name" onChange={inputChange} value={cvData.generalInfo.name} className={inputClass}/>
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
      </form>) : null}
    </div>
  )
}

export default GeneralInfo