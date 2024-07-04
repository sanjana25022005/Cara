/*To make the hamburger menu button interactive, if we click on hamburger menu then navbar should appear
and when navbar is already seen and when we click on hamburger menu the navbar should be closed */

//inside getElementById we give id's assigned in html code
const bar = document.getElementById('bar')
//after clicking x icon then navbar should be closed
const close = document.getElementById('close')
//after clicking hamburger menu to see the navbar
const nav = document.getElementById('navbar')

/* first we have to check whether the navbar is opened or not 
so when we click on icon then navbar should appear and vice versa*/
if(bar)
{   
    bar.addEventListener('click', () => {
        nav.classList.add('active'); //create active in css to show effect, to activate navbar
    })
}
if(close)
{
    close.addEventListener('click', () => {
        nav.classList.remove('active'); //To close navbar, we write remove
    })
}