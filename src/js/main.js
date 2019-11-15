$(function () {

    $(document).ready(function() {
        $('#universalCredit input').change(function () {
            if (this.checked) {
                $('#universalCreditAmount').fadeIn();
            }
        });

        $('#childTaxCredit input').change(function () {
            if (this.checked) {
                $('#childTaxCreditAmount').fadeIn();
            }
        });
    })
});