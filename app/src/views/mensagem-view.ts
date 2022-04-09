import {
    View
} from './view.js';

export class MensagemView extends View < string > {

    protected template(model: string, classValue?: string): string {
        return ` <p class="alert alert-${classValue}">${model}</p>`
    }

}