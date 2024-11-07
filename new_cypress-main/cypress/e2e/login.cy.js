describe('Проверка авторизации', function () {

    it('Верный пароль и верный логин', function () {
         cy.visit('https://login.qa.studio/'); //зашел на сайт
         cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); //проверил цвет кнопки

         cy.get('#mail').type('german@dolnikov.ru'); //ввёл верный логин
         cy.get('#pass').type('iLoveqastudio1'); //ввёл верный пароль
         cy.get('#loginButton').click(); //нажал кнопку войти

         cy.get('#messageHeader').contains('Авторизация прошла успешно'); //проверка, что после авторизации появилось окно
         cy.get('#messageHeader').should('be.visible');//проверяю, что окно после авторизации отобразилось
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //проверка, что кнопка крестик видна

     })
     it('Верный логин и неверный пароль', function () {
        cy.visit('https://login.qa.studio/'); //зашел на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); //проверил цвет кнопки

        cy.get('#mail').type('german@dolnikov.ru'); //ввёл верный логин
        cy.get('#pass').type('iLoveqastudio8'); //ввёл неверный пароль
        cy.get('#loginButton').click(); //нажал кнопку войти

        cy.get('#messageHeader').contains('Такого логина или пароля нет'); //проверка, что после авторизации появилось окно
        cy.get('#messageHeader').should('be.visible');//проверяю, что окно после авторизации отобразилось
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //проверка, что кнопка крестик видна
     })
     it('Проверка, что в логине есть @', function () {
        cy.visit('https://login.qa.studio/'); //зашел на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); //проверил цвет кнопки

        cy.get('#mail').type('germandolnikov.ru'); //ввёл  логин без @
        cy.get('#pass').type('iLoveqastudio1'); //ввёл верный пароль
        cy.get('#loginButton').click(); //нажал кнопку войти

        cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); //проверка, что после авторизации появилось окно
        cy.get('#messageHeader').should('be.visible');//проверяю, что окно после авторизации отобразилось
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //проверка, что кнопка крестик видна
 })
  it('Проверка восстановления пароля', function () {
    cy.visit('https://login.qa.studio/'); //зашел на сайт
    cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); //проверил цвет кнопки

    cy.get('#forgotEmailButton').click(); //нажал кнопку восстановить пароль
    cy.get('#mailForgot').type('german@dolnikov.ru'); //Ввёл почту
    cy.get('#restoreEmailButton').click();//нажал кнопку отправить код

    cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); //проверка, что появился такой текст
    cy.get('#messageHeader').should('be.visible');//проверяю, что текст виден пользователю
    cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //проверка, что кнопка крестик видна
})
it('Проверка на приведение к строчным буквам в логине', function () {
    cy.visit('https://login.qa.studio/'); //зашел на сайт
    cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); //проверил цвет кнопки

    cy.get('#mail').type('GerMan@Dolnikov.ru'); //ввёл  логин с разным регистром
    cy.get('#pass').type('iLoveqastudio1'); //ввёл верный пароль
    cy.get('#loginButton').click(); //нажал кнопку войти

    cy.get('#messageHeader').contains('Авторизация прошла успешно'); //проверка, что после авторизации появилось окно
    cy.get('#messageHeader').should('be.visible');//проверяю, что окно после авторизации отобразилось
    cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //проверка, что кнопка крестик видна
})
})