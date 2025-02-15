class Time{
    constructor(minutes){
        this.minutes = minutes;
    }
    get seconds(){
        return this.minutes * 60
    }
    set minutes(new_minutes){
        if( new_minutes > 0){
            this._minutes = new_minutes
        }else{
            console.log("invalid time, შე მართლს ინვალიდო") // ამაზე შავი ბარათი არ დამიწეროთ პლს
        }
    }
    get minutes(){
        return this._minutes
    }
}


let tm = new Time(10);

console.log(tm.seconds);