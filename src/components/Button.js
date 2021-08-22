export class Button {
    constructor() {
        const $back = document.createElement('input');
        $back.id = 'back';
        $back.type = 'button';
        $back.value = 'BACK';

        this.$time = document.querySelector('#time');
        this.$time.previousElementSibling.appendChild($back);
    }

    createNew() {
        const $new = document.createElement('input');
        $new.id = 'new';
        $new.type = 'button';
        $new.value = 'NEW';
        this.$time.nextElementSibling.appendChild($new);
    }
}