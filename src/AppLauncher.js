import React from "react";
import { useNavigate } from 'react-router-dom';

const AppLauncher = () => {
    const navigate = useNavigate();

    const launchApp = (screenName) => {
        navigate(`/${screenName}`);
    }

    return (
<>
    <button onClick={(e) => {launchApp("featuredhouse")}}>Launch House App</button>
    <button onClick={(e) => {launchApp("speakers")}}>Launch Speakers App</button>

</>
    )
}

export default AppLauncher;