import React from "react";
import "./App.css";
import { createFFmpeg, fetchFile } from "@ffmpeg/ffmpeg";

const ffmpeg = createFFmpeg({ log: true });

function App() {
  const [ready, setReady] = React.useState(false);
  const [video, setVideo] = React.useState(null);
  const [gif, setGif] = React.useState(null);

  React.useEffect(() => {
    load();
  }, []);

  const load = async () => {
    await ffmpeg.load();
    setReady(true);
  };

  const convertToGif = async () => {
    /* Write the file to memore */
    ffmpeg.FS("writeFile", "test.mp4", await fetchFile(video));

    /* FFmpeg Command -i (input file), -t (length of the vide), -ss (starting seconds) -f (write the result as a gif file) */
    await ffmpeg.run("-i", "test.mp4", "-t", "2.5", "-ss", "2.0", "-f", "gif", "out.gif");

    /* Read the result */
    const data = await ffmpeg.FS("readFile", "out.gif");

    /* Create a URL */
    const url = URL.createObjectURL(
      new Blob([data.buffer], { type: "image/gif" })
    );
    setGif(url);
  };

  return ready ? (
    <div className="App">
      {video && (
        <video controls width={250} src={URL.createObjectURL(video)}></video>
      )}
      <input
        type="file"
        onChange={(event) => setVideo(event.target.files?.item(0))}
      />
      <button onClick={convertToGif}>Convert</button>
      {gif && <img width={250} src={gif} alt={``} />}
    </div>
  ) : (
    <p> ...loading </p>
  );
}

export default App;
