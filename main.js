Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:100
    
    })
    camera = document.getElementById("cAMERA")
    Webcam.attach(camera)
    
    

function takeSnapshot ()
{
  Webcam.snap(function(data_uri)
{
 document.getElementById("result").innerHTML='<img id="capured_image" src="'+data_uri+'"> '   
}
)  
}
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/lXxztT8pp/',modelLoaded)
function modelLoaded()
{
    console.log("model has been loaded")
}

function check()
{
    img = document.getElementById('capured_image')
    classifier.classify(img, gotResult)

}

function gotResult(error,result)
{
    if(error){
        console.error(error)
    }
    else
    {
        console.log(result)
        document.getElementById("object_result").innerHTML=result[0].label
        document.getElementById("accuracy_result").innerHTML=result[0].confidence

    }
}

