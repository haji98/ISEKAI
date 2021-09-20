function forgotPassword() {
    $('.modal-dialog').removeClass('social-modal');
    $('.modal-dialog').addClass('forgot-modal');
    $('.header-title').html('Quên mật khẩu? ');
    $('.header-desc').html('Bạn không may quên mất mật khẩu tài khoản của mình? Không sao! Hãy nhập email mà bạn cần lấy lại mật khẩu và chúng mình sẽ gửi mã xác nhận cho bạn.');
    $('form').html(
        `<input type="email" class="form-control" id="email" placeholder="Email:">
        <button class="btn btn-block btn-login" onclick="PIN()">Gửi mã</button>`);
    $('.col-right img').attr('src', './img/img-forgot.png');
    $('.link-left').addClass('d-none');
    $('.link-right').addClass('d-none');
}

function PIN() {
    $('.modal-dialog').removeClass('social-modal');
    $('.modal-dialog').addClass('forgot-modal');
    $('.modal-dialog').addClass('PIN-modal');
    $('.header-title').html('Quên mật khẩu? ');
    $('.header-desc').html('Hãy nhập mã 5 chữ số mà chúng tôi đã gửi đến email của bạn để xác thực quyền sở hữu tài khoản của bạn.');
    $('form').html(
        `<div class="input-group">
            <input type="text" class="form-control">
            <input type="text" class="form-control">
            <input type="text" class="form-control">
            <input type="text" class="form-control">
            <input type="text" class="form-control">
        </div>
        <button class="btn btn-block btn-login" onclick="PINConfirm()">Gửi mã</button>`);
    $('.col-right img').attr('src', './img/img-forgot.png');
    $('.link-left').addClass('d-none');
    $('.link-right').addClass('d-none');
}

function socialModal() {
    $('.modal-dialog').addClass('social-modal');
    $('.modal-dialog').addClass('forgot-modal');
    $('.modal-dialog').removeClass('PIN-modal');
    $('.header-title').html('Lỗi rồi :(');
    $('.header-desc').html('Có thể máy tính của bạn đang gặp vấn đề về mạng. Vui lòng kiểm tra lại đường truyền của bạn!');
    $('form').html(`<button class="btn btn-block btn-login" onclick="loginModal()">Thử lại</button>`);
    $('.col-right img').attr('src', './img/bg-login.png');
    $('.link-left').addClass('d-none');
    $('.link-right').addClass('d-none');
}

function loginModal() {
    $('.modal-dialog').removeClass('forgot-modal');
    $('.modal-dialog').removeClass('PIN-modal');
    $('.modal-dialog').removeClass('social-modal');
    $('.modal-dialog').addClass('login-modal');
    $('.header-title').html('Đăng nhập');
    $('.header-desc').html(
        `<span>Người mới?</span>
        <a href="">Tạo tài khoản ở đây!</a>`
    );
    $('form').html(
        `<input type="email" class="form-control" id="email" placeholder="Email">
        <input type="password" class="form-control" id="password" placeholder="Password">
        <a href="javascript:void(forgotPassword())">Quên mật khẩu?</a>
        <div class="form-check">
            <input type="checkbox" class="form-check-input" id="exampleCheck1" checked>
            <span class="check-input-custom"></span>
            <label class="form-check-label" for="exampleCheck1">Giữ tôi luôn đăng nhập</label>
        </div>
        <button class="btn btn-block btn-login" onclick="loginSuccess()">Đăng nhập</button>`);
    $('.col-right img').attr('src', './img/bg-login.png');
    $('.link-left').addClass('d-none');
    $('.link-right').addClass('d-none');
}

function PINConfirm() {
    $('.modal-dialog').removeClass('forgot-modal');
    $('.modal-dialog').removeClass('PIN-modal');
    $('.modal-dialog').removeClass('social-modal');
    $('.modal-dialog').removeClass('login-success');
    $('.modal-dialog').addClass('PIN-confirm');

    $('form').addClass('d-none');
    $('.login-space').addClass('d-none');
    $('.login-social').addClass('d-none');

    $('.header-title').html('Hooray!!!');
    $('.header-desc').html(`Chúc mừng bạn đã tái kích hoạt thành công tài khoản! Chào mừng bạn quay trở lại với Isekai!`);
    $('.col-right img').attr('src', './img/img-confirm.png');
    $('.link-left').removeClass('d-none');
    $('.link-right').removeClass('d-none');
}

function loginSuccess() {
    $('.modal-dialog').removeClass('forgot-modal');
    $('.modal-dialog').removeClass('PIN-modal');
    $('.modal-dialog').removeClass('social-modal');
    $('.modal-dialog').addClass('PIN-confirm');
    $('.modal-dialog').addClass('login-success');

    $('form').addClass('d-none');
    $('.login-space').addClass('d-none');
    $('.login-social').addClass('d-none');

    $('.header-title').html('Okaerinasai! ');
    $('.header-desc').html(``);
    $('.col-right img').attr('src', './img/img-login-success.png');
    $('.link-left').removeClass('d-none');
    $('.link-right').removeClass('d-none');
}