
function analyze_image(image)
{

    let dimensions = [ image.length, image[0].length ];
    if (dimensions[0] > 2 || dimensions[1] > 2)
    {
        throw ("image size too big!");
    }
}


// console.log(analyze_image([[1, 2], [1, 3]]));
// console.log(analyze_image([[1, 2, 4], [1, 3, 5]]));


function analyze_image_try(image)
{
    try 
    {
        let dimensions = [ image.length, image[0].length ];
        if (dimensions[0] > 2 || dimensions[1] > 2)
        {
            throw ("image size too big!");
        }
    }
    catch (err)
    {
        console.log("image is to big, please reduce size to 300x300");
    }
}


// console.log(analyze_image_try([[1, 2], [1, 3]]));
// console.log(analyze_image_try([[1, 2, 4], [1, 3, 5]]));

function analyze_image_try_finally(image)
{
    let analysis_data = 1;
    let extra_analysis_data = 1;
    try 
    {
        let dimensions = [ image.length, image[0].length ];
        if (dimensions[0] > 2 || dimensions[1] > 2)
        {
            throw ("image size too big!");
        }
        extra_analysis_data = 2;
    }
    catch (err)
    {
        console.log("image is to big, please reduce size to 300x300");
        extra_analysis_data = 0;
    }
    finally
    {
        analysis_data = 100;
    }
    return [analysis_data, extra_analysis_data];
}


// console.log(analyze_image_try_finally([[1, 2], [1, 3]]));
// console.log(analyze_image_try_finally([[1, 2, 4], [1, 3, 5]]));


class ImageSizeError extends Error 
{
    constructor(msg) 
    {
      super(msg);
      this.name = 'CustomError';
    }
}

function analyze_image_try_custom_error(image)
{
    try 
    {
        let dimensions = [ image.length, image[0].length ];
        if (dimensions[0] > 2 || dimensions[1] > 2)
        {
            throw (ImageSizeError);
        }
        throw ("not controlled error");
    }
    catch (err)
    {
        if ( err.name == "ImageSizeError" ) 
        {
            console.log("image is to big, please reduce size to 300x300");
        } else 
        {
            throw err;
        } 
    }
}

console.log(analyze_image_try_custom_error([[1, 2, 4], [1, 3, 5]]));
console.log(analyze_image_try_custom_error([[1, 2], [1, 3]]));
