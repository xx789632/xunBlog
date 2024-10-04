import {useState} from "react";
export function useFullScreen() {
    const [isFullScreen, setIsFullScreen] = useState(false)

    // toggle full screen
    const toggleFullScreen = () => {
        // check if full screen
        if (!document.fullscreenElement) {
            // request full screen
            document.documentElement.requestFullscreen().then(()=>{
                setIsFullScreen(true)
            })
        } else {
            // exit full screen
            if (document.exitFullscreen) {
                document.exitFullscreen().then(()=>{
                    setIsFullScreen(false)
                })
            }
        }
    }
    return [isFullScreen, toggleFullScreen]
}
