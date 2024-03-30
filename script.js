const ApiData = () => {
  const [details, setDetails] = React.useState({
    "Onboarding Call": ["", "", "", "", "", ""],
    "Google Search Console Access": ["", "", "", "", "", ""],
    "Google Analytics Access": ["", "", "", "", "", ""],
    "Website Access": ["", "", "", "", "", ""],
    "Technical Audit": ["", "", "", "", "", ""],
    "Anchor Text and Semantic Analysis": ["", "", "", "", "", ""],
    "Competitor Analysis": ["", "", "", "", "", ""],
    "Anchor Text / URL Mapping": ["", "", "", "", "", ""],
    "Google Data Studio Report + Local Reporting Suite": [
      "",
      "",
      "",
      "",
      "",
      "",
    ],
    "Site Level Optimization": ["", "", "", "", "", ""],
    "On Page Optimization": ["", "", "", "", "", ""],
    "Content Creation": ["", "", "", "", "", ""],
    "Content Publishing": ["", "", "", "", "", ""],
    "Premium Press Release": ["", "", "", "", "", ""],
    "Authority Niche Placements": ["", "", "", "", "", ""],
    "Review Management": ["", "", "", "", "", ""],
    "Index Links": ["", "", "", "", "", ""],
    "Video Recap": ["", "", "", "", "", ""],
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    const row = parseInt(e.target.getAttribute("data-row"));
    setDetails((prev) => {
      const updatedDetails = { ...prev };
      updatedDetails[name][row] = value;
      return updatedDetails;
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(details);
  };

  return (
    <>
      <h1>Task 1</h1>
      <form onMouseOver={handleSubmit}>
        <table>
          <tbody>
            <tr>
              <td>MONTH 1</td>
            </tr>
            {Object.keys(details).map((heading, index) => (
              <tr key={index}>
                <td>{heading}</td>
                {[...Array(6)].map((_, cellIndex) => (
                  <td key={cellIndex}>
                    <input
                      type="text"
                      name={heading}
                      data-row={cellIndex}
                      onChange={handleChange}
                      value={details[heading][cellIndex]}
                    />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </form>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<ApiData />);
