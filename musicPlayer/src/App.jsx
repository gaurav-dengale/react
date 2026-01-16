import React from 'react';
import Sidebar from './components/Sidebar';
import PlayerControls from './components/PlayerControls';
import MainView from './components/MainView';
import { PlayerProvider } from './context/PlayerContext';
import './index.css';

const App = () => {
    const [currentView, setCurrentView] = React.useState('home');

    return (
        <PlayerProvider>
            <div style={{ display: 'flex', height: '100vh', width: '100vw', background: 'black', flexDirection: 'column', overflow: 'hidden' }}>
                <div style={{ flex: 1, display: 'flex', minHeight: 0, overflow: 'hidden' }}>
                    <Sidebar currentView={currentView} setCurrentView={setCurrentView} />
                    <MainView currentView={currentView} />
                </div>
                <PlayerControls />
            </div>
        </PlayerProvider>
    );
};

export default App;
