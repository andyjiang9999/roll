class image {
    static instances = 0;
    constructor(source, title, desc, page) {
        this.source = source;
        this.title = title;
        this.desc = desc;
        this.page = page;
        this.id = image.instances;
        image.instances += 1;
    }
    createdesc() {
        return `<div class='descgroup'><a href='${this.page}' class='desc'>${this.title}</a><p class='desc'>${this.desc}</p></div>`
    }
    createfav(colors) {
        if (localStorage.getItem(String(this.id)) == "f") {
            return `<div class='fav ${colors} i${this.id}'><h2>—</h2><img src='${this.source}'><p>${this.title}</p></div>`
        } else {
            return ''
        }
    }
}
const images = [
    new image("https://c.tenor.com/x8v1oNUOmg4AAAAd/rickroll-roll.gif", "image 1", "image 1 description Lorem ipsum dolor sit amet, consectetur adipiscing elit.", "69421.html"),
    new image("https://upload.wikimedia.org/wikipedia/commons/3/3f/Totally_not_a_Rickroll_QR_code.png", "image 2", "image 2 description Cras consequat ipsum arcu, in faucibus est vehicula ut.", "69422.html"),
    new image("https://upload.wikimedia.org/wikipedia/en/thumb/f/f7/RickRoll.png/250px-RickRoll.png", "image 3", "image 3 description Donec lobortis nec quam id finibus.", "69423.html"),
    new image("https://i.kym-cdn.com/news/posts/desktop/000/001/299/cover11.jpg", "image 4", "image 4 description Proin venenatis tellus eu lacus hendrerit, id posuere lorem imperdiet.", "69424.html"),
    new image("https://s.yimg.com/ny/api/res/1.2/aMLVoTIHrDS1J91FuAW5bg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MA--/https://s.yimg.com/dh/ap/default/140117/rickroll1.jpg", "image 5", "image 5 description Morbi turpis justo, tempor sit amet nisi a, euismod hendrerit erat.", "69425.html")
]
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