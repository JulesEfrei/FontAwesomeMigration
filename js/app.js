var change_count = 0
var equal_count = 0
var not_found_count = 0
var type = ["regular", "solid", "duotone", "light"]


// Witch list to compare
if(Object.keys(custom).length == 0) { //If custom list is empty, use v5 list

    console.log("Full icon list (V5)")
    scan(Object.keys(v5))


} else { //Use custom list

    console.log("Custom list")
    scan(custom)

}



//Find icon index by name in v6
function exist(icon){

    return Object.keys(v6).findIndex(elm => elm == icon)

}



//Search alias by name in v6
function alias(icon) {

    return Object.values(v6)[exist(icon)][2]

}


// Main function
function scan(iconList) {

    //Each icon
    for(let i = 0; i < iconList.length; i++) {

        let find = false

        //Search in changed name array
        changed_name.forEach(elm => {

            //If elm = V5 icon name
            if(elm["v5"] == iconList[i]) {
    
                //Render icon
                compare(iconList[i], `[ ${ alias(elm["v6"]) } ]`, elm["v6"])
                find = true
                change_count ++

    
            }

        })

        //If not found
        if(find == false) {

            //If V5 name = V6 name
            if(exist(iconList[i]) != -1) {
    
                //Render icon
                compare(iconList[i], `[ ${ alias(iconList[i]) } ]`)
                equal_count ++
    
            } else {
    
                notAvailable(iconList[i])
                not_found_count ++
    
            }
            
        }

    }

    console.log(`Theoric : ${iconList.length }`)
    console.log(`Equal : ${ equal_count }`)
    console.log(`Change : ${ change_count }`)
    console.log(`Not found : ${ not_found_count }`)
    console.log(`Absolute : ${ equal_count + change_count + not_found_count }`)


}



//Display icon in right section
function notAvailable(item) {

    type.forEach(type => {

        //Get container & set url
        let container = document.getElementById('notAvailable');
        let icon = `./assets/fontawesome-pro-5/svgs/${type}/${item}.svg`

        //Create img element & add properties
        let elm = document.createElement("img");
        elm.loading = "lazy"
        elm.src = icon

        //Set style on img element
        elm.style.width = "40px"
        elm.style.height = "40px"
        elm.classList.add("p-2")

        //Add img to the container
        container.appendChild(elm)
    
    })

}



//Display icon in both version
function compare(old, alias = "", ne = old) {

    type.forEach(type => {

        //Get containers
        var container5 = document.getElementById(`${type}`)
        var container6 = document.getElementById(`${type}6`)
    
        //Create v5 element
        let icon5 = `./assets/fontawesome-pro-5/svgs/${type}/${old}.svg`
        let elm5 = document.createElement("img")
        elm5.loading = "lazy"
        elm5.src = icon5
    
        //Create v6 element
        let icon6 = `./assets/fontawesome-pro-6.0.0-web/svgs/${type}/${ne}.svg`
        let elm6 = document.createElement("img")
        elm6.loading = "lazy"
        elm6.src = icon6
    
        
        //Add style to img elements 
        elm5.style.height = "40px"
        elm5.style.width = "40px"
        elm5.classList.add("my-4")
        elm6.style.height = "40px"
        elm6.classList.add("my-4")
    
        //Add elements to containers 
        container5.appendChild(elm5)
        container6.appendChild(elm6)

    })

    //Add name

    //Get container
    var containerName5 = document.getElementById(`name`)
    var containerName6 = document.getElementById(`name6`)
    
    //Create h5 element and add content
    let name = document.createElement("h5")
    name.innerHTML = old
    let name6 = document.createElement("h5")
    name6.innerHTML = ne + " " + alias
    
    //Add style
    name.classList.add("my-4")
    name.style.height = "40px"
    name6.classList.add("my-4")
    name6.style.height = "40px"
    name6.style.width = "15rem"

    //Add elements to containers
    containerName5.appendChild(name)
    containerName6.appendChild(name6)


    //Add Thin icon for v6
    var containerThin = document.getElementById(`thin6`)
    
    let iconThin = `./assets/fontawesome-pro-6.0.0-web/svgs/thin/${ne}.svg`
    let thin = document.createElement("img")
    thin.loading = "lazy"
    thin.src = iconThin
    
    thin.style.height = "40px"
    thin.classList.add("my-4")

    containerThin.appendChild(thin)

}