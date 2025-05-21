document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("employeeForm").addEventListener("submit", function(e) {
        e.preventDefault();

        // Lấy dữ liệu từ input
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const address = document.getElementById("address").value;
        const phone = document.getElementById("phone").value;

        // Thêm dòng mới vào bảng
        const tableBody = document.querySelector("table tbody");
        const newRow = document.createElement("tr");
        newRow.innerHTML = `
            <td><span class="custom-checkbox"><input type="checkbox"><label></label></span></td>
            <td>${name}</td>
            <td>${email}</td>
            <td>${address}</td>
            <td>${phone}</td>
            <td>
                <a href="#" class="edit" title="Edit"><i class="material-icons">&#xE254;</i></a>
                <a href="#" class="delete" title="Delete"><i class="material-icons">&#xE872;</i></a>
            </td>
        `;
        tableBody.appendChild(newRow);

        // Reset form và đóng modal
        document.getElementById("employeeForm").reset();
        $('#addEmployeeModal').modal('hide');
    });
});