
function* print_chrono()
{
    let seconds = 0;
    let minutes = 0;
    let hours = 0;

    while (true)
    {
        seconds += 1;
        if (seconds == 60)
        {
            seconds = 0;
            minutes += 1;
        }
        if (minutes == 60)
        {
            minutes = 0;
            hours += 1;
        }

        let output = hours.toString() + ":" + minutes.toString() + ":" + seconds.toString();
        yield output;
    }

}


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

let chrono_iterator = print_chrono();
let chrono_iterator_nice = print_chrono_nicely();

function print_time()
{   
    document.open()
    document.writeln(chrono_iterator.next().value);
    document.write("</br>");
    document.writeln(chrono_iterator_nice.next().value);
}


setInterval(print_time, 1000);
