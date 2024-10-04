"use client"
import React from 'react';
import {useFullScreen} from "@/hooks/useFullScreen";
import {GoScreenFull} from "react-icons/go";
import {BiExitFullscreen} from "react-icons/bi";

const FullScreenSwitcher = () => {
    const [isFullScreen, toggleFullScreen] =useFullScreen()

    return (
        <div onClick={toggleFullScreen as () => void}>
            {isFullScreen ? (<BiExitFullscreen/>): (<GoScreenFull/> )}
        </div>
    );
};

export default FullScreenSwitcher;
