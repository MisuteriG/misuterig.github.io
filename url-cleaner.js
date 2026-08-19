(function() {
    const path = window.location.pathname;
    // Không chạy trên trang chủ để tránh chuyển hướng `index.html` thành `/`
    if (path.endsWith('.html') && path !== '/' && path !== '/index.html') {
        const newPath = path.substring(0, path.length - 5); // Xóa đuôi '.html'
        const newUrl = window.location.protocol + "//" + window.location.host + newPath + window.location.search + window.location.hash;
        // Thay thế URL trong lịch sử trình duyệt mà không tải lại trang
        window.history.replaceState({path: newUrl}, '', newUrl);
    }
})();