import React, { useEffect } from 'react';

const VoiceflowChat = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://cdn.voiceflow.com/widget/bundle.mjs';
    
    script.onload = () => {
      window.voiceflow.chat.load({
        verify: { projectID: '66d1909350827ab66132e89a' },
        url: 'https://general-runtime.voiceflow.com',
        versionID: 'production',
      });
    };
    
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(script, firstScriptTag);

    // Cleanup script when component unmounts
    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return null;
};

export default VoiceflowChat;