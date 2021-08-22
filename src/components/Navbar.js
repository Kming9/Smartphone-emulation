export class Navbar {
    constructor({$target, alarm_list}) {
        const $nav = document.createElement('div');
        $nav.id = 'nav';
        const $back = document.createElement('div');
        $back.id = 'back';
        const $time = document.createElement('div');
        $time.id = 'time';
        const $new = document.createElement('div');
        $new.id = 'new';
        $nav.appendChild($back);
        $nav.appendChild($time);
        $nav.appendChild($new);

        this.$back = $back;
        this.$time = $time;
        this.$new = $new;
        $target.appendChild($nav);
        this.setState(this.getTime());

        setInterval(() => {
            this.setState(this.getTime());
            alarm_list.checkAlarm();
        }, 1000);
    }

    setState({ year, month, day, hour, min, sec }) {
        this.year = year;
        this.month = month;
        this.day = day;
        this.hour = hour;
        this.min = min;
        this.sec = sec;
        this.render();
    }

    render() {
        this.$time.innerText = `${this.year}년 ${this.month}월 ${this.day}일 ${this.hour}시 ${this.min}분 ${this.sec}초`;
    }

    // 현재 시간 가져오는 함수
    getTime() {
        const date = new Date;
        
        return { 
            year: date.getFullYear(), 
            month: date.getMonth()+1, 
            day: date.getDate(), 
            hour: date.getHours(), 
            min:date.getMinutes(), 
            sec: date.getSeconds()
        };
    }
}