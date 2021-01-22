let link=[];
let links=[{
    "paginas":link
}];
fetch('js/constancias.json')
.then(res => res.json())
.then(data => {
    
    for(constancia of data.constancias){
        link.push({
            "name":constancia.constancia,
            "url":`#${urlAmigables(constancia.constancia)}`,
            "icon":""
        })
    }
    
})
.catch(error => console.log('Error =>',error));
console.log(links);

window.addEventListener("load", () => {
    let header = new Header("Expediente Xolo", links);
    header.header();
})
