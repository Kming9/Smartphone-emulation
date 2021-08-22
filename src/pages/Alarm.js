import { Button } from "../components/Button";

export class Alarm {
    constructor({ $target, alarm_list }) {
        new Button().createNew();
        this.alarm_list = alarm_list;
        this.$reload = document.createElement('div');
        this.$reload.id = 'reload';
        this.$wrap = document.createElement('div');
        this.$wrap.id = 'wrap';

        const $alarm_list = document.createElement('div');
        $alarm_list.id = 'alarmList';
        this.$wrap.appendChild($alarm_list);
        this.$wrap.appendChild(this.$reload);
        $target.replaceChild(this.$wrap, document.querySelector('#wrap'));

        this.render();
        this.eventHandler();
    }

    render() {
        const $alarm_list = document.createElement('div');
        $alarm_list.id = 'alarmList';

        this.alarm_list.alarms.forEach(({content}, i) => {
            const $div = document.createElement('div');
            const $p = document.createElement('p');
            const $btn = document.createElement('input');
            $btn.className = `del-alarm-${i}`;
            $btn.type = 'button';
            $btn.value = '삭제';
            $p.innerText = content;
            $div.className = 'alarm';
            
            $p.appendChild($btn);
            $div.appendChild($p);
            $alarm_list.appendChild($div);
        });
        
        this.$wrap.replaceChild($alarm_list, document.querySelector('#alarmList'));
    }

    // 'NEW' 클릭시 알림 설정창 생성 함수
    setUpAlarm(e) {
        if(document.querySelector('#wrap form')) return;

        const $form = document.createElement('form');
        const $am = document.createElement('select');
        ['오전','오후'].forEach(e => {
            const $option = document.createElement('option');
            $option.value = e;
            $option.innerText = e;
            $am.appendChild($option);
        });
        
        const $hour = document.createElement('input');
        const $hour_label = document.createElement('label');
        $hour.id = $hour_label.for = 'hour';
        $hour_label.innerText = '시';
        $hour.type = 'number';
        $hour.min = '01';
        $hour.max = '12';
        $hour.value = '01';
        
        const $min = document.createElement('input');
        const $min_label = document.createElement('label');
        $min.id = $min_label.for = 'min';
        $min_label.innerText = '분';
        $min.type = 'number';
        $min.min = '00';
        $min.max = '50';
        $min.value = '00';
        $min.step = '10';
        
        const $save = document.createElement('input');
        $save.type = 'submit';
        $save.value = '저장';

        $form.appendChild($am);
        $form.appendChild($hour);
        $hour.after($hour_label);
        $form.appendChild($min);
        $min.after($min_label);
        $form.appendChild($save);
        $form.addEventListener('submit', e => {
            e.preventDefault();
            const target = e.target;
            const [ isAM, hour, min ] = [target[0].value === '오전', +target[1].value, +target[2].value];

            this.alarm_list.addAlarm({ isAM, hour, min });
            this.render();
            e.target.remove();
        });

        this.$wrap.insertBefore($form, this.$wrap.firstChild);
    }
    
    eventHandler(){
        const newBtn = document.querySelector('#new');
        newBtn.addEventListener('click', e => this.setUpAlarm(e));

        const deleteBtn = document.querySelector('#wrap');
        deleteBtn.addEventListener('click', e => {
            if(e.target.type !== 'button') return;

            const idx = e.target.className.split('del-alarm-')[1];
            this.alarm_list.deleteAlarm(idx);
            this.render();
        });

        this.$reload.addEventListener('click', () => this.render());
    }
}