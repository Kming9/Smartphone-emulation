import { Button } from "../components/Button";

export class Memo {
    memos = JSON.parse(localStorage.getItem('memos')) || [];

    constructor($target) {
        new Button().createNew();

        this.$wrap = document.createElement('div');
        this.$wrap.id = 'wrap';
        this.$memo_list = document.createElement('div');
        this.$memo_list.id = 'memoList';
        this.$wrap.appendChild(this.$memo_list);
        $target.replaceChild(this.$wrap, document.querySelector('#wrap'));

        this.render();
        this.eventHandler();
    }

    render() {
        this.memos.forEach(content => {
            const $div = document.createElement('div');
            $div.innerText = content;
            this.$memo_list.appendChild($div);
        });
    }
    
    // 'NEW' 버튼 클릭시 메모 입력창 생성 함수
    setUpMemo(e) {
        if(document.querySelector('#memo')) return;

        const $memo = document.createElement('input');
        $memo.id = 'memo';
        $memo.type = 'text';
        $memo.placeholder = '메모를 입력하세요';
        
        this.$wrap.insertBefore($memo, this.$wrap.firstChild);
    }

    // 메모 생성 함수
    addMemo(e) {
        if(e.key !== 'Enter') return;

        const content = e.target.value;
        const $div = document.createElement('div');
        $div.innerText = content;
        this.$memo_list.appendChild($div);
        this.memos.push(content);
        localStorage.setItem('memos', JSON.stringify(this.memos));
        e.target.remove();
    }

    // 메모 선택했을 때 모든 내용을 보여주는 함수
    selectedMemo(e) {
        const activeMemo = document.querySelector('.active');
        if(activeMemo) activeMemo.removeAttribute('class');
        e.target.className = 'active';
    }
    
    eventHandler(){
        const newBtn = document.querySelector('#new');
        newBtn.addEventListener('click', e => this.setUpMemo(e));

        const memo = document.querySelector('#wrap');
        memo.addEventListener('keypress', e => this.addMemo(e));

        const memoList = document.querySelector('#memoList');
        memoList.addEventListener('click', e => this.selectedMemo(e));
    }
}