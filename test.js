const pack = (dependencies) => {

  return `
  
  {
    "name": "server",
    "version": "1.0.0",
    "description": "",
    "main": "index.js",
    "scripts": {
      "test": "echo \"Error: no test specified\" && exit 1"
    },
    "keywords": [],
    "author": "alshain",
    "license": "ISC",
    "dependencies": {
      ${dependencies.map(dep => /*stuff here*/)}
    }
  }
  
  
  `
}