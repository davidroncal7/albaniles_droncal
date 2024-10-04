class Suerte extends Map {
    constructor (iterable)
    {
        super()
    }

    print_values(){

    }
}


class Parent {
    constructor (iterable)
    {
        console.log("hola");
        if (iterable)
        {
            this.yepe = iterable;
        }
    }
}

class Son1 extends Parent {
    constructor (iterable)
    {
        super();
    }
}

class Son2 extends Parent {
    constructor (iterable)
    {
        super(iterable);
    }
}