import "./style.css";

import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAXKxa13JpcFMIRYobMCjIaKNHd2Tj0x3U",
  authDomain: "fir-webrtc-b8ee5.firebaseapp.com",
  projectId: "fir-webrtc-b8ee5",
  storageBucket: "fir-webrtc-b8ee5.appspot.com",
  messagingSenderId: "890233592806",
  appId: "1:890233592806:web:16c9cf917934c4ed88d427",
  measurementId: "G-FSSKFDZQY9",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const servers = {
  iceServers: [
    {
      urls: ["stun:stun1.l.google.com:19302", "stun:stun2.l.google.com:19302"],
    },
  ],
  iceCandidatePoolSize: 10,
};

const firestore = firebase.firestore();
let pc = new RTCPeerConnection(servers);
let localStream = null;
let remoteStream = null;
let offerCandidates;
let answerCandidates;
let callDoc;

const webcamVideo = document.querySelector("#webcamVideo");
const remoteVideo = document.querySelector("#remoteVideo");
const webcamButton = document.querySelector("#webcamButton");
const callButton = document.querySelector("#callButton");
const callInput = document.querySelector("#callInput");
const answerButton = document.querySelector("#answerButton");
const hangupButton = document.querySelector("#hangupButton");

webcamButton.addEventListener("click", async () => {
  localStream = await navigator.mediaDevices.getUserMedia({
    video: true,
    audio: true,
  });
  remoteStream = new MediaStream();
  localStream.getTracks().forEach((track) => {
    pc.addTrack(track, localStream);
  });

  pc.ontrack = (event) => {
    event.streams[0].getTracks().forEach((track) => {
      remoteStream.addTrack(track);
    });
  };

  webcamVideo.srcObject = localStream;
  remoteVideo.srcObject = remoteStream;
});

/**
 * Caller Needs
 * > Create Offer
 * > Set Local Description
 * > Remote Answer
 * > Set Remote Description
 */
callButton.addEventListener("click", async () => {
  callDoc = firestore.collection("calls").doc();
  offerCandidates = callDoc.collection("offerCandidates");
  answerCandidates = callDoc.collection("answerCandidates");

  // Get candidates from the caller (contains IP Address and Port Information)
  pc.onicecandidate = (event) => {
    event.candidate && offerCandidates.add(event.candidate.toJSON());
  };

  callInput.value = callDoc.id;

  // Create Offer
  const offerDescription = await pc.createOffer();
  await pc.setLocalDescription(offerDescription);
  const offer = {
    sdp: offerDescription.sdp,
    type: offerDescription.type,
  };
  await callDoc.set({ offer });

  // Listen for remote answer
  callDoc.onSnapshot((snapshot) => {
    const data = snapshot.data();
    if (!pc.currentRemoteDescription && data?.answer) {
      const answerDescription = new RTCSessionDescription(data.answer);
      pc.setRemoteDescription(answerDescription);
    }
  });

  // When answered, add candidate to peer connection
  answerCandidates.onSnapshot((snapshot) => {
    snapshot.docChanges().forEach((change) => {
      if (change.type === "added") {
        const candidate = new RTCIceCandidate(change.doc.data());
        pc.addIceCandidate(candidate);
      }
    });
  });
});

answerButton.addEventListener("click", async () => {
  const callId = callInput.value;
  const callDoc = firestore.collection("calls").doc(callId);
  const answerCandidates = callDoc.collection("answerCandidates");
  const offerCandidates = callDoc.collection("offerCandidates");

  pc.onicecandidate = (event) => {
    event.candidate && answerCandidates.add(event.candidate.toJSON());
  };

  const callData = (await callDoc.get()).data();
  const offerDescription = callData.offer;
  await pc.setRemoteDescription(new RTCSessionDescription(offerDescription));

  const answerDescription = await pc.createAnswer();
  await pc.setLocalDescription(answerDescription);

  const answer = {
    type: answerDescription.type,
    sdp: answerDescription.sdp,
  };

  await callDoc.update({ answer });

  offerCandidates.onSnapshot((snapshot) => {
    snapshot.docChanges().forEach((change) => {
      if (change.type === "added") {
        pc.addIceCandidate(new RTCIceCandidate(change.doc.data()));
      }
    });
  });
});
