import config from './settings.js'
var token;
var uID;

export async function loginUser(login, password) {
  var logged = await fetch("http://"+config.address+":"+config.port+"/users/login", {
        method: "POST",
        body: JSON.stringify({login:login, password:password}),
        headers: {
      'Content-Type': 'application/json'
    },
    })
    .then(res => res.json())
    .then(res => {
        if(res.length>0){
        token=res.token
        uID = res.id
        }
        return res.isLogged;
    })

    return logged
}
