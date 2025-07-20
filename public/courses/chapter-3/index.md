# Chương 3: Nghệ Thuật Giao Tiếp với AI - Prompt Nâng Cao

## 3.1. Ôn lại cấu trúc Prompt hiệu quả (R-T-F)

> **Nền tảng vững chắc cho mọi cuộc đối화 với AI**

### 🎭 **Công thức R-T-F cần nhớ:**

🎯 **R - Role (Vai trò):**
- **Bạn muốn AI là ai?**
- *Ví dụ:* Lương y, nhà nghiên cứu, chuyên gia marketing, phiên dịch...
- **Tip:** Càng cụ thể vai trò, càng chính xác kết quả

📋 **T - Task (Nhiệm vụ):**
- **Bạn muốn AI làm gì?**
- *Ví dụ:* Phân tích, so sánh, soạn thảo, lên danh sách, tóm tắt...
- **Tip:** Sử dụng động từ rõ ràng, tránh mơ hồ

📊 **F - Format (Định dạng):**
- **Bạn muốn kết quả trông như thế nào?**
- *Ví dụ:* Bảng, gạch đầu dòng, email, bài thơ, sơ đồ...
- **Tip:** Định dạng rõ ràng giúp AI tập trung hơn

### 💡 **Quy tắc vàng:**
**Luôn bắt đầu suy nghĩ về prompt theo 3 yếu tố R-T-F** - Đây là nền móng cho mọi prompt hiệu quả.

## 3.2. Kỹ thuật 1: Đưa ra ví dụ mẫu (Few-Shot Prompting)

> **"Cầm tay chỉ việc" - Phương pháp hiệu quả nhất để dạy AI**

### 🎯 **Bản chất của kỹ thuật:**

🔑 **Nguyên lý:**
- **Thay vì chỉ mô tả**, hãy cho AI **xem ví dụ cụ thể**
- AI sẽ **bắt chước định dạng** và **văn phong** của bạn
- Như việc **"chỉ tay five"** cho trẻ nhỏ học đếm

### 💡 **Ví dụ thực tế:**

**Prompt hiệu quả:**
```
"Tôi muốn tóm tắt công dụng thảo dược theo mẫu sau:

VÍ DỤ:
• Nhân sâm: Bổ khí, tăng cường thể lực, hỗ trợ tim mạch
• Đương quy: Bổ huyết, điều kinh, làm đẹp da

Bây giờ, hãy làm tương tự cho: Linh Chi, Hoàng kỳ, Cam thảo"
```

### 🎭 **Tại sao Few-Shot hiệu quả:**
- ✅ **AI hiểu rõ** format bạn muốn
- ✅ **Giảm thiểu** sự hiểu lầm
- ✅ **Kết quả nhất quán** về phong cách
- ✅ **Tiết kiệm thời gian** chỉnh sửa

## 3.3. Kỹ thuật 2: Chuỗi tư duy (Chain-of-Thought)

* Với nhiệm vụ phức tạp, đừng yêu cầu AI trả lời ngay.
* Hãy yêu cầu nó "suy nghĩ từng bước một".
* **Prompt:** "Phân tích ca bệnh sau. **Hãy suy nghĩ từng bước một.** Đầu tiên, liệt kê các triệu chứng chính. Thứ hai, biện luận theo tạng phủ. Cuối cùng, đề xuất bài thuốc."
* Kỹ thuật này buộc AI phải tư duy logic, giảm đáng kể sai sót.

## 3.4. Kỹ thuật 3: Xây dựng Persona (Nhân vật) chi tiết

* Đừng chỉ nói "đóng vai lương y". Hãy chi tiết hơn.
* **Prompt:** "Hãy đóng vai một lương y 40 năm kinh nghiệm, chuyên về các bệnh của phụ nữ, có văn phong từ tốn, uyên bác nhưng dễ hiểu. Mục tiêu của bạn là trấn an và giáo dục bệnh nhân."
* Persona càng chi tiết, câu trả lời của AI càng có "hồn" và phù hợp.

## 3.5. Kỹ thuật 4: Tinh chỉnh lặp lại (Iterative Refinement)

* Đừng mong có prompt hoàn hảo ngay lần đầu.
* Hãy xem câu trả lời đầu tiên của AI là bản nháp.
* Sau đó, ra lệnh để chỉnh sửa nó.
* **Các lệnh tinh chỉnh:** "Làm cho nó ngắn gọn hơn.", "Dùng ngôn ngữ đơn giản hơn cho người không có chuyên môn.", "Thêm các lưu ý về tác dụng phụ.", "Trình bày dưới dạng bảng."

## 3.6. Thực hành: Xây dựng Prompt cho Case Study

* **Case Study:** Bệnh nhân nam, 35 tuổi, lập trình viên, thường xuyên đau mỏi vai gáy, căng thẳng, khó ngủ.
* **Nhiệm vụ:** Xây dựng một prompt hoàn chỉnh để AI tư vấn cho bệnh nhân này.
* **Áp dụng:** Persona (lương y hiện đại), Chuỗi tư duy (phân tích nguyên nhân -> đề xuất giải pháp), Định dạng (gạch đầu dòng cho các lời khuyên).

## 3.7. Ví dụ giải bài tập xưởng thực hành

* **Prompt mẫu:** "Hãy đóng vai một lương y chuyên trị bệnh văn phòng. Phân tích ca bệnh sau và đưa ra lời khuyên. **Hãy làm từng bước:**
    1.  Phân tích nguyên nhân đau vai gáy ở lập trình viên theo cả YHHĐ và YHCT (phong hàn thấp, khí huyết ứ trệ).
    2.  Đề xuất 3 động tác tự xoa bóp đơn giản tại bàn làm việc.
    3.  Gợi ý một loại trà thảo dược giúp an thần, dễ ngủ.
    Trình bày câu trả lời với giọng văn thân thiện, dễ hiểu."

## 3.8. Tạo "Thư viện Prompt" của riêng bạn

* Khi bạn tạo ra một prompt hiệu quả, đừng để nó trôi đi.
* Hãy lưu lại vào một file Word, Google Docs, hoặc sổ tay.
* Phân loại theo chủ đề: Chẩn đoán, Tư vấn bệnh nhân, Marketing, Nghiên cứu...
* Theo thời gian, bạn sẽ có một "bảo bối" giúp tiết kiệm hàng giờ làm việc.

## 3.9. Những lỗi cần tránh khi viết Prompt

* **Mơ hồ:** "Nói về bệnh mất ngủ."
* **Quá tải:** Yêu cầu AI làm 10 việc trong một câu. Hãy tách ra.
* **Mâu thuẫn:** "Viết thật ngắn gọn nhưng phải thật chi tiết."
* **Giả định AI biết mọi thứ:** Luôn cung cấp ngữ cảnh cần thiết.
