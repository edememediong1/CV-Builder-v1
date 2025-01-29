import { useState, useEffect } from "react"
import SideBar from "./components/Forms/SideBar"
import Preview from "./components/Preview/Preview"


function App() {
  const [cvData, setcvData] = useState(() => {
    const savedData = localStorage.getItem("cvData")
    return savedData
      ? JSON.parse(savedData)
      : {
          generalInfo: {
            name: "",
            email: "",
            phone: "",
            address: "",
            linkedIn: "",
          },
        }
  }) 
  console.log("cvData", cvData)

 

  useEffect(() => {
    const savedData = localStorage.getItem("cvData")
    console.log("cvData loaded", savedData)
    if (savedData){
      setcvData(JSON.parse(savedData))
    }
  }, [])


  useEffect(() => {
    localStorage.setItem("cvData", JSON.stringify(cvData))
    console.log("cvData saved", cvData)
  }, [cvData])



  function handleInputChange(e){
    const {name, value} = e.target
    setcvData((prevData) =>({
      ...prevData,
      generalInfo: {
        ...prevData.generalInfo,
        [name]: value
      }
    }))
  }

  return (
    <div>
       <main className=" flex-cols space-y-6 p-3 md:flex justify-center">
        <div className=" w-full md:w-1/3 shadow-md p-4">
          <SideBar handleInputChange={handleInputChange} cvData={cvData} />
        </div>
        <div className="w-full md:w-2/3 shadow-md p-4">
          <Preview cvData={cvData}/>
        </div>
       </main>
    </div>
  )
}

export default App
