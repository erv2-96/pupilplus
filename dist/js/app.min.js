$(function () {

    function showForm() {
        let show = false;
        $('.qualify input').each(function () {
            if (this.checked) {
                show = true;
                return false;
            } else {
                show = false;
            }
        })
        return show;
    }

    $(document).ready(function () {
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

        $('.qualify input').change(function () {
            let show = showForm();
            if (show) {
                $('.main-form-wrap').fadeIn()
            } else {
                $('.main-form-wrap').css('display', 'none');
            }
        })

    })
})