# Cloud Data
 		
 Cloud data can be used to create chat apps, high scores, logins, and multiplayer games.		
 		
 1) Login to [Firebase](https://firebase.google.com/) with your Google account.		
 		
 2) Create a new project.
 		
 3) Make reading and writing to your database possible via the Database rules tab.		
 
 4) Add Cloud Data to your HTML between your `<head>` tags:
 
 ```html
 <script src=" https://cdn.rawgit.com/stevekrouse/cloud-data/445dfd6dcfc82fa7d0ded3b886e4b5e106b28524/cloud-data.js"></script>
 ```
 		
 4) Create a new database:	
 		
 ```javascript		
 var database = new CloudData({		
     apiKey: "AIzaSyAWa4XzsdE5haWBWq4fTef2Ko1dpbsE4qM",		
     authDomain: "sample-a81f9.firebaseapp.com",		
     databaseURL: "https://sample-a81f9.firebaseio.com",		
     storageBucket: "",		
 });		
 ```		
 		
 5) Set some data:		
 		
 ```javascript		
 database.set("highScore", 100)
 database.set("player1", {x: mouseX, y: mouseY})
 ```		
 
 6) Add to a list:		
 		
 ```javascript		
 database.addToList("messages", {name: "Steve", message: "Think different"}) 	
 ```
 		
 7) Get some data:		
 		
 ```javascript		
 database.get("highScore", 0)         // returns 100, with a default of 0		
 database.get("player1", {x: 0, y: 0}) // returns  {x: 14, y: 104}, with a default of {x: 0, y: 0}		
 database.get("messages", [])          // returns [{name: "Steve", message: "Think different"}], with a default of []
 ```

 7) React when the data changes:		
 		
 ```javascript		
 var highScore = database.get("highScore")
 database.onChange(() => {
  highScore = database.get("highScore")
 })
 ```
