document.write("<table>");

for (var i = 1; i < 10; i++) {
    document.write("<tr>");
    for (var j = 1; j <= i; j++)
    {
        document.write("<td>" + j + "*" + i + "=" + j * i + "</td>");
    }
    document.write("</tr>");
}

document.write("</table>");