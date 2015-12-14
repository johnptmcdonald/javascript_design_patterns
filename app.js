(function(){
    var mainPic = document.getElementsByClassName("main-pic")[0]
    var mainInfo = document.getElementsByClassName("main-info")[0]

    var cats = [
        {
            name: "john", 
            img: "http://www.businessinsider.com/image/4f3433986bb3f7b67a00003c/cute-cat.jpg",
            counter: 0
        },
        {
            name: "dana", 
            img: "http://lolomoda.net/wp-content/uploads/qute.jpg",
            counter: 0
        },    
        {
            name: "ronald", 
            img: "http://pets.thenest.com/DM-Resize/photos.demandstudios.com/41/102/fotolia_4834563_XS.jpg?w=590&h=590&keep_ratio=1",
            counter: 0
        },
        {
            name: "donald", 
            img: "http://www.pethealthnetwork.com/sites/default/files/cat-secretly-stressed178832700.jpg",
            counter: 0
        },
        {
            name: "johnald", 
            img: "http://www.catsofaustralia.com/images/persian-cat-pics.jpg",
            counter: 0
        }
    ]

    var currentCat = cats[0]


    function renderCats(){
        console.log("rendering cats")
        var sidebar = document.getElementsByClassName("sidebar")[0]

        sidebar.innerHTML = ""
        for(var i = 0 ; i < cats.length; i++){
            sidebar.innerHTML += '<img class="small-cat" src="' + cats[i].img + '">'
        }
    }

    function addEventListeners(){
        var catElements = document.getElementsByClassName("small-cat")
        for(var i = 0; i < cats.length; i++){

            catElements[i].addEventListener("click", (function(i){
                console.log("making functions")
                return function(){
                    currentCat = cats[i]
                    mainPic.src = cats[i].img
                    renderInfo()
                }
            })(i))
        }

        mainPic.addEventListener("click", function(){
            currentCat.counter++;
            renderInfo()
        })    
    }


    function renderInfo(){
       mainInfo.innerHTML = currentCat.name + " has been clicked " + currentCat.counter + " times" 
    }

    function init(){
        renderCats()
        addEventListeners()
    }

    init()

})()




