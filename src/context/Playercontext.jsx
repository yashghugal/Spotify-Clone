import { createContext, useEffect, useRef, useState } from "react";
import { songsData } from "../assets/assets";

export const PlayerContext = createContext();

const PlayerContextProvider = (props) => {
    const audioref = useRef()
    const seekbg = useRef()
    const seekbar = useRef()
    const [track, settrack] = useState(songsData[0])
    const [playstatus, setPlayerstatus] = useState(false);
    const [time, settime] = useState({
        currenttime: {
            second: 0,
            minute: 0
        },
        totalTime: {
            second: 0,
            minute: 0
        }
    })
    const play = () => {
        audioref.current.play();
        setPlayerstatus(true);
    }
    const pause = () => {
        audioref.current.pause();
        setPlayerstatus(false);
    }
    const playwithid = async(id)=>{
        await settrack(songsData[id]);
        await audioref.current.play()
        setPlayerstatus(true)
    }
    const previous =async()=>{
        if(track.id > 0){
            await settrack(songsData[track.id-1])
            await audioref.current.play();
            setPlayerstatus(true);
        }
    }
    const next =async()=>{
        if(track.id < songsData.length -1){
            await settrack(songsData[track.id+1])
            await audioref.current.play();
            setPlayerstatus(true);
        }
    }
    const seeksong =async(e)=>{
        audioref.current.currentTime = ((e.nativeEvent.offsetX/seekbg.current.offsetWidth)*audioref.current.duration)
    }

    useEffect(() => {
        setTimeout(() => {
            audioref.current.ontimeupdate = () => {
                seekbar.current.style.width = (Math.floor(audioref.current.currentTime / audioref.current.duration * 100)) + "%";
                settime({
                    currenttime: {
                        second: Math.floor(audioref.current.currentTime % 60),
                        minute: Math.floor(audioref.current.currentTime / 60)
                    },
                    totalTime: {
                        second: Math.floor(audioref.current.duration % 60),
                        minute: Math.floor(audioref.current.duration / 60)
                    }
                })
            }
        }, 1000);
    }, [audioref])
    const contextvalue = {
        audioref,
        seekbg,
        seekbar,
        track,
        settrack,
        playstatus,
        setPlayerstatus,
        time,
        settime,
        play,
        pause,
        playwithid,
        previous,
        next,
        seeksong
    }
    return (
        <PlayerContext.Provider value={contextvalue}>
            {props.children}
        </PlayerContext.Provider>
    )
}
export default PlayerContextProvider;