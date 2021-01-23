# Checklist for homework
## Тестирование Frontend
### Main часть:

- [x] репозиторий на GitHub, с папкой client
- [x] приложение на React
- [x] несколько страниц с роутингом
- [x] node.js бекенд
- [x] unit тесты
- [x] component тесты
- [x] e2e тесты

### Advanced часть:

- [x] авторизация
- [x] не собрано из генераторов сайтов
- [x] тесты для проверки авторизации
- [ ] нескольно наборов тестов (несколько suites)

### Bonus часть:

- [ ] примеры с Mocha и Jest
- [ ] заметка с основными отличиями
- [ ] заметка размещена на GitHub pages

## Тестирование Frontend: e2e тестирование
### Main часть:
- [x] тесты на Playwright
- [x] тесты на Cypress

### Advanced часть:
- [x] тесты не проходят авторизацию

### Bonus часть:
- [ ] скриншот-тестирование и запись видео
- [ ] статья в блог

## Backend. Unit testing. Component testing
### Main часть:
- [ ] сервис Java + Spring + DB
- [ ] больше 1 контроллерa
- [ ] unit тесты
- [ ] component тесты
- [ ] TestContainers для теста с DB
- [ ] Mockito
- [ ] README про ненаписанные тесты

### Advanced часть:
- [ ] взаимодействие сервиса и Frontend приложения
- [ ] тесты на авторизацию
- [ ] Spring Test Configuration, которые можно переключать при помощи флага при запуске тестов
- [ ] генерация тестовой документации через Asci Doctor(Spring Rest Docs)

### Bonus часть:
- [ ] функциональность с Kafka/RabbitMQ streams
- [ ] компонентные тесты на эту функциональность

## CI/CD. GitHub actions. Azure
### Main часть:
- [ ] GitHub action для запуска тестов на UI и Backend по пушу из master в ветку

### Advanced часть:
- [ ] GitHub action для деплоя приложения UI+BE на Azure/Vercel/Яндекс Облако

### Bonus часть:
- [ ] Kubernetes в Azure/Яндекс Облаке для разворачивания среды

## Reporting. BDD
### Bonus часть:
- [ ]  Allure reporting для написанных тестов

## Contract tests. Pact. Spring cloud contract
### Bonus часть:
- [ ]  Pact-тесты к сервису.

## A11Y. Instruments
### Bonus часть:
- [ ]  протестировать сайт на а11y с помощью инструментов от Mozilla и Lighthouse
- [ ]  пофиксить проблемы
- [ ]  сделать автоматический тест с axe

## Selenium. Selenide. Selenoid
### Main часть:
- [ ] e2e тесты, используя Selenide

### Advanced часть:
- [ ] настроить запуск тестов с Selenoid

### Bonus часть:
- [ ] настроить генерацию отчетов с Allure report, сделав полный сетап в GitHub: e2e тесты с selenide запускаются с использованием Selenoid на разных окружениях(браузерах) параллельно и собирают отчет с помощью Allure Report
- [ ] написать статью про сетап

## Performance testing
### Main часть:
- [ ] пройти воркшоп и выложить результаты

### Advanced часть:
- [ ] настроить CI с Github actions

### Bonus часть:
- [ ] настроить генерацию отчетов с Allure report