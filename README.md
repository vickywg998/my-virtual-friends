# server

```
cd server/src
nodemon server.ts
```

# database 

```  
brew services start mongodb-community@4.4
```
in new tab: 

``` 
mongo
```

log into Mongo 
Clusters -> Network Access -> Edit IP to current IP address 
(if there's an UnhandledPromiseRejectionWarning)

# client

```
cd client/src 
npm start 
```