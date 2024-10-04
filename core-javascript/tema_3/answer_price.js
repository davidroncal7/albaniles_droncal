var question_1 = window.prompt("what item you wanna know the price? hammer, cable, saw, screws"); // si, no

switch(question_1)
{
    case "hammer":
        document.write("12.75");
        break;
    case "cable":
        document.write("3.45");
        break;
    case "saw":
        document.write("20.99");
        break;
    case "screws":
        document.write("2.99");
        break;
    default:
        document.write("Sorry, I did not understand you");
}