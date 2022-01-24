import React, { useEffect, useState } from 'react';
import './index.scss';

// const ConnectionStatus = ({ isOnline }) => (isOnline ? <Online /> : <Offline />);
const ConnectionStatus = () => {
  const [connectStatus, setConnectStatus] = useState('online');

  useEffect(() => {
    const onStatusOnline = () => {
      setConnectStatus('online');
    };
    const onStatusOffline = () => {
      setConnectStatus('offline');
    };
    window.addEventListener('online', onStatusOnline);
    window.addEventListener('offline', onStatusOffline);
    return () => {
      window.removeEventListener('online', onStatusOnline);
      window.removeEventListener('offline', onStatusOffline);
    };
  }, []);

  return (
    <div className={`status ${connectStatus === 'offline' ? 'status_offline' : ''}`}>
      {connectStatus}
    </div>
  );
};

export default ConnectionStatus;
