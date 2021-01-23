let link=[];
let links=[{
    "paginas":link
}];
console.log(links);

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
setTimeout(() => {
    let header = new Header("Expediente Xolo", links);
    header.header();
}, 500);


