var admin = require("firebase-admin");

// var serviceAccount = require("serviceAccount.json");

admin.initializeApp({
  credential: admin.credential.cert({
    projectId: "node-firebase-6924e",
    clientEmail: "firebase-adminsdk-1i3k3@node-firebase-6924e.iam.gserviceaccount.com",
    privateKey: "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQChpVpbdQPtevs3\nyL/EDIDVhrYP7ugYCAOWlpcQ7WYeLSu2VG8oxVNZ1nQJVke5DluRti7luZdIUb7h\noa8JAzyMKj4HXYtuQwu+j23HsjAbBRd2uxvPvQnSrmGrx/Ovu0hf44QjGDil1yZV\nAJZnjG+VGUg2PHK6lGqkcxlL8GKltc3jXcEFLwVz9OmlONIQueeYrm2v7NttZvJ4\np/yKNGHwD2c6FjAEu7qseJoCuANOZDtOc9D9okdJsnQQP938Qx78F5nJ49nPfzxW\nz4q5/MZ994cFe2LCkFRHerHCprBBuA2EJWuiURkXfTFN3bisVBFXLDJ9gaqpn9k5\nY+v9cdrHAgMBAAECggEAC1uwDq8ZOI2kq1XKy77JKrfNgS8bVdzyS5mHQeQ8gbBQ\n2v3x1Z6P7ccY3jMW1RUCMCnp/7BbxfQggoA26V412e957lCPZI8HeztezmJh6PQh\novEg0icJUql4KXbiU53IRxyYg1LHYDfO9LgW2W3PxV1CarUyppOZLrb7tw9MDzKr\njOmX/mRmrP2E4qcjgK56EdDXgVaGTxUOLAhh4NLboEkPvcNcCBbs6hCZxuGYssfH\nPny4PhviXaPMny5/hMTlRJseaxoo6gHkyj6qZSI7zfgs/Fzlr40nVZNfxUXvT5TB\nspCJkDrnnN+iqHiw7zJ2bgNrKuKIJirZM6e+6o2oaQKBgQDQzY5lDC1KlXmSu+Va\nwRDGmtpUw5UFdGm7Q8yYy+Dh4YHhNhlUJCTFJnnhuonmTDgCYAw34wjCyKzVtWwf\nikHTerH6AEyYC0J6u1oJVt/IMUFndXS8kYXsPJ5JCHtiUv4JRo9c4LDqDETHvWDA\n48/KqQk0N5oL60beNoX0o+XPSwKBgQDGLwpnJbx1eAPvchSVSP2kZOaJNWOV13Jx\ny5dLcDwD99VKfI+FdnepJBG9tAHiujXk3J4Jk1aAzkkJbPGAjo5ifhh2Iw+5Kxe+\nUdSIH/qkHllX2NuQGMGIMINGuYS4FYaiYZi4C9COrIioRBXvD8NkupkBJZ9njsLc\nvcT5R2Ro9QKBgGsjzpkS8np+0G72cu1qe40tEDLGWMT/wvEQDP+qPa4p5FcHR1/h\nW+y9nXSyHuhI28R8PEjA+lHYXrcZ7G0SqEw3fPNnC+ZIgMgxMjXwmctDWugXYNsR\nYMKjKCUZcRY2t5tS1WU29hBiUziad/cB7jFzIwHkNes/wpFrMLkjEFyZAoGBAKrY\nAm/I6B2byEiyX2wR8BW3pcTCcYbKo63VhCdUKWiCTSxZFKBI7/6vSVvvwXBidfNE\n/Dfk+70uF2g4sjfQrI3bhdrRfsxxiZZXlI+EgdzZDMvd9ejSboOozoI5i1/lrpps\n5+pAxRk5QtVLXF0piZdcBGootLHhL7p7HUKHeNfBAoGBAIV5fmN2RKBjM9nRxcnw\n0DO2Iwf4urhLANQmwbm+9f9tt2YkB8xg0hr0XOQE9rdzeDR3tUCWePkEqjD6oSLm\nQg2KPxel40sYmVuWP4SV9SGFCrewAIVIBb0O5onnQ8nE19hn9IdKrdAY2SNwS4B6\nkg7Iv3cBD8/2+kGaEe5BBHgM\n-----END PRIVATE KEY-----\n"
  }),
   databaseURL: "https://node-firebase-6924e.firebaseio.com"
});

var defaultDatabase = admin.database();

var db=defaultDatabase.ref("root");
db.push({
	"something":"data"
});

db.once("value",function(snapshot){
	console.log(snapshot.val());
});

db.once("child_removed",function(){
	console.log("Child has been removed");
})

db.once("child_added",function(){
	console.log("Child has been added")
});

db.once("child_changed",function(){
	console.log("Child has been added")
});