import React from "react";
import socket from "./utilities/socket";

const pcConfiguration = {
  iceServers: [
    {
      urls: ["stun:bn-turn1.xirsys.com"],
    },
    {
      username:
        "0kYXFmQL9xojOrUy4VFemlTnNPVFZpp7jfPjpB3AjxahuRe4QWrCs6Ll1vDc7TTjAAAAAGAG2whXZWJUdXRzUGx1cw==",
      credential: "285ff060-5a58-11eb-b269-0242ac140004",
      urls: [
        "turn:bn-turn1.xirsys.com:80?transport=udp",
        "turn:bn-turn1.xirsys.com:3478?transport=udp",
        "turn:bn-turn1.xirsys.com:80?transport=tcp",
        "turn:bn-turn1.xirsys.com:3478?transport=tcp",
        "turns:bn-turn1.xirsys.com:443?transport=tcp",
        "turns:bn-turn1.xirsys.com:5349?transport=tcp",
      ],
    },
  ],
};

function App() {
  const [isInitiator, setIsInitiator] = React.useState<boolean>(false);
  const [isChannelReady, setIsChannelReady] = React.useState<boolean>(false);
  const [isStarted, setIsStarted] = React.useState<boolean>(false);
  const [room, setRoom] = React.useState<string>("");
  const localVideoRef = React.useRef<any>(null);
  const remoteVideoRef = React.useRef<any>(null);
  const localStream = React.useRef<any>(null);
  const pc = React.useRef<any>({});

  const sendMessage = (message: any, _room: any) => {
    socket.emit("message", message, room);
  };

  const createPeerConnection = () => {
    pc.current = new RTCPeerConnection(pcConfiguration);
    pc.current.onicecandidate = (event: any) => {
      if (event.candidate) {
        sendMessage(
          {
            type: "candidate",
            label: event.candidate.sdpMLineIndex,
            id: event.candidate.sdpMid,
            candidate: event.candidate.candidate,
          },
          room
        );
      }
    };
    pc.current.onaddstream = (event: any) => {
      remoteVideoRef.current = event.stream;
    };
    pc.current.onremovestream = () => {};
  };

  const setLocalAndSendMessage = (sessionDescription: any) => {
    pc.current.setLocalDescription(sessionDescription);
    sendMessage(sessionDescription, room);
  };

  const doCall = () => {
    const handleCreateOfferError = () => {};
    pc.current.createOffer(setLocalAndSendMessage, handleCreateOfferError);
  };

  const mayBeStart = () => {
    if (!isStarted && typeof localStream !== "undefined" && isChannelReady) {
      createPeerConnection();
      pc.current.addStream(localStream);
      setIsStarted(true);
      if (isInitiator) doCall();
    }
  };

  const doAnswer = () => {
    const onCreateSessionDescriptionError = () => {};
    pc.current
      .createAnswer()
      .then(setLocalAndSendMessage, onCreateSessionDescriptionError);
  };

  const stop = () => {
    setIsStarted(false);
    pc.current.close();
    pc.current = null;
  };

  const handleRemoteHangup = () => {
    setIsInitiator(false);
    stop();
  };

  // const hangup = () => {
  //   stop();
  //   sendMessage("bye", room);
  // };

  const onMessage = (message: any, _room: any) => {
    if (message === "got_user_media") mayBeStart();
    else if (message.type === "offer") {
      if (!isInitiator && !isStarted) mayBeStart();
      pc.current.setRemoteDescription(new RTCSessionDescription(message));
      doAnswer();
    } else if (message.type === "answer" && isStarted) {
      pc.current.setRemoteDescription(new RTCSessionDescription(message));
    } else if (message.type === "candidate" && isStarted) {
      pc.current.addIceCandidate(
        new RTCIceCandidate({
          sdpMLineIndex: message.label,
          candidate: message.candidate,
        })
      );
    } else if (message === "bye" && isStarted) {
      handleRemoteHangup();
    }
  };

  const onGetUserMedia = (stream: any) => {
    localStream.current = stream;
    localVideoRef.current.srcObject = stream;
    sendMessage("get_user_media", room);
    if (isInitiator) mayBeStart();
  };

  React.useEffect(() => {
    const roomName = prompt("Enter Room Name");

    if (roomName) setRoom(roomName);
    else socket.emit("create_or_join", roomName);

    socket.on("created", () => setIsInitiator(true));
    socket.on("join", () => setIsChannelReady(true));
    socket.on("joined", () => setIsChannelReady(true));
    socket.on("message", onMessage);

    if (localVideoRef.current && remoteVideoRef.current) {
      if (window.navigator && window?.navigator.mediaDevices) {
        window?.navigator.mediaDevices
          .getUserMedia({
            audio: true,
            video: true,
          })
          .then(onGetUserMedia)
          .catch(() => {});
      }
    }

    window.onbeforeunload = () => sendMessage("bye", roomName);
  }, []);

  return (
    <div
      style={{
        padding: 12,
      }}
    >
      <div>
        <h1>Simple Video App</h1>
      </div>
      <div
        id="video-container"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className="local-div" id="div1">
          <video autoPlay muted playsInline ref={localVideoRef}></video>
        </div>
        <div className="remote-dev" id="div2">
          <video autoPlay playsInline ref={remoteVideoRef}></video>
        </div>
      </div>
    </div>
  );
}

export default App;
