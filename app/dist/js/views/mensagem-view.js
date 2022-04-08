import { View } from './view.js';
export class MensagemView extends View {
    template(model) {
        return ` <p class="alert alert-info">${model}</p>`;
    }
    setHiddenFlashMessage(seletor) {
        seletor.style.display = 'none';
    }
}
//# sourceMappingURL=mensagem-view.js.map