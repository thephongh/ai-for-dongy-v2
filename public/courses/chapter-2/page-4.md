# AI "Tư Duy" Như Thế Nào: Sức Mạnh của sự "Chú Ý" (Attention)

![Attention Word Highlighting](../../images/chapter-2/2.4-attention-word-highlighting.png)

> **Khi nhận được prompt, AI không đọc tất cả các từ với tầm quan trọng như nhau.**

## 🧠 **Cơ chế "Sự Chú Ý" (Attention Mechanism)**

AI sử dụng một **hệ thống "tự động làm nổi bật"** để:
- ✨ Xác định từ nào là **quan trọng nhất**
- 🔗 Hiểu mối **liên quan** giữa các từ
- 🎯 Tập trung vào **thông tin then chốt**

## 📝 **Ví dụ thực tế:**

**Input:** *"Bệnh nhân nam, 65 tuổi, **đau lưng** âm ỉ, mỏi gối, **sợ lạnh**."*

**Cách AI "nhìn thấy":**
```
Bệnh nhân nam, 65 tuổi, [ĐAU LƯNG] âm ỉ, mỏi gối, [SỢ LẠNH].
          ↓              ↑                    ↑
    (ít quan trọng)  (rất quan trọng)    (rất quan trọng)
```

## 🔍 **Quá trình phân tích:**

### 1. **Trọng số cao:** "đau lưng" + "sợ lạnh"
- 🎯 Hai triệu chứng **then chốt** trong YHCT
- 🔗 Có **mối liên hệ mật thiết** với nhau
- 💡 Gợi ý về **thể trạng** và **phương pháp điều trị**

### 2. **Trọng số thấp:** "nam", "65 tuổi", "mỏi gối"
- 📊 Thông tin **bổ sung** nhưng không quyết định
- 🔄 Được **tham khảo** sau khi xác định chứng chính

## 👨‍⚕️ **So sánh với lương y:**

**Khi một lương y nghe bệnh nhân kể bệnh:**
- 👂 Não bộ **tự động tập trung** vào triệu chứng "chìa khóa"
- 🎯 **Biện chứng luận trị** dựa trên thông tin quan trọng
- 🚫 **Không sa đà** vào chi tiết không liên quan
- ⚡ **Kết nối nhanh** giữa các triệu chứng và hội chứng