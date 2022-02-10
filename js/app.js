/*

    iconsV5 = {
        "regular" : [
            { "name": [Properties] },
            {"name2": [Properties] }
        ]
        "solid" : [
            { "name": [Properties] },
            {"name2": [Properties] }
        ]
        "light" : [
            { "name": [Properties] },
            {"name2": [Properties] }
        ]
        "brand" : [
            { "name": [Properties] },
            {"name2": [Properties] }
        ]
        "duotone" : [
            { "name": [Properties] },
            {"name2": [Properties] }
        ]
    }

    iconsV6 = {
        "regular" : [
            { "name": [Properties] },
            {"name2": [Properties] }
        ]
        "solid" : [
            { "name": [Properties] },
            {"name2": [Properties] }
        ]
        "light" : [
            { "name": [Properties] },
            {"name2": [Properties] }
        ]
        "brand" : [
            { "name": [Properties] },
            {"name2": [Properties] }
        ]
        "duotone" : [
            { "name": [Properties] },
            {"name2": [Properties] }
        ]
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



let type = ["brand", "duotone", "light", "regular", "solid"];

//Print Global Variable
console.log(v5)
console.log(v6)


//Boucle on icon type of V.5
type.forEach(elm => {

    console.log("//////////////////////////////////////")
    console.log("//////////////////////////////////////")
    console.log(`Type : ${elm}`)
    console.log("//////////////////////////////////////")
    console.log("//////////////////////////////////////")

    // console.log(Object.keys(v5[elm]).length) Get Length of type Object
    // console.log(Object.values(v5[elm])[0]) Get value of index icon in type

    //Array of icon name by version
    let keyV5 = Object.keys(v5[elm])
    let keyV6 = Object.keys(v6[elm])


    //Each icon of a type
    for(let i = 0; i < 50; i++) { //keyV5.length

        //Search id where V5 name == V6 name
        indexV6 = keyV6.findIndex(elm => elm == keyV5[i])

        if(indexV6 === -1) {

            console.log(`${Object.keys(v5[elm])[i]} has been removed`)
            notAvailable(keyV5[i], elm)

        } else {

            let value5 = Object.values(v5[elm])[i][4]
            let value6 = Object.values(v6[elm])[indexV6][4]

            // If path V.5 != path V.6
            if(value5[4] != value6[4]) {
                compare(keyV5[i], elm)
                console.log(`${Object.keys(v5[elm])[i]} has been chenged`)
            }
            
        }


    }

})


function notAvailable(item, type) {

    let container = document.getElementById('notAvailable');
    let icon = `./assets/fontawesome-pro-5/svgs/${type}/${item}.svg`

    let elm = document.createElement("img");
    elm.src = icon

    elm.style.width = "20px"
    elm.classList.add("p-1")

    container.appendChild(elm)

}

function compare(item, type) {

    let container5 = document.getElementById("v5")
    let container6 = document.getElementById("v6")

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