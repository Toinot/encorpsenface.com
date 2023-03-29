window.addEventListener('DOMContentLoaded', function() {
    var openPanel = document.getElementsByClassName('open-panel');
    for (let i = 0; i < openPanel.length; i++) {
        openPanel[i].onclick = function() {
            $('#panel').css('right', '0');
        }
    }
    document.getElementById('close-panel').onclick = function() {
        $('#panel').css('right', '');
    }
});