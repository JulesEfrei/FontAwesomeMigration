var change_count = 0
var equal_count = 0
var not_found_count = 0
var type = ["regular", "solid", "duotone", "light"]


if(Object.keys(custom).length == 0) {
    console.log("V5")
    scan(v5)
} else {
    console.log("Custom")
    scan(custom)
}



//Search icon by name in v6
function exist(icon){

    return Object.keys(v6).findIndex(elm => elm == icon)

}

//Search alias
function alias(icon) {

    return Object.values(v6)[exist(icon)][2]

}


function scan(iconList) {


    let keyV5 = Object.keys(iconList)
    let keyV6 = Object.keys(v6)

    let valueV5 = Object.values(iconList)
    let valueV6 = Object.values(v6)


    //Each icon
    for(let i = 0; i < keyV5.length; i++) { //keyV5.length

        //If V5 name = V6 name
        if(exist(keyV5[i]) != -1) {

            //Render icon
            compare(keyV5[i], `[ ${ alias(keyV5[i]) } ]`)
            equal_count ++

        } else {

            let find = false

            //Search in changed name array
            changed_name.forEach(elm => {

                //If elm = V5 icon name
                if(elm["v5"] == keyV5[i]) {

                    //Render icon
                    compare(keyV5[i], `[ ${ alias(elm["v6"]) } ]`, elm["v6"])
                    find = true
                    change_count ++

                }

            })

            //If not found
            if(find == false) {

                notAvailable(keyV5[i])
                not_found_count ++
            }


        }


    }

    console.log(`Theoric : ${keyV5.length }`)
    console.log(`Equal : ${ equal_count }`)
    console.log(`Change : ${ change_count }`)
    console.log(`Not found : ${ not_found_count }`)
    console.log(`Absolute : ${ equal_count + change_count + not_found_count }`)


}





//Display icon in right section
function notAvailable(item) {

    type.forEach(type => {

        let container = document.getElementById('notAvailable');
        let icon = `./assets/fontawesome-pro-5/svgs/${type}/${item}.svg`

        let elm = document.createElement("img");
        elm.src = icon

        elm.style.width = "40px"
        elm.style.height = "40px"
        elm.classList.add("p-2")

        container.appendChild(elm)
    
    })

}

//Display icon in both version
function compare(old, alias = "", ne = old) {

    type.forEach(type => {

        var container5 = document.getElementById(`${type}`)
        var container6 = document.getElementById(`${type}6`)
    
    
        let icon5 = `./assets/fontawesome-pro-5/svgs/${type}/${old}.svg`
        let elm5 = document.createElement("img")
        elm5.src = icon5
    
        let icon6 = `./assets/fontawesome-pro-6.0.0-web/svgs/${type}/${ne}.svg`
        let elm6 = document.createElement("img")
        elm6.src = icon6
    
    
        elm5.style.height = "40px"
        elm5.style.width = "40px"
        elm5.classList.add("my-4")
        elm6.style.height = "40px"
        elm6.classList.add("my-4")
    
        container5.appendChild(elm5)
        container6.appendChild(elm6)

    })

    //Add name
    var containerName5 = document.getElementById(`name`)
    
    let name = document.createElement("h5")
    name.innerHTML = old
    
    name.classList.add("my-4")
    name.style.height = "40px"

    containerName5.appendChild(name)

    var containerName6 = document.getElementById(`name6`)
    
    let name6 = document.createElement("h5")
    name6.innerHTML = ne + " " + alias
    
    name6.classList.add("my-4")
    name6.style.height = "40px"
    name6.style.width = "15rem"

    containerName6.appendChild(name6)


    //Add Thin icon
    var containerThin = document.getElementById(`thin6`)
    
    let iconThin = `./assets/fontawesome-pro-6.0.0-web/svgs/thin/${ne}.svg`
    let thin = document.createElement("img")
    thin.src = iconThin
    
    thin.style.height = "40px"
    thin.classList.add("my-4")

    containerThin.appendChild(thin)

}