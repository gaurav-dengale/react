import React, { createContext, useContext, useState, useRef, useEffect } from 'react';

const PlayerContext = createContext();

export const PlayerProvider = ({ children }) => {
    const [currentSong, setCurrentSong] = useState(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [volume, setVolumeState] = useState(1);
    const audioRef = useRef(new Audio());

    useEffect(() => {
        const audio = audioRef.current;

        const updateTime = () => setCurrentTime(audio.currentTime);
        const updateDuration = () => setDuration(audio.duration);
        const onEnded = () => setIsPlaying(false);

        audio.addEventListener('timeupdate', updateTime);
        audio.addEventListener('loadedmetadata', updateDuration);
        audio.addEventListener('ended', onEnded);

        return () => {
            audio.removeEventListener('timeupdate', updateTime);
            audio.removeEventListener('loadedmetadata', updateDuration);
            audio.removeEventListener('ended', onEnded);
        };
    }, []);

    useEffect(() => {
        if (currentSong) {
            audioRef.current.src = currentSong.url;
            audioRef.current.play().then(() => setIsPlaying(true)).catch(e => console.error("Playback error", e));
        }
    }, [currentSong]);

    useEffect(() => {
        if (isPlaying) {
            audioRef.current.play().catch(e => console.error(e));
        } else {
            audioRef.current.pause();
        }
    }, [isPlaying]);

    useEffect(() => {
        audioRef.current.volume = volume;
    }, [volume]);

    const playSong = (song) => {
        if (currentSong?.id === song.id) {
            setIsPlaying(!isPlaying);
        } else {
            setCurrentSong(song);
            setIsPlaying(true);
        }
    };

    const togglePlay = () => setIsPlaying(!isPlaying);

    const seek = (time) => {
        audioRef.current.currentTime = time;
        setCurrentTime(time);
    }

    const setVolume = (val) => {
        setVolumeState(val);
    }

    return (
        <PlayerContext.Provider value={{
            currentSong,
            isPlaying,
            playSong,
            togglePlay,
            currentTime,
            duration,
            seek,
            volume,
            setVolume
        }}>
            {children}
        </PlayerContext.Provider>
    );
};

export const usePlayer = () => useContext(PlayerContext);
