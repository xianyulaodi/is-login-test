# is-login-test

![](https://img.shields.io/badge/node-%3E%3D6.0.0-green.svg)  ![](https://img.shields.io/apm/l/vim-mode.svg) 


## useage
```javascript  
npm install is-login-test --save
```

default session name is `user`;
while is no login ,default redirect is `/login`;
```javascript  
// express 
var express = require('express');
var islogin = require('is-login-test');
var router = express.Router();

router.get('/test',islogin,function(req,res) { 
    ...
	res.end();
})
```

you can user option to config you session name and login fail redirect
```javascript  
// express 
var express = require('express');
var islogin = require('is-login-test');
var router = express.Router();

router.get('/test',islogin({sessionName:"sessionName",redirect: "/index"}),function(req,res) { 
    ...
	res.end();
})
```