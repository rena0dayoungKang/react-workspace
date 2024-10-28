class Clock {
    constructor({template}) {
        this.template = template;
    }

    render() {
        let date = new Date();
        let hour = date.getHours();
        if(hour < 10) hour = '0'+hour;
        let mins = date.getMinutes();
        if(mins < 10) mins = '0'+mins;
        let seconds = date.getSeconds();
        if(seconds < 10) seconds = '0'+seconds;

        let output = this.template.replace('h',hour)
                                  .replace('m',mins)
                                  .replace('s',seconds);
        console.log(output);
    }

    start() {
        this.render();
        this.timer = setInterval(() => this.render(), 1000); //1초마다 start()실행
    }

    stop() {
        clearInterval(this.timer);
    }
}

let clock = new Clock({template:'h시m분s초'});
clock.start();
setTimeout(() => clock.stop(), 10000); //10초 후에 stop()을 호출 

