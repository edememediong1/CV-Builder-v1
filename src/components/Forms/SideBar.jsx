import GeneralInfo from "./GeneralInfo"

function SideBar({handleInputChange}) {
  return (
    <div>
      <GeneralInfo inputChange={handleInputChange} />
    </div>
  )
}

export default SideBar