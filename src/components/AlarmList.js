export class AlarmList {
    constructor() {
        this.isOn = false;
        this.alarms = JSON.parse(localStorage.getItem('alarms')) || [];
        this.updateAlarm();
    }

    setState(data) {
        this.alarms = data;
        localStorage.setItem('alarms', JSON.stringify(this.alarms));
    }

    // 알람 추가 함수
    addAlarm({ isAM, hour, min }) {
        const copy_alarm = [...this.alarms];
        const cur_hour = isAM ? hour : (hour + 12 === 24) ? 0 : hour + 12;
        const date = new Date();
        const year = date.getFullYear();
        const month = date.getMonth();
        const day = date.getDate();
        let time = new Date(year, month, day, cur_hour, min).getTime();
        if(time < Date.now()) time += 60*60*24*1000;

        const content = `${isAM ? '오전' : '오후'} ${cur_hour < 10 ? '0'+cur_hour : cur_hour}시 ${min < 10 ? '0'+min : min}분`;

        copy_alarm.push({ time, content });
        this.setState(copy_alarm);
    }

    // 설정한 알람 시간이 되었을 때 알람 울리는 함수
    checkAlarm() {
        if(this.isOn || new Date().getMinutes() % 10 !== 0) return;

        const changed_alarm = this.alarms.map(e => {
            if(e.time < Date.now()) {
                alert(e.content);
                return false;
            } 
            return e;
        });
        
        this.isOn = true;
        this.setState(changed_alarm.filter(e => e));
        document.querySelector('#reload')?.click();

        setTimeout(() => {
            this.isOn = false;
        }, 1000*60);
    }

    // '삭제' 클릭시 알람 삭제하는 함수
    deleteAlarm(idx) {
        const copy_alarm = [...this.alarms];
        copy_alarm.splice(idx, 1);
        this.setState(copy_alarm);
    }

    // 시간이 지난 알람 삭제하는 함수 ex) 어제 설정한 알람
    updateAlarm() {
        const changed_alarm = this.alarms.map(e => e.time < Date.now() ? false : e);
        this.setState(changed_alarm.filter(e => e));
    }
}