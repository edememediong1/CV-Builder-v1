
function Preview({cvData}) {
    const {generalInfo} = cvData
  return (
    <div>
        <h2>Preview</h2>
        <div>
            <h2 className="text-2xl text-center font-bold md:text-3xl ">{generalInfo.name || "Your fullname"}</h2>
            <p className=" md:text-[1.15rem] text-center">{generalInfo.address || "City, Country"}</p>
            <div className="flex gap-2 justify-center ">
                <span>
                    <p className="text-[1.1rem] md:[text-1.15rem]">{generalInfo.email || "Your email"}</p>
                </span>
                <span>
                    <p className="text-[1.1rem] md:[text-1.15rem]">{generalInfo.phone || "Your Phone Email"}</p>
                </span>
                <span>
                    <p className="text-[1.1rem] md:[text-1.15rem]">{generalInfo.linkedIn || "Your Linkedin"}</p>
                </span>
            </div>

        </div>
    </div>
  )
}

export default Preview