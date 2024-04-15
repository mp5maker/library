import "./App.css";

function App() {
  return (
    <div className="App">
      <div>
        <div>
          <h4>Used Direct Static File</h4>
        </div>
        <video width="320" height="240" controls>
          <source src="http://localhost:4000/video" type="video/mp4" />
          <source src="http://localhost:4000/video" type="video/ogg" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div>
        <div>
          <h4>Used Third Party URL</h4>
        </div>
        <video width="320" height="240" controls>
          <source src="http://localhost:4000/video-url" type="video/mp4" />
          <source src="http://localhost:4000/video-url" type="video/ogg" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}

export default App;
