
const haque_tab = document.querySelectorAll('.haque-tab .tab-header ul a');
const tab_content = document.querySelectorAll('.haque-tab .tab-content');

haque_tab.forEach(item =>{
item.addEventListener('click', function(e){
e.preventDefault();

haque_tab.forEach(item => {
    item.classList.remove('active');
});
item.classList.add('active');

const pane = document.querySelector(this.getAttribute('href'));

tab_content.forEach(item => {
    item.classList.remove('active');
});
pane.classList.add('active');
});

});