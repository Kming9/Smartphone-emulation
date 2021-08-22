import { Navbar } from './components/Navbar.js';
import { Alarm } from './pages/Alarm';
import { Memo } from './pages/Memo';
import { Photo } from './pages/Photo';
import { Home } from './pages/Home.js';
import { AlarmList } from './components/AlarmList.js';

export class App {
    state = localStorage.getItem('state') || 'main';

    constructor($target) {
        this.$target = $target;
        this.alarm_list = new AlarmList();
        const { $back, $new } = new Navbar({ $target, alarm_list: this.alarm_list });
        const $wrap = document.createElement('div');
        $wrap.id = 'wrap';
        this.$back = $back;
        this.$new = $new;
        this.$target.appendChild($wrap);
        this.render();
    }

    setState(state) {
        this.state = state;
        localStorage.setItem('state', this.state);
        this.render();
    }
    
    render() {
        switch(this.state) {
            case '알람': new Alarm({ 
                            $target: this.$target, 
                            alarm_list: this.alarm_list
                        });
                break;
            case '메모': new Memo(this.$target);
                break;
            case '사진': new Photo(this.$target);
                break;
            default: new Home(this.$target);
                break;
        }
        this.eventHandler();
    }

    eventHandler() {
        const wrap = document.querySelector('#wrap');
        const back = document.querySelector('#back');

        wrap.addEventListener('click', e => {
            if(e.target.className !== 'app-btn' || this.state === e.target.value) return;
            this.setState(e.target.value);
        });

        back.addEventListener('click', e => {
            this.$back.firstChild?.remove();
            this.$new.firstChild?.remove();
            this.setState('main');
        });
    }
}