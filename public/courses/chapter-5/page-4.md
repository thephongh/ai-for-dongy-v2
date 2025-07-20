# 5.4. Bảo mật thông tin bệnh nhân: Lời thề Hippocrates trong thời đại số

![Data Security](/images/chapter-5/5.3-data-security.svg)

> **"Những gì tôi thấy hoặc nghe trong cuộc sống của bệnh nhân... tôi sẽ giữ bí mật và không bao giờ tiết lộ"** - Lời thề Hippocrates

## 🔒 **Nguyên tắc tuyệt đối**

### **KHÔNG BAO GIỜ nhập thông tin định danh cá nhân vào AI công cộng**

### **Thông tin định danh bao gồm:**
- ✅ **Tên, họ đệm**
- ✅ **Ngày sinh, tuổi cụ thể**
- ✅ **Số điện thoại, địa chỉ**
- ✅ **Số CMND/CCCD/Passport**
- ✅ **Câu chuyện riêng tư có thể truy ra danh tính**
- ✅ **Tên công ty, trường học cụ thể**

## ✅ **Cách làm đúng: Ẩn danh hóa thông tin**

### **Ví dụ đúng:**
```
"Bệnh nhân nữ, 42 tuổi, giáo viên, bị đau đầu vùng đỉnh, 
kèm hoa mắt chóng mặt, hay cáu gắt, kinh nguyệt không đều..."
```

### **Ví dụ SAI:**
```
"Chị Nguyễn Thị Lan, sinh năm 1982, làm việc tại trường THPT 
Lê Quý Đôn, ở số 123 đường ABC, quận XYZ..."
```

## 🚨 **Những rủi ro nghiêm trọng**

### **1. Vi phạm pháp luật**
- Luật An toàn thông tin mạng
- Nghị định về bảo vệ dữ liệu cá nhân
- Có thể bị phạt tiền, tịch thu thiết bị

### **2. Mất lòng tin bệnh nhân**
- Bệnh nhân biết được có thể kiện tụng
- Uy tín nghề nghiệp bị ảnh hưởng
- Lan truyền tiêu cực trên mạng xã hội

### **3. Rủi ro kỹ thuật**
- Dữ liệu có thể bị lưu trữ vĩnh viễn trên server AI
- Nguy cơ bị hack, rò rỉ thông tin
- Không kiểm soát được việc sử dụng dữ liệu

## 🛡️ **Hướng dẫn ẩn danh hóa an toàn**

### **Bước 1: Loại bỏ thông tin định danh**
- Thay tên thật → "Bệnh nhân nam/nữ"
- Thay tuổi cụ thể → nhóm tuổi (20-30, 40-50...)
- Thay địa chỉ cụ thể → khu vực chung (nông thôn, thành phố)

### **Bước 2: Tổng quát hóa nghề nghiệp**
- "Giáo viên THPT Lê Quý Đôn" → "Giáo viên"
- "Kỹ sư Công ty Samsung" → "Kỹ sư"
- "Chủ nhà hàng ABC" → "Chủ doanh nghiệp nhỏ"

### **Bước 3: Kiểm tra lại**
- Đọc lại prompt đã viết
- Tự hỏi: "Có thể đoán ra đây là ai không?"
- Nếu có thể → tiếp tục ẩn danh hóa

## 📝 **Template an toàn cho prompt**

```
"Tôi có một bệnh nhân [nam/nữ], [nhóm tuổi], nghề nghiệp [tổng quát], 
với các triệu chứng sau:
- [Triệu chứng chính]
- [Triệu chứng phụ]
- [Thể trạng, mạch, lưỡi]

Yêu cầu tư vấn về [vấn đề cần hỗ trợ]."
```

## ⚖️ **Trách nhiệm pháp lý**

### **Lưu ý quan trọng:**
- Vi phạm bảo mật có thể gây hậu quả pháp lý nghiêm trọng
- Luôn tuân thủ quy định về bảo vệ thông tin bệnh nhân
- Khi nghi ngờ, hãy tham khảo luật sư hoặc chuyên gia pháp lý

### **Nguyên tắc "Better safe than sorry":**
**Thà cẩn thận thái quá còn hơn mất cảnh giác**

---

**⬅️ [Trước: Đánh giá thông tin](./page-3.md) | [Tiếp: Thiên kiến trong AI](./page-5.md) ➡️**