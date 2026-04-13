# Thực Hành Lập Trình Web - Bài 1

**Họ tên:** Nguyễn Trường Hiếu  
**MSV:** N23DCCN156  
**Nhóm:** 2  

### Mô tả bài làm
Dự án **Blog Listing Page** được xây dựng bằng **Next.js** và **Tailwind CSS**. Các chức năng chính đã hoàn thiện:
- **Trang chủ (`/`)**: Hiển thị danh sách các bài viết dưới dạng lưới (Grid) có tính đáp ứng (Responsive). Các bài viết hiển thị thông tin bằng component `BlogCard`.
- **Trang chi tiết (`/blog/[id]`)**: Hỗ trợ định tuyến động (Dynamic Routing), cho phép xem chi tiết nội dung của từng bài viết cụ thể dựa theo ID.
- **Dữ liệu**: Được fetch trực tiếp từ API giả lập `JSONPlaceholder`.
- **Giao diện**: Sử dụng Tailwind CSS, có component `Header`, `Badge` dùng chung cho giao diện chuyên nghiệp.
