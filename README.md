# nasa

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## Run with Docker

- build
```
docker build -t dockerize-vuejs-app .
```
- run
```
docker run -it -p 8080:8080 --rm --name searchvuejs dockerize-vuejs-app
```