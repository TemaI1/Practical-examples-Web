const elHeadBot = document.querySelector('.head_bot');
if (window.matchMedia("(max-width: 1024px)").matches) {
    elHeadBot.insertBefore(elHeadBot.children[2], elHeadBot.children[1]);
    document.querySelector('.head_bot_center_catalog_text').textContent = "Каталог";
}
