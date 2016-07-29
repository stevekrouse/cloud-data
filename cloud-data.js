CloudData = function(config){
   this.data = {};
   
   this._onchanges = [];
   this.onChange = (func) => {
       this._onchanges.push(func);  
   };
   
   this.loadFirebaseLibrary = callback => {
     var lib = document.createElement("script");
     lib.type = "text/javascript";
     lib.src = "https://www.gstatic.com/firebasejs/live/3.0/firebase.js";
     lib.onload = callback;
     document.body.appendChild(lib);
   };
   
   this.loadFirebaseLibrary(() => {
     firebase.initializeApp(config);
     firebase.database().ref().on('value', snapshot => {
       this.data = snapshot.val() || {};
       this._onchanges.forEach(func => func());
     });
   });
   
   this.addToList = (key, val) => {
     return firebase.database().ref().child("/" + key).push(val).key;
   };
   
   this.set = (key, val) => {
     firebase.database().ref().child("/" + key).set(val);
   };
   
   this.get = (key, defaultVal) => {
     return this.data[key] || defaultVal;
   };
};
