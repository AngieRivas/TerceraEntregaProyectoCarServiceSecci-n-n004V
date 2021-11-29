import {browser, element, by } from 'protractor';
 
describe('Mi Test2', ()=>{
    //configuramos nuestro bloque
    beforeEach(()=>{
        browser.get("/agendar");

    });
    //creación de prueba 1
    it("Se agenda un servicio", ()=>{
        expect(element(by.css(".titulo")).getText()).toContain("Agendas");
    });  

});


 
