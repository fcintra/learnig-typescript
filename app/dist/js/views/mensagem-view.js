import { View } from './view.js';
export class MensagemView extends View {
    template(model, classValue) {
        return ` <p class="alert alert-${classValue}">${model}</p>`;
    }
}
//# sourceMappingURL=mensagem-view.js.map