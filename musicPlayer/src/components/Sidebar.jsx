import React from 'react';
import { Home, Search, Library, Plus, Heart } from 'lucide-react';
import { playlists, songs } from '../assets/mockData';
import { usePlayer } from '../context/PlayerContext';

const Sidebar = ({ currentView, setCurrentView }) => {
    const { playSong } = usePlayer();
    return (
        <aside style={{
            width: 'var(--sidebar-width)',
            background: 'var(--bg-primary)',
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
            padding: '8px'
        }}>
            {/* Top Section */}
            <div style={{ background: 'var(--bg-secondary)', borderRadius: 'var(--radius-md)', padding: '20px 24px' }}>
                <div style={{ color: 'var(--text-primary)', fontWeight: 'bold', fontSize: '16px', display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '24px' }}>
                    <div style={{ width: '24px', height: '24px', background: 'var(--accent-gradient)', borderRadius: '50%' }}></div>
                    Vibify
                </div>
                <nav style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    <div
                        onClick={() => setCurrentView('home')}
                        className="flex-center"
                        style={{
                            justifyContent: 'flex-start', gap: '16px', cursor: 'pointer', warning: 700,
                            color: currentView === 'home' ? 'white' : 'var(--text-secondary)',
                            fontWeight: currentView === 'home' ? 700 : 500,
                            transition: 'color 0.2s'
                        }}
                    >
                        <Home size={24} />
                        Home
                    </div>
                    <div
                        onClick={() => setCurrentView('search')}
                        className="flex-center"
                        style={{
                            justifyContent: 'flex-start', gap: '16px', cursor: 'pointer',
                            color: currentView === 'search' ? 'white' : 'var(--text-secondary)',
                            fontWeight: currentView === 'search' ? 700 : 500,
                            transition: 'color 0.2s'
                        }}
                    >
                        <Search size={24} />
                        Search
                    </div>
                </nav>
            </div>

            {/* Library Section */}
            <div style={{ flex: 1, background: 'var(--bg-secondary)', borderRadius: 'var(--radius-md)', padding: '16px', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px', color: 'var(--text-secondary)' }}>
                    <div className="flex-center" style={{ gap: '12px', fontWeight: 700, cursor: 'pointer', color: 'var(--text-secondary)' }}>
                        <Library size={24} />
                        Your Library
                    </div>
                    <Plus size={20} style={{ cursor: 'pointer' }} />
                </div>

                {/* Categories */}
                <div style={{ display: 'flex', gap: '8px', marginBottom: '16px' }}>
                    <span style={{ padding: '6px 12px', background: 'var(--bg-tertiary)', borderRadius: 'var(--radius-full)', fontSize: '12px', fontWeight: 600, color: 'var(--text-primary)', cursor: 'pointer' }}>Playlists</span>
                    <span style={{ padding: '6px 12px', background: 'transparent', borderRadius: 'var(--radius-full)', fontSize: '12px', fontWeight: 600, color: 'var(--text-primary)', cursor: 'pointer' }}>Artists</span>
                </div>

                {/* Playlist Scroll Area */}
                <div style={{ overflowY: 'auto', flex: 1, display: 'flex', flexDirection: 'column', gap: '16px', paddingRight: '4px' }}>
                    <div
                        onClick={() => playSong(songs[0])}
                        style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '8px', borderRadius: '4px', cursor: 'pointer', background: 'linear-gradient(90deg, rgba(139, 92, 246, 0.1), transparent)' }}
                    >
                        <div className="flex-center" style={{ width: '48px', height: '48px', background: 'linear-gradient(135deg, #450a0a, #991b1b)', borderRadius: '4px' }}>
                            <Heart size={20} fill="white" color="white" />
                        </div>
                        <div>
                            <div style={{ color: 'var(--text-primary)', fontWeight: 600, fontSize: '14px' }}>Liked Songs</div>
                            <div style={{ color: 'var(--text-secondary)', fontSize: '13px' }}>Pin • 123 songs</div>
                        </div>
                    </div>

                    {playlists.map(p => (
                        <div key={p.id} onClick={() => playSong(p)} style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '8px', borderRadius: '4px', cursor: 'pointer' }}>
                            <img src={p.imageUrl} style={{ width: '48px', height: '48px', borderRadius: '4px', objectFit: 'cover' }} />
                            <div style={{ overflow: 'hidden' }}>
                                <div style={{ color: 'var(--text-primary)', fontWeight: 600, fontSize: '14px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{p.title}</div>
                                <div style={{ color: 'var(--text-secondary)', fontSize: '13px' }}>Playlist • You</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;
