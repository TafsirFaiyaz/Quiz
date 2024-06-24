document.addEventListener("DOMContentLoaded", function() {

    const fortunes = [
        "It is high time for your most promising idea",
        "Your lucky number 52-68-71-88-15-6",
        "You will have a great day today!",
        "You will run into someone special today.",
        "Believe in yourself and others will too.",
        "Do not question your guts.",
        "Success begins with a single step",
        "Your hard work will soon pay off.",
        "Happiness is just around the corner.",
        "Do not question your own belief.",
        "Good news will come to you by mail.",
        "An exciting opportunity lies ahead.",
        "Today is a good day to try something new."
    ];

    function getRandomFortune() {
        const randomIndex= Math.floor(Math.random() * fortunes.length);
        return fortunes[randomIndex];
    }

    const fortuneBox = document.getElementById("fortune-box");
    fortuneBox.textContent= getRandomFortune();


});
