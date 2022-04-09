export class View {
    constructor(seletor) {
        const elemento = document.querySelector(seletor);
        if (elemento) {
            this.elemento = elemento;
        }
        else {
            throw Error(`Seletor ${seletor} não existe no DOM. Verifique`);
        }
    }
    update(model, classValue) {
        let template = this.template(model, classValue);
        this.elemento.innerHTML = template;
    }
}
//# sourceMappingURL=view.js.map