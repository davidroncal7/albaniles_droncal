
function print_one()
{
    document.writeln(1);
    document.addEventListener("click", print_one);
}

document.addEventListener("click", print_one);
