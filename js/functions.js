$(function () {
    if (window.localStorage.getItem('login')) {
        $('.not_login').addClass('d-none');
        $('#logged').removeClass('d-none');
    } else {
        $('.not_login').removeClass('d-none');
        $('#logged').addClass('d-none');
    }
})

function forgotPassword() {
    $('#loginModal .modal-dialog').removeClass('social-modal');
    $('#loginModal .modal-dialog').addClass('forgot-modal');
    $('#loginModal .header-title').html('Quên mật khẩu? ');
    $('#loginModal .header-desc').html('Bạn không may quên mất mật khẩu tài khoản của mình? Không sao! Hãy nhập email mà bạn cần lấy lại mật khẩu và chúng mình sẽ gửi mã xác nhận cho bạn.');
    $('#loginModal form').html(
        `<input type="email" class="form-control" id="email" placeholder="Email:">
        <button class="btn btn-block btn-login" type="button" onclick="PIN()">Gửi mã</button>`);
    $('#loginModal .col-right img').attr('src', './img/img-forgot.png');
    $('#loginModal .link-left').addClass('d-none');
    $('#loginModal .link-right').addClass('d-none');
}

function PIN() {
    $('#loginModal .modal-dialog').removeClass('social-modal');
    $('#loginModal .modal-dialog').addClass('forgot-modal');
    $('#loginModal .modal-dialog').addClass('PIN-modal');
    $('#loginModal .header-title').html('Quên mật khẩu? ');
    $('#loginModal .header-desc').html('Hãy nhập mã 5 chữ số mà chúng tôi đã gửi đến email của bạn để xác thực quyền sở hữu tài khoản của bạn.');
    $('#loginModal form').html(
        `<div class="input-group">
            <input type="text" class="form-control">
            <input type="text" class="form-control">
            <input type="text" class="form-control">
            <input type="text" class="form-control">
            <input type="text" class="form-control">
        </div>
        <button class="btn btn-block btn-login" type="button" onclick="PINConfirm()">Nhập mã</button>`);
    $('#loginModal .col-right img').attr('src', './img/img-forgot.png');
    $('#loginModal .link-left').addClass('d-none');
    $('#loginModal .link-right').addClass('d-none');
}

function socialModal() {
    $('#loginModal .modal-dialog').addClass('social-modal');
    $('#loginModal .modal-dialog').addClass('forgot-modal');
    $('#loginModal .modal-dialog').removeClass('PIN-modal');
    $('#loginModal .header-title').html('Lỗi rồi :(');
    $('#loginModal .header-desc').html('Có thể máy tính của bạn đang gặp vấn đề về mạng. Vui lòng kiểm tra lại đường truyền của bạn!');
    $('#loginModal form').html(`<button class="btn btn-block btn-login" type="button" onclick="loginModal()">Thử lại</button>`);
    $('#loginModal .col-right img').attr('src', './img/bg-login.png');
    $('#loginModal .link-left').addClass('d-none');
    $('#loginModal .link-right').addClass('d-none');
}

function loginModal() {
    $('#loginModal .modal-dialog').removeClass('forgot-modal');
    $('#loginModal .modal-dialog').removeClass('PIN-modal');
    $('#loginModal .modal-dialog').removeClass('social-modal');
    $('#loginModal .modal-dialog').removeClass('PIN-confirm');
    $('#loginModal .modal-dialog').removeClass('login-success');
    $('#loginModal .modal-dialog').addClass('login-modal');
    $('#loginModal .header-title').html('Đăng nhập');
    $('#loginModal .header-desc').html(
        `<span>Người mới?</span>
        <a href="javascript:void(0)" onclick="modalClose('loginModal')" data-toggle="modal" data-target="#registerModal">Tạo tài khoản ở đây!</a>`
    );
    $('#loginModal form').html(
        `<input type="email" class="form-control" id="email" placeholder="Email">
        <input type="password" class="form-control" id="password" placeholder="Password">
        <a href="javascript:void(forgotPassword())">Quên mật khẩu?</a>
        <div class="form-check">
            <input type="checkbox" class="form-check-input" id="exampleCheck1" checked>
            <span class="check-input-custom"></span>
            <label class="form-check-label" for="exampleCheck1">Giữ tôi luôn đăng nhập</label>
        </div>
        <button class="btn btn-block btn-login" type="button" onclick="loginSuccess()">Đăng nhập</button>`);
    $('#loginModal .col-right img').attr('src', './img/bg-login.png');
    $('#loginModal .link-left').addClass('d-none');
    $('#loginModal .link-right').addClass('d-none');

    $('#loginModal form').removeClass('d-none');
    $('#loginModal .login-space').removeClass('d-none');
    $('#loginModal .login-social').removeClass('d-none');
}

function PINConfirm() {
    $('#loginModal .modal-dialog').removeClass('forgot-modal');
    $('#loginModal .modal-dialog').removeClass('PIN-modal');
    $('#loginModal .modal-dialog').removeClass('social-modal');
    $('#loginModal .modal-dialog').removeClass('login-success');
    $('#loginModal .modal-dialog').addClass('PIN-confirm');

    $('#loginModal form').addClass('d-none');
    $('#loginModal .login-space').addClass('d-none');
    $('#loginModal .login-social').addClass('d-none');

    $('#loginModal .header-title').html('Hooray!!!');
    $('#loginModal .header-desc').html(`Chúc mừng bạn đã tái kích hoạt thành công tài khoản! Chào mừng bạn quay trở lại với Isekai!`);
    $('#loginModal .col-right img').attr('src', './img/img-confirm.png');
    $('#loginModal .link-left').removeClass('d-none');
    $('#loginModal .link-right').removeClass('d-none');
}

function loginSuccess() {
    $('#loginModal .modal-dialog').removeClass('forgot-modal');
    $('#loginModal .modal-dialog').removeClass('PIN-modal');
    $('#loginModal .modal-dialog').removeClass('social-modal');
    $('#loginModal .modal-dialog').addClass('PIN-confirm');
    $('#loginModal .modal-dialog').addClass('login-success');

    $('#loginModal form').addClass('d-none');
    $('#loginModal .login-space').addClass('d-none');
    $('#loginModal .login-social').addClass('d-none');

    $('#loginModal .header-title').html('Okaerinasai! ');
    $('#loginModal .header-desc').html(``);
    $('#loginModal .col-right img').attr('src', './img/img-login-success.png');
    $('#loginModal .link-left').removeClass('d-none');
    $('#loginModal .link-right').removeClass('d-none');

    localStorage.setItem('login', true);
    $('.not_login').addClass('d-none');
    $('#logged').removeClass('d-none');
}

function modalClose(id) {
    $('#' + id).modal('hide');
}

function logout() {
    localStorage.clear();
    location.reload();
}
