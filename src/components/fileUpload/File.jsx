import "./file.css";

function File() {
  return (
    <>
      <div className="report-section-container">
        <div className="header">
          <h2>Report Generator</h2>
        </div>
        <form>
          <div className="file-input">
            <label htmlFor="fileInput">Upload</label>
            <input type="file" id="fileInput" accept=".xlsx" />
          </div>

          <div className="Input">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" />
            <label htmlFor="totalDays">Enter Total Days:</label>
            <input type="text" id="totalDays" />
            <label htmlFor="year">Year:</label>
            <input type="text" id="year" />
            <label htmlFor="month">Month:</label>
            <input type="text" id="month" />

              
              <button type="button">Generate</button>
          </div>

          <div id="result"></div>
        </form>
      </div>
    </>
  );
}

export default File;
