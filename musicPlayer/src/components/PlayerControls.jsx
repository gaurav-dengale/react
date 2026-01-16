import React from 'react';
import { Play, Pause, SkipBack, SkipForward, Repeat, Shuffle, Volume2, Mic2, LayoutList, MonitorSpeaker, Maximize2 } from 'lucide-react';
import { usePlayer } from '../context/PlayerContext';

const PlayerControls = () => {
    const { currentSong, isPlaying, togglePlay, currentTime, duration, seek, volume, setVolume } = usePlayer();

    const formatTime = (time) => {
        if (!time) return "0:00";
        const min = Math.floor(time / 60);
        const sec = Math.floor(time % 60);
        return `${min}:${sec < 10 ? '0' + sec : sec}`;
    };

    const handleSeek = (e) => {
        seek(Number(e.target.value));
    };

    const handleVolume = (e) => {
        setVolume(Number(e.target.value));
    };

    if (!currentSong) return (
        <footer style={{
            gridArea: 'player',
            height: '90px',
            background: 'black',
            borderTop: '1px solid #282828',
            display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#b3b3b3'
        }}>
            Select a song to play
        </footer>
    );

    return (
        <footer style={{
            gridArea: 'player',
            height: '90px',
            background: 'black',
            padding: '0 16px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderTop: '1px solid #282828',
            zIndex: 100
        }}>
            {/* Info */}
            <div style={{ width: '30%', minWidth: '180px', display: 'flex', alignItems: 'center', gap: '14px' }}>
                <img src={currentSong.cover}
                    style={{ width: '56px', height: '56px', borderRadius: '4px', objectFit: 'cover', boxShadow: '0 0 10px rgba(0,0,0,0.3)' }} />
                <div style={{ overflow: 'hidden' }}>
                    <div style={{ color: 'white', fontSize: '14px', fontWeight: 500, cursor: 'pointer', marginBottom: '4px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                        {currentSong.title}
                    </div>
                    <div style={{ color: '#b3b3b3', fontSize: '11px', cursor: 'pointer', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                        {currentSong.artist}
                    </div>
                </div>
            </div>

            {/* Controls */}
            <div style={{ width: '40%', maxWidth: '722px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '22px' }}>
                    <button className="control-btn" style={{ color: '#b3b3b3' }}><Shuffle size={16} /></button>
                    <button className="control-btn" style={{ color: '#b3b3b3' }}><SkipBack size={16} fill="currentColor" /></button>
                    <button
                        onClick={togglePlay}
                        style={{
                            width: '32px', height: '32px', borderRadius: '50%', background: 'white', color: 'black',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            transition: 'transform 0.1s',
                            cursor: 'pointer'
                        }}
                        onMouseDown={e => e.currentTarget.style.transform = 'scale(0.9)'}
                        onMouseUp={e => e.currentTarget.style.transform = 'scale(1)'}
                    >
                        {isPlaying ? <Pause size={16} fill="currentColor" /> : <Play size={16} fill="currentColor" style={{ marginLeft: '2px' }} />}
                    </button>
                    <button className="control-btn" style={{ color: '#b3b3b3' }}><SkipForward size={16} fill="currentColor" /></button>
                    <button className="control-btn" style={{ color: '#b3b3b3' }}><Repeat size={16} /></button>
                </div>

                <div style={{ width: '100%', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '11px', color: '#b3b3b3', fontWeight: 500 }}>
                    <span style={{ minWidth: '35px', textAlign: 'right' }}>{formatTime(currentTime)}</span>

                    <div className="progress-container" style={{ flex: 1, display: 'flex', alignItems: 'center', height: '12px' }}>
                        <input
                            type="range"
                            min="0"
                            max={duration || 100}
                            value={currentTime}
                            onChange={handleSeek}
                            className="progress-slider"
                            style={{
                                width: '100%',
                                '--progress': `${(currentTime / (duration || 1)) * 100}%`
                            }}
                        />
                    </div>

                    <span style={{ minWidth: '35px' }}>{formatTime(duration)}</span>
                </div>
            </div>

            {/* Volume/Extra */}
            <div style={{ width: '30%', minWidth: '180px', display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '16px', color: '#b3b3b3' }}>
                <Mic2 size={16} className="control-icon" />
                <LayoutList size={16} className="control-icon" />
                <MonitorSpeaker size={16} className="control-icon" />
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', width: '100px' }}>
                    <Volume2 size={16} />
                    <div className="progress-container" style={{ flex: 1, display: 'flex', alignItems: 'center', height: '12px' }}>
                        <input
                            type="range"
                            min="0"
                            max="1"
                            step="0.01"
                            value={volume}
                            onChange={handleVolume}
                            className="volume-slider"
                            style={{
                                width: '100%',
                                '--progress': `${volume * 100}%`
                            }}
                        />
                    </div>
                </div>
                <Maximize2 size={16} className="control-icon" />
            </div>

            <style>{`
                .control-btn:hover { color: white !important; }
                .control-icon:hover { color: white !important; cursor: pointer; }
                
                input[type=range] {
                    -webkit-appearance: none;
                    background: transparent;
                    height: 4px;
                    border-radius: 2px;
                    cursor: pointer;
                    outline: none;
                    background: linear-gradient(to right, #1db954 0%, #1db954 var(--progress), #4d4d4d var(--progress), #4d4d4d 100%);
                    transition: background 0.1s;
                }
                
                input[type=range]:hover {
                    background: linear-gradient(to right, #1ed760 0%, #1ed760 var(--progress), #666  var(--progress), #666 100%);
                }

                /* Thumb styling */
                input[type=range]::-webkit-slider-thumb {
                    -webkit-appearance: none;
                    height: 12px;
                    width: 12px;
                    border-radius: 50%;
                    background: white;
                    border: none;
                    opacity: 0;
                    transition: opacity 0.1s;
                    box-shadow: 0 2px 4px rgba(0,0,0,0.5);
                }

                .progress-container:hover input[type=range]::-webkit-slider-thumb {
                    opacity: 1;
                }
            `}</style>
        </footer>
    );
};

export default PlayerControls;
