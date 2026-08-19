(function() {
    const path = window.location.pathname;
    let newPath;

    if (path.endsWith('/index.html')) {
        // Xử lý riêng cho index.html, chuyển hướng về thư mục gốc
        newPath = path.substring(0, path.length - 10); // Bỏ 'index.html'
    } else if (path.endsWith('.html') && path !== '/') {
        // Xử lý cho các tệp .html khác
        const newPath = path.substring(0, path.length - 5); // Xóa đuôi '.html'
        const newUrl = window.location.protocol + "//" + window.location.host + newPath + window.location.search + window.location.hash;
        // Thay thế URL trong lịch sử trình duyệt mà không tải lại trang
        window.history.replaceState({path: newUrl}, '', newUrl);
    }
})();