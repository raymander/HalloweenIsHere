window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        document.getElementById("topbut").style.display = "block";
    } else {
        document.getElementById("topbut").style.display = "none";
    }
}

