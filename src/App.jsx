import { useState } from "react"
import SideBar from "./components/Forms/SideBar"
import Preview from "./components/Preview/Preview"


function App() {
  const [cvData, setcvData] = useState({
    generalInfo: {
      name: "",
      email: ""
    }
  })  

  function handleInputChange(e){
    const {name, value} = e.target
    setcvData({
      ...cvData,
      generalInfo: {
        ...cvData.generalInfo,
        [name]: value
      }
    })
  }

  return (
    <div>
       <main className="flex justify-center">
        <div className="w-1/3">
          <SideBar handleInputChange={handleInputChange} />
        </div>
        <div className="w-2/3">
          <Preview cvData={cvData}/>
        </div>
       </main>
    </div>
  )
}

export default App
