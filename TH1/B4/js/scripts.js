tinymce.init({
    selector: 'textarea',
    width: 465,
    height: 250,
    plugins: 'anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount checklist mediaembed casechange export formatpainter pageembed linkchecker a11ychecker tinymcespellchecker permanentpen powerpaste advtable advcode editimage advtemplate ai mentions tinycomments tableofcontents footnotes mergetags autocorrect typography inlinecss markdown',
    toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat',
    tinycomments_mode: 'embedded',
    tinycomments_author: 'Author name',
    mergetags_list: [
        { value: 'First.Name', title: 'First Name' },
        { value: 'Email', title: 'Email' },
    ],
    ai_request: (request, respondWith) => respondWith.string(() => Promise.reject("See docs to implement AI Assistant")),
});
{
    let captchaText = '';

    function generateCaptcha() {
        captchaText = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        for (let i = 0; i < 6; i++) {
            captchaText += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        document.getElementById('captcha').innerText = captchaText;
    }

    function validateCaptcha() {
        const userInput = document.getElementById('captcha-input').value;
        const message = document.getElementById('message');

        if (userInput === captchaText) {
            message.innerText = "Xác nhận thành công!";
            message.style.color = 'green';
        } else {
            message.innerText = "CAPTCHA không chính xác, thử lại.";
            message.style.color = 'red';
            generateCaptcha();
            document.getElementById('captcha-input').value = '';
        }
    }



    window.onload = generateCaptcha;
}
$(document).ready(function () {
    $("#employeeForm").validate({
        rules: {
            firstname: {
                required: true,
                minlength: 2
            },
            gender: {
                required: true
            },
            title: {
                required: true
            },
            suffix: {
                required: true
            },
            birthdate: {
                required: true,
                date: true
            },
            hiredate: {
                required: true,
                date: true
            },
            ssn: {
                required: true,
                digits: true,
                minlength: 9,
                maxlength: 9
            },
            reportto: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            address: {
                required: true
            },
            city: {
                required: true
            },
            region: {
                required: true
            },
            code: {
                required: true,
                digits: true
            },
            country: {
                required: true
            },
            phone: {
                required: true,
                phoneUS: true
            },
            photo: {
                required: true
            },
            shift: {
                required: true
            },
            captchainput: {
                required: true
            }
        },
        messages: {
            firstname: {
                required: "Hãy nhập tên của bạn",
                minlength: "Tên của bạn phải có ít nhất 2 kí tự"
            },
            gender: {
                required: "Hãy chọn giới tính"
            },
            title: {
                required: "Hãy nhập tiêu đề"
            },
            suffix: {
                required: "Vui lòng nhập hậu tố của bạn"
            },
            birthdate: {
                required: "Vui lòng nhập ngày tháng năm sinh của bạn",
                date: "Vui lòng nhập ngày hợp lệ"
            },
            hiredate: {
                required: "Vui lòng nhập ngày thuê của bạn",
                date: "Vui lòng nhập ngày hợp lệ"
            },
            ssn: {
                required: "Vui lòng nhập SSN của bạn",
                digits: "Vui lòng chỉ nhập chữ số",
                minlength: "SSN của bạn phải có chính xác 9 chữ số",
                maxlength: "SSN của bạn phải có chính xác 9 chữ số"
            },
            reportto: {
                required: "Vui lòng chọn một người để báo cáo"
            },
            email: {
                required: "Vui lòng nhập email",
                email: "Vui lòng nhập giá trị email hợp lệ"
            },
            address: {
                required: "Vui lòng nhập địa chỉ của bạn"
            },
            city: {
                required: "Làm ơn nhập tên thành phố bạn đang sinh sống"
            },
            region: {
                required: "Vui lòng nhập khu vực của bạn"
            },
            code: {
                required: "Vui lòng nhập mã bưu điện của bạn",
                digits: "Vui lòng chỉ nhập chữ số"
            },
            country: {
                required: "Vui lòng chọn đất nước của bạn"
            },
            phone: {
                required: "Xin vui lòng điền số điện thoại của bạn",
                phoneUS: "Vui lòng nhập số điện thoại US hợp lệ"
            },
            photo: {
                required: "Vui lòng tải lên một bức ảnh"
            },
            captchainput: {
                required: "Vui lòng xác nhận bạn là con người"
            }
        }
    });
});