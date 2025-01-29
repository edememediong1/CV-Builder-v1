import GeneralInfo from "./GeneralInfo"

function SideBar({cvData, handleInputChange}) {
  return (
    <div>
      <GeneralInfo inputChange={handleInputChange} cvData={cvData}/>
    </div>
  )
}

export default SideBar