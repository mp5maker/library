# WebRTC
WebRTC stands for Web Real-Time Communication. It enables peer to peer communication
without any server in between and allows the exchange of audio, video, and data between the
connected peers

# WebRTC APIS
* getUserMedia(): captures audio and video
* MediaRecorder(): record audio and video
* RTCPeerConnection(): stream audio and video between users
* RTCDataChannel(): stream data between users

# Signaling
Before two peers can communicate each other, they need to know information about each other
a.k.a metadata. For signaling we need a server

Those metadata contains, network data (IP Address), media data (codes),
session control messages (open/close communication) and many more

# Session Description Protocol (SDP)
WebRTC requires exhange of media metadata between peers as *offers* and *answers*
Offers and answers are communicated in Session Description Protocol

# WebRTC Applicaiton Works
Each device connected to the internet has an IP Address and many PORTS
Signalling works together with RTCPeerConnection to exchange offer, answer and candidate

# Scenario
Bob trying to call John

* Bob creates and *RTCPeerConnection* object
* Bob creates an offer (SDP) with *createOffer()*
* Bob calls *setLocalDescription()* to set the *createdOffer()*

Bob stringifiers offer -> signal -> John

* John calls *setRemoteDescription* with Bob's offer [This allows John's RTCPeerConnection know about Bob's setup]
* John calls *createAnswer()*
* John calls *setLocalDescription()* to set the *createAnswer()*

John stringifiers answer -> signal -> Bob

* Bob sets *setRemoteDescription*


# NAT (Network Address Translation)
Each device has two IPs one is public IP and other is private IP
Laptop, PC and Smartphone only know its private IP
Public IP of your current network can be found by googling
Public IP is assinged to router
Private IP is assigned to device
WebRTC needs to communicate using the Public IP
In order to solve this problem, device requests to STUN Server *Session Traversal Utilities for NAT*
Stun server helps the browser to generate candidates and get the public IP

# Firewall
WebRTC uses non standard ports. Some firewall do not allow a direct connection between browsers
Hence to solve this TURN Server *Traversal Using Relay NAT*, this acts as a relay