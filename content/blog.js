var data = {
    title: "",
    header: "",
    p1: "",
    p2: "",
    p3: "",
    p4: "",
    p5: "",
    footer: "",
}

var style = {
    font: "",
    textcolor: "",
    background: "",
}

window.onload = function() {
    document.title = data.title;
    document.querySelector(".style").innerHTML = `<style>body, html {font:${style.font}; color:${style.textcolor}; background:${style.background};}</style>`;
    document.querySelector(".data").innerHTML = `<h1>${data.header}</h1><div><p>${data.p1}</p><p>${data.p2}</p><p>${data.p3}</p><p>${data.p4}</p><p>${data.p5}</p></div><p>${data.footer}</p><div>`;
}