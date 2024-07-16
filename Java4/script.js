$(document).ready(function () {
    $('#pForm').on('submit', function (e) {
        const pInput = $('#phone').val();
        const pE = $('#pError');
        const phoneP = /^(01\d{7,8}|0\d-\d{7,8}|\d{2}-\d{8}|\d{2}-\d{7})$/

        if (phoneP.test(pInput)) {
            pE.hide();
            alert('Phone Number Is Valid!');
        } else {
            pE.text('Invalid Phone Number');
        }
    });
});