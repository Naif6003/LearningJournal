#Packet
1. store-n-forward
2. R, will transmit full and imediately
3. Supports many users. If too many users there will be delay or loss

#Circuit (past Tech vs packet)
1. cut-through, you need to set the channel, 
2. R/n - each will be partial transmission
3. DEPRECIATED CHANNEL - It depends on link capacity, if R = 1mbps n = 200kbps then R/n = 5 users which is limited, cannot be shared with other users
4. 

###Example Packet vs Circuit
packet - 1Mbps link / 100 kps = 10 users
circuit - as many as we want, how to get 0.0004 probability. How to get .0004 If we have 1000kps per 1 user, 11 users will 1.1Mpbs and will be packet loss.  P = (1 : 35)<br> P = (12:35)(.1)*20%()
<br> p1 + p2 + p3 + p4 ... + pn there is no packet loss<br>
P11 + p12 + p13 + ... _ p35 There will be packet loss

p11 = (11:35)(.1)^11(0.9)^24 	<br>
p12 = (12:35)(.1)^11(0.9)^24	<br>
p35= (35:35)(.1)^35
<br>EXAM QUESTION if there are 25 users, what is their probability?, GIVEN 1 Mb/s link capacity, 100kbps but only acive 10%.  How many users can you support if you have circuit .  1 Mbps/ 100kbps  = 10 users
<br>EXAM packet switching, can support many users but will have.  If you support 35 users, what is their loss probability? If there are 10 users there is no packet loss. when there is packet loss its when you have more than 10, there is a packet loss. QUESTION: WHAT IS THEIR ACTIVE TIME? if p11 then (11:35)(.01)^11 (0.9)^24
(12:35)(.01)^12 (0.9)^23 p34 - (34:35)(.01)^34 (0.9)^1

<br> Packet switching can have more users 35, if you need it to be bursty traffic, circuit can have 10 users. if you need a stable traffic

___
2Mbps , User 20% 

a. Circuit Switching - 2Mpbs / 1Mbps = 2 users
b. There will be no delay because each user transmits on 20 percent of time.  not sure about the queuing delay
c. p1 = (1:3)(.2)


a. at most two users
b. the incoming traffic is less than the capacity so no delay, more than 2 users , 3 users transmitting at the same time, there will be a given delay
c. 0.2
d. p = (3:3)(0.2)^3(0.8)0 , at this moment, the queue will grow. 

d. if 4 users then  p = (3:3)(0.2)^3(0.8)^0 + (4:4)(0.2)^4


