
setTimeout(function(){
    var popup = new RegPopup ("Website Rules & Regulations", "By using this website \n\
                               and the services on it you indicate that you agree to the rules, \n\
                               which contain some important conditions and restriction. \n\
                               If you do not agree to the rules,you are asked not to make \n\
                               use of the Website.");
    popup.build('popup1_content'); 
}, 3000);

document.querySelector('button:first-child').addEventListener('click', function(){
    var popup = new RegPopup ("Website Rules & Regulations", "By using this website \n\
                               and the services on it you indicate that you agree to the rules,\n\
                               which contain some important conditions and restriction.\n\
                               If you do not agree to the rules,you are asked not to make\n\
                               use of the Website.");
    popup.build('popup1_content');
});

var textArr = [
    {
        text:"NASA's Mars Exploration Rover Opportunity has \n\
              reached the main destination of its current two-year extended mission\n\
              an ancient fluid-carved valley incised on the inner slope of a vast crater's rim.",
        img:"http://cdn.images.express.co.uk/img/dynamic/151/590x/mars-head-722888.jpg"},
    {
        text:"Pale halos around fractures in bedrock analyzed by NASA's \n\
              Curiosity Mars rover contain copious silica, indicating that ancient Mars\n\
              had liquid water for a long time.",
        img:"http://media-channel.nationalgeographic.com/media/uploads/photos/content/video/2016/11/14/808618051771_MARSBTS1114M9120P.mov.00_01_50_17.Still001_e_610x343_808624195729.jpg"},
    {
        text:"As it drives uphill from a band of rippled sand dunes,\n\
              NASA's Curiosity Mars rover is toting a fistful of dark sand\n\
              for onboard analysis that will complete the rover's investigation of those dunes.",
        img:"http://wwwcdn.skyandtelescope.com/wp-content/uploads/mars_rover_journey_480px.jpg"}
]

document.querySelector('button:nth-child(2)').addEventListener('click', function(){
    var popup = new NewsPopup ("What's New",textArr);
    popup.build('popup2_content');
});

document.querySelector('button:nth-child(3)').addEventListener('click', function(){
    var popup = new SignPopup ("Sign Up","and we will keep you update on all the latest news");
    popup.build('popup3_content');
});