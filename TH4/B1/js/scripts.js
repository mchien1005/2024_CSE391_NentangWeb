let editIndex = -1;

document.getElementById("formSinhVien").addEventListener("submit", function(event) {
    event.preventDefault(); // Ngăn chặn form submit mặc định

    // Lấy dữ liệu từ form
    const hoTen = document.getElementById("hoTen").value;
    const maSV = document.getElementById("maSV").value;
    const ngaySinh = document.getElementById("ngaySinh").value;
    const lop = document.getElementById("lop").value;

    // Validate dữ liệu
    if (!hoTen || !maSV || !ngaySinh || !lop) {
        alert("Vui lòng điền đầy đủ thông tin");
        return;
    }

    // Lấy danh sách sinh viên từ localStorage
    let danhSachSinhVien = JSON.parse(localStorage.getItem("danhSachSinhVien")) || [];

    if (editIndex === -1) {
        // Thêm sinh viên mới vào danh sách
        danhSachSinhVien.push({ hoTen, maSV, ngaySinh, lop });
    } else {
        // Cập nhật sinh viên hiện tại
        danhSachSinhVien[editIndex] = { hoTen, maSV, ngaySinh, lop };
        editIndex = -1;
        document.getElementById("submit").textContent = "Thêm";
    }

    // Lưu danh sách sinh viên vào localStorage
    localStorage.setItem("danhSachSinhVien", JSON.stringify(danhSachSinhVien));


    // Hiển thị lại danh sách sinh viên
    hienThiDanhSachSinhVien();

    // Reset form
    document.getElementById("formSinhVien").reset();
});

function hienThiDanhSachSinhVien() {
    const danhSachSinhVien = JSON.parse(localStorage.getItem("danhSachSinhVien")) || [];
    const tbody = document.querySelector("#bangSinhVien tbody");
    tbody.innerHTML = "";

    danhSachSinhVien.forEach((sinhVien, index) => {
        const row = document.createElement("tr");

        row.innerHTML = `
                <td class="border px-4 py-2 text-center">${sinhVien.hoTen}</td>
                <td class="border px-4 py-2 text-center">${sinhVien.maSV}</td>
                <td class="border px-4 py-2 text-center">${sinhVien.ngaySinh}</td>
                <td class="border px-4 py-2 text-center">${sinhVien.lop}</td>
                <td class="border px-4 py-2 text-center">
                    <button class="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline" onclick="suaSinhVien(${index})">Sửa</button>
                    <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline" onclick="xoaSinhVien(${index})">Xóa</button>
                </td>
            `;

        tbody.appendChild(row);
    });
}

function suaSinhVien(index) {
    const danhSachSinhVien = JSON.parse(localStorage.getItem("danhSachSinhVien")) || [];
    const sinhVien = danhSachSinhVien[index];

    // Điền thông tin sinh viên vào form
    document.getElementById("hoTen").value = sinhVien.hoTen;
    document.getElementById("maSV").value = sinhVien.maSV;
    document.getElementById("ngaySinh").value = sinhVien.ngaySinh;
    document.getElementById("lop").value = sinhVien.lop;

    // Cập nhật trạng thái và nút
    editIndex = index;
    document.getElementById("submit").textContent = "Cập nhật"; // Cập nhật nút thành "Cập nhật"
}


function xoaSinhVien(index) {
    let danhSachSinhVien = JSON.parse(localStorage.getItem("danhSachSinhVien")) || [];
    danhSachSinhVien.splice(index, 1);
    localStorage.setItem("danhSachSinhVien", JSON.stringify(danhSachSinhVien));
    hienThiDanhSachSinhVien();
}

// Gọi hàm hiển thị danh sách khi trang tải
hienThiDanhSachSinhVien();