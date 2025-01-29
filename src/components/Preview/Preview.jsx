
function Preview({cvData}) {
    const {generalInfo} = cvData
  return (
    <div>
        <h2>Preview</h2>
        <div>
            <h2>{generalInfo.name || "Your fullname"}</h2>
            {/* <div>
                <span>
                    <p>{generalInfo.email}</p>
                </span>
            </div> */}

        </div>
    </div>
  )
}

export default Preview