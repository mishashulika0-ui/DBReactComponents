import "./App.css";
import FocusButton from "./Tasks/FocusButton";
import Stopwatch from "./Tasks/Stopwatch";
import PrevValue from "./Tasks/PrevValue";
import RenderCounter from "./Tasks/RenderCounter";
import Dropdown from "./Tasks/Dropdown";
import VideoPlayer from "./Tasks/VideoPlayer";
import ScrollTo from "./Tasks/ScrollTo";
import CodeInput from "./Tasks/CodeInput";
import SizeTracker from "./Tasks/SizeTracker";
import RefInput from "./Tasks/RefInput";

const App = () => {
    return (
        <div className="app">
            <FocusButton />
            <hr />
            <Stopwatch />
            <hr />
            <PrevValue />
            <hr />
            <RenderCounter />
            <hr />
            <Dropdown />
            <hr />
            <VideoPlayer />
            <hr />
            <ScrollTo />
            <hr />
            <CodeInput />
            <hr />
            <SizeTracker />
            <hr />
            <RefInput />
        </div>
    );
};

export default App;