import { useEffect } from "react";

const VoiceflowChat = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "https://cdn.voiceflow.com/widget/bundle.mjs";

    script.onload = () => {
      window.voiceflow.chat.load({
        verify: { projectID: "66d1909350827ab66132e89a" },
        url: "https://general-runtime.voiceflow.com",
        versionID: "production",
      });
    };

    document.body.appendChild(script);

    // Cleanup function to remove the script if the component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null;
};

export default VoiceflowChat;
