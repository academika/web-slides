function myFunction() {
    var x = document.images;
    var txt = "";
    var i;

    var delim = " "; //"<br>";

    for (i = 0; i < x.length; i++) {
        txt = txt + x[i].getAttribute("src").replace(/\//g, "\\"); + delim;
    }
    var initFoder = "C:\\LIBRARY_MERGE\\_LECT_WWW9ed_KN\\www14ed_LECT\\w14_LABS\\web-slides-master\\html\\images";
    var batCommand = initFoder + "<br>" + "copy " + txt + " C:\\LIBRARY_MERGE\\_LECT_WWW9ed_KN\\www14ed_LECT\\w14_LABS\\w14labs_INTRO4puffin\\images"
        //.src
        // var currentLocation = window.location.pathname;
    document.getElementById("demo").innerHTML = txt + ":::" + batCommand;
}