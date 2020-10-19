function filter() {
    let filterValue, input, ul, li, i;

    input = document.getElementById('search')
    filterValue = input.value.toUpperCase();
    ul = document.getElementById('menu');
    li = ul.getElementsByTagName('li')

    for (i = 0; i < li.length; i++) {
        let a = li[i].getElementsByTagName('a')[0];
        if (a.innerHTML.toUpperCase().indexOf(filterValue) > -1) {
            li[i].style.display = ""
        } else {
            li[i].style.display = "none"
        }        
    }
}