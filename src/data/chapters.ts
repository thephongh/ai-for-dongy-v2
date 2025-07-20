import type { Chapter } from '../types/course';

export const chapters: Chapter[] = [
  {
    id: 'chapter-1',
    title: 'Khai Mở Tư Duy - AI và Y Học Cổ Truyền',
    content: `# Chương 1: Khai Mở Tư Duy - AI và Y Học Cổ Truyền

## 1.1. Chào mừng các Lương y đến với Tương Lai

> **Hôm nay, chúng ta sẽ bắc một cây cầu vững chắc nối liền tri thức ngàn năm với tương lai.**

### 🌉 **Hành trình kết nối:**
- 📚 Tri thức **ngàn năm** của Y Học Cổ Truyền
- ⚡ Sức mạnh **đột phá** của Trí Tuệ Nhân Tạo
- 🤝 Đây không phải là sự **thay thế**, mà là sự **tiếp nối và nâng tầm**
- 🔮 Cùng nhau khám phá **người trợ lý đắc lực** này

### 🎯 **Tầm nhìn:**
**AI không đến để thay thế lương y** - mà để giúp các bạn trở thành **phiên bản tốt nhất của chính mình**.

## 1.2. AI là gì? Một ví dụ Thân thuộc

> **Hãy tưởng tượng một vị Đại Y với trí nhớ siêu phàm...**

### 🧙‍♂️ **Chân dung vị "Đại Y" AI:**

📖 **Kiến thức bao la:**
- Đã đọc hết sách trong **"Tàng Kinh Các"** y học
- Từ **"Hoàng Đế Nội Kinh"** đến hàng triệu nghiên cứu hiện đại
- Nắm vững từ YHCT cổ điển đến y học phân tử tiên tiến

⚡ **Khả năng siêu phàm:**
- **Không bao giờ mệt mỏi**, không bao giờ quên
- Trả lời mọi câu hỏi trong **nháy mắt**
- Xử lý thông tin với tốc độ ánh sáng

🎯 **Đó chính là Trí Tuệ Nhân Tạo (AI)** - Một "thư viện sống" với khả năng tư duy và giao tiếp như con người.

### 💡 **Ví dụ thực tế:**
**Thay vì phải lật từng trang sách tìm công thức**, bạn chỉ cần hỏi: *"Bài thuốc nào trị Can khí uất kết?"* và nhận được đáp án chi tiết ngay lập tức.

## 1.3. Hệ Thống Y Khoa AI: AI, Machine Learning & LLM

> **Hiểu đúng bản chất để sử dụng hiệu quả**

### 🏠 **Kiến trúc "Ngôi nhà Trí Tuệ":**

🧠 **AI (Trí Tuệ Nhân Tạo):**
- Là **toàn bộ ngôi nhà** Trí Tuệ
- Bao gồm mọi khả năng "thông minh" của máy tính
- Từ nhận dạng giọng nói đến phân tích hình ảnh y khoa

📈 **Machine Learning (Học Máy):**
- Quá trình một **lương y tích lũy kinh nghiệm**
- Qua hàng vạn ca bệnh để **"bắt bệnh" ngày càng chuẩn**
- Máy tính cũng học tương tự: *càng thực hành, càng giỏi*

🌊 **LLM (Mô hình Ngôn ngữ Lớn):**
- Là **"biển kiến thức"** của vị lương y AI
- Chứa mọi văn bản, mọi kinh nghiệm y khoa
- Có khả năng **luận giải và diễn đạt** như con người

### 🔗 **Mối quan hệ:**
AI (Ngôi nhà) → Machine Learning (Phương pháp học) → LLM (Kho tri thức)

## 1.4. Tại sao Lương y cần quan tâm đến AI?

> **AI không phải xu hướng - mà là cuộc cách mạng trong y học**

### 🚀 **Lợi ích thiết thực cho lương y:**

⏰ **Tiết kiệm thời gian:**
- **Giảm giờ tra cứu**, tăng giờ **chăm sóc bệnh nhân**
- Tìm kiếm thông tin **tức thì** thay vì lật sách hàng giờ
- Tự động hóa các tác vụ **văn phòng** phức tạp

📚 **Nâng cao kiến thức:**
- Tiếp cận **tức thì** các nghiên cứu mới nhất
- Cập nhật kiến thức về **thảo dược, châm cứu** liên tục
- Học hỏi từ **kinh nghiệm toàn cầu**

🌍 **Mở rộng tầm nhìn:**
- Tham khảo các hướng **chẩn đoán đa chiều**
- Kết hợp **YHCT và y học hiện đại** một cách khoa học
- Tiếp cận **kho dữ liệu toàn cầu**

💫 **Tăng uy tín nghề nghiệp:**
- Giao tiếp với bệnh nhân **chuyên nghiệp hơn**
- Giải thích bệnh lý **cặn kẽ, dễ hiểu**
- Tăng **độ tin cậy** trong mắt bệnh nhân

### 📈 **Kết quả cuối cùng:**
**Bạn sẽ trở thành phiên bản 2.0 của chính mình** - một lương y hiện đại với sự hỗ trợ của trí tuệ nhân tạo.`,
    quiz: {
      id: 'chapter-1-quiz',
      chapterId: 'chapter-1',
      timeLimit: 20,
      passingScore: 75,
      questions: [
        {
          id: 'q1',
          type: 'multiple-choice',
          question: 'Theo nội dung chương 1, vai trò chính của AI đối với lương y là gì?',
          options: [
            'Thay thế hoàn toàn công việc của lương y trong tương lai.',
            'Một công cụ hỗ trợ giúp lương y nghiên cứu, soạn thảo và tham khảo thông tin hiệu quả hơn.',
            'Tự động bắt mạch và kê đơn mà không cần sự can thiệp của con người.',
            'Chỉ dùng để dịch thuật tài liệu y khoa.'
          ],
          correctAnswer: 'Một công cụ hỗ trợ giúp lương y nghiên cứu, soạn thảo và tham khảo thông tin hiệu quả hơn.',
          explanation: 'AI được định vị là một trợ lý đắc lực để nâng cao hiệu quả công việc, không phải để thay thế vai trò cốt lõi và trách nhiệm của người thầy thuốc.',
          points: 25
        },
        {
          id: 'q2',
          type: 'multiple-choice',
          question: 'Công việc nào sau đây AI KHÔNG THỂ thay thế được lương y?',
          options: [
            'Tóm tắt một nghiên cứu y khoa mới.',
            'Soạn thảo một bài đăng giới thiệu phòng khám.',
            'Thực hiện Vọng - Văn - Vấn - Thiết để chẩn đoán lâm sàng.',
            'Liệt kê các bài thuốc liên quan đến một hội chứng.'
          ],
          correctAnswer: 'Thực hiện Vọng - Văn - Vấn - Thiết để chẩn đoán lâm sàng.',
          explanation: 'AI không có giác quan, sự đồng cảm hay trực giác lâm sàng để thực hiện Tứ chẩn, vốn là kỹ năng cốt lõi và không thể thay thế của người thầy thuốc.',
          points: 25
        },
        {
          id: 'q3',
          type: 'multiple-choice',
          question: 'Trong phép so sánh "Hệ Thống Y Khoa AI", Machine Learning (Học Máy) được ví với điều gì?',
          options: [
            'Toàn bộ bệnh viện.',
            'Thư viện chứa tất cả sách vở.',
            'Quá trình một lương y tích lũy kinh nghiệm qua hàng vạn ca bệnh.',
            'Một loại thuốc đặc trị.'
          ],
          correctAnswer: 'Quá trình một lương y tích lũy kinh nghiệm qua hàng vạn ca bệnh.',
          explanation: 'Machine Learning là quá trình máy tính "học" từ dữ liệu để cải thiện khả năng của mình, tương tự như một lương y học hỏi qua kinh nghiệm thực tế.',
          points: 25
        },
        {
          id: 'q4',
          type: 'multiple-choice',
          question: 'Lầm tưởng phổ biến nào về AI đã được đề cập trong chương học?',
          options: [
            'AI rất dễ sử dụng và có nhiều công cụ miễn phí.',
            'AI chỉ là một công cụ hỗ trợ.',
            'AI quá phức tạp và sẽ thay thế hoàn toàn công việc của lương y.',
            'AI có thể giúp tiết kiệm thời gian.'
          ],
          correctAnswer: 'AI quá phức tạp và sẽ thay thế hoàn toàn công việc của lương y.',
          explanation: 'Chương 1 đã phá bỏ lầm tưởng này bằng cách khẳng định AI có giao diện đơn giản và vai trò của nó là hỗ trợ, không phải thay thế.',
          points: 25
        }
      ]
    }
  },
  {
    id: 'chapter-2',
    title: 'Giải Mã Ma Trận "Bộ Não" AI - Đào tạo, Tư duy và Giao tiếp',
    content: `# Chương 2: Giải Mã Ma Trận 'Bộ Não' AI - Đào tạo, Tư duy và Giao tiếp

## 2.1. LLM: "Bộ Não" của AI Tạo Sinh

**Hãy cùng khám phá bí mật đằng sau sức mạnh của AI hiện đại!**

* **Large (Lớn):** GPT-3 có **175 tỷ tham số** (nơ-ron). GPT-4 ước tính **~1 nghìn tỷ** - một con số khổng lồ không thể tưởng tượng!
* **Language (Ngôn ngữ):** Nó "đọc" và "học" từ một kho dữ liệu văn bản khổng lồ - từ Wikipedia đến hàng triệu cuốn sách y khoa.
* **Model (Mô hình):** Là một hệ thống toán học phức tạp được thiết kế để mô phỏng cách não bộ con người liên kết các ý tưởng và từ ngữ.

## 2.2. Giai đoạn 1: Đào Tạo Nền (Pre-training)

> **Đây là bước đầu tiên và tốn kém nhất để tạo ra một LLM.**

### 🔍 Cách thức hoạt động:
**AI được "thả" vào một "biển" dữ liệu khổng lồ** bao gồm:
- Toàn bộ Wikipedia (đa ngôn ngữ)
- Hàng triệu cuốn sách y khoa cổ điển và hiện đại
- Các trang báo khoa học uy tín
- Diễn đàn y khoa chuyên môn
- Cơ sở dữ liệu bệnh án (đã được ẩn danh hóa)

### 🎯 Mục tiêu cốt lõi:
**Không phải để trả lời câu hỏi** mà để học các **quy luật thống kê của ngôn ngữ**:
- Từ nào thường đi với từ nào
- Cấu trúc câu trong y học như thế nào
- Ngữ cảnh nào dẫn đến nội dung nào
- Mối liên hệ giữa các khái niệm y khoa

## 2.3. Giai đoạn 2: Tinh Chỉnh Chuyên Sâu (Fine-Tuning)

> **Kiến thức thô là chưa đủ. AI cần được "dạy dỗ" để trở nên hữu ích và an toàn.**

### 🔄 **RLHF - Học tăng cường từ phản hồi:**
1. **AI tạo ra 2-3 câu trả lời** cho cùng một câu hỏi
2. **Con người xếp hạng** câu nào tốt hơn (chính xác, an toàn, hữu ích)
3. **AI học từ sự lựa chọn** để tinh chỉnh phong cách trả lời
4. **Quá trình lặp lại** hàng nghìn lần để hoàn thiện

## 2.4. AI "Tư Duy" Như Thế Nào: Sức Mạnh của sự "Chú Ý" (Attention)

> **Khi nhận được prompt, AI không đọc tất cả các từ với tầm quan trọng như nhau.**

### 🧠 **Cơ chế "Sự Chú Ý" (Attention Mechanism)**

AI sử dụng một **hệ thống "tự động làm nổi bật"** để:
- ✨ Xác định từ nào là **quan trọng nhất**
- 🔗 Hiểu mối **liên quan** giữa các từ
- 🎯 Tập trung vào **thông tin then chốt**

### 📝 **Ví dụ thực tế:**

**Input:** *"Bệnh nhân nam, 65 tuổi, **đau lưng** âm ỉ, mỏi gối, **sợ lạnh**."*

**Cách AI "nhìn thấy":**
Bệnh nhân nam, 65 tuổi, [ĐAU LƯNG] âm ỉ, mỏi gối, [SỢ LẠNH].
      ↓              ↑                    ↑
(ít quan trọng)  (rất quan trọng)    (rất quan trọng)

## 2.5. Prompt và Ngữ Cảnh (Context)

* **Prompt:** Là **lời dặn ban đầu**, là câu hỏi khởi đầu, là nhiệm vụ bạn giao cho AI trong một lượt nói.
* **Ngữ cảnh (Context):** Là **toàn bộ "bệnh án" của cuộc trò chuyện**, bao gồm prompt khởi đầu của bạn và tất cả các câu hỏi-đáp đã diễn ra trước đó.

## 2.6. Cửa sổ ngữ cảnh (Context Window)

* Là "trí nhớ ngắn hạn" của AI trong một cuộc trò chuyện.
* **GPT-4 (OpenAI):** có thể nhớ khoảng 32,000 tokens (~24,000 từ).
* **Claude 3 (Anthropic):** có cửa sổ ngữ cảnh lên tới 200,000 tokens!
* Tương đương khả năng "đọc" và "nhớ" toàn bộ một cuốn sách dày.`,
    quiz: {
      id: 'chapter-2-quiz',
      chapterId: 'chapter-2',
      timeLimit: 20,
      passingScore: 75,
      questions: [
        {
          id: 'q1',
          type: 'multiple-choice',
          question: 'Cơ chế học tập cốt lõi của một Mô hình Ngôn ngữ Lớn (LLM) là gì?',
          options: [
            'Hiểu được đúng/sai một cách có ý thức.',
            'Dự đoán từ hợp lý nhất để điền vào chỗ trống dựa trên xác suất thống kê.',
            'Chỉ ghi nhớ và sao chép lại chính xác những gì đã đọc.',
            'Thực hiện các phép tính toán học phức tạp.'
          ],
          correctAnswer: 'Dự đoán từ hợp lý nhất để điền vào chỗ trống dựa trên xác suất thống kê.',
          explanation: 'Bản chất của LLM là một cỗ máy dự đoán từ tiếp theo, từ đó học được các quy luật về ngôn ngữ và kiến thức.',
          points: 25
        },
        {
          id: 'q2',
          type: 'multiple-choice',
          question: 'Yếu tố nào được ví như "Vua" khi làm việc với AI để có được câu trả lời chính xác?',
          options: [
            'Tốc độ gõ phím.',
            'Ngữ cảnh (Context) được cung cấp trong prompt.',
            'Độ dài của câu hỏi.',
            'Sử dụng thuật ngữ thật phức tạp.'
          ],
          correctAnswer: 'Ngữ cảnh (Context) được cung cấp trong prompt.',
          explanation: 'Cung cấp ngữ cảnh rõ ràng (bạn là ai, bạn cần gì, cho mục đích gì) giúp AI hiểu đúng yêu cầu và đưa ra câu trả lời phù hợp nhất.',
          points: 25
        },
        {
          id: 'q3',
          type: 'multiple-choice',
          question: 'Cấu trúc một prompt cơ bản (R-T-F) bao gồm những yếu tố nào?',
          options: [
            'Review - Teach - Finish (Xem lại - Dạy - Kết thúc)',
            'Read - Think - Feedback (Đọc - Suy nghĩ - Phản hồi)',
            'Role - Task - Format (Vai trò - Nhiệm vụ - Định dạng)',
            'Rule - Time - Function (Quy tắc - Thời gian - Chức năng)'
          ],
          correctAnswer: 'Role - Task - Format (Vai trò - Nhiệm vụ - Định dạng)',
          explanation: 'Một prompt hiệu quả thường bắt đầu bằng việc xác định Vai trò cho AI, giao Nhiệm vụ cụ thể và yêu cầu một Định dạng đầu ra mong muốn.',
          points: 25
        },
        {
          id: 'q4',
          type: 'multiple-choice',
          question: '"Cửa sổ ngữ cảnh" (Context Window) của AI là gì?',
          options: [
            'Toàn bộ kiến thức mà AI đã học.',
            'Một chương trình AI riêng biệt.',
            '"Trí nhớ ngắn hạn" của AI trong một cuộc trò chuyện.',
            'Nơi lưu trữ các câu trả lời đúng.'
          ],
          correctAnswer: '"Trí nhớ ngắn hạn" của AI trong một cuộc trò chuyện.',
          explanation: 'Cửa sổ ngữ cảnh là khả năng AI "nhớ" những gì đã được nói trước đó trong cùng một phiên làm việc, nhưng nó có giới hạn.',
          points: 25
        }
      ]
    }
  },
  {
    id: 'chapter-3',
    title: 'Nghệ Thuật Giao Tiếp với AI - Prompt Nâng Cao',
    content: `# Chương 3: Nghệ Thuật Giao Tiếp với AI - Prompt Nâng Cao

## 3.1. Ôn lại cấu trúc Prompt hiệu quả (R-T-F)

> **Nền tảng vững chắc cho mọi cuộc đối thoại với AI**

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
"Tôi muốn tóm tắt công dụng thảo dược theo mẫu sau:

VÍ DỤ:
• Nhân sâm: Bổ khí, tăng cường thể lực, hỗ trợ tim mạch
• Đương quy: Bổ huyết, điều kinh, làm đẹp da

Bây giờ, hãy làm tương tự cho: Linh Chi, Hoàng kỳ, Cam thảo"

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

## 3.6. Tạo "Thư viện Prompt" của riêng bạn

* Khi bạn tạo ra một prompt hiệu quả, đừng để nó trôi đi.
* Hãy lưu lại vào một file Word, Google Docs, hoặc sổ tay.
* Phân loại theo chủ đề: Chẩn đoán, Tư vấn bệnh nhân, Marketing, Nghiên cứu...
* Theo thời gian, bạn sẽ có một "bảo bối" giúp tiết kiệm hàng giờ làm việc.

## 3.7. Những lỗi cần tránh khi viết Prompt

* **Mơ hồ:** "Nói về bệnh mất ngủ."
* **Quá tải:** Yêu cầu AI làm 10 việc trong một câu. Hãy tách ra.
* **Mâu thuẫn:** "Viết thật ngắn gọn nhưng phải thật chi tiết."
* **Giả định AI biết mọi thứ:** Luôn cung cấp ngữ cảnh cần thiết.`,
    quiz: {
      id: 'chapter-3-quiz',
      chapterId: 'chapter-3',
      timeLimit: 20,
      passingScore: 75,
      questions: [
        {
          id: 'q1',
          type: 'multiple-choice',
          question: 'Công thức R-T-F trong viết prompt hiệu quả bao gồm những yếu tố nào?',
          options: [
            'Read - Think - Format',
            'Role - Task - Format',
            'Research - Test - Feedback',
            'Reason - Target - Function'
          ],
          correctAnswer: 'Role - Task - Format',
          explanation: 'R-T-F là viết tắt của Role (Vai trò), Task (Nhiệm vụ), và Format (Định dạng) - ba yếu tố cốt lõi của một prompt hiệu quả.',
          points: 25
        },
        {
          id: 'q2',
          type: 'multiple-choice',
          question: 'Kỹ thuật Few-Shot Prompting hoạt động dựa trên nguyên lý nào?',
          options: [
            'Đưa ra càng nhiều câu hỏi càng tốt.',
            'Cho AI xem ví dụ cụ thể để bắt chước định dạng và văn phong.',
            'Sử dụng từ ngữ phức tạp để gây ấn tượng.',
            'Viết prompt càng dài càng chi tiết.'
          ],
          correctAnswer: 'Cho AI xem ví dụ cụ thể để bắt chước định dạng và văn phong.',
          explanation: 'Few-Shot Prompting là kỹ thuật "cầm tay chỉ việc" - thay vì chỉ mô tả, bạn cho AI xem ví dụ cụ thể để nó học theo.',
          points: 25
        },
        {
          id: 'q3',
          type: 'multiple-choice',
          question: 'Kỹ thuật Chain-of-Thought (Chuỗi tư duy) có tác dụng gì?',
          options: [
            'Tăng tốc độ phản hồi của AI.',
            'Buộc AI phải tư duy logic từng bước, giảm sai sót.',
            'Giúp AI hiểu được cảm xúc con người.',
            'Làm cho câu trả lời ngắn gọn hơn.'
          ],
          correctAnswer: 'Buộc AI phải tư duy logic từng bước, giảm sai sót.',
          explanation: 'Chain-of-Thought yêu cầu AI "suy nghĩ từng bước một", giúp quá trình phân tích logic hơn và giảm thiểu sai sót.',
          points: 25
        },
        {
          id: 'q4',
          type: 'multiple-choice',
          question: 'Lỗi nào sau đây cần tránh khi viết prompt?',
          options: [
            'Cung cấp ngữ cảnh rõ ràng.',
            'Yêu cầu AI làm 10 việc trong một câu.',
            'Sử dụng động từ cụ thể.',
            'Đưa ra ví dụ minh họa.'
          ],
          correctAnswer: 'Yêu cầu AI làm 10 việc trong một câu.',
          explanation: 'Yêu cầu quá nhiều việc trong một prompt sẽ làm AI bối rối và cho kết quả kém chất lượng. Nên tách thành nhiều prompt riêng biệt.',
          points: 25
        }
      ]
    }
  },
  {
    id: 'chapter-4',
    title: 'AI Trợ Lý Toàn Năng - Ứng Dụng Lâm Sàng và Quản Lý',
    content: `# Chương 4: AI Trợ Lý Toàn Năng - Ứng Dụng Lâm Sàng và Quản Lý

## 4.1. Luồng làm việc an toàn với AI trong chẩn đoán

> **An toàn là ưu tiên số 1 - AI chỉ là cố vấn, không bao giờ thay thế lương y**

### 🛡️ **Quy trình 4 bước BẢNG VÀNG:**

1. **👨‍⚕️ Bước 1 (Lương y chủ động):**
   - **Khám bệnh trực tiếp** (Tứ chẩn: Vọng, Văn, Vấn, Thiết)
   - **Thu thập thông tin gốc** từ bệnh nhân
   - **Đưa ra chẩn đoán sơ bộ** dựa trên kinh nghiệm

2. **🤖 Bước 2 (AI hỗ trợ):**
   - Sử dụng AI như **người cố vấn chuyên môn**
   - Nhập thông tin **đã ẩn danh hóa** để bảo mật
   - **Tham khảo, tìm kiếm, so sánh** các phương án

3. **🔍 Bước 3 (Lương y phân tích):**
   - **Sàng lọc thông tin** từ AI một cách cẩn thận
   - **Đối chiếu** với kiến thức và kinh nghiệm lâm sàng
   - **Loại bỏ** những gợi ý không phù hợp

4. **✅ Bước 4 (Lương y quyết định):**
   - **Người duy nhất** đưa ra quyết định cuối cùng
   - **Chịu trách nhiệm** hoàn toàn về chẩn đoán và điều trị
   - **AI không bao giờ** thay thế được vai trò này

### ⚠️ **Nguyên tắc quan trọng:**
- **Bệnh nhân luôn là trung tâm**
- **Lương y luôn kiểm soát quy trình**
- **AI chỉ là công cụ hỗ trợ**

## 4.2. Case Study 1: Chứng Mất Ngủ (Thất miên)

* **Tình huống:** Bệnh nhân nữ, 50 tuổi, mất ngủ sau mãn kinh, khó vào giấc, hay tỉnh giấc, kèm bốc hỏa, ra mồ hôi trộm, lòng bàn tay chân nóng, miệng khô, lưỡi đỏ ít rêu.

* **Câu lệnh Prompt chi tiết:**
"Hãy đóng vai một danh y YHCT. Phân tích ca bệnh sau và tư vấn. **Hãy suy nghĩ từng bước một:**
1. Dựa trên các triệu chứng (nữ, 50t, mất ngủ, bốc hỏa, đạo hãn, ngũ tâm phiền nhiệt), biện chứng đây là hội chứng gì theo tạng phủ? Giải thích ngắn gọn cơ chế.
2. Đề xuất một bài thuốc cổ phương kinh điển phù hợp nhất và các vị thuốc có thể gia giảm để tăng hiệu quả an thần.
3. Gợi ý 3 huyệt vị chính để bệnh nhân có thể tự day ấn tại nhà nhằm cải thiện giấc ngủ.
4. Soạn 3 lời khuyên về chế độ ăn uống và sinh hoạt.
Trình bày với văn phong từ tốn, giải thích rõ ràng cho người không có chuyên môn."

## 4.3. Case Study 2: Đau Thần Kinh Tọa (Tọa cốt phong)

* **Tình huống:** Bệnh nhân nam, 45 tuổi, làm nghề lái xe, đau nhói từ thắt lưng lan xuống mặt sau đùi và cẳng chân phải, đi lại khó khăn, trời lạnh đau tăng, rêu lưỡi trắng mỏng.

* **Phân tích lợi ích của AI:**
  * **Toàn diện và chi tiết:** Giúp bạn nhanh chóng lập ra một kế hoạch điều trị đa phương thức (Thuốc - Châm cứu - Lối sống) một cách có hệ thống.
  * **Hỗ trợ học thuật:** Yêu cầu AI giải thích vai trò của các vị thuốc giúp bạn củng cố và ôn lại kiến thức ngay trong lúc làm việc.
  * **Cá nhân hóa:** Dựa trên nghề nghiệp (lái xe), AI có thể đưa ra những lời khuyên rất cụ thể và thiết thực về tư thế ngồi.

## 4.4. Case Study 3: Rối Loạn Tiêu Hóa (Tỳ Vị hư hàn)

* **Tình huống:** Bệnh nhân nữ, 28 tuổi, nhân viên văn phòng, hay bị đầy bụng, khó tiêu sau khi ăn, ăn đồ lạnh vào là đau bụng đi ngoài, phân lỏng, người mệt mỏi, chân tay lạnh, sắc mặt nhợt nhạt.

* **Phân tích lợi ích của AI:**
  * **Chuyên môn hóa sâu:** AI có thể nhanh chóng tạo ra một thực đơn chi tiết, điều mà một lương y có thể không có đủ thời gian để làm trong một buổi khám.
  * **Sáng tạo trong diễn đạt:** AI rất giỏi trong việc tạo ra các phép ẩn dụ, so sánh (ví Tỳ Vị như bếp lửa) giúp bệnh nhân dễ hình dung và tuân thủ điều trị tốt hơn.
  * **Tiết kiệm công sức:** Thay vì tự mình tra cứu và lên thực đơn, bạn có thể có một bản nháp chất lượng chỉ trong vài giây, sau đó chỉnh sửa lại cho phù hợp.

## 4.5. Chuyển sang Quản lý: AI giúp bạn phát triển phòng khám

* Sau khi đã thấy sức mạnh của AI trong lâm sàng, hãy nhớ rằng nó cũng là một trợ thủ đắc lực cho việc kinh doanh.
* Nó giúp bạn làm marketing và quản lý hiệu quả mà không tốn nhiều công sức.
* Hãy coi AI như một nhân viên marketing và hành chính mẫn cán của bạn.

## 4.6. Ứng dụng quản lý 1: Xây dựng thương hiệu và Marketing

* **Prompt (Nội dung Website):** "Viết một đoạn 'Giới thiệu' cho website phòng khám YHCT của tôi, nhấn mạnh vào triết lý 'Chữa bệnh tận gốc, chăm sóc tận tâm'."
* **Prompt (Mạng xã hội):** "Lên kế hoạch nội dung cho fanpage Facebook trong 1 tuần, gồm 3 bài viết về kiến thức YHCT, 2 bài giới thiệu dịch vụ và 1 video hỏi đáp."
* Thu hút bệnh nhân mới một cách chuyên nghiệp.`,
    quiz: {
      id: 'chapter-4-quiz',
      chapterId: 'chapter-4',
      timeLimit: 20,
      passingScore: 75,
      questions: [
        {
          id: 'q1',
          type: 'multiple-choice',
          question: 'Trong quy trình 4 bước BẢNG VÀNG khi sử dụng AI hỗ trợ chẩn đoán, ai là người đưa ra quyết định cuối cùng?',
          options: [
            'AI sẽ tự động đưa ra quyết định dựa trên dữ liệu.',
            'Lương y là người duy nhất đưa ra quyết định cuối cùng.',
            'Bệnh nhân sẽ tự quyết định dựa trên thông tin từ AI.',
            'Cần có sự đồng thuận giữa AI và lương y.'
          ],
          correctAnswer: 'Lương y là người duy nhất đưa ra quyết định cuối cùng.',
          explanation: 'Theo quy trình an toàn, lương y luôn là người chịu trách nhiệm và đưa ra quyết định cuối cùng. AI chỉ đóng vai trò cố vấn và hỗ trợ.',
          points: 25
        },
        {
          id: 'q2',
          type: 'multiple-choice',
          question: 'Khi nhập thông tin bệnh nhân vào AI để tham khảo, điều quan trọng nhất cần làm là gì?',
          options: [
            'Nhập đầy đủ thông tin cá nhân để AI phân tích chính xác.',
            'Ẩn danh hóa thông tin để bảo mật dữ liệu bệnh nhân.',
            'Chỉ nhập các triệu chứng nghiêm trọng.',
            'Dịch thông tin sang tiếng Anh để AI hiểu rõ hơn.'
          ],
          correctAnswer: 'Ẩn danh hóa thông tin để bảo mật dữ liệu bệnh nhân.',
          explanation: 'Bảo mật thông tin bệnh nhân là ưu tiên hàng đầu. Phải ẩn danh hóa tất cả thông tin có thể định danh cá nhân trước khi nhập vào AI.',
          points: 25
        },
        {
          id: 'q3',
          type: 'multiple-choice',
          question: 'Lợi ích nào của AI được nhấn mạnh trong Case Study về Rối Loạn Tiêu Hóa?',
          options: [
            'AI có thể thay thế hoàn toàn việc khám bệnh.',
            'AI giúp tạo ra thực đơn chi tiết và sáng tạo trong diễn đạt cho bệnh nhân.',
            'AI có thể tự động kê đơn thuốc.',
            'AI giúp chẩn đoán chính xác 100%.'
          ],
          correctAnswer: 'AI giúp tạo ra thực đơn chi tiết và sáng tạo trong diễn đạt cho bệnh nhân.',
          explanation: 'AI có thể nhanh chóng tạo ra thực đơn chi tiết và sử dụng các phép ẩn dụ sáng tạo giúp bệnh nhân dễ hiểu và tuân thủ điều trị.',
          points: 25
        },
        {
          id: 'q4',
          type: 'multiple-choice',
          question: 'AI có thể hỗ trợ lương y trong lĩnh vực nào ngoài lâm sàng?',
          options: [
            'Chỉ có thể hỗ trợ trong chẩn đoán bệnh.',
            'Marketing và quản lý phòng khám.',
            'Chỉ hỗ trợ trong việc kê đơn thuốc.',
            'Không thể hỗ trợ ngoài lĩnh vực y khoa.'
          ],
          correctAnswer: 'Marketing và quản lý phòng khám.',
          explanation: 'AI có thể hỗ trợ đa dạng từ lâm sàng đến quản lý kinh doanh, bao gồm viết nội dung website, lập kế hoạch marketing và quản lý hành chính.',
          points: 25
        }
      ]
    }
  },
  {
    id: 'chapter-5',
    title: 'Tinh Tường và An Toàn - Đạo Đức và Đánh Giá AI',
    content: `# Chương 5: Tinh Tường và An Toàn - Đạo Đức và Đánh Giá AI

## 5.1. Nguyên tắc đạo đức hàng đầu: Lợi ích của bệnh nhân là trên hết

> **Bệnh nhân là trung tâm - mọi quyết định đều hướng về họ**

### ❤️ **Nguyên tắc cốt lõi:**

🎯 **Mục đích duy nhất:**
- Mọi ứng dụng AI đều phải quy về một mục đích: **Mang lại lợi ích tốt nhất cho người bệnh**
- AI phục vụ bệnh nhân, không phục vụ sự tiện lợi của lương y

🚫 **Tránh những cạm bẫy:**
- **Không** sử dụng AI chỉ vì nó mới lạ
- **Không** áp dụng AI để tiết kiệm công sức một cách mù quáng
- **Không** để AI thay thế sự quan tâm chân thực với bệnh nhân

### 🤔 **Câu hỏi tự kiểm:**
**"Việc dùng AI ở đây có thực sự giúp bệnh nhân của mình tốt hơn không?"**

- ✅ **Có:** Tiếp tục sử dụng và cải thiện
- ❌ **Không:** Dừng lại và tìm cách khác
- 🤷 **Không chắc:** Tham khảo đồng nghiệp và nghiên cứu thêm

### 💝 **Trái tim của nghề y:**
**Công nghệ hiện đại nhất cũng không thể thay thế được trái tim nhân ái của một lương y.**

## 5.2. Vấn đề cốt lõi: AI có thể "ảo giác" (Hallucination)

* "Ảo giác" là khi AI tự tin bịa ra thông tin không có thật.
* Nó xảy ra vì AI chỉ dựa vào xác suất thống kê, không có nhận thức về đúng/sai.
* **Ví dụ:** AI có thể "chế" ra một nghiên cứu không tồn tại hoặc một công dụng không có thật của thảo dược.
* **Đây là lý do bạn không bao giờ được tin tưởng AI 100%.**

## 5.3. Kỹ năng quan trọng: Đánh giá và xác minh thông tin

* Hãy trở thành một "người gác cổng" thông thái.
* **Quy tắc 3 nguồn:** Luôn đối chiếu thông tin quan trọng từ AI với ít nhất 2 nguồn đáng tin cậy khác (sách chuyên ngành, tạp chí y khoa, website uy tín).
* **Kiểm tra tính hợp lý:** Thông tin AI đưa ra có phù hợp với những kiến thức nền tảng và kinh nghiệm của bạn không?
* **Ưu tiên kinh nghiệm lâm sàng:** Nếu AI nói A và kinh nghiệm của bạn nói B, hãy tin vào kinh nghiệm của mình và tìm thêm bằng chứng.

## 5.4. Case study về "ảo giác": Bài thuốc không tồn tại

* **Prompt:** "Gợi ý một bài thuốc cổ phương ít người biết để trị chứng Can khí uất kết."
* **AI có thể trả lời:** "Bạn có thể dùng bài 'An Thần Giải Uất Thang' trong sách 'Thảo Dược Bí Truyền'."
* **Vấn đề:** Có thể cả bài thuốc và cuốn sách đó đều do AI tự bịa ra.
* **Cách xử lý:** Tra cứu tên bài thuốc và tên sách trên các nguồn thư viện y học uy tín để xác thực.

## 5.5. Bảo mật thông tin bệnh nhân: Lời thề Hippocrates trong thời đại số

* **KHÔNG BAO GIỜ** nhập thông tin có thể định danh cá nhân vào các công cụ AI công cộng.
* **Thông tin định danh bao gồm:** Tên, ngày sinh, số điện thoại, địa chỉ, số CMND/CCCD, và cả những câu chuyện riêng tư có thể truy ra họ là ai.
* **Cách làm đúng:** "Bệnh nhân nữ, 42 tuổi, giáo viên, bị đau đầu vùng đỉnh..." (Đã ẩn danh)
* Vi phạm bảo mật có thể gây hậu quả pháp lý nghiêm trọng.

## 5.6. Vấn đề Thiên kiến (Bias) trong AI

* AI học từ dữ liệu do con người tạo ra, vì vậy nó có thể học cả những thiên kiến của chúng ta.
* **Ví dụ:** Nếu dữ liệu huấn luyện chủ yếu là về nam giới, AI có thể chẩn đoán bệnh ở nữ giới kém chính xác hơn.
* Luôn ý thức rằng thông tin từ AI có thể không hoàn toàn khách quan.
* Hãy cân nhắc các yếu tố cá thể hóa của từng bệnh nhân.

## 5.7. Trách nhiệm pháp lý: Ai chịu trách nhiệm khi có sai sót?

* **Câu trả lời luôn là: BẠN.**
* Pháp luật hiện hành coi AI là một công cụ, tương tự như máy đo huyết áp hay máy châm cứu.
* Người sử dụng công cụ phải chịu trách nhiệm cuối cùng cho các quyết định dựa trên nó.
* Hãy ghi chép cẩn thận trong hồ sơ bệnh án, nêu rõ bạn đã tham khảo thông tin từ đâu và lý do đưa ra quyết định của mình.

## 5.8. Xây dựng một checklist an toàn cá nhân

* Trước khi áp dụng một thông tin từ AI, hãy tự kiểm tra:
* [ ] Thông tin này có quan trọng đến an toàn của bệnh nhân không?
* [ ] Mình đã xác minh nó từ nguồn khác chưa?
* [ ] Nó có mâu thuẫn với kinh nghiệm của mình không?
* [ ] Mình đã loại bỏ hết thông tin cá nhân của bệnh nhân khỏi prompt chưa?
* [ ] Mình có sẵn sàng chịu trách nhiệm cho quyết định này không?`,
    quiz: {
      id: 'chapter-5-quiz',
      chapterId: 'chapter-5',
      timeLimit: 20,
      passingScore: 75,
      questions: [
        {
          id: 'q1',
          type: 'multiple-choice',
          question: 'Nguyên tắc đạo đức hàng đầu khi sử dụng AI trong y học là gì?',
          options: [
            'Tăng hiệu quả công việc của lương y.',
            'Mang lại lợi ích tốt nhất cho người bệnh.',
            'Giảm chi phí điều trị.',
            'Áp dụng công nghệ tiên tiến nhất.'
          ],
          correctAnswer: 'Mang lại lợi ích tốt nhất cho người bệnh.',
          explanation: 'Bệnh nhân luôn là trung tâm - mọi ứng dụng AI đều phải hướng về mục đích mang lại lợi ích tốt nhất cho người bệnh.',
          points: 25
        },
        {
          id: 'q2',
          type: 'multiple-choice',
          question: '"Ảo giác" (Hallucination) của AI là gì?',
          options: [
            'AI bị lỗi kỹ thuật và không thể hoạt động.',
            'AI tự tin bịa ra thông tin không có thật.',
            'AI không thể hiểu được câu hỏi của người dùng.',
            'AI trả lời chậm do quá tải hệ thống.'
          ],
          correctAnswer: 'AI tự tin bịa ra thông tin không có thật.',
          explanation: 'Ảo giác xảy ra khi AI dựa vào xác suất thống kê để tạo ra thông tin không có thật nhưng nghe có vẻ hợp lý, do AI không có nhận thức về đúng/sai.',
          points: 25
        },
        {
          id: 'q3',
          type: 'multiple-choice',
          question: 'Quy tắc nào được khuyến nghị để xác minh thông tin từ AI?',
          options: [
            'Tin tưởng hoàn toàn vào AI vì nó được huấn luyện từ dữ liệu lớn.',
            'Quy tắc 3 nguồn: đối chiếu với ít nhất 2 nguồn đáng tin cậy khác.',
            'Chỉ cần kiểm tra nếu thông tin nghe có vẻ lạ.',
            'Sử dụng nhiều AI khác nhau để so sánh câu trả lời.'
          ],
          correctAnswer: 'Quy tắc 3 nguồn: đối chiếu với ít nhất 2 nguồn đáng tin cậy khác.',
          explanation: 'Để đảm bảo tính chính xác, thông tin quan trọng từ AI cần được đối chiếu với ít nhất 2 nguồn đáng tin cậy khác như sách chuyên ngành, tạp chí y khoa.',
          points: 25
        },
        {
          id: 'q4',
          type: 'multiple-choice',
          question: 'Ai chịu trách nhiệm pháp lý cuối cùng khi có sai sót trong việc sử dụng AI?',
          options: [
            'Công ty phát triển AI.',
            'Lương y sử dụng AI.',
            'Cả lương y và AI cùng chịu trách nhiệm.',
            'Không ai chịu trách nhiệm vì đây là công nghệ mới.'
          ],
          correctAnswer: 'Lương y sử dụng AI.',
          explanation: 'Pháp luật coi AI là một công cụ, người sử dụng công cụ (lương y) phải chịu trách nhiệm cuối cùng cho các quyết định dựa trên nó.',
          points: 25
        }
      ]
    }
  },
  {
    id: 'chapter-6',
    title: 'Con Đường Phía Trước - Tích Hợp và Phát Triển',
    content: `# Chương 6: Con Đường Phía Trước - Tích Hợp và Phát Triển

## 6.1. Tổng kết những gì đã học

> **Hành trình đã qua - Kiến thức đã có - Sẵn sàng bước tiếp**

### 🎓 **Những kiến thức đã chinh phục:**

🧠 **1. Hiểu rõ bản chất AI:**
- AI là gì và hoạt động ra sao
- Vai trò như một **người trợ lý thông minh**
- Khả năng và **giới hạn** của AI

💬 **2. Nghệ thuật giao tiếp với AI:**
- Kỹ thuật **prompting** hiệu quả
- Cấu trúc **R-T-F** (Role-Task-Format)
- **Few-shot** và **Chain-of-Thought**

🏥 **3. Ứng dụng thực tế:**
- Hỗ trợ **chẩn đoán** và điều trị
- Quản lý **hành chính** hiệu quả
- **Case studies** thực tế

🛡️ **4. Sử dụng an toàn và có trách nhiệm:**
- **Đạo đức** trong ứng dụng AI
- **Xác minh** thông tin
- **Bảo mật** dữ liệu bệnh nhân

### 🌟 **Kết quả:**
**Bạn đã sẵn sàng trở thành một lương y hiện đại** - kết hợp tinh hoa y học cổ truyền với sức mạnh của trí tuệ nhân tạo.

## 6.2. Lộ trình 4 tuần để trở thành Lương y 4.0

> **Từ người mới bắt đầu đến chuyên gia AI trong 4 tuần**

### 🗓️ **Roadmap chi tiết:**

### 📅 **Tuần 1: Khám phá**
🎯 **Mục tiêu:** Làm quen giao diện, không ngại thử nghiệm

**Hoạt động hàng ngày (15 phút):**
- Hỏi AI những **câu hỏi đơn giản** về công việc
- Thử nghiệm **các prompt cơ bản**
- **Không sợ sai**, chỉ cần học hỏi

**Milestone:** Thoải mái sử dụng giao diện AI

---

### 📅 **Tuần 2: Ứng dụng**
🎯 **Mục tiêu:** Tiết kiệm được **1 giờ làm việc** trong tuần

**Hoạt động:**
- Chọn **1 công việc giấy tờ** (viết bài, soạn email)
- Để AI **làm giúp và chỉnh sửa**
- Đo lường **thời gian tiết kiệm** được

**Milestone:** AI giúp tăng hiệu suất công việc

---

### 📅 **Tuần 3: Tích hợp**
🎯 **Mục tiêu:** Tập thói quen **đối chiếu thông tin**

**Hoạt động:**
- Thử dùng AI tham khảo cho **1-2 ca bệnh** không phức tạp
- **Luôn xác minh** thông tin từ AI
- **Ghi chép** những gì học được

**Milestone:** Tự tin sử dụng AI hỗ trợ lâm sàng

---

### 📅 **Tuần 4: Sáng tạo**
🎯 **Mục tiêu:** Cá nhân hóa AI thành **trợ lý riêng**

**Hoạt động:**
- Xây dựng **3 prompt "tủ"** cho công việc thường gặp
- **Tối ưu hóa** các prompt theo phong cách của bạn
- **Chia sẻ** kinh nghiệm với đồng nghiệp

**Milestone:** Có bộ công cụ AI cá nhân hoàn chỉnh

### 🏆 **Kết quả mong đợi:**
**Sau 4 tuần, bạn sẽ trở thành một Lương y 4.0** - tự tin sử dụng AI như một phần tự nhiên trong công việc.

## 6.3. Xây dựng thói quen học tập suốt đời

* Công nghệ AI phát triển theo từng ngày. Kiến thức hôm nay có thể cũ vào ngày mai.
* Hãy tạo thói quen cập nhật:
* **Đọc:** Theo dõi 1-2 trang tin tức về AI trong y tế.
* **Xem:** Xem các video ngắn giải thích về các tính năng AI mới.
* **Thảo luận:** Tham gia các hội nhóm, diễn đàn của các lương y cùng quan tâm đến công nghệ để trao đổi kinh nghiệm.

## 6.4. Các công cụ và tài nguyên hữu ích

* **Công cụ AI chính:** ChatGPT, Google Gemini, Claude.
* **Để tra cứu nghiên cứu:** Google Scholar, PubMed (có thể dùng AI để tóm tắt bài báo từ đây).
* **Cộng đồng Việt Nam:** Các nhóm Facebook như "AI trong Y Tế" hoặc các diễn đàn dành cho giới y khoa.
* **Từ khóa để tìm kiếm:** "prompt engineering for doctors", "AI in traditional medicine", "LLM in healthcare".

## 6.5. Tương lai của AI trong YHCT: Ngoài LLM

* **AI phân tích hình ảnh:** Phân tích hình ảnh lưỡi, ảnh chụp da để hỗ trợ vọng chẩn.
* **AI phân tích dữ liệu:** Tìm ra các quy luật mới từ hàng ngàn hồ sơ bệnh án (đã ẩn danh) để khám phá hiệu quả của các bài thuốc.
* **AI cá nhân hóa:** Gợi ý các phác đồ điều trị được "may đo" riêng cho từng bệnh nhân dựa trên cơ địa và lối sống của họ.

## 6.6. Thách thức và Cơ hội

* **Thách thức:** Cần có bộ dữ liệu lớn và chất lượng về YHCT để "dạy" cho AI; vấn đề bảo mật và pháp lý.
* **Cơ hội:** Chuẩn hóa và hiện đại hóa YHCT; chứng minh hiệu quả bằng dữ liệu lớn; đưa YHCT Việt Nam vươn ra thế giới.
* Chính các bạn, những lương y tiên phong, là người sẽ biến những cơ hội này thành hiện thực.

## 6.7. Lời kết: Người Thầy Thuốc của Tương Lai

* Người thầy thuốc của tương lai không phải là người biết tuốt, mà là người biết cách hỏi đúng câu hỏi.
* Họ không chỉ dựa vào kinh nghiệm cá nhân, mà còn biết cách tận dụng trí tuệ tập thể của nhân loại thông qua AI.
* Họ vẫn giữ trọn y đức và sự tận tâm, nhưng với những công cụ mạnh mẽ hơn trong tay.
* Chúc mừng bạn đã hoàn thành khóa học và sẵn sàng trở thành người thầy thuốc của tương lai.`,
    quiz: {
      id: 'chapter-6-quiz',
      chapterId: 'chapter-6',
      timeLimit: 20,
      passingScore: 75,
      questions: [
        {
          id: 'q1',
          type: 'multiple-choice',
          question: 'Trong lộ trình 4 tuần để trở thành Lương y 4.0, mục tiêu của tuần 1 là gì?',
          options: [
            'Tự tin sử dụng AI hỗ trợ lâm sàng.',
            'Làm quen giao diện, không ngại thử nghiệm.',
            'Tiết kiệm được 1 giờ làm việc trong tuần.',
            'Xây dựng 3 prompt "tủ" cho công việc.'
          ],
          correctAnswer: 'Làm quen giao diện, không ngại thử nghiệm.',
          explanation: 'Tuần 1 tập trung vào việc khám phá và làm quen với AI, mục tiêu là thoải mái sử dụng giao diện mà không sợ sai.',
          points: 25
        },
        {
          id: 'q2',
          type: 'multiple-choice',
          question: 'Theo nội dung chương 6, người thầy thuốc của tương lai được định nghĩa như thế nào?',
          options: [
            'Người biết tuốt mọi thứ về y học.',
            'Người biết cách hỏi đúng câu hỏi.',
            'Người chỉ dựa vào kinh nghiệm cá nhân.',
            'Người thay thế hoàn toàn bằng AI.'
          ],
          correctAnswer: 'Người biết cách hỏi đúng câu hỏi.',
          explanation: 'Người thầy thuốc tương lai là người biết cách hỏi đúng câu hỏi và tận dụng trí tuệ tập thể thông qua AI, không phải người biết tuốt.',
          points: 25
        },
        {
          id: 'q3',
          type: 'multiple-choice',
          question: 'Tương lai nào của AI trong YHCT được đề cập trong chương này?',
          options: [
            'AI chỉ có thể hỗ trợ tư vấn qua text.',
            'AI phân tích hình ảnh lưỡi và da để hỗ trợ vọng chẩn.',
            'AI sẽ thay thế hoàn toàn lương y.',
            'AI chỉ dùng cho việc quản lý hành chính.'
          ],
          correctAnswer: 'AI phân tích hình ảnh lưỡi và da để hỗ trợ vọng chẩn.',
          explanation: 'Tương lai AI trong YHCT bao gồm phân tích hình ảnh để hỗ trợ vọng chẩn, phân tích dữ liệu bệnh án và cá nhân hóa điều trị.',
          points: 25
        },
        {
          id: 'q4',
          type: 'multiple-choice',
          question: 'Thách thức chính để phát triển AI trong YHCT là gì?',
          options: [
            'Chi phí quá cao để triển khai.',
            'Cần có bộ dữ liệu lớn và chất lượng về YHCT.',
            'Lương y không muốn học công nghệ mới.',
            'AI không thể hiểu được y học cổ truyền.'
          ],
          correctAnswer: 'Cần có bộ dữ liệu lớn và chất lượng về YHCT.',
          explanation: 'Thách thức chính là cần bộ dữ liệu lớn và chất lượng về YHCT để "dạy" AI, cùng với các vấn đề bảo mật và pháp lý.',
          points: 25
        }
      ]
    }
  }
];