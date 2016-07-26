# Cloud Data
 		
 Cloud data can be used to create chat apps, high scores, logins, and multiplayer games.		
 		
 1) Login to [Firebase](https://firebase.google.com/) with your Google account.		
 		
 2) Create a new project.
 		
 3) Make reading and writing to your database possible via the Database rules tab.		
 
 4) Add Cloud Data to your HTML between your `<head>` tags:
 
 ```html
 <script src=" https://cdn.rawgit.com/stevekrouse/cloud-data/f06fe37a6a3c2f33e01600b21869f978e099f8c1/cloud-data.js"></script>
 ```
 		
 4) Create a new database:	
 		
 ```javascript		
 var database = CloudData({		
     apiKey: "AIzaSyAWa4XzsdE5haWBWq4fTef2Ko1dpbsE4qM",		
     authDomain: "sample-a81f9.firebaseapp.com",		
     databaseURL: "https://sample-a81f9.firebaseio.com",		
     storageBucket: "",		
 });		
 ```		
 		
 5) Set some data:		
 		
 ```javascript		
 database.set("high_score", 100);		
 database.set("player1", {x: mouseX, y: mouseY});		
 ```		
 
 6) Add to a list:		
 		
 ```javascript		
 database.addToList("messages", {name: "Steve", message: "Think different"}) 	
 ```
 		
 7) Get some data:		
 		
 ```javascript		
 database.get("high_score", 0)         // returns 100, with a default of 0		
 database.get("player1", {x: 0, y: 0}) // returns  {x: 14, y: 104}, with a default of {x: 0, y: 0}		
 database.get("messages", [])          // returns [{name: "Steve", message: "Think different"}], with a default of []
 ```
