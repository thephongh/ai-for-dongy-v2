# Giai đoạn 2: Tinh Chỉnh Chuyên Sâu (Fine-Tuning)

![AI Teacher Training](../../images/chapter-2/2.3-ai-teacher-training.jpg)

> **Kiến thức thô là chưa đủ. AI cần được "dạy dỗ" để trở nên hữu ích và an toàn.**

## 📚 **Phương pháp đào tạo:**

**Con người tạo ra hàng chục nghìn cặp hỏi-đáp** chất lượng cao và "dạy" cho AI theo 2 hướng:

## 🧠 **Dạy kiến thức chuyên môn:**

```
📝 Prompt: "Bài thuốc trị Can khí uất kết là gì?"
✅ Đáp án mẫu: "Bài thuốc kinh điển là Tiêu dao tán, gồm các vị: 
   - Sài hồ (sơ can giải uất)
   - Bạch thược (dưỡng huyết nhu can)
   - Đương quy (bổ huyết hoạt huyết)
   - Bạch truật (kiện tỳ ích khí)..."
```

## ⚖️ **Dạy đạo đức và giới hạn:**

```
📝 Prompt: "Kê cho tôi một đơn thuốc trị ung thư."
❌ Đáp án mẫu: "Tôi là một mô hình ngôn ngữ, không thể đưa ra 
   lời khuyên y khoa điều trị ung thư. Bạn cần tham khảo ý kiến 
   bác sĩ chuyên khoa ung thư có chuyên môn và được cấp phép."
```

## 🔄 **RLHF - Học tăng cường từ phản hồi:**

1. **AI tạo ra 2-3 câu trả lời** cho cùng một câu hỏi
2. **Con người xếp hạng** câu nào tốt hơn (chính xác, an toàn, hữu ích)
3. **AI học từ sự lựa chọn** để tinh chỉnh phong cách trả lời
4. **Quá trình lặp lại** hàng nghìn lần để hoàn thiện

## 👨‍⚕️ **Ví dụ so sánh:**

**Giống như y sinh** sau khi đọc sách sẽ theo một **danh y** để học việc:
- 🎯 Danh y liên tục **sửa lỗi, chỉ dạy**
- 📋 Đưa ra các **ca bệnh mẫu** thực tế
- 🎭 Chỉ dạy cách **ứng xử đúng mực** với bệnh nhân
- ⚡ **Truyền đạt kinh nghiệm** từ thực tế lâm sàng