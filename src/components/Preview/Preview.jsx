
function Preview({cvData}) {
    const {generalInfo} = cvData
  return (
    <div>
        <h2>Preview</h2>
        <div>
            <h2>{generalInfo.name || "Your fullname"}</h2>
            <p>{generalInfo.address || "City, Country"}</p>
            <div>
                <span>
                    <p>{generalInfo.email || "Your email"}</p>
                </span>
                <span>
                    <p>{generalInfo.phone || "Your Phone Email"}</p>
                </span>
                <span>
                    <p>{generalInfo.linkedIn || "Your Linkedin"}</p>
                </span>
            </div>

        </div>
    </div>
  )
}

export default Preview