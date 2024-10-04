
function vowel_changer(text, vowel)
{
    aux_text = "";
    for (i = 0; i < text.length; i++)
    {
        current_char = text[i];
        if ( ["a", "e", "i", "o", "u"].includes(current_char))
        {
            current_char = vowel;
        }
        aux_text += current_char;
    }
    return aux_text;
}

// Just changing data
// const string_data = prompt('Please send your string to change');
// const vowel_data = prompt('Please send your vowel to change');
// document.write(vowel_changer(string_data, vowel_data));

// Changing song
string_data = "Cuando Fernando Septimo llevaba pantalon";
document.write(vowel_changer(string_data, "a") + "</br>");
document.write(vowel_changer(string_data, "e") + "</br>");
document.write(vowel_changer(string_data, "i") + "</br>");
document.write(vowel_changer(string_data, "o") + "</br>");
document.write(vowel_changer(string_data, "u") + "</br>");