const dropdowns = document.querySelectorAll('.library-dropdown');

dropdowns.forEach(dropdown => {

    //get inner elements from each dropdown
    const select = dropdown.querySelector('.select');
    const menu = dropdown.querySelector('.menu');
    const options = dropdown.querySelector('.menu li');
    const selected = dropdown.querySelector('.selected');

    //add a click event to the selected element
    select.addEventListener('click', () => {

        //add the clicked select styles to the selected element
        select.classList.toggle('select-clicked');

        //add the open styles to the menu element
        menu.classList.toggle('menu-open');

        //loop through all option elements
        options.forEach(option => {
            //add a click event to the option element
            option.addEventListener('click', () => {
                //change selected inner text to clicked option inner text
                selected.innerText = option.innerText;
                //remove the clicked select styles from the select element
                select.classList.remove('select-clicked');
                //remove the open styles from the menu element
                menu.classList.remove('menu-open');
            });

            //add active class to clicked option element
            option.classList.add('active');
        });
    });
});
