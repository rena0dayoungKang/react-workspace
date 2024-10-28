//classtest2.js를 function으로 바꿈

function Clock({template}) {
    this.template = template;

    this.render = () => {
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

    this.start = () => {
        this.render();
        this.timer = setInterval(() => this.render(), 1000);
    }

    this.stop = () => {
        clearInterval(this.timer);
    }
}

let clock = new Clock({template:'h시m분s초'});
clock.start();
setTimeout(() => clock.stop(), 10000);