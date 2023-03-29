$('#open-panel').click(function() {
    console.log('open panel');
    $('#panel').css('right', '0');
});
$('#close-panel').click(function() {
    console.log('close panel');
    $('#panel').css('right', '-50%');
});