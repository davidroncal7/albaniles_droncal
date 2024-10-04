/*
@jest-environment jsdom
*/
let chrono_mouse = require('./10_9_chrono_mouse.js');

//Test para que pase de 59 segundos a marcar 1 minuto mas
describe('start_stop_interval', () => {
    test('debería llamar a diferentes funciones en función del flag', () => {
        let mock_set_int = jest.spyOn(window, 'setInterval');
        let mock_clr_int = jest.spyOn(window, 'clearInterval');

        chrono_mouse.start_stop_interval();
        expect(mock_set_int).toHaveBeenCalled();

        chrono_mouse.start_stop_interval();
        expect(mock_clr_int).toHaveBeenCalled();

    });
});

describe('print_time', () => {
    test('vamos a probar con print time', () => {

        let mock_open = jest.spyOn(document, 'open');
        let mock_write = jest.spyOn(document, 'writeln');
        let mock_add = jest.spyOn(document, 'addEventListener');

        chrono_mouse.print_time();
        expect(mock_open).toHaveBeenCalled();
        expect(mock_write).toHaveBeenCalled();
        expect(mock_add).toHaveBeenCalled();
    });
});


function pass_time(iterator_value, times){
    for (let i = 0; i < times; i++)
        iterator_value.next();
}

describe('print_chrono_nicely', () => {
    test('print_chrono_nicely', () => {

        let test_next = chrono_mouse.print_chrono_nicely();
        expect(test_next.next().value).toBe("00:00:01");
        expect(test_next.next().value).toBe("00:00:02");

        pass_time(test_next, 7)
        expect(test_next.next().value).toBe("00:00:10");

        pass_time(test_next, 49)
        expect(test_next.next().value).toBe("00:01:00");

        pass_time(test_next, 539)
        expect(test_next.next().value).toBe("00:10:00");

        pass_time(test_next, 2999)
        expect(test_next.next().value).toBe("01:00:00");

        pass_time(test_next, 32399)
        expect(test_next.next().value).toBe("10:00:00");
    });
});