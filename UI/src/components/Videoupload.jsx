import { useState } from "react";

const VideoUpload = () => {
  const [video, setVideo] = useState(null);
  const [progress, setProgress] = useState(0);

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setVideo(e.target.files[0]);
    }
  };

  const handleUpload = (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    if (!video) {
      console.error("No video file selected");
      return;
    }

    // Simulate upload progress
    const simulateUpload = () => {
      let progress = 0;
      const interval = setInterval(() => {
        progress += 10;
        if (progress >= 100) {
          progress = 100;
          clearInterval(interval);
        }
        setProgress(progress);
      }, 300);
    };

    simulateUpload();

    // Simulate a delay to mimic upload completion
    setTimeout(() => {
      console.log("Upload complete");
    }, 3000);
  };

  return (
    <div>
      <input type="file" onChange={handleChange} />
      <button type="button" onClick={handleUpload}>
        Upload
      </button>
      <progress value={progress} max="100" />
    </div>
  );
};

export default VideoUpload;
