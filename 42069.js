class image {
    static instances = 0;
    constructor(source, title, desc, paragraphs) {
        this.source = source;
        this.title = title;
        this.desc = desc;
        this.paragraphs = paragraphs;
        this.id = image.instances;
        image.instances += 1;
    }
    createdesc() {
        return `<div class='descgroup'><a onclick="sessionStorage.setItem('pageid', ${this.id})" href='page.html' class='desc'>${this.title}</a><p class='desc'>${this.desc}</p></div>`
    }
    createfav(colors) {
        if (localStorage.getItem(this.id) == "f") {
            return `<div class='fav ${colors}'><h2 onclick='remove(${this.id})'>—</h2><img src='${this.source}'><p>${this.title}</p></div>`
        } else {
            return ''
        }
    }
    createpage() {
        let colors = ['r', 'g', 'b'][Math.floor(Math.random() * 3)];
        let page = ``;
        for (const p of this.paragraphs) {
            page = page + `<p class=${colors}>${p}</p>`;
            if (colors == 'r') {colors = 'g'}
            else if (colors == 'g') {colors = 'b'}
            else (colors = 'r')
        }
        return page;
    }
}
function togglefav(id) {
    if (localStorage.getItem(id)) {
        localStorage.removeItem(id);
    } else {
        localStorage.setItem(id, 'f');
    }
}
function loadbutton(id) {
    if (localStorage.getItem(id) == 'f') {
        document.querySelector('.fbutton').classList.add('remove')
        document.querySelector('.fbutton').classList.remove('add')
        document.querySelector('.fbutton').innerHTML = 'remove from favourites'
    } else {
        document.querySelector('.fbutton').classList.add('add')
        document.querySelector('.fbutton').classList.remove('remove')
        document.querySelector('.fbutton').innerHTML = 'add to favourites'
    }
}