import { useRef } from "react";

const VideoPlayer = () => {
    const videoRef = useRef(null);

    const playVideo = () => {
        if (!videoRef.current.src) {
            videoRef.current.src = "/Video.mp4";
        }
        videoRef.current.play();
    };

    const pauseVideo = () => {
        videoRef.current.pause();
    };

    return (
        <div>
            <h2>6. Відео-плеєр</h2>
            <video
                ref={videoRef}
                width="400"
                height="225"
                style={{ background: "black" }}
            />
            <br />
            <button onClick={playVideo}>Play</button>
            <button onClick={pauseVideo}>Pause</button>
        </div>
    );
};

export default VideoPlayer;