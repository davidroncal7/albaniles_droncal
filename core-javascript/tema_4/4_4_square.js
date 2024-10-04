let size = Number(window.prompt("size of square to print"));

for (let rows = 0; rows < size + 1; rows++)
{
    for (let columns = 0; columns < size + 1; columns++)
    {
        if (rows == 0)
        {
            document.write("_");
        }
        else if (rows == size)
        {
            document.write("&oline;");
        }
        else
        {
            if ((columns == 0) || (columns == size))
            {
                document.write("|");
            }
            else
            {
                document.write("&nbsp");
            }
        }
    }
    document.write("</br>");
}
document.write("I finished!");