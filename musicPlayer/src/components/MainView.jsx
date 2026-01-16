import React from 'react';
import { ChevronLeft, ChevronRight, Bell, Users, Play } from 'lucide-react';
import { songs, playlists } from '../assets/mockData';
import { usePlayer } from '../context/PlayerContext';

const MainView = ({ currentView }) => {
    const { playSong } = usePlayer();

    return (
        <main style={{
            flex: 1, // Ensure it consumes remaining space
            gridArea: 'main',
            background: 'linear-gradient(180deg, #1f1f2e 0%, var(--bg-secondary) 40%, var(--bg-secondary) 100%)', // Slight purple tint at top
            borderRadius: 'var(--radius-md)',
            margin: '8px 8px 8px 0',
            overflowY: 'auto',
            position: 'relative'
        }}>
            {/* Header */}
            <header style={{
                height: '64px',
                position: 'sticky',
                top: 0,
                zIndex: 10,
                background: 'rgba(31, 31, 46, 0.8)', // Matching gradient top
                backdropFilter: 'blur(20px)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '0 24px'
            }}>
                <div style={{ display: 'flex', gap: '8px', alignItems: 'center', flex: 1 }}>
                    <div style={{ display: 'flex', gap: '8px', marginRight: '24px' }}>
                        <button style={{ background: 'rgba(0,0,0,0.7)', borderRadius: '50%', width: '32px', height: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
                            <ChevronLeft size={20} />
                        </button>
                        <button style={{ background: 'rgba(0,0,0,0.7)', borderRadius: '50%', width: '32px', height: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
                            <ChevronRight size={20} />
                        </button>
                    </div>

                    {currentView === 'search' && (
                        <div style={{ position: 'relative', maxWidth: '364px', flex: 1 }}>
                            <div style={{
                                position: 'absolute',
                                left: '12px',
                                top: '50%',
                                transform: 'translateY(-50%)',
                                color: '#121212'
                            }}>
                                <svg role="img" height="24" width="24" aria-hidden="true" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M10.533 1.279c-5.18 0-9.407 4.14-9.407 9.279s4.227 9.279 9.407 9.279c2.234 0 4.29-.77 5.907-2.058l4.353 4.353a1 1 0 1 0 1.414-1.414l-4.344-4.344a9.157 9.157 0 0 0 2.077-5.816c0-5.14-4.226-9.28-9.407-9.28zm-7.407 9.279c0-4.006 3.302-7.28 7.407-7.28s7.407 3.274 7.407 7.28-3.302 7.279-7.407 7.279-7.407-3.273-7.407-7.28z"></path>
                                </svg>
                            </div>
                            <input
                                placeholder="What do you want to play?"
                                style={{
                                    height: '48px',
                                    width: '100%',
                                    borderRadius: '500px',
                                    border: 'none',
                                    padding: '6px 48px',
                                    color: '#121212',
                                    fontSize: '14px',
                                    fontWeight: 400
                                }}
                            />
                        </div>
                    )}
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
                    <button style={{ padding: '6px 16px', background: 'white', borderRadius: '500px', color: 'black', fontWeight: 700, fontSize: '14px' }}>
                        Explore Premium
                    </button>
                    <button style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '6px 14px', background: 'rgba(0,0,0,0.7)', borderRadius: '500px', color: 'white', fontWeight: 700, fontSize: '14px' }}>
                        Install App
                    </button>
                    <div style={{ width: '32px', height: '32px', background: '#333', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Bell size={16} />
                    </div>

                    {/* Profile Dropdown Simulation */}
                    <div className="profile-btn" style={{
                        width: '32px', height: '32px',
                        background: 'var(--accent-gradient)',
                        borderRadius: '50%',
                        border: '2px solid black',
                        cursor: 'pointer',
                        position: 'relative'
                    }}>
                        <div className="profile-tooltip" style={{
                            position: 'absolute',
                            top: '40px',
                            right: 0,
                            background: '#282828',
                            borderRadius: '4px',
                            padding: '4px',
                            width: '200px',
                            boxShadow: '0 16px 24px rgba(0,0,0,0.5)',
                            display: 'none',
                            flexDirection: 'column',
                            zIndex: 100
                        }}>
                            <div className="profile-item">Account</div>
                            <div className="profile-item">Profile</div>
                            <div className="profile-item">Log out</div>
                        </div>
                    </div>
                </div>
            </header>

            <style>{`
                .recent-card {
                    height: 80px;
                    background: rgba(255,255,255,0.05);
                    border-radius: 4px;
                    display: flex;
                    align-items: center;
                    overflow: hidden;
                    cursor: pointer;
                    transition: background 0.3s;
                    position: relative;
                }
                .recent-card:hover {
                    background: rgba(255,255,255,0.2);
                }
                .recent-card .play-btn {
                    opacity: 0;
                    transform: translateY(8px);
                    transition: all 0.3s ease;
                    box-shadow: 0 8px 8px rgba(0,0,0,0.3);
                }
                .recent-card:hover .play-btn {
                    opacity: 1;
                    transform: translateY(0);
                }

                .mix-card {
                    background: #181818;
                    padding: 16px;
                    border-radius: 8px;
                    cursor: pointer;
                    transition: background 0.3s ease;
                    display: flex;
                    flex-direction: column;
                }
                .mix-card:hover {
                    background: #282828;
                }
                .mix-card-img-container {
                    position: relative;
                    margin-bottom: 16px;
                    box-shadow: 0 8px 24px rgba(0,0,0,0.5);
                    border-radius: 4px;
                    overflow: hidden;
                }
                .mix-card .play-btn-large {
                    position: absolute;
                    bottom: 8px;
                    right: 8px;
                    width: 48px;
                    height: 48px;
                    border-radius: 50%;
                    background: var(--accent-primary, #1db954);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    opacity: 0;
                    transform: translateY(8px);
                    transition: all 0.3s ease;
                    box-shadow: 0 8px 8px rgba(0,0,0,0.3);
                }
                .mix-card:hover .play-btn-large {
                    opacity: 1;
                    transform: translateY(0);
                }
                .section-header:hover {
                    text-decoration: underline;
                }
                
                .profile-btn:hover .profile-tooltip {
                    display: flex !important;
                }
                .profile-item {
                    padding: 12px;
                    font-size: 14px;
                    color: #e7e7e7;
                    border-radius: 2px;
                }
                .profile-item:hover {
                    background: #3e3e3e;
                    color: white;
                }
                .browse-card {
                    aspect-ratio: 1;
                    border-radius: 8px;
                    padding: 16px;
                    position: relative;
                    overflow: hidden;
                    cursor: pointer;
                    transition: transform 0.2s;
                }
                .browse-card:hover {
                    transform: scale(1.02);
                }
                .browse-card img {
                    position: absolute;
                    right: -10px;
                    bottom: -10px;
                    width: 100px;
                    height: 100px;
                    transform: rotate(25deg);
                    box-shadow: 0 2px 4px rgba(0,0,0,0.5);
                }
            `}</style>

            <div style={{ padding: '24px' }}>

                {currentView === 'search' ? (
                    <div>
                        <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '24px' }}>Browse all</h2>
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
                            gap: '24px'
                        }}>
                            {[
                                { title: "Podcasts", color: "#E13300", img: "https://i.scdn.co/image/ab6765630000ba8a81f07e1a92d63e9f87b12261" },
                                { title: "Live Events", color: "#7358FF", img: "https://concerty.com/images/concerts/2021/04/default_concert_image.png" }, // Mock
                                { title: "Made For You", color: "#1E3264", img: "https://t.scdn.co/images/ea364e9958064d2993951165a6b59a99.jpeg" },
                                { title: "New Releases", color: "#E8115B", img: "https://i.scdn.co/image/ab67706f000000027ea4d505213b9ed1d01a503c" },
                                { title: "Hindi", color: "#E1118C", img: "https://i.scdn.co/image/ab67706f0000000263675a8a1eb3d57d5985b9b6" },
                                { title: "Punjabi", color: "#B02897", img: "https://i.scdn.co/image/ab67706f000000024f2b153ff2a17730628292c2" },
                                { title: "Tamil", color: "#503750", img: "https://i.scdn.co/image/ab67706f00000002b85994b281b37b12dce6dfbc" },
                                { title: "Charts", color: "#8D67AB", img: "https://charts-images.scdn.co/assets/locale_en/regional/weekly/region_global_default.jpg" },
                            ].map((cat, i) => (
                                <div key={i} className="browse-card" style={{ background: cat.color }}>
                                    <h3 style={{ fontSize: '24px', fontWeight: 700, maxWidth: '100%' }}>{cat.title}</h3>
                                    <img src={cat.img} />
                                </div>
                            ))}
                        </div>
                    </div>
                ) : (
                    <>
                        {/* Welcome/Recent */}
                        <h1 style={{ fontSize: '32px', fontWeight: 700, marginBottom: '24px' }}>Good afternoon</h1>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px', marginBottom: '40px' }}>
                            {/* Recent Items - Small Cards */}
                            {playlists.concat(playlists).slice(0, 6).map((p, i) => (
                                <div key={i} onClick={() => playSong(p)} className="recent-card">
                                    <img src={p.imageUrl} style={{ width: '80px', height: '80px', objectFit: 'cover' }} />
                                    <span style={{ padding: '0 16px', fontWeight: 700, flex: 1 }}>{p.title}</span>

                                    <div className="play-btn" style={{
                                        marginRight: '16px',
                                        width: '48px', height: '48px',
                                        borderRadius: '50%',
                                        background: '#1db954',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    }}>
                                        <Play fill="black" size={24} style={{ marginLeft: '4px' }} />
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Recommended Sections - Only show on Home */}
                        {[
                            { title: "Made For You", data: songs },
                            { title: "Recently Played", data: playlists },
                            { title: "Your Top Mixes", data: playlists }
                        ].map((section, idx) => (
                            <div key={idx} style={{ marginBottom: '40px' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '24px' }}>
                                    <h2 className="section-header" style={{ fontSize: '24px', fontWeight: 700, cursor: 'pointer' }}>{section.title}</h2>
                                    <span style={{ fontSize: '14px', fontWeight: 700, color: '#b3b3b3', cursor: 'pointer', letterSpacing: '1px' }}>SHOW ALL</span>
                                </div>

                                <div style={{
                                    display: 'grid',
                                    gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
                                    gridAutoRows: '0',
                                    gridTemplateRows: '1fr',
                                    overflow: 'hidden',
                                    gap: '24px'
                                }}>
                                    {section.data.map((item, i) => (
                                        <div key={i} onClick={() => playSong(item)} className="mix-card">
                                            <div className="mix-card-img-container">
                                                <img src={item.imageUrl || item.cover}
                                                    style={{
                                                        width: '100%',
                                                        aspectRatio: '1/1',
                                                        objectFit: 'cover',
                                                        borderRadius: item.artist ? '50%' : '0',
                                                    }}
                                                />
                                                {!item.artist && (
                                                    <div className="play-btn-large">
                                                        <Play fill="black" size={24} style={{ marginLeft: '4px' }} />
                                                    </div>
                                                )}
                                            </div>

                                            <strong style={{ fontSize: '16px', marginBottom: '8px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                                                {item.title}
                                            </strong>
                                            <p style={{ color: '#b3b3b3', fontSize: '14px', height: '40px', overflow: 'hidden', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}>
                                                {item.description || item.artist}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </>
                )}
            </div>
        </main>
    );
};

export default MainView;
