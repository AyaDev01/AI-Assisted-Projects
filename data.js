// data.js - Fixed loader for lecture files

const lecturesIndex = {
  // HR - Human Resources
  hr: {
    name: "📚 إدارة الموارد البشرية",
    lectures: {
      hr_lec1: { 
        title: "📖 المحاضرة 1: المفاهيم والنشأة", 
        file: "hr_lec1.js" 
      },
      hr_lec2: { 
        title: "المحاضرة الثانية: الإدارة الاستراتيجية للموارد البشرية والبيئة المتغيرة", 
        file: "hr_lec2.js" 
      },
      hr_lec3: { 
        title: "المحاضرة الثالثة: تحليل وتوصيف الوظائف", 
        file: "hr_lec3.js" 
      },
      hr_lec4: { 
        title: "المحاضرة الرابعة: تخطيط الموارد البشرية", 
        file: "hr_lec4.js" 
      },
      hr_lec5: { 
        title: "المحاضرة الخامسة: الاستقطاب والتوظيف", 
        file: "hr_lec5.js" 
      },
      hr_sec1: { 
        title: "📌 سكشن 1 - تاريخ إدارة الموارد البشرية", 
        file: "hr_sec1.js" 
      },
      hr_sec2: { 
        title: "📌 سكشن 2 - بيئة متغيرة والتحديات الحديثة", 
        file: "hr_sec2.js" 
      },
      hr_sec3: { 
        title: "📌 سكشن 3 - تحليل الوظائف والخرائط التنظيمية", 
        file: "hr_sec3.js" 
      },
      hr_sec4: { 
        title: "📌 سكشن 4 - تخطيط الموارد البشرية", 
        file: "hr_sec4.js" 
      },
      hr_sec5: { 
        title: "📌 سكشن 5 - الاستقطاب والتوظيف", 
        file: "hr_sec5.js" 
      },
  
      hr_sources: {
        title: "📚 المصادر والمراجع (PDF)",
        file: "hr_sources.js",
      },
    },
  },
     
  // Companies Law
  comp: {
    name: "⚖️ تحليل وتقييم الشركات",
    lectures: {
      comp_lec1: {
        title: "المحاضرة الأولى والثانية: تطور الشركات واستراتيجيات النمو",
        file: "comp_lec1.js",
      },
      comp_lec2: {
        title: "المحاضرة الثالثة: آليات وأهداف حوكمة الشركات",
        file: "comp_lec2.js",
      },
      comp_lec3: {
        title: "المحاضرة الرابعة: كيفية تقييم الشركات من خلال تقرير الحوكمة",
        file: "comp_lec3.js",
      },
      comp_lec4: {
        title: "المحاضرة الخامسة: دور المعلومات المحاسبية في قياس الأداء",
        file: "comp_lec4.js",
      },
      comp_lec5: {
        title: "المحاضرة السادسة: قائمة الدخل الشامل والقوائم المالية",
        file: "comp_lec5.js",
      },
    },
  },
  
  // Statistics
  stats: {
    name: "📊 مبادئ الإحصاء",
    lectures: {
      stats_lec1: {
        title: "📊 المحاضرة 1: مقدمة في الاحتمالات",
        file: "stats_lec1.js",
      },
      stats_lec2: {
        title: "📊 المحاضرة 2: المتغيرات العشوائية المنفصلة والتوزيعات الاحتمالية",
        file: "stats_lec2.js",
      },
    },
  },
};

// Dynamic loader function
async function loadLecture(lectureKey) {
  let filePath = null;
  for (const subjectKey in lecturesIndex) {
    const subject = lecturesIndex[subjectKey];
    if (subject.lectures[lectureKey]) {
      filePath = subject.lectures[lectureKey].file;
      break;
    }
  }

  if (!filePath) {
    console.error(`Lecture ${lectureKey} not found`);
    return null;
  }

  try {
    const response = await fetch(filePath);
    if (!response.ok) {
      throw new Error(`Failed to load ${filePath}: ${response.status}`);
    }

    if (filePath.endsWith(".json")) {
      return await response.json();
    } else {
      const jsText = await response.text();
      const fn = new Function(jsText + "; return lectureData;");
      const result = fn();

      if (result && typeof result === "object") {
        if (result.lectureData !== undefined) {
          return result.lectureData;
        }
        if (result[0] !== undefined && result[0].title) {
          return result[0];
        }
        return result;
      }
      return result;
    }
  } catch (error) {
    console.error(`Error loading lecture ${lectureKey}:`, error);
    return null;
  }
}

function getSubjectLectures(subjectKey) {
  const subject = lecturesIndex[subjectKey];
  if (!subject) return [];

  return Object.entries(subject.lectures).map(([key, data]) => ({
    key,
    title: data.title,
  }));
}

function getAllSubjects() {
  return Object.entries(lecturesIndex).map(([key, data]) => ({
    key,
    name: data.name,
  }));
}
