###### Protocol specification

This document describes transmission protocol between repository
(server) and CCExtractor (client)

##### Transmission units

Client communicates with the server by sending packets of arbitrary
length. In the source code they are called blocks, for some unknown
reason :) These packets have the following syntax:

` - 1 byte -- Control command number -- defined protocol constant that represents packet's data`\
` - 10 bytes -- Packet's data length (N) -- string with decimal number >= 0 with leading zeroes that contains the size of packet payload.`\
` - N bytes -- packet payload -- packets' payload data`\
` - 2 bytes -- \r\n -- caret return and linefeed, representing the end of the packet`

The packets control commands with their values that server accepts are
listed bellow:

` - PASSWORD (2) -- the packet contains password data. It can be ignored if the server is configured with no password. But client still must supply this packet.`\
` - CC_DESC (4) -- the packet contains transmission description. Client is required to supply this packet even if end-user didn't specify one.`\
` - BIN_HEADER (5) -- the packet contains BIN header. Packets BIN_DATA and EPG_DATA are ignored until BIN_HEADER is supplied.`\
` - BIN_DATA (6) -- the packet contains BIN data that will processed to extract captions. This data is recognised according to presented earlier BIN_HEADER`\
` - EPG_DATA (7) -- the packet contains EPG data with following syntax`\
`   - c-string (bytes ending with \0) with start time in the "%Y%m%d%H%M%S %z" format`\
`   - c-string with stop time in the "%Y%m%d%H%M%S %z" format`\
`   - c-string with program title`\
`   - c-string with program description`\
`   - c-string with language`\
`   - c-string with category`\
` - PING (55) -- keep-alive packet with no data`

If the server receives packet with unknown control commands it shall
close connection.

Server communicates with client by sending 1 byte constants. These
constants are:

` - ERROR (51) -- error happened on the server side so that it can not process client's data`\
` - PASSWORD (2) -- client supplied wrong password`\
` - PING (55) -- keep-alive constant`

Client should ignore commands that are not defined by the protocol.

##### Packets transmission sequence

` - After TCP connection is established, client must send these packets in specified order:`\
`   - PASSWORD`\
`   - CC_DESC`\
`   - BIN_HEADER`\
` - Then, without waiting for server's responce client can send BIN_DATA, EPG_DATA and PING packets in arbitrary order.`\
` - In case client presented wrong password server closes connection and sends PASSWORD byte.`\
` - In case client didn't presented any required packets server closes connection and sends ERROR byte.`\
` - If client notices that connection is closes it can read the data left in socket buffer to get the reason why it's closed.`\
` - If an error occurs and server can no longer process clients' data, it shall send ERROR byte and close connection.`\
` - Every 3 seconds client is required to send PING packets. If server doesn't receives them in 20 sec, it closes connection without sending anything.`\
` - Every 3 seconds server is required to send PING packets. If client doesn't receives them in 20 sec, it may close connection and reconnect.`
