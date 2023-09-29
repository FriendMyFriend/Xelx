var data = {
    title: "",
    header: "",
    content: "",
    contentB: "",
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
    document.querySelector(".data").innerHTML = `<h1>${data.header}</h1><div><p>${data.content}</p><p>${data.contentB}</p></div><p>${data.footer}</p><div>`;
}