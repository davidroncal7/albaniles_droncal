
let ID_INTERVAL = 0;
let RUNNING_INTERVAL = 0;

function* print_chrono_nicely()
{
    let seconds_unit = 0;
    let seconds_dec = 0;
    let minutes_unit = 0;
    let minutes_dec = 0;
    let hours_unit = 0;
    let hours_dec = 0;

    while (true)
    {
        seconds_unit += 1;
        if (seconds_unit == 10)
        {
            seconds_unit = 0;
            seconds_dec += 1;
        }
        if (seconds_dec == 6)
        {
            seconds_dec = 0;
            minutes_unit += 1;
        }

        if (minutes_unit == 10)
        {
            minutes_unit = 0;
            minutes_dec += 1;
        }
        if (minutes_dec == 6)
        {
            minutes_dec = 0;
            hours_unit += 1;
        }

        if (hours_unit == 10)
        {
            hours_unit = 0;
            hours_dec += 1;
        }

        let output = hours_dec.toString() + hours_unit.toString() +
            ":" + minutes_dec.toString() + minutes_unit.toString() +
            ":" + seconds_dec.toString() + seconds_unit.toString();
        yield output;
    }

}

let chrono_iterator_nice = print_chrono_nicely();


function print_time()
{
    document.open()
    document.writeln(chrono_iterator_nice.next().value);
    document.addEventListener("click", start_stop_interval);
}

function start_stop_interval()
{
    if (RUNNING_INTERVAL == 0)
    {
        ID_INTERVAL = setInterval(print_time, 1000);
        RUNNING_INTERVAL = 1;
    }
    else
    {
        clearInterval(ID_INTERVAL);
        RUNNING_INTERVAL = 0;
    }
    document.addEventListener("click", start_stop_interval);
}


document.open()
document.writeln("00:00:00");
document.addEventListener("click", start_stop_interval);


module.exports = {
    ID_INTERVAL,
    RUNNING_INTERVAL,
    start_stop_interval: start_stop_interval,
    print_time,
    print_chrono_nicely
}
