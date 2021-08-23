import { Button } from "../components/Button";

export class Photo {
    constructor($target) {
        new Button();
        this.$img_list = document.createElement('div');
        this.$img_list.id = 'imgList';
        this.$detail_img = document.createElement('div');
        this.$detail_img.className = 'detail-img';
        this.$wrap = document.createElement('div');
        this.$wrap.id = 'wrap';
        this.$wrap.appendChild(this.$img_list);
        this.$wrap.appendChild(this.$detail_img);
        $target.replaceChild(this.$wrap, document.querySelector('#wrap'));
        this.render();
        this.eventHandler();
    }

    render() {
        const imgs = new Array(10).fill().map((_,i) => `image${i+1}`);
        imgs.forEach(img => {
            const $img = document.createElement('img');
            $img.src = `/src/assets/${img}.jpg`;
            $img.alt = '이미지 로딩 실패';

            this.$img_list.appendChild($img);
        });
    }

    selectedImg(e) {
        const activeImg = document.querySelector('.active');
        if(activeImg) activeImg.removeAttribute('class');
        e.target.className = 'active';

        this.$detail_img.firstChild?.remove();
        if(e.target.src) {
            const $img = document.createElement('img');
            $img.src = e.target.src;
            this.$detail_img.appendChild($img);
        }
    }

    mouseScroll(e) {
        const middle = e.target.clientWidth / 2;
        const move = e.clientX > middle ? 100 : -100;
        e.target.scrollBy(move, 0);
    }

    eventHandler() {
        this.$img_list.addEventListener('click', e => this.selectedImg(e));
        this.$img_list.addEventListener('mouseover', e => this.mouseScroll(e));
    }
}