import "./App.css";
import Dashboard from "./components/dashboard/Dashboard";
import Directory from "./components/directory/Directory";
import File from "./components/fileUpload/File";
function App() {
  return (
    <>
      <div className="header">
        <h2>Suprabhatam Attendance Software</h2>
      </div>
      <div className="container">
        <div className="main-container">
          <Dashboard />
          <Directory />
          <File />
        </div>
      </div>
    </>
  );
}
export default App;
