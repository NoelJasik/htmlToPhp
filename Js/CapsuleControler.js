// var btn = document.getElementById("btn-show");
// var blockToShow = document.getElementById("hidden-block");

// hideBlock();

// function showBlock()
// {
//     console.log("showed");
//     blockToShow.style.maxHeight = "none";
//     blockToShow.style.opacity = "1";
//     btn.innerText = "Hide";
// }
// function hideBlock()
// {
//     blockToShow.style.maxHeight = "0";
//     blockToShow.style.opacity = "0";
//     btn.innerText = "Show more";
//     console.log("hide");
// }

// btn.addEventListener("click", () => {
//   blockToShow.style.opacity == "0" ?  showBlock() : hideBlock();
// })
var btn = document.getElementById("btn-show");
var blocksToShow = document.getElementsByClassName("hidden-item");
var hidden = true;
var isAnimating = false;
var showDelay = 200;

function showBlock() {

    for (let index = 0; index < blocksToShow.length; index++) {
        btn.style.opacity = "0";
        btn.style.cursor = "default";
        setTimeout(function () {
            blocksToShow[index].style.position = "relative";
            blocksToShow[index].style.transform = "scale(1)";
            blocksToShow[index].style.opacity = "1";
            blocksToShow[index].style.pointerEvents = "auto"
            // setTimeout(function () {
            //     blocksToShow[index].style.position = "relative";
            //   }, 500 + (index * showDelay));
            console.log("showed " + blocksToShow[index]);
        }, (index * showDelay));
    }
    setTimeout(function () {
        isAnimating = false;
        btn.style.opacity = "1";
        btn.style.cursor = "pointer";
    }, blocksToShow.length * showDelay + 500);
    hidden = false;
    btn.innerText = "Hide";
}
function hideBlock() {
    btn.style.opacity = "0";
    btn.style.cursor = "default";
    for (let index = 0; index < blocksToShow.length; index++) {
        setTimeout(function () {
            blocksToShow[index].style.transform = "scale(0)";
            blocksToShow[index].style.opacity = "0";
            blocksToShow[index].style.pointerEvents = "none"
            setTimeout(function () {
                blocksToShow[index].style.position = "absolute";
            }, 250);
            console.log("Hidden " + blocksToShow[index]);
            console.log("Hidde time " + (blocksToShow.length - index) * showDelay);
        }, ((blocksToShow.length - index) * showDelay));
    }
    setTimeout(function () {
        isAnimating = false;
        btn.style.opacity = "1";
        btn.style.cursor = "pointer";
    }, blocksToShow.length * showDelay + 500);
    hidden = true;
    btn.innerText = "Show More";
}

btn.addEventListener("click", () => {
    if(!isAnimating)
    {
        !hidden ? hideBlock() : showBlock();
        isAnimating = true;
    }
})
