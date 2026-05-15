// hr_sources.js
const lectureData = {
    title: "📚 مصادر ومراجع إدارة الموارد البشرية",
    isSources: true,  // مهم جداً عشان تتفرق عن المحاضرات العادية
    content: `
        <div class="box">
            <p>📌 هذه هي ملفات PDF و DOCX الخاصة بمحاضرات مادة إدارة الموارد البشرية.</p>
            
        </div>
    `,
    sources: [  // لازم يكون اسم المصفوفة "sources" مش "files"
        {
            order: 1,
            name: "📄 المحاضرة الأولى: المفاهيم والنشأة",
            filePath: "المحاضرة الاولى-HR-2026.pdf"
        },
        {
            order: 2,
            name: "📄 المحاضرة الثانية: الإدارة الاستراتيجية والبيئة المتغيرة",
            filePath: "المحاضرة الثانية-HR-2026.pdf"
        },
        {
            order: 3,
            name: "📄 المحاضرة الثالثة: تحليل وتوصيف الوظائف",
            filePath: "المحاضرة الثالثة-HR-2026.pdf"
        },
        {
            order: 4,
            name: "📄 المحاضرة الرابعة: تخطيط الموارد البشرية",
            filePath: "المحاضرة الربعة-HR-2026 (1).pdf"
        },
        {
            order: 5,
            name: "📄 المحاضرة الخامسة: الاستقطاب والتوظيف",
            filePath: "المحاضرة الخامسة.pdf"
        },
        {
            order: 6,
            name: "📝 أسئلة المحاضرات من الأولى إلى الخامسة (PDF)",
            filePath: "اسئلة المحاضرات من الاولي الي الخامسة HR.pdf"
        },
        {
            order: 7,
            name: "📝 أسئلة المحاضرة الأولى - HR (Word)",
            filePath: "اسئلة المحاضرة الاولي hr.docx"
        },
        {
            order: 8,
            name: "📝 أسئلة مقالية HR - المحاضرات 1-5 (Word)",
            filePath: "اسئلة مقالية1hr.docx"
        },
        {
            order: 9,
            name: "📚 أسئلة إضافية HR - مجموعة 1",
            filePath: "1.pdf"
        },
        {
            order: 10,
            name: "📚 أسئلة إضافية HR - مجموعة 2",
            filePath: "2.pdf"
        }
    ]
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = lectureData;  // لازم يكون lectureData مش hrSources
}
