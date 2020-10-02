// stop watch stop, start, reset, duration
// cant stop if not started
function StopWatch() {

    duration = 0;
    let interval;
    let started = false;

    this.start = function() {
        if (!started) {
            interval = setInterval(() => duration += .01, 10);
            started = true;
        }
    }

    this.stop = function() {
        if (started) {
            clearInterval(interval);
            started = false;
        }
    }

    this.reset = function() {
        duration = 0;
    }

    this.getDuration = function() {
        return duration;
    }

    
};

let s = new StopWatch();
