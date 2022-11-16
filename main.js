function startClassification()
{
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/J6AYEvrX8/model.json', modelReady);
}

function modelReady() {
    classifier.classify(gotResults);
}

function gotResults(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;

        document.getElementById("result_label").innerHTML = 'I can hear - '+ results[0].label;
        document.getElementById("result_confidence").innerHTML = 'Accuracy - '+ (results[0].confidence*100).toFixed(2)+" %";
        document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";
        document.getElementById("result_confidence").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";

        img = document.getElementById('Dog')
        img1 = document.getElementById('Cat')
        img2 = document.getElementById('Fish')
        img3 = document.getElementById('Hamster')

        if (results[0].label == "Barking") {
            img.src = 'Dog.gif';
            img1.src = 'Cat.png';
            img2.src = 'Fish.png';
            img3.src = 'Hamster.png';
        } else if (results[0].label == "Meowing") {
            img.src = 'Dog.png';
            img1.src = 'Cat.gif';
            img2.src = 'Fish.png';
            img3.src = 'Hamster.png';
        } else if (results[0].label == "Blubing") {
            img.src = 'Dog.png';
            img1.src = 'Cat.png';
            img2.src = 'Fish.gif';
            img3.src = 'Hamster.png';
        } else if (results[0].label == "Squeling") {
            img.src = 'Dog.png';
            img1.src = 'Cat.png';
            img2.src = 'Fish.png';
            img3.src = 'Hamster.gif';
        } else{
            img.src = 'Dog.png';
            img1.src = 'Cat.png';
            img2.src = 'Fish.png';
            img3.src = 'Hamster.png';
        }
    }
}