# Recipe book  
![server-java-test](https://github.com/PolinB/software-testing/workflows/server-java-test/badge.svg)

Приложение, созданное в рамках пректа по тестированию, для сохранения рецептов ваших любимых вкусняшек.

## Ссылки для проекта
[CheckList](CheckList.md)  
[Notes](https://polinb.github.io/software-testing/)

## Запуск клиента
```
cd app/client
npm start
```

## Запуск сервера node.js
```
cd app/api
npm start
```

## Запуск тестов

### До запуска тестов
```
cd app/client
```

### unit && components
```
npm run test-jest
```

### e2e with playwright
До запуска тестов запустить client и api
```
npm run test-playwright
```

### e2e with cypress 
До запуска тестов запустить client и api

Для просмотра в браузере
```
npm run cypress
```
Для просмотра в консоли
```
npm run test-cypress
```
С сохранением видео
```
npm run test-cypress --video
```
