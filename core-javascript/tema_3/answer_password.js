var question_1 = window.prompt("what is the name of your favourite character?"); // si, no

if(question_1=="JamesBond")
{
    var question_2 = window.prompt("¿what is the name of your pet?"); // si, no
    if(question_1=="Burbun")
    {
        document.write("All right, we will send you to login page");
    }
    else
    {
        document.write("Sorry, you did not answer right");
    }
}
else
{
    document.write("Sorry, you did not answer right");
}