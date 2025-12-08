function showDiv(divId) {
    console.log("Button clicked:", divId); // test
    // hide all divs
    const divs = document.querySelectorAll('.feature_choice');
    divs.forEach(div => div.style.display = 'none');

    // show the selected div
    document.getElementById(divId).style.display = 'flex';
}