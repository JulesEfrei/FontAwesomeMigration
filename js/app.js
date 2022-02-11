/*

    iconsV5 = {
        "regular" : {
            "name": [Properties],
            "name2": [Properties] 
        }
        "solid" : {
            "name": [Properties],
            "name2": [Properties] 
        }
        "light" : {
            "name": [Properties],
            "name2": [Properties] 
        }
        "brand" : {
            "name": [Properties],
            "name2": [Properties] 
        }
        "duotone" : {
            "name": [Properties],
            "name2": [Properties] 
        }
    }

    iconsV6 = {
        "regular" : {
            "name": [Properties],
            "name2": [Properties] 
        }
        "solid" : {
            "name": [Properties],
            "name2": [Properties] 
        }
        "light" : {
            "name": [Properties],
            "name2": [Properties] 
        }
        "brand" : {
            "name": [Properties],
            "name2": [Properties] 
        }
        "duotone" : {
            "name": [Properties],
            "name2": [Properties] 
        }
    }


    foreach type :

        foreach nom :
            if nomV5.path == nomV6.path:
                pass
            else:
                nom.push(changeArray)


    function render:

        //Render all changeArray



*/


//Icon type in V.5
let type = ["duotone", "light", "regular", "solid", "brands"];

//Print Global Variable
console.log(v5)
console.log(v6)

//Already check array
var check = []

type.forEach(elm => {

    console.log("//////////////////////////////////////")
    console.log("//////////////////////////////////////")
    console.log(`Type : ${elm}`)
    console.log("//////////////////////////////////////")
    console.log("//////////////////////////////////////")

    console.log(Object.keys(v5[elm]))
    console.log(Object.keys(v5[elm]).length)

    //Each icon of a type
    for(let i = 0; i < 50; i++) { //Object.keys(v5[elm]).length

        
        //If item in check
        if(!check.includes(Object.keys(v5[elm])[i])){
            
            //New icon so add to array
            check.push(Object.keys(v5[elm])[i])

            //Get icon name
            let icon = Object.keys(v5[elm])[i]

            //For each type
            type.forEach(e => {

                //Si l'iconne existe dans le type
                if(Object.keys(v5[e]).includes(icon)) {

                    // console.log(`L'icon ${icon} existe en type ${e}`)
                    
                    //Si l'icon existe en version 6
                    if(Object.keys(v6[e]).includes(icon)) {

                        console.log(`L'icon ${icon} en type ${e} existe en version 5 et 6`)

                        //Search id where V5 name == V6 name
                        indexV6 = Object.keys(v6[e]).findIndex(elm => elm == Object.keys(v5[e])[i])

                        //If V5 différent de V6
                        if(Object.values(v5[e])[i][4] != indexV6[4]) {

                            compare(icon, e)

                        }

                    } else {

                        console.log(`L'icon ${icon} en type ${e} existe seulement en version 5`)

                        //Render icon
                        notAvailable(icon, e)

                    }
                    
                }  else {

                    console.log(`L'icon ${icon} n'existe pas en type ${e}`)
                    compare(".", e)

                }

            })
    }


    }

})


//Display icon in right section
function notAvailable(item, type) {

    let container = document.getElementById('notAvailable');
    let icon = `./assets/fontawesome-pro-5/svgs/${type}/${item}.svg`

    let elm = document.createElement("img");
    elm.src = icon

    elm.style.width = "20px"
    elm.style.height = "20px"
    elm.classList.add("p-1")

    container.appendChild(elm)

}

//Display icon in both version
function compare(item, type) {

    var container5 = document.getElementById(`${type}`)
    var container6 = document.getElementById(`${type}6`)


    if(item == ".") {

        let elm = document.createElement("h1")
        elm.innerHTML = "."
        elm.style.height = "40px"
        elm.classList.add("my-3")


        let elm2 = document.createElement("h1")
        elm2.innerHTML = "."
        elm2.style.height = "40px"
        elm2.classList.add("my-3")
    

        container5.appendChild(elm)
        container6.appendChild(elm2)

    } else {

        let icon5 = `./assets/fontawesome-pro-5/svgs/${type}/${item}.svg`
        let elm5 = document.createElement("img")
        elm5.src = icon5
    
        let icon6 = `./assets/fontawesome-pro-6.0.0-web/svgs/${type}/${item}.svg`
        let elm6 = document.createElement("img")
        elm6.src = icon6
    
    
        elm5.style.height = "40px"
        elm5.classList.add("my-3")
        elm6.style.height = "40px"
        elm6.classList.add("my-3")
    
        container5.appendChild(elm5)
        container6.appendChild(elm6)

    }
}