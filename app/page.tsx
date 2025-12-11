"use client";

import { useEffect } from "react";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "elevenlabs-convai": any;
    }
  }
}

export default function VoiceAgent() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://unpkg.com/@elevenlabs/convai-widget-embed";
    script.async = true;
    script.type = "text/javascript";
    document.body.appendChild(script);
  }, []);

  return (
    <elevenlabs-convai agent-id="agent_4701kc6yc16jedsvs4qwxcpkman3" />
  );
}
