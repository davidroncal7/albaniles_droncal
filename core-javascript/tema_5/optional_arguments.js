// function getFullImagePath(imagePath, imageBaseUrl = 'https://code.tutsplus.com/') {
//     var fullImagePath = imageBaseUrl + imagePath;
//     return fullImagePath;
//   }

function getFullImagePath(image_path, image_base = 'https://code.tutsplus.com/') {
    var full_image_path = image_base + image_path;
    return full_image_path;
}

getFullImagePath("suerte.jpg");


getFullImagePath("suerte.jpg", "www.google.com");