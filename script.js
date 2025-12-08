function showDiv(divId, otherIds) {
    otherIds.forEach(id => {
        const div = document.getElementById(id);
        if (div) div.style.display = 'none';
    });

    document.getElementById(divId).style.display = 'flex';
}