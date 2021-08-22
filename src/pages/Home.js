export class Home {
    apps = JSON.parse(localStorage.getItem('apps')) || ['알람', '메모', '사진'];
    dragged = null;
    
    constructor($target) {
        this.$target = $target;
        this.render();
        this.dragHandler();
    }

    setState(data) {
        this.apps = data;
        localStorage.setItem('apps', JSON.stringify(this.apps));
    }

    render() {
        const $wrap = document.createElement('div');
        $wrap.id = 'wrap';

        this.apps.forEach( e => {
            const $div = document.createElement('div');
            $div.id = e;
            $div.className = 'app';

            const $input = document.createElement('input');
            $input.setAttribute('type','button');
            $input.value = e;
            $input.className = 'app-btn';
            $input.draggable = true;
            
            $div.appendChild($input);
            $wrap.appendChild($div);
        });

        this.$target.replaceChild($wrap, document.querySelector('#wrap'));
    }

    // Drag & Drop 함수
    dragHandler() {
        const apps = document.querySelector('#wrap');
        apps.addEventListener('dragstart', e => {
            this.dragged = e;
            e.target.style.opacity = 0.5;
        }, false);

        apps.addEventListener("dragend",  e => {
            e.target.style.opacity = "";
        }, false);

        apps.addEventListener("drop", e => {
            if(e.screenX - this.dragged.screenX > 0) {
                e.target.parentNode.after(this.dragged.target.parentNode);
            } else {
                e.target.parentNode.before(this.dragged.target.parentNode);
            }

            const changed_app = [];
            document.querySelectorAll('.app-btn').forEach(e => {
                changed_app.push(e.value);
            });
            
            this.setState(changed_app);
        });

        apps.addEventListener('dragover', e => {
            e.preventDefault();
            e.dataTransfer.dropEffect = 'move';
        });
    }
}