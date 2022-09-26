# websocket

Websocket (ws) is a communication protocol to transmit data between computers, where it is commonly used in realtime app.

-   In contrast to HTTP, WS persists and maintains its connection with the server, so the subsequent data transmission will be lightning fast.

-   There are 2 common WS app patterns.
    -   PubSub
    -   PRC

**PubSub** involves 1 server that broadcasts messages to multiple clients. Commonly seen in financial apps where there is a need to stream realtime price data.

**RPC** is very similar to HTTP, where the client will send a request and expect a replay from the server. RPC can be used in messaging apps.

## Broadcasting config

-   Laravel websocket (php)
-   Laravel echo server (nodejs and php)
-   soketi (nodejs and php)
-   echo (js library)
