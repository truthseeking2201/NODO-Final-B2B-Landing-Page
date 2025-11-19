# NODO - B2B Landing Page

Đây là repository chứa mã nguồn cho Landing Page B2B của dự án **NODO**. Trang web được thiết kế hiện đại, tối ưu hóa hiệu năng và tập trung vào việc giới thiệu các giải pháp công nghệ của NODO.

## 🌟 Giới thiệu

NODO Landing Page được xây dựng để trình bày các giải pháp cơ sở hạ tầng, giám sát và bảo mật on-chain. Giao diện được thiết kế với phong cách chuyên nghiệp, sử dụng các hiệu ứng visual ấn tượng để thu hút khách hàng doanh nghiệp (B2B).

## 🚀 Tính năng chính

Trang landing page bao gồm các phần chính sau:

- **Hero Section**: Giới thiệu ấn tượng với hiệu ứng visual từ Unicorn Studio.
- **Stats Strip**: Dải thống kê các con số ấn tượng.
- **Unified Architecture**: Minh họa kiến trúc hợp nhất của hệ thống.
- **Core System Modules**: Giới thiệu các module cốt lõi của sản phẩm.
- **Benchmarks**: So sánh hiệu năng và các chỉ số quan trọng (Coverage, Custody, Lending, etc.).
- **Alert Monitoring**: Mô phỏng luồng cảnh báo on-chain (Onchain Alert Flow).
- **Simple Deployment**: Hướng dẫn hoặc minh họa quy trình triển khai đơn giản.
- **Partner Section**: Khu vực dành cho đối tác và kêu gọi hợp tác.

## 🛠 Công nghệ sử dụng

Dự án được xây dựng dựa trên các công nghệ web hiện đại:

- **Core**: [React](https://react.dev/) (v19), [TypeScript](https://www.typescriptlang.org/)
- **Build Tool**: [Vite](https://vitejs.dev/) - cho tốc độ phát triển và build cực nhanh.
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) - framework CSS utility-first.
- **Animations/Effects**: [Unicorn Studio](https://www.unicorn.studio/) (unicornstudio-react).
- **Linting**: ESLint.

## 📦 Cài đặt và Chạy dự án

Để chạy dự án này trên máy local, hãy làm theo các bước sau:

1.  **Clone repository:**
    ```bash
    git clone https://github.com/truthseeking2201/NODO-Final-B2B-Landing-Page.git
    cd NODO-Final-B2B-Landing-Page
    ```

2.  **Cài đặt dependencies:**
    ```bash
    npm install
    ```

3.  **Chạy môi trường phát triển (Development):**
    ```bash
    npm run dev
    ```
    Truy cập `http://localhost:5173` trên trình duyệt để xem kết quả.

4.  **Build cho Production:**
    ```bash
    npm run build
    ```

## 📂 Cấu trúc thư mục

```
src/
├── assets/          # Tài nguyên tĩnh (images, icons)
├── components/      # Các component React
│   ├── layout/      # Navbar, Layout chung
│   ├── sections/    # Các section chính của Landing Page (Hero, Features, Footer...)
│   ├── visuals/     # Các component visual phức tạp (AlertFlow, StrategySnippet...)
│   └── placeholders/# Các component placeholder
├── constants/       # Các hằng số và cấu hình
├── styles/          # Global styles và Tailwind config
├── App.tsx          # Component chính
└── main.tsx         # Entry point
```

## 🤝 Đóng góp

Mọi đóng góp đều được hoan nghênh. Vui lòng tạo Pull Request hoặc mở Issue nếu bạn tìm thấy lỗi hoặc muốn đề xuất tính năng mới.

---
© 2025 NODO. All rights reserved.
