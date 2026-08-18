// Cấu hình các chuỗi bí mật (easter eggs)
const easterEggs = [
    { code: '4886', url: 'EasterEgg/4886.html', timeout: 15000 },
    { code: 'da', url: 'EasterEgg/Da.html', timeout: 10000 },
    { code: 'apextwin', url: 'EasterEgg/SNVVNghen.html', timeout: 45000 },
    { code: 'ily', url: 'EasterEgg/Cache/Error_4886.html', timeout: 45000 }
];

let keySequence = '';
let sequenceTimer;

// Lắng nghe sự kiện gõ phím trên toàn bộ trang
document.addEventListener('keydown', (e) => {
    // Bỏ qua nếu người dùng đang gõ trong một ô nhập liệu
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') {
        return;
    }

    // Thêm phím vừa gõ (chuyển thành chữ thường) vào chuỗi hiện tại
    keySequence += e.key.toLowerCase();

    // Đặt lại bộ đếm thời gian mỗi khi có phím mới được gõ
    clearTimeout(sequenceTimer);

    // Kiểm tra xem chuỗi hiện tại có phải là một phần của mã bí mật nào không
    const isPartOfCode = easterEggs.some(egg => egg.code.startsWith(keySequence));

    if (isPartOfCode) {
        // Kiểm tra xem chuỗi đã gõ có khớp hoàn toàn với mã nào không
        const matchedEgg = easterEggs.find(egg => egg.code === keySequence);
        if (matchedEgg) {
            window.location.href = matchedEgg.url; // Chuyển hướng nếu khớp
            keySequence = ''; // Xóa chuỗi sau khi thành công
            return;
        }

        // Nếu chưa khớp hoàn toàn, đặt hẹn giờ để xóa chuỗi
        sequenceTimer = setTimeout(() => {
            keySequence = '';
        }, 15000); // Đặt một thời gian chờ chung hoặc theo mã dài nhất
    } else {
        keySequence = ''; // Xóa chuỗi nếu phím gõ không đúng
    }
});