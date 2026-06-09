// 語言切換功能：只切換畫面文字，不改變原本資料與計算邏輯
let currentLang = 'zh';

const I18N = {
    zh: {
        pageTitle: "EqualPay - 內建大數據薪資儀表板 (SDG 10)",
        navSDG: "SDG10",
        navStats: "趨勢分析",
        navCompare: "薪資診斷",
        navReport: "匿名回報",
        navGame: "知識小挑戰",
        status: "已自動載入 110-113 年官方完整數據",
        badge: "SDG 10：減少職場不平等",
        heroTitle: `<span class="title-line">看見薪資</span><span class="title-line"><span class="title-accent">看見公平</span></span>`,
        heroStat1Label: "全國性別薪資差距 (113年)",
        heroStat2Label: "全台薪資最高峰年齡",
        introCardLabel: "ABOUT EQUALPAY",
        introCardText1: "EqualPay 是一個以薪資透明與職場公平為核心的互動式平台。",
        introCardText2: "透過薪資診斷、匿名回報與知識小挑戰，幫助使用者了解自己的薪資是否接近市場基準，也讓更多真實職場資訊被看見。",
        introFeatures: [
            { title: "薪資診斷", desc: "快速比較個人薪資與市場公平基準" },
            { title: "匿名回報", desc: "分享真實公司的薪資與福利資訊" },
            { title: "知識挑戰", desc: "認識不同工作類型與薪資條件" }
        ],
        trendTitle: "110-113 全國性別薪資落差趨勢",
        ageTitle: "113年全產業年齡別薪資中位數",
        trendNote: "※ 自動分析：全國性別薪資差距從 14.1% 逐步縮減至 12.5%。",
        ageNote: "※ 發現：薪資隨年齡顯著增長，並在 40-49 歲達到高峰。",
        compareTitle: "即時薪資公平性診斷",
        labels: ["年份 (自動匹配報表)", "最高教育程度", "年齡層分組", "您的行業別 (全分類)", "月薪 (TWD)"],
        salaryPlaceholder: "如：55000",
        male: "男性",
        female: "女性",
        calculate: "產出公平性診斷報告",
        resultDefault: "診斷中",
        smartAdviceTitle: "診斷建議",
        smartAdviceDesc: "本系統會依據您的診斷結果，自動產生個人化改善方案與行動建議。",
        smartAdviceButton: "產生診斷建議",
        smartAdviceNeedDiagnosis: "請先完成薪資公平性診斷，再產生診斷建議。",
        solutionTitle: "薪資糾紛解決三步驟",
        reportEyebrow: "匿名資料共創",
        reportTitleMain: "匿名回報",
        reportTitleSub: "公司福利與薪資",
        reportDescItems: ["匿名提交，不填個人資料", "分享公司薪資與福利經驗", "資料同步更新至回報統計"],
        reportFormTitle: "提交匿名回報",
        reportCompanyLabel: "公司名稱",
        reportCompanyPlaceholder: "例：ABC科技",
        reportJobLabel: "職位",
        reportJobPlaceholder: "例：前端工程師",
        reportSalaryLabel: "月薪 TWD",
        reportSalaryPlaceholder: "例：52000",
        reportBenefitTitle: "福利",
        reportBenefitDetailLabel: "福利詳細資訊",
        reportBenefitDetailPlaceholder: "例：年終約 2 個月、每月交通補助 1200 元、每週可遠端 2 天",
        reportBenefits: {
            bonus: "年終 / 獎金",
            insurance: "保險 / 勞健保",
            remote: "遠端 / 彈性工時",
            training: "教育訓練補助",
            meal: "餐費 / 交通補助",
            leave: "優於法規休假"
        },
        reportPrivacyNotice: "請勿填寫姓名、Email、電話、員工編號、精確部門或任何可識別個人的內容。",
        reportPrivacyCheckText: "我確認此回報不包含可識別個人的資訊。",
        reportSubmit: "匿名提交",
        reportBoardTitle: "匿名回報統計",
        reportBoardDesc: "提交後會更新此瀏覽器中的匿名薪資與福利樣本。",
        reportCountLabel: "回報數",
        reportRecentTitle: "最近匿名回報",
        reportNeedCompany: "請輸入公司名稱。",
        reportNeedJob: "請輸入職位。",
        reportNeedSalary: "請輸入有效的月薪。",
        reportNeedPrivacy: "請先確認回報不包含可識別個人的資訊。",
        reportSuccess: "匿名回報已提交。",
        reportEmpty: "目前尚無匿名回報資料。",
        reportAvgSalary: "平均月薪",
        reportTopBenefit: "最多人回報福利",
        reportNoBenefit: "尚無福利資料",
        reportCompany: "公司",
        reportJob: "職位",
        reportSalary: "月薪",
        gameEyebrow: "知識小挑戰",
        gameTitle: "知識小挑戰",
        gameDesc: "透過情境選擇題，測試你是否了解不同工作類型、薪資組成與職場條件。",
        gameScoreLabel: "分數",
        gameRestart: "重新開始",
        gameNext: "下一題",
        gameFinish: "查看結果",
        gameProgress: (current, total) => `第 ${current} / ${total} 題`,
        gameResultTitle: "挑戰完成",
        gameResultScore: (score, total) => `你的分數：${score} / ${total}`,
        gameResultHigh: "你很了解薪資公平觀念！可以把這些概念應用在薪資診斷、匿名回報與職涯規劃中。",
        gameResultMid: "你已經掌握基本概念。建議再熟悉薪資透明、同工同酬與談薪準備方式。",
        gameResultLow: "還有進步空間。建議先從了解公平基準、薪資資料蒐集與職場權益開始。",
        gameQuestions: [
            {
                question: "全職工作和兼職工作最主要的差異通常是什麼？",
                options: ["工作時數、福利與薪資計算方式可能不同", "全職一定比較輕鬆", "兼職一定沒有任何權益", "兩者薪資永遠相同"],
                answer: 0,
                explain: "全職與兼職通常在工時、福利、薪資計算方式與工作穩定性上有所差異，不能只看職稱判斷。"
            },
            {
                question: "實習工作在評估薪資或津貼時，最應該注意什麼？",
                options: ["是否有明確工作內容、工時與學習目標", "只要叫實習就不用給任何報酬", "是否能無限加班", "公司名氣越大就不用看條件"],
                answer: 0,
                explain: "實習仍應確認工作內容、工時、津貼或薪資、學習目標與責任範圍，避免實習變成不合理勞動。"
            },
            {
                question: "約聘或契約型工作在接受前，最需要確認哪一項？",
                options: ["契約期間、薪資、福利與續約條件", "主管看起來親切就好", "不用簽任何文件", "只要薪水高就不用看條款"],
                answer: 0,
                explain: "契約型工作要特別確認期間、薪資、福利、工作內容、續約方式與提前終止條件。"
            },
            {
                question: "接案或自由工作者最容易忽略哪一種成本？",
                options: ["稅務、保險、設備、溝通與未接案期間成本", "午餐吃什麼", "公司制服", "固定打卡機位置"],
                answer: 0,
                explain: "接案收入不能只看單次報價，還要考慮稅務、保險、設備、溝通時間與空窗期成本。"
            },
            {
                question: "業務或銷售工作如果薪資包含高比例獎金，最應該先確認什麼？",
                options: ["底薪、獎金公式、發放時間與業績認定方式", "只看最高可能收入", "獎金一定每月固定", "不用了解業績目標"],
                answer: 0,
                explain: "業務薪資常由底薪與獎金組成，應先確認獎金計算公式、發放時間、退單處理與業績認定規則。"
            },
            {
                question: "輪班或夜班工作在比較薪資時，除了月薪還要看什麼？",
                options: ["班表、夜班津貼、加班、休息時間與健康負荷", "只看公司名字", "只看職稱", "不用看工時"],
                answer: 0,
                explain: "輪班或夜班工作可能有額外津貼與健康負荷，應同時比較工時、休息、津貼與實際工作壓力。"
            },
            {
                question: "遠端或混合辦公工作在薪資外，還需要確認哪個條件？",
                options: ["設備補助、通訊規範、出勤方式與成果評估", "是否每天都不用工作", "是否永遠不用開會", "薪資一定比現場工作高"],
                answer: 0,
                explain: "遠端工作應確認設備、網路或通訊補助、會議與回報規範、出勤管理和成果評估方式。"
            },
            {
                question: "技術型工作在談薪時，哪一項最能增加說服力？",
                options: ["作品集、專案成果、證照或可驗證的技術能力", "只說自己很努力", "只比較朋友薪水", "完全不準備資料"],
                answer: 0,
                explain: "技術型工作談薪時，作品集、專案成果、證照和可量化貢獻會比單純主觀描述更有說服力。"
            },
            {
                question: "服務業工作在評估薪資是否合理時，除了底薪還要看什麼？",
                options: ["排班、加班、獎金、小費、休假與工作強度", "店面裝潢漂不漂亮", "制服顏色", "同事聊天有不有趣"],
                answer: 0,
                explain: "服務業薪資常受到排班、加班、獎金、小費、休假和工作強度影響，應整體評估。"
            },
            {
                question: "管理職和一般職在薪資比較時，最需要注意哪一點？",
                options: ["管理責任、決策壓力、績效目標與工時是否相符", "管理職一定比較高薪且輕鬆", "職稱有主管就不用看工作量", "只看辦公室座位大小"],
                answer: 0,
                explain: "管理職通常包含人員管理、決策責任與績效壓力，薪資比較時應檢視責任與報酬是否對等。"
            }
        ],
        footerSource: "數據引用來源：勞動部與主計總處 110-113 年「各業受僱員工薪資統計表1 & 表2」",
        footerCopy: "© 2024 EQUALPAY PROJECT. SDG 10 減少不平等行動實踐.",
        lineDataset: "全國性別薪資落差 (%)",
        barDataset: "113年全國中位數 (萬)",
        alertMissing: "請填寫薪資並選擇性別",
        resultBelowTitle: "低於公平基準線",
        resultFairTitle: "符合市場公平基準",
        resultBelowText: "您的報酬顯著低於市場平均水平。在 SDG 10 的視角下，這反映了資源分配的不平等，建議參考下方解決方案。",
        resultFairText: "您的薪資處於合理區間。這顯示您所在的職場具有較佳的公平性，請繼續維持專業發展。",
        resultTemplate: (year, edu, industry, amount) => `在 ${year} 官方數據中，具備「${edu}」學歷且位於「${industry}」的受僱者，公平基準月薪約為 <strong>${amount}</strong> 元。`,
        yearLabels: ['110年', '111年', '112年', '113年'],
        ageChartLabels: ['未滿25', '25-29', '30-39', '40-49', '50-64']
    },
    en: {
        pageTitle: "EqualPay - Built-in Salary Data Dashboard (SDG 10)",
        navSDG: "SDG10",
        navStats: "Trend Analysis",
        navCompare: "Salary Diagnosis",
        navReport: "Anonymous Report",
        navGame: "Knowledge Challenge",
        status: "Loaded official data from ROC Years 110-113",
        badge: "SDG 10: Reducing Workplace Inequality",
        heroTitle: `<span class="title-line">See salary</span><span class="title-line"><span class="title-accent">see fairness</span></span>`,
        heroStat1Label: "Gender Pay Gap (2024)",
        heroStat2Label: "Peak Salary Age Group",
        heroStat2Val: "Ages 40-49",
        introCardLabel: "ABOUT EQUALPAY",
        introCardText1: "EqualPay is an interactive platform centered on salary transparency and workplace fairness.",
        introCardText2: "Through salary diagnosis, anonymous reporting, and knowledge challenges, it helps users understand whether their salary is close to the market benchmark and makes more real workplace information visible.",
        introFeatures: [
            { title: "Salary Diagnosis", desc: "Quickly compare personal salary with the market fairness benchmark" },
            { title: "Anonymous Report", desc: "Share real company salary and benefits information" },
            { title: "Knowledge Challenge", desc: "Learn about different work types and salary conditions" }
        ],
        trendTitle: "National Gender Pay Gap Trend, ROC Years 110-113",
        ageTitle: "2024 Median Salary by Age Group Across Industries",
        trendNote: "※ Auto analysis: the national gender pay gap changed from 14.1% to 12.5%.",
        ageNote: "※ Finding: salary increases by age group and peaks at ages 40-49.",
        compareTitle: "Real-time Salary Fairness Diagnosis",
        compareDesc: "No file reading required: the system cross-checks 8 built-in official annual reports.",
        labels: ["Year", "Highest Education Level", "Age Group", "Industry", "Monthly Salary (TWD)"],
        salaryPlaceholder: "Example: 55000",
        male: "Male",
        female: "Female",
        calculate: "Generate Fairness Diagnosis Report",
        resultDefault: "Diagnosing",
        smartAdviceTitle: "Diagnosis Suggestions",
        smartAdviceDesc: "The system generates personalized improvement plans and action suggestions based on your diagnosis result.",
        smartAdviceButton: "Generate Diagnosis Suggestions",
        smartAdviceNeedDiagnosis: "Please complete the salary fairness diagnosis before generating diagnosis suggestions.",
        solutionTitle: "Three Steps to Resolve Salary Disputes",
        reportEyebrow: "Anonymous Data Contribution",
        reportTitleMain: "Anonymous Report",
        reportTitleSub: "Company Benefits and Salary",
        reportDescItems: ["Submit anonymously without personal data", "Share company salary and benefits experience", "Data updates the report statistics"],
        reportFormTitle: "Submit Anonymous Report",
        reportCompanyLabel: "Company Name",
        reportCompanyPlaceholder: "Example: ABC Tech",
        reportJobLabel: "Position",
        reportJobPlaceholder: "Example: Frontend Engineer",
        reportSalaryLabel: "Monthly Salary TWD",
        reportSalaryPlaceholder: "Example: 52000",
        reportBenefitTitle: "Benefits",
        reportBenefitDetailLabel: "Benefit Details",
        reportBenefitDetailPlaceholder: "Example: year-end bonus around 2 months, NT$1,200 monthly transport allowance, remote work 2 days per week",
        reportBenefits: {
            bonus: "Year-end / Bonus",
            insurance: "Insurance / Labor & Health Insurance",
            remote: "Remote / Flexible Hours",
            training: "Training Subsidy",
            meal: "Meal / Transport Allowance",
            leave: "Leave Better Than Legal Minimum"
        },
        reportPrivacyNotice: "Do not enter your name, email, phone number, employee ID, exact department, or anything personally identifiable.",
        reportPrivacyCheckText: "I confirm that this report does not include personally identifiable information.",
        reportSubmit: "Submit Anonymously",
        reportBoardTitle: "Anonymous Report Statistics",
        reportBoardDesc: "After submission, the anonymous salary and benefits samples in this browser will be updated.",
        reportCountLabel: "Reports",
        reportRecentTitle: "Recent Anonymous Reports",
        reportNeedCompany: "Please enter a company name.",
        reportNeedJob: "Please enter a position.",
        reportNeedSalary: "Please enter a valid monthly salary.",
        reportNeedPrivacy: "Please confirm that the report does not include personally identifiable information.",
        reportSuccess: "Anonymous report submitted.",
        reportEmpty: "No anonymous report data yet.",
        reportAvgSalary: "Average Monthly Salary",
        reportTopBenefit: "Most Reported Benefit",
        reportNoBenefit: "No benefit data yet",
        reportCompany: "Company",
        reportJob: "Position",
        reportSalary: "Monthly Salary",
        gameEyebrow: "Knowledge Challenge",
        gameTitle: "Knowledge Challenge",
        gameDesc: "Answer scenario-based questions to test your understanding of different work types, pay structures, and workplace conditions.",
        gameScoreLabel: "Score",
        gameRestart: "Restart",
        gameNext: "Next",
        gameFinish: "View Result",
        gameProgress: (current, total) => `Question ${current} / ${total}`,
        gameResultTitle: "Challenge Complete",
        gameResultScore: (score, total) => `Your score: ${score} / ${total}`,
        gameResultHigh: "You understand salary fairness very well. You can apply these ideas to salary diagnosis, anonymous reporting, and career planning.",
        gameResultMid: "You understand the basic concepts. Review pay transparency, equal pay, and negotiation preparation to improve further.",
        gameResultLow: "There is still room to improve. Start by learning about fairness benchmarks, salary evidence, and workplace rights.",
        gameQuestions: [
            {
                question: "What is usually the main difference between full-time and part-time work?",
                options: ["Working hours, benefits, and pay calculation may differ", "Full-time work is always easier", "Part-time workers never have any rights", "Their salaries are always the same"],
                answer: 0,
                explain: "Full-time and part-time roles often differ in working hours, benefits, pay calculation, and stability, so job title alone is not enough."
            },
            {
                question: "When evaluating an internship salary or allowance, what should you check first?",
                options: ["Clear job duties, working hours, and learning goals", "Internships never need to be paid", "Whether unlimited overtime is allowed", "Company reputation is enough"],
                answer: 0,
                explain: "Internships should still have clear duties, hours, allowance or salary, learning goals, and responsibility boundaries."
            },
            {
                question: "Before accepting contract-based work, what should you confirm most carefully?",
                options: ["Contract period, salary, benefits, and renewal terms", "Whether the manager seems friendly", "No written document is needed", "High salary means no need to read terms"],
                answer: 0,
                explain: "For contract work, confirm the contract period, pay, benefits, job scope, renewal terms, and early termination conditions."
            },
            {
                question: "What cost do freelancers often underestimate?",
                options: ["Taxes, insurance, equipment, communication time, and gaps between projects", "What to eat for lunch", "Company uniform", "The location of the time clock"],
                answer: 0,
                explain: "Freelance income should not be judged only by one project fee; taxes, insurance, equipment, communication time, and unpaid gaps also matter."
            },
            {
                question: "For sales jobs with a high bonus share, what should be confirmed first?",
                options: ["Base salary, bonus formula, payment timing, and sales recognition rules", "Only the highest possible income", "Bonuses are always fixed every month", "No need to understand sales targets"],
                answer: 0,
                explain: "Sales pay often combines base salary and bonuses, so the formula, timing, returns, and performance rules must be clear."
            },
            {
                question: "When comparing shift or night-shift work, what should you check besides monthly salary?",
                options: ["Schedule, night-shift allowance, overtime, rest time, and health burden", "Only the company name", "Only the job title", "Working hours do not matter"],
                answer: 0,
                explain: "Shift or night work may include allowances and health burdens, so hours, rest, allowances, and workload should be reviewed together."
            },
            {
                question: "For remote or hybrid work, what condition should be checked besides salary?",
                options: ["Equipment support, communication rules, attendance method, and performance evaluation", "Whether you never need to work", "Whether meetings never happen", "Remote pay is always higher"],
                answer: 0,
                explain: "Remote work should clarify equipment support, internet or communication support, meetings, reporting rules, attendance, and evaluation methods."
            },
            {
                question: "For technical jobs, what best strengthens a salary negotiation?",
                options: ["Portfolio, project outcomes, certifications, or verifiable technical skills", "Only saying you work hard", "Only comparing with a friend’s salary", "Preparing no evidence"],
                answer: 0,
                explain: "For technical roles, portfolios, project results, certifications, and measurable contributions are more persuasive than subjective claims."
            },
            {
                question: "When evaluating service industry pay, what should you check besides base salary?",
                options: ["Scheduling, overtime, bonuses, tips, leave, and workload", "How pretty the store looks", "Uniform color", "Whether coworkers are fun to chat with"],
                answer: 0,
                explain: "Service industry pay can be affected by scheduling, overtime, bonuses, tips, leave, and workload, so the whole package matters."
            },
            {
                question: "When comparing management roles with non-management roles, what matters most?",
                options: ["Whether management responsibility, decision pressure, targets, and hours match the pay", "Management roles are always high-paying and easy", "A manager title means workload does not matter", "Only the size of the office seat"],
                answer: 0,
                explain: "Management roles often include people management, decision responsibility, and performance pressure, so pay should match the responsibility."
            }
        ],
        footerSource: "Data sources: Ministry of Labor and DGBAS salary statistics tables, ROC Years 110-113.",
        footerCopy: "© 2024 EQUALPAY PROJECT. SDG 10 Action for Reducing Inequality.",
        lineDataset: "National gender pay gap (%)",
        barDataset: "2024 national median salary (10k TWD)",
        alertMissing: "Please enter your salary and select gender.",
        resultBelowTitle: "Below the Fairness Benchmark",
        resultFairTitle: "Meets the Market Fairness Benchmark",
        resultBelowText: "Your salary is significantly below the market benchmark. From the perspective of SDG 10, this reflects unequal resource distribution. Please refer to the suggestions below.",
        resultFairText: "Your salary is within a reasonable range. This indicates better workplace fairness in your current environment. Please continue your professional development.",
        resultTemplate: (year, edu, industry, amount) => `Based on official data for ${year}, employees with “${edu}” education in “${industry}” have an estimated fair monthly salary benchmark of about <strong>NT$${amount}</strong>.`,
        yearLabels: ['Year 110', 'Year 111', 'Year 112', 'Year 113'],
        ageChartLabels: ['Under 25', '25-29', '30-39', '40-49', '50-64']
    }
};

const OPTION_I18N = {
    "113年": "Year 113",
    "112年": "Year 112",
    "111年": "Year 111",
    "110年": "Year 110",
    "研究所": "Graduate School",
    "專科及大學": "College / University",
    "高中": "Senior High School",
    "國中及以下": "Junior High or Below",
    "未滿25歲": "Under 25",
    "25-29歲": "25-29",
    "30-39歲": "30-39",
    "40-49歲": "40-49",
    "50-64歲": "50-64",
    "全體": "All Industries",
    "工業": "Industry",
    "製造業": "Manufacturing",
    "電力及燃氣供應業": "Electricity and Gas Supply",
    "用水供應及污染整治業": "Water Supply and Remediation",
    "營建工程業": "Construction",
    "服務業": "Services",
    "批發及零售業": "Wholesale and Retail",
    "運輸及倉儲業": "Transportation and Storage",
    "住宿及餐飲業": "Accommodation and Food Services",
    "出版影音及資通訊業": "Publishing, Media and ICT",
    "金融及保險業": "Finance and Insurance",
    "不動產業": "Real Estate",
    "專業科學及技術服務業": "Professional, Scientific and Technical Services",
    "支援服務業": "Support Services",
    "教育業": "Education",
    "醫療保健及社會工作服務業": "Healthcare and Social Work",
    "藝術娛樂及休閒服務業": "Arts, Entertainment and Recreation",
    "其他服務業": "Other Services",
    "薪資疑問": "Salary Question",
    "福利經驗": "Benefits Experience",
    "談薪經驗": "Negotiation Experience",
    "勞權諮詢": "Labor Rights Consultation",
    "求職分享": "Job Search Sharing",
    "其他": "Other"
};

function displayLabel(value) {
    return currentLang === 'en' ? (OPTION_I18N[value] || value) : value;
}

function initOptionValues() {
    document.querySelectorAll('select option').forEach(option => {
        if (!option.dataset.originalText) {
            option.dataset.originalText = option.textContent.trim();
            option.value = option.dataset.originalText;
        }
    });
}

function setText(selector, text) {
    const el = document.querySelector(selector);
    if (el) el.textContent = text;
}

function setLanguage(lang) {
    currentLang = lang;
    const t = I18N[lang];

    document.documentElement.lang = lang === 'en' ? 'en' : 'zh-TW';
    document.title = t.pageTitle;

    setText('#nav-sdg', t.navSDG);
    setText('nav a[href="#stats"]', t.navStats);
    setText('nav a[href="#compare"]', t.navCompare);
    setText('nav a[href="#report"]', t.navReport);
    setText('nav a[href="#game"]', t.navGame);

    const dataStatus = document.getElementById('dataStatus');
    if (dataStatus) {
        dataStatus.innerHTML = `<span class="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>${t.status}`;
    }

    const langZh = document.getElementById('lang-zh');
    const langEn = document.getElementById('lang-en');
    if (langZh && langEn) {
        langZh.className = lang === 'zh'
            ? "px-3 py-1 rounded-full bg-black text-white transition"
            : "px-3 py-1 rounded-full text-slate-600 hover:text-black transition";
        langEn.className = lang === 'en'
            ? "px-3 py-1 rounded-full bg-black text-white transition"
            : "px-3 py-1 rounded-full text-slate-600 hover:text-black transition";
    }

    const heroBadge = document.querySelector('header .max-w-5xl > span');
    if (heroBadge) heroBadge.textContent = t.badge;
    const heroTitle = document.querySelector('header h1');
    if (heroTitle) heroTitle.innerHTML = t.heroTitle;

    setText('#heroDesc', t.heroDesc);
    setText('#heroStat1Label', t.heroStat1Label);
    setText('#heroStat2Label', t.heroStat2Label);
    if(lang === 'en') {
        setText('#heroStat2Val', t.heroStat2Val);
    } else {
        setText('#heroStat2Val', '40-49歲');
    }
    setText('#heroDesc', t.heroDesc);
    setText('#introCardLabel', t.introCardLabel);
    setText('#introCardText1', t.introCardText1);
    setText('#introCardText2', t.introCardText2);
    setText('#introFeature1Title', t.introFeatures[0].title);
    setText('#introFeature1Desc', t.introFeatures[0].desc);
    setText('#introFeature2Title', t.introFeatures[1].title);
    setText('#introFeature2Desc', t.introFeatures[1].desc);
    setText('#introFeature3Title', t.introFeatures[2].title);
    setText('#introFeature3Desc', t.introFeatures[2].desc);

    const statTitles = document.querySelectorAll('#stats h3');
    if (statTitles[0]) statTitles[0].innerHTML = `<span class="w-2 h-6 bg-emerald-600 rounded-full"></span>${t.trendTitle}`;
    if (statTitles[1]) statTitles[1].innerHTML = `<span class="w-2 h-6 bg-pink-600 rounded-full"></span>${t.ageTitle}`;
    const statNotes = document.querySelectorAll('#stats p');
    if (statNotes[0]) statNotes[0].textContent = t.trendNote;
    if (statNotes[1]) statNotes[1].textContent = t.ageNote;

    setText('#compare h2', t.compareTitle);
    setText('#compare .text-center p', t.compareDesc);

    const labels = document.querySelectorAll('#compare label');
    labels.forEach((label, index) => {
        if (t.labels[index]) label.textContent = t.labels[index];
    });

    const salaryInput = document.getElementById('userSalary');
    if (salaryInput) salaryInput.placeholder = t.salaryPlaceholder;

    setText('#btn-male', t.male);
    setText('#btn-female', t.female);
    setText('button[onclick="calculateParity()"]', t.calculate);

    const resultTitle = document.getElementById('resultTitle');
    if (resultTitle && (resultTitle.textContent === I18N.zh.resultDefault || resultTitle.textContent === I18N.en.resultDefault)) {
        resultTitle.textContent = t.resultDefault;
    }

    const smartTitle = document.getElementById('smartAdviceTitle');
    if (smartTitle) {
        smartTitle.innerHTML = `<span class="w-9 h-9 bg-lime-300 text-black rounded-full flex items-center justify-center text-sm">◆</span>${t.smartAdviceTitle}`;
    }
    setText('#smartAdviceDesc', t.smartAdviceDesc);
    setText('#smartAdviceBtn', t.smartAdviceButton);

    const solutionHeading = document.querySelector('#solutionSection h5');
    if (solutionHeading) {
        solutionHeading.innerHTML = `<span class="w-9 h-9 bg-lime-300 text-black rounded-full flex items-center justify-center text-sm">!</span>${t.solutionTitle}`;
    }

    setText('#reportEyebrow', t.reportEyebrow);
    const reportTitle = document.getElementById('reportTitle');
    if (reportTitle) {
        reportTitle.innerHTML = `<span>${t.reportTitleMain}</span><span class="report-title-sub">${t.reportTitleSub}</span>`;
    }
    const reportDesc = document.getElementById('reportDesc');
    if (reportDesc) {
        reportDesc.innerHTML = t.reportDescItems.map(item => `
            <div class="report-note-item">
                <span class="report-note-dot"></span>
                <span>${item}</span>
            </div>
        `).join('');
    }
    setText('#reportFormTitle', t.reportFormTitle);
    setText('#reportCompanyLabel', t.reportCompanyLabel);
    setText('#reportJobLabel', t.reportJobLabel);
    setText('#reportSalaryLabel', t.reportSalaryLabel);
    setText('#reportBenefitTitle', t.reportBenefitTitle);
    setText('#reportBenefitDetailLabel', t.reportBenefitDetailLabel);
    setText('#reportBenefitBonus', t.reportBenefits.bonus);
    setText('#reportBenefitInsurance', t.reportBenefits.insurance);
    setText('#reportBenefitRemote', t.reportBenefits.remote);
    setText('#reportBenefitTraining', t.reportBenefits.training);
    setText('#reportBenefitMeal', t.reportBenefits.meal);
    setText('#reportBenefitLeave', t.reportBenefits.leave);
    setText('#reportPrivacyNotice', t.reportPrivacyNotice);
    setText('#reportPrivacyCheckText', t.reportPrivacyCheckText);
    setText('#reportSubmitBtn', t.reportSubmit);
    setText('#reportBoardTitle', t.reportBoardTitle);
    setText('#reportBoardDesc', t.reportBoardDesc);
    setText('#reportCountLabel', t.reportCountLabel);
    setText('#reportRecentTitle', t.reportRecentTitle);

    setText('#gameEyebrow', t.gameEyebrow);
    setText('#gameTitle', t.gameTitle);
    setText('#gameDesc', t.gameDesc);
    setText('#gameScoreLabel', t.gameScoreLabel);
    setText('#gameRestartBtn', t.gameRestart);
    updateFairnessGameText();

    const reportCompany = document.getElementById('reportCompany');
    if (reportCompany) reportCompany.placeholder = t.reportCompanyPlaceholder;
    const reportJobTitle = document.getElementById('reportJobTitle');
    if (reportJobTitle) reportJobTitle.placeholder = t.reportJobPlaceholder;
    const reportSalary = document.getElementById('reportSalary');
    if (reportSalary) reportSalary.placeholder = t.reportSalaryPlaceholder;
    const reportBenefitDetail = document.getElementById('reportBenefitDetail');
    if (reportBenefitDetail) reportBenefitDetail.placeholder = t.reportBenefitDetailPlaceholder;

    renderAnonymousReports();

    const footerPs = document.querySelectorAll('footer p');
    if (footerPs[0]) footerPs[0].textContent = t.footerSource;
    if (footerPs[1]) footerPs[1].textContent = t.footerCopy;

    initOptionValues();
    document.querySelectorAll('select option').forEach(option => {
        const original = option.dataset.originalText;
        option.textContent = lang === 'en' ? (OPTION_I18N[original] || original) : original;
        option.value = original;
    });

    if (window.historyTrendChart) {
        window.historyTrendChart.data.labels = t.yearLabels;
        window.historyTrendChart.data.datasets[0].label = t.lineDataset;
        window.historyTrendChart.update();
    }

    if (window.ageChart) {
    // 保留 X 軸的語系標籤翻譯（未滿25 / Under 25）
    window.ageChart.data.labels = t.ageChartLabels;
    // 自動帶入當前正選取的年份，動態補上該年份對應的語系 Dataset 標題
    changeAgeChartYear(currentAgeYear);
    }
    if (typeof updateRoiLanguageTexts === 'function') {
    updateRoiLanguageTexts();
}
}

// 核心資料庫：已完整整合您提供的 8 個 CSV 檔案數據
const HISTORICAL_DATA = {
    "113年": { genderGap: 12.5, ageGroups: { "未滿25歲": 38.1, "25-29歲": 52.1, "30-39歲": 58.1, "40-49歲": 62.0, "50-64歲": 57.9 }, 
        industries: { 
            "全體": { male: 58.5, female: 51.2, edu: { "研究所": 109.9, "專科及大學": 58.2, "高中": 48.1, "國中及以下": 43.9 } },
            "工業": { male: 60.9, female: 50.2, edu: { "研究所": 128.1, "專科及大學": 63.5, "高中": 50.5, "國中及以下": 44.8 } },
            "製造業": { male: 63.1, female: 50.6, edu: { "研究所": 133.1, "專科及大學": 65.0, "高中": 51.8, "國中及以下": 45.2 } },
            "電力及燃氣供應業": { male: 110.2, female: 98.3, edu: { "研究所": 116.8, "專科及大學": 106.5, "高中": 118.9, "國中及以下": 54.2 } },
            "用水供應及污染整治業": { male: 51.0, female: 51.1, edu: { "研究所": 88.0, "專科及大學": 61.3, "高中": 50.0, "國中及以下": 44.6 } },
            "營建工程業": { male: 51.8, female: 43.2, edu: { "研究所": 78.3, "專科及大學": 54.3, "高中": 44.1, "國中及以下": 42.7 } },
            "服務業": { male: 55.4, female: 51.7, edu: { "研究所": 93.3, "專科及大學": 54.4, "高中": 45.8, "國中及以下": 42.9 } },
            "批發及零售業": { male: 52.0, female: 49.4, edu: { "研究所": 81.0, "專科及大學": 52.5, "高中": 46.9, "國中及以下": 43.8 } },
            "運輸及倉儲業": { male: 73.2, female: 60.8, edu: { "研究所": 96.8, "專科及大學": 74.3, "高中": 58.8, "國中及以下": 53.8 } },
            "住宿及餐飲業": { male: 45.1, female: 39.7, edu: { "研究所": 49.6, "專科及大學": 41.6, "高中": 40.9, "國中及以下": 42.9 } },
            "出版影音及資通訊業": { male: 89.4, female: 72.5, edu: { "研究所": 121.3, "專科及大學": 74.5, "高中": 63.3, "國中及以下": 55.8 } },
            "金融及保險業": { male: 115.9, female: 107.2, edu: { "研究所": 139.8, "專科及大學": 107.1, "高中": 87.1, "國中及以下": 63.9 } },
            "不動產業": { male: 53.1, female: 54.4, edu: { "研究所": 68.4, "專科及大學": 55.4, "高中": 48.5, "國中及以下": 40.3 } },
            "專業科學及技術服務業": { male: 70.9, female: 58.1, edu: { "研究所": 95.5, "專科及大學": 57.9, "高中": 46.2, "國中及以下": 42.6 } },
            "支援服務業": { male: 39.8, female: 41.4, edu: { "研究所": 62.4, "專科及大學": 44.5, "高中": 40.3, "國中及以下": 38.6 } },
            "教育業": { male: 33.0, female: 39.6, edu: { "研究所": 41.7, "專科及大學": 38.5, "高中": 34.0, "國中及以下": 33.0 } },
            "醫療保健及社會工作服務業": { male: 73.8, female: 61.6, edu: { "研究所": 97.5, "專科及大學": 65.5, "高中": 49.6, "國中及以下": 50.5 } },
            "藝術娛樂及休閒服務業": { male: 51.0, female: 34.6, edu: { "研究所": 55.4, "專科及大學": 41.3, "高中": 37.2, "國中及以下": 36.2 } },
            "其他服務業": { male: 42.0, female: 41.3, edu: { "研究所": 58.8, "專科及大學": 42.2, "高中": 41.6, "國中及以下": 40.5 } }
        } 
    },
    "112年": { genderGap: 12.3, ageGroups: { "未滿25歲": 37.6, "25-29歲": 50.0, "30-39歲": 55.7, "40-49歲": 59.4, "50-64歲": 55.8 }, industries: { "全體": { male: 56.1, female: 49.2, edu: { "研究所": 105.0, "專科及大學": 56.0, "高中": 46.2, "國中及以下": 42.3 } } } },
    "111年": { genderGap: 13.2, ageGroups: { "未滿25歲": 35.8, "25-29歲": 48.6, "30-39歲": 54.9, "40-49歲": 58.6, "50-64歲": 54.7 }, industries: { "全體": { male: 55.5, female: 48.2, edu: { "研究所": 103.5, "專科及大學": 54.5, "高中": 44.9, "國中及以下": 41.2 } } } },
    "110年": { genderGap: 14.1, ageGroups: { "未滿25歲": 34.8, "25-29歲": 47.2, "30-39歲": 54.2, "40-49歲": 58.3, "50-64歲": 54.5 }, industries: { "全體": { male: 54.8, female: 47.1, edu: { "研究所": 100.9, "專科及大學": 54.0, "高中": 44.4, "國中及以下": 40.6 } } } }
};

window.onload = function() {
    window.historyTrendChart = new Chart(document.getElementById('historyTrendChart').getContext('2d'), { 
        type: 'line', 
        data: { labels: ['110年', '111年', '112年', '113年'], datasets: [{ label: '全國性別薪資落差 (%)', data: [14.1, 13.2, 12.3, 12.5], borderColor: '#0f766e', borderWidth: 5, fill: true, backgroundColor: 'rgba(15, 118, 110, 0.10)', tension: 0.3, pointRadius: 8, pointBackgroundColor: '#fff' }] }, 
        options: { maintainAspectRatio: false, scales: { y: { suggestedMin: 11, ticks: { callback: v => v + '%' } } } } 
    });
    
    window.ageChart = new Chart(document.getElementById('ageChart').getContext('2d'), { 
        type: 'bar', 
        data: { labels: ['未滿25', '25-29', '30-39', '40-49', '50-64'], datasets: [{ label: '113年全國中位數 (萬)', data: [38.1, 52.1, 58.1, 62.0, 57.9], backgroundColor: '#14b8a6', borderRadius: 12 }] }, 
        options: { maintainAspectRatio: false } 
    });

    setLanguage(currentLang);
};

let selectedGender = '';
let lastDiagnosis = null;
function setGender(gender) {
    selectedGender = gender;
    document.getElementById('btn-male').className = gender === 'male' ? "px-10 py-4 rounded-2xl bg-indigo-600 text-white font-bold transition shadow-lg" : "px-10 py-4 rounded-2xl border border-white/20 bg-white/5 text-white font-bold transition";
    document.getElementById('btn-female').className = gender === 'female' ? "px-10 py-4 rounded-2xl bg-pink-600 text-white font-bold transition shadow-lg" : "px-10 py-4 rounded-2xl border border-white/20 bg-white/5 text-white font-bold transition";
}

function calculateParity() {
    const year = document.getElementById('userYear').value;
    const edu = document.getElementById('userEdu').value;
    const age = document.getElementById('userAge').value;
    const industry = document.getElementById('userIndustry').value;
    const salaryVal = document.getElementById('userSalary').value;
    
    if (!salaryVal || !selectedGender) { alert(I18N[currentLang].alertMissing); return; }
    const salary = parseFloat(salaryVal);

    const resultBox = document.getElementById('resultBox');
    const yearData = HISTORICAL_DATA[year];
    const indData = (yearData.industries && yearData.industries[industry]) ? yearData.industries[industry] : HISTORICAL_DATA["113年"].industries[industry];
    
    const eduBM = (indData.edu[edu] * 10000) / 12;
    const ageBM = (yearData.ageGroups[age] * 10000) / 12;
    const genderBM = (indData[selectedGender === 'male' ? 'male' : 'female'] * 10000) / 12;
    
    const finalBM = (eduBM * 0.4) + (ageBM * 0.3) + (genderBM * 0.3);
    const ratio = (salary / finalBM) * 100;
    const score = Math.min(Math.round(ratio), 100);
    const gapAmount = Math.round(finalBM - salary);

    lastDiagnosis = {
        year,
        education: edu,
        age,
        industry,
        salary,
        selectedGender,
        fairBenchmark: Math.round(finalBM),
        ratio: Math.round(ratio),
        score,
        gapAmount,
        resultStatus: ratio < 85 ? "below" : "fair"
    };

    const smartAdviceOutput = document.getElementById('smartAdviceOutput');
    if (smartAdviceOutput) {
        smartAdviceOutput.classList.add('hidden');
        smartAdviceOutput.innerHTML = '';
    }

    resultBox.classList.remove('hidden');
    document.getElementById('resultScore').innerText = score + "%";
    document.getElementById('resTag').innerText = `${displayLabel(year)} | ${displayLabel(industry)}`;
    
    let html = `<p>${I18N[currentLang].resultTemplate(displayLabel(year), displayLabel(edu), displayLabel(industry), Math.round(finalBM).toLocaleString())}</p>`;
    
    const solutionSection = document.getElementById('solutionSection');
    if (ratio < 85) {
        document.getElementById('resultTitle').innerText = I18N[currentLang].resultBelowTitle;
        document.getElementById('resultTitle').className = "text-3xl font-black mb-4 text-red-600";
        html += `<p class="mt-4">${I18N[currentLang].resultBelowText}</p>`;
        solutionSection.classList.remove('hidden');
        generateSolutions(selectedGender, edu);
    } else {
        document.getElementById('resultTitle').innerText = I18N[currentLang].resultFairTitle;
        document.getElementById('resultTitle').className = "text-3xl font-black mb-4 text-indigo-900";
        html += `<p class="mt-4">${I18N[currentLang].resultFairText}</p>`;
        solutionSection.classList.add('hidden');
    }

    document.getElementById('resultText').innerHTML = html;
    const circ = 70 * 2 * Math.PI;
    document.getElementById('scoreCircle').style.strokeDashoffset = circ - (score / 100) * circ;
    resultBox.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

const FAIRNESS_GAME_ROUND_SIZE = 5;
let fairnessGameIndex = 0;
let fairnessGameScore = 0;
let fairnessGameAnswered = false;
let fairnessQuestionOrder = [];

function createFairnessQuestionOrder() {
    const totalQuestions = I18N.zh.gameQuestions.length;
    const indexes = Array.from({ length: totalQuestions }, (_, index) => index);

    for (let i = indexes.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [indexes[i], indexes[j]] = [indexes[j], indexes[i]];
    }

    fairnessQuestionOrder = indexes.slice(0, Math.min(FAIRNESS_GAME_ROUND_SIZE, totalQuestions));
}

function getCurrentFairnessQuestion() {
    if (fairnessQuestionOrder.length === 0) {
        createFairnessQuestionOrder();
    }

    const questionIndex = fairnessQuestionOrder[fairnessGameIndex];
    return I18N[currentLang].gameQuestions[questionIndex];
}

function updateFairnessGameText() {
    const gameBox = document.getElementById('gameQuestion');
    if (!gameBox) return;

    if (fairnessQuestionOrder.length === 0) {
        createFairnessQuestionOrder();
    }

    const total = fairnessQuestionOrder.length;
    if (fairnessGameIndex >= total) {
        showFairnessGameResult();
        return;
    }

    const q = getCurrentFairnessQuestion();
    document.getElementById('gameProgress').textContent = I18N[currentLang].gameProgress(fairnessGameIndex + 1, total);
    document.getElementById('gameQuestion').textContent = q.question;
    document.getElementById('gameScore').textContent = fairnessGameScore;
    document.getElementById('gameNextBtn').textContent = fairnessGameIndex === total - 1 ? I18N[currentLang].gameFinish : I18N[currentLang].gameNext;

    const optionsBox = document.getElementById('gameOptions');
    optionsBox.innerHTML = q.options.map((option, index) => `
        <button onclick="answerFairnessQuestion(${index})" class="game-option text-left border border-slate-200 hover:border-indigo-400 hover:bg-indigo-50 rounded-2xl p-5 font-bold transition">
            ${String.fromCharCode(65 + index)}. ${option}
        </button>
    `).join('');

    const feedback = document.getElementById('gameFeedback');
    feedback.classList.add('hidden');
    feedback.textContent = '';

    const result = document.getElementById('gameResult');
    result.classList.add('hidden');
    result.innerHTML = '';

    fairnessGameAnswered = false;
    document.getElementById('gameNextBtn').disabled = true;
}

function answerFairnessQuestion(selectedIndex) {
    if (fairnessGameAnswered) return;

    const q = getCurrentFairnessQuestion();
    const isCorrect = selectedIndex === q.answer;
    const feedback = document.getElementById('gameFeedback');
    const optionButtons = document.querySelectorAll('.game-option');

    fairnessGameAnswered = true;
    if (isCorrect) fairnessGameScore += 1;

    optionButtons.forEach((button, index) => {
        button.disabled = true;
        button.classList.remove('hover:border-indigo-400', 'hover:bg-indigo-50');

        if (index === q.answer) {
            button.classList.add('border-green-400', 'bg-green-50', 'text-green-700');
        } else if (index === selectedIndex) {
            button.classList.add('border-red-300', 'bg-red-50', 'text-red-600');
        } else {
            button.classList.add('opacity-60');
        }
    });

    feedback.classList.remove('hidden');
    feedback.className = isCorrect
        ? "rounded-2xl p-5 mb-6 text-sm leading-relaxed bg-green-50 text-green-700 border border-green-100"
        : "rounded-2xl p-5 mb-6 text-sm leading-relaxed bg-red-50 text-red-700 border border-red-100";
    feedback.textContent = `${isCorrect ? "✅" : "💡"} ${q.explain}`;

    document.getElementById('gameScore').textContent = fairnessGameScore;
    document.getElementById('gameNextBtn').disabled = false;
}

function nextFairnessQuestion() {
    if (!fairnessGameAnswered) return;

    fairnessGameIndex += 1;

    if (fairnessGameIndex >= fairnessQuestionOrder.length) {
        showFairnessGameResult();
    } else {
        updateFairnessGameText();
    }
}

function showFairnessGameResult() {
    const t = I18N[currentLang];
    const total = fairnessQuestionOrder.length || FAIRNESS_GAME_ROUND_SIZE;
    const result = document.getElementById('gameResult');
    const feedback = document.getElementById('gameFeedback');

    let message = t.gameResultLow;
    if (fairnessGameScore >= 4) message = t.gameResultHigh;
    else if (fairnessGameScore >= 2) message = t.gameResultMid;

    document.getElementById('gameProgress').textContent = t.gameResultTitle;
    document.getElementById('gameQuestion').textContent = t.gameResultScore(fairnessGameScore, total);
    document.getElementById('gameOptions').innerHTML = '';
    document.getElementById('gameNextBtn').disabled = true;
    document.getElementById('gameNextBtn').textContent = t.gameNext;
    feedback.classList.add('hidden');

    result.classList.remove('hidden');
    result.innerHTML = `
        <div class="bg-indigo-50 border border-indigo-100 rounded-2xl p-6">
            <h4 class="text-2xl font-black text-indigo-900 mb-3">${t.gameResultTitle}</h4>
            <p class="text-slate-700 leading-relaxed">${message}</p>
        </div>
    `;
}

function restartFairnessGame() {
    fairnessGameIndex = 0;
    fairnessGameScore = 0;
    fairnessGameAnswered = false;
    createFairnessQuestionOrder();
    updateFairnessGameText();
}

function getIndustryAdviceZh(industry) {
    if (industry.includes("出版影音") || industry.includes("資通訊")) {
        return "資通訊相關產業重視作品集與技術能力，建議整理專案成果、系統截圖、GitHub 或作品展示，讓薪資談判更有證據。";
    }
    if (industry.includes("金融") || industry.includes("保險")) {
        return "金融保險業薪資差異常和證照、業績、風控或數據能力有關，建議補強證照、報表分析能力與績效紀錄。";
    }
    if (industry.includes("醫療")) {
        return "醫療與社會工作服務業可強調專業證照、服務量、輪班負荷與責任風險，作為薪資調整的依據。";
    }
    if (industry.includes("住宿") || industry.includes("餐飲")) {
        return "住宿餐飲業薪資基準較容易受工時與職務內容影響，建議確認加班、班表、職責範圍與實際薪資是否合理。";
    }
    if (industry.includes("製造") || industry.includes("工業")) {
        return "工業與製造業可從技術熟練度、產線效率、品質改善、設備操作能力等面向建立談薪證據。";
    }
    return "建議蒐集同產業、同學歷與相近年齡層的薪資資料，搭配自己的工作成果，形成更完整的薪資討論依據。";
}

function getIndustryAdviceEn(industry) {
    if (industry.includes("出版影音") || industry.includes("資通訊")) {
        return "For media and ICT-related industries, portfolios and technical proof matter. Prepare project outcomes, screenshots, GitHub links, or product demos as evidence for negotiation.";
    }
    if (industry.includes("金融") || industry.includes("保險")) {
        return "In finance and insurance, salary differences are often related to licenses, performance, risk control, or data skills. Strengthen certifications, reporting skills, and performance records.";
    }
    if (industry.includes("醫療")) {
        return "In healthcare and social work, professional licenses, service volume, shift burden, and responsibility level can be used as evidence for salary adjustment.";
    }
    if (industry.includes("住宿") || industry.includes("餐飲")) {
        return "In accommodation and food services, salary fairness is often affected by working hours and job scope. Check overtime, scheduling, responsibilities, and actual pay carefully.";
    }
    if (industry.includes("製造") || industry.includes("工業")) {
        return "In industrial and manufacturing roles, use technical proficiency, production efficiency, quality improvement, and equipment operation ability as negotiation evidence.";
    }
    return "Collect salary information from the same industry, education level, and similar age group, then combine it with your own work achievements for a stronger salary discussion.";
}

function generateSmartAdvice() {
    const t = I18N[currentLang];
    const output = document.getElementById('smartAdviceOutput');

    if (!lastDiagnosis) {
        alert(t.smartAdviceNeedDiagnosis);
        return;
    }

    const d = lastDiagnosis;
    const isEn = currentLang === 'en';
    const genderLabel = d.selectedGender === 'male' ? t.male : t.female;
    const gapText = Math.abs(d.gapAmount).toLocaleString();

    let levelText, summary, strategies = [], checklist = [], script = "", actionPlan = [];

    if (isEn) {
        if (d.ratio < 75) {
            levelText = "High gap risk";
            summary = `Your current salary is far below the estimated fairness benchmark. The gap is about NT$${gapText} per month, so you should prepare evidence and discuss salary adjustment carefully.`;
        } else if (d.ratio < 85) {
            levelText = "Below benchmark";
            summary = `Your salary is below the fairness benchmark by about NT$${gapText} per month. You should review your job scope and prepare for a salary conversation.`;
        } else if (d.ratio < 100) {
            levelText = "Close to benchmark";
            summary = `Your salary is close to the benchmark but still slightly lower. Focus on documenting performance and preparing for the next review cycle.`;
        } else {
            levelText = "Meets benchmark";
            summary = `Your salary meets or exceeds the current benchmark. The next step is to maintain competitiveness and plan long-term growth.`;
        }

        strategies.push("Build a salary evidence file: include job responsibilities, achievements, overtime or workload records, and comparable salary data.");
        strategies.push(getIndustryAdviceEn(d.industry));

        if (d.selectedGender === "female" && d.ratio < 100) {
            strategies.push("Pay equity angle: document whether people with similar responsibilities receive different treatment, and focus the discussion on role value and equal pay for equal work.");
        } else if (d.education === "高中" || d.education === "國中及以下") {
            strategies.push("Skill upgrade angle: choose one practical certificate, course, or portfolio project that can directly increase your value in the current industry.");
        } else {
            strategies.push("Career mobility angle: compare internal promotion, transfer, and external job opportunities to understand your real market value.");
        }

        checklist = [
            "List three measurable work achievements from the last 3-6 months.",
            "Write down your current responsibilities and any tasks beyond your original role.",
            "Collect salary references from reliable public statistics or job platforms.",
            "Prepare a target salary range instead of only one number.",
            "Practice a calm, evidence-based conversation with your manager."
        ];

        script = `I would like to discuss my compensation based on my current responsibilities and recent contributions. According to the benchmark used in this diagnosis, my current salary is at ${d.ratio}% of the estimated fair benchmark. I hope we can review whether my salary matches my role scope and performance, and discuss a reasonable adjustment plan.`;

        actionPlan = [
            "Week 1: Organize your responsibilities, achievements, and salary benchmark data.",
            "Week 2: Identify skill gaps and choose one improvement action, such as a certificate, course, or portfolio project.",
            "Week 3: Prepare your salary conversation outline and target range.",
            "Week 4: Schedule a discussion with your manager or evaluate alternative opportunities."
        ];
    } else {
        if (d.ratio < 75) {
            levelText = "高度落差風險";
            summary = `您的目前薪資明顯低於公平基準，月薪差距約 ${gapText} 元，建議優先整理證據並謹慎規劃談薪。`;
        } else if (d.ratio < 85) {
            levelText = "低於基準";
            summary = `您的薪資低於公平基準，月薪差距約 ${gapText} 元，建議檢視職責範圍並準備薪資溝通。`;
        } else if (d.ratio < 100) {
            levelText = "接近基準";
            summary = `您的薪資接近公平基準，但仍略低於估算值，建議累積績效證據，為下一次調薪或轉職做準備。`;
        } else {
            levelText = "符合基準";
            summary = `您的薪資已達到或高於目前公平基準，後續重點是維持競爭力與規劃長期職涯成長。`;
        }

        strategies.push("建立薪資佐證資料夾：整理工作職責、實際貢獻、加班或工作量紀錄，以及同產業薪資資料。");
        strategies.push(getIndustryAdviceZh(d.industry));

        if (d.selectedGender === "female" && d.ratio < 100) {
            strategies.push("性別平權角度：若同職位、同責任卻存在薪資差距，建議以職務價值與同工同酬作為溝通主軸。");
        } else if (d.education === "高中" || d.education === "國中及以下") {
            strategies.push("技能提升角度：選擇一項能直接增加產業競爭力的證照、課程或作品集，提升談薪籌碼。");
        } else {
            strategies.push("職涯流動角度：比較內部調薪、轉部門與外部職缺，確認自己的實際市場價值。");
        }

        checklist = [
            "列出近 3 到 6 個月內最具體的三項工作成果。",
            "整理目前職責，以及超出原本工作範圍的任務。",
            "蒐集官方統計或求職平台上的薪資參考資料。",
            "準備一個合理薪資區間，不要只準備單一數字。",
            "用冷靜、以證據為主的方式練習與主管溝通。"
        ];

        script = `我想根據目前的工作職責與近期貢獻，討論薪資是否有調整空間。依照本系統的公平基準估算，我目前薪資約為基準的 ${d.ratio}%。希望能一起檢視我的職務內容、績效成果與薪資是否相符，並討論合理的調整方向。`;

        actionPlan = [
            "第 1 週：整理職職、成果與薪資基準資料。",
            "第 2 週：確認自己的技能缺口，選擇一項證照、課程或作品集改善方向。",
            "第 3 週：準備談薪大綱與合理薪資區間。",
            "第 4 週：安排與主管溝通，或同步評估其他職涯機會。"
        ];
    }

    output.classList.remove('hidden');
    output.innerHTML = `
        <div class="space-y-6">
            <div>
                <p class="text-xs font-black text-indigo-600 uppercase tracking-widest mb-2">${levelText}</p>
                <h6 class="text-2xl font-black text-slate-900 mb-3">${isEn ? "Personalized Diagnosis Summary" : "個人化診斷摘要"}</h6>
                <p>${summary}</p>
                <p class="mt-3 text-sm text-slate-500">
                    ${isEn ? "Diagnosis conditions" : "診斷條件"}：
                    ${displayLabel(d.year)}｜${displayLabel(d.education)}｜${displayLabel(d.age)}｜${displayLabel(d.industry)}｜${genderLabel}
                </p>
            </div>

            <div>
                <h6 class="font-black text-slate-900 mb-3">${isEn ? "Improvement Strategies" : "改善策略"}</h6>
                <ul class="list-disc pl-6 space-y-2">
                    ${strategies.map(item => `<li>${item}</li>`).join('')}
                </ul>
            </div>

            <div>
                <h6 class="font-black text-slate-900 mb-3">${isEn ? "Negotiation Preparation Checklist" : "談薪準備清單"}</h6>
                <ul class="list-disc pl-6 space-y-2">
                    ${checklist.map(item => `<li>${item}</li>`).join('')}
                </ul>
            </div>

            <div>
                <h6 class="font-black text-slate-900 mb-3">${isEn ? "Suggested Conversation Script" : "談薪話術範例"}</h6>
                <div class="bg-white border border-slate-200 rounded-2xl p-5 text-slate-600">${script}</div>
            </div>

            <div>
                <h6 class="font-black text-slate-900 mb-3">${isEn ? "30-day Action Plan" : "30 天行動計畫"}</h6>
                <ol class="list-decimal pl-6 space-y-2">
                    ${actionPlan.map(item => `<li>${item}</li>`).join('')}
                </ol>
            </div>
        </div>
    `;
}

function generateSolutions(gender, edu) {
    const grid = document.getElementById('solutionGrid');
    const isEn = currentLang === 'en';

    const sols = isEn ? [
        {
            title: "1. Collect concrete evidence",
            icon: "📁",
            desc: `
                <strong>Preparation:</strong> Before asserting your rights, prepare evidence for later proof.<br>
                <strong>Employment relationship:</strong> labor contract, offer letter, employment certificate.<br>
                <strong>Salary proof:</strong> payslips, bank transfer records, withholding tax statement.<br>
                <strong>Attendance and overtime records:</strong> clock-in records, overtime request forms, and work assignment or working-hour messages from communication apps such as LINE.
            `
        },
        {
            title: "2. Call official consultation hotlines",
            icon: "☎️",
            desc: `
                If you are unsure how to calculate unpaid wages or evaluate your rights, use official consultation channels first.<br>
                <strong>1955 Labor Consultation and Complaint Hotline:</strong> free of charge, available year-round, and provides labor law consultation.<br>
                <strong>Local labor departments:</strong> for example, Taipei City residents may call 1999 and ask for the Labor Standards Division; Taichung City may call (04) 2228-9111 ext. 35200.
            `
        },
        {
            title: "3. File a formal complaint or seek remedies",
            icon: "⚖️",
            desc: `
                <strong>Administrative complaint and labor inspection:</strong> report to the local labor department and request labor inspection. If the employer violates the law, the authority may impose penalties and require payment within a deadline.<br>
                <strong>Apply for labor-management dispute mediation:</strong> mediation is usually faster than litigation. Download and complete the mediation application form from the labor department website where you work, or submit through the local government's online labor dispute mediation system.
            `
        }
    ] : [
        {
            title: "1. 具體蒐證",
            icon: "📁",
            desc: `
                <strong>準備事項：</strong>在主張權利前，請備妥以下證據以利後續舉證。<br>
                <strong>勞雇關係證明：</strong>勞動契約、錄取通知書（Offer Letter）、在職證明。<br>
                <strong>薪資證明：</strong>薪資單、匯款存摺明細、扣繳憑單。<br>
                <strong>出勤與加班紀錄：</strong>打卡紀錄、加班申請單、通訊軟體（LINE）交辦工作與工時的對話紀錄。
            `
        },
        {
            title: "2. 撥打專線諮詢",
            icon: "☎️",
            desc: `
                若不確定如何計算欠薪或評估自身權益，可先利用官方諮詢管道。<br>
                <strong>1955 勞工諮詢申訴專線：</strong>全年無休、免付費，專門提供勞動法令諮詢。<br>
                <strong>各縣市勞工局：</strong>如台北市請撥打 1999 轉勞動基準科；台中市撥打 (04)22289111 轉 35200。
            `
        },
        {
            title: "3. 正式提出申訴與救濟",
            icon: "⚖️",
            desc: `
                <strong>行政申訴與勞檢：</strong>向地方勞工局提出檢舉，要求勞動檢查。若雇主違法，勞工局可依法開罰並要求限期給付。<br>
                <strong>申請勞資爭議調解：</strong>調解程序通常較訴訟快速。請至工作地勞工局官網下載填寫「調解申請書」，或使用地方政府的「線上勞資爭議調解申辦系統」送件。
            `
        }
    ];

    grid.innerHTML = sols.map(s => `
        <div class="solution-card bg-slate-50 p-6 rounded-2xl border border-slate-100">
            <div class="text-2xl mb-3">${s.icon}</div>
            <h6 class="font-bold mb-3 text-slate-800">${s.title}</h6>
            <p class="text-sm text-slate-500 leading-relaxed">${s.desc}</p>
        </div>
    `).join('');
}

// Supabase Init
const SUPABASE_URL = "https://tcyzujkmjnnmgktkozdy.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_q5FbNzid-UFu3wAXyJqG1w_nx6bKNqO";
const db = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

function getReportBenefitLabel(key) {
  return I18N[currentLang].reportBenefits[key] || key;
}

function formatReportTime(isoString) {
  const date = new Date(isoString);
  if (Number.isNaN(date.getTime())) return "";
  return date.toLocaleDateString(currentLang === 'en' ? 'en-US' : 'zh-TW', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  });
}

function escapeHTML(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

async function submitAnonymousReport() {
  const t = I18N[currentLang];

  const company = document.getElementById('reportCompany').value.trim().slice(0, 40);
  const jobTitle = document.getElementById('reportJobTitle').value.trim().slice(0, 40);
  const salary = Number(document.getElementById('reportSalary').value);
  const selectedBenefits = Array.from(document.querySelectorAll('input[name="reportBenefit"]:checked'))
    .map(input => getReportBenefitLabel(input.value));

  const benefitDetails = document.getElementById('reportBenefitDetail').value.trim().slice(0, 300);
  const privacyChecked = document.getElementById('reportPrivacyCheck').checked;

  if (!company) {
    alert(t.reportNeedCompany);
    return;
  }

  if (!jobTitle) {
    alert(t.reportNeedJob);
    return;
  }

  if (!salary || salary <= 0) {
    alert(t.reportNeedSalary);
    return;
  }

  if (!privacyChecked) {
    alert(t.reportNeedPrivacy);
    return;
  }

  const benefitsText = [
    selectedBenefits.length ? `福利項目：${selectedBenefits.join("、")}` : "福利項目：未勾選",
    benefitDetails ? `詳細資訊：${benefitDetails}` : ""
  ].filter(Boolean).join("\n");

  const { error } = await db
    .from("salary_reports")
    .insert({
      company_name: company,
      position: jobTitle,
      salary: Math.round(salary),
      salary_type: "月薪",
      benefits: benefitsText
    });

  if (error) {
    console.error(error);
    alert("送出失敗，請打開 Console 查看錯誤");
    return;
  }

  document.getElementById('reportCompany').value = "";
  document.getElementById('reportJobTitle').value = "";
  document.getElementById('reportSalary').value = "";
  document.getElementById('reportBenefitDetail').value = "";
  document.getElementById('reportPrivacyCheck').checked = false;
  document.querySelectorAll('input[name="reportBenefit"]:checked').forEach(input => input.checked = false);

  await renderAnonymousReports();

  alert(t.reportSuccess);
}

async function renderAnonymousReports() {
  const statsBox = document.getElementById('reportStats');
  const list = document.getElementById('reportList');
  const count = document.getElementById('reportCount');

  if (!statsBox || !list || !count) return;

  const t = I18N[currentLang];

  // 從 Supabase 撈取所有回報資料
  const { data, error } = await db
    .from("salary_reports")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error(error);
    statsBox.innerHTML = `
      <div class="bg-white/5 border border-white/10 rounded-2xl p-5 md:col-span-2 text-red-300">
        讀取 Supabase 資料失敗，請查看 Console。
      </div>
    `;
    return;
  }

  const reports = data || [];
  count.textContent = reports.length;

  if (reports.length === 0) {
    statsBox.innerHTML = `
      <div class="bg-white/5 border border-white/10 rounded-2xl p-5 md:col-span-2 text-slate-400">
        ${t.reportEmpty}
      </div>
    `;
    list.innerHTML = "";
    return;
  }

  // 1. 計算平均月薪
  const avgSalary = Math.round(
    reports.reduce((sum, item) => sum + Number(item.salary || 0), 0) / reports.length
  );

  // 2. 核心升級：解析並統計所有被勾選的福利次數 (同時交叉比對中英文標籤，防範多語系提交落差)
  const counts = { bonus: 0, insurance: 0, remote: 0, training: 0, meal: 0, leave: 0 };
  
  reports.forEach(item => {
    const text = item.benefits || "";
    if (text.includes(I18N.zh.reportBenefits.bonus) || text.includes(I18N.en.reportBenefits.bonus)) counts.bonus++;
    if (text.includes(I18N.zh.reportBenefits.insurance) || text.includes(I18N.en.reportBenefits.insurance)) counts.insurance++;
    if (text.includes(I18N.zh.reportBenefits.remote) || text.includes(I18N.en.reportBenefits.remote)) counts.remote++;
    if (text.includes(I18N.zh.reportBenefits.training) || text.includes(I18N.en.reportBenefits.training)) counts.training++;
    if (text.includes(I18N.zh.reportBenefits.meal) || text.includes(I18N.en.reportBenefits.meal)) counts.meal++;
    if (text.includes(I18N.zh.reportBenefits.leave) || text.includes(I18N.en.reportBenefits.leave)) counts.leave++;
  });

  const totalReports = reports.length;
  
  // 轉換成陣列物件並依回報次數由大到小排序
  const sortedBenefits = Object.keys(counts)
    .map(key => ({
      key: key,
      count: counts[key],
      percentage: totalReports > 0 ? Math.round((counts[key] / totalReports) * 100) : 0
    }))
    .sort((a, b) => b.count - a.count);

  // 3. 完美對接原本網頁風格的「熱門福利統計牆」HTML 渲染
  const top3HTML = sortedBenefits.slice(0, 3)
    .filter(b => b.count > 0) // 有人回報過的福利才顯示
    .map((b, index) => {
      const label = I18N[currentLang].reportBenefits[b.key];
      return `
        <div class="flex items-center justify-between bg-white/10 px-4 py-1.5 rounded-xl border border-white/5 text-slate-200">
          <span class="font-bold text-xs md:text-sm truncate mr-2">${index + 1}. ${label}</span>
          <span class="text-lime-300 font-black text-xs shrink-0">${b.percentage}%</span>
        </div>
      `;
    }).join('');

  const topBenefitDisplay = top3HTML || `<p class="text-slate-400 text-sm mt-1">${t.reportNoBenefit}</p>`;

  // 4. 動態重構統計方框（移除原本死板的一行字，換成動態排行榜）
  statsBox.innerHTML = `
    <div class="bg-white/5 border border-white/10 rounded-2xl p-5 flex flex-col justify-center">
      <p class="text-slate-400 text-sm mb-2">${t.reportAvgSalary}</p>
      <p class="text-3xl font-black text-white">NT$${avgSalary.toLocaleString()}</p>
    </div>
    <div class="bg-white/5 border border-white/10 rounded-2xl p-5 flex flex-col justify-between">
      <div>
        <p class="text-slate-400 text-sm mb-3">${t.reportTopBenefit}</p>
        <div class="space-y-1.5">
          ${topBenefitDisplay}
        </div>
      </div>
    </div>
  `;

  // 5. 渲染最近 8 筆匿名回報明細卡片 (保留原本邏輯)
  list.innerHTML = reports.slice(0, 8).map(item => {
    return `
      <article class="bg-white/5 border border-white/10 rounded-2xl p-5">
        <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-3">
          <h4 class="text-xl font-black text-white">${escapeHTML(item.company_name)}</h4>
          <span class="text-slate-400 text-xs">${formatReportTime(item.created_at)}</span>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-slate-300">
          <p><span class="text-slate-500">${t.reportJob}：</span>${escapeHTML(item.position)}</p>
          <p><span class="text-slate-500">${t.reportSalary}：</span>NT$${Number(item.salary || 0).toLocaleString()}</p>
          <p class="md:col-span-2 whitespace-pre-line">
            <span class="text-slate-500">${t.reportBenefitTitle}：</span>${escapeHTML(item.benefits || "未填寫")}
          </p>
        </div>
      </article>
    `;
  }).join('');
}

renderAnonymousReports();
// 追蹤當前年齡圖表選取的年份，預設為 113年
let currentAgeYear = '113年';

function changeAgeChartYear(year) {
    currentAgeYear = year;
    if (!window.ageChart) return;

    // 1. 從你現有的 HISTORICAL_DATA 核心資料庫撈取指定年份數據
    const yearData = HISTORICAL_DATA[year];
    if (!yearData || !yearData.ageGroups) return;

    // 依據標籤順序，對應抓取核心資料庫內的數值
    const labels = ['未滿25歲', '25-29歲', '30-39歲', '40-49歲', '50-64歲'];
    const chartData = labels.map(label => yearData.ageGroups[label]);

    // 2. 判斷目前語系，動態生成符合中英文的圖表標籤
    const isEn = currentLang === 'en';
    const displayYear = isEn ? (OPTION_I18N[year] || year) : year;
    const unit = isEn ? '10k TWD' : '萬';
    
    // 3. 更新 Chart.js 的內部數據與 Dataset Label
    window.ageChart.data.datasets[0].data = chartData;
    window.ageChart.data.datasets[0].label = isEn 
        ? `${displayYear} National Median Salary (${unit})` 
        : `${displayYear}全國中位數 (${unit})`;
    
    // 叫 Chart.js 重新渲染圖表動畫
    window.ageChart.update();

    // 4. 動態更新卡片內的小標題文字
    const titleEl = document.getElementById('ageChartTitle');
    if (titleEl) {
        titleEl.innerHTML = `<span class="w-3 h-3 rounded-full bg-lime-400"></span>${
            isEn ? `${displayYear} Median Salary by Age Group Across Industries` : `${displayYear}年全產業年齡別薪資中位數`
        }`;
    }

    // 5. 切換按鈕的 UI 高亮樣式（選中的變藍底白字，其餘變灰色）
    const yearsList = ['113年', '112年', '111年'];
    yearsList.forEach(y => {
        // 去除「年」字以對應 HTML 的 id (如 btn-age-113)
        const btnId = `btn-age-${y.replace('年', '')}`;
        const btn = document.getElementById(btnId);
        if (btn) {
            btn.textContent = isEn ? (OPTION_I18N[y] || y) : y; // 按鈕文字同步雙語化
            if (y === year) {
                btn.className = "px-4 py-1.5 rounded-full bg-indigo-600 text-white transition duration-200";
            } else {
                btn.className = "px-4 py-1.5 rounded-full text-slate-600 hover:text-black transition duration-200";
            }
        }
    });
}


function calculateEduROI() {
    const industry = document.getElementById('roiIndustry').value;
    const data113 = HISTORICAL_DATA["113年"].industries[industry];
    
    if (!data113 || !data113.edu) return;

    // 1. 抓取對應學歷數據 (萬/年)
    const univSalary = data113.edu["專科及大學"];
    const gradSalary = data113.edu["研究所"];
    
    // 2. 計算核心 ROI 指標
    const annualPremium = (gradSalary - univSalary).toFixed(1);
    const monthlyPremium = Math.round(((gradSalary - univSalary) * 10000) / 12);
    const roiPercentage = (((gradSalary - univSalary) / univSalary) * 100).toFixed(1);

    // 3. 依據溢價幅度 (ROI %)，動態產出極具洞察力的決策指南評語
    let commentZh = "";
    let commentEn = "";

    if (roiPercentage >= 50) {
        commentZh = `🚀 <strong>黃金投報率！</strong> 研究所學歷在該行業具備極強的生存優勢，碩士溢價極高（每月平均多賺約 ${monthlyPremium.toLocaleString()} 元），強烈建議攻讀碩士！`;
        commentEn = `🚀 <strong>Golden ROI!</strong> Post-grad degree holds a powerful advantage here. The premium is massive (approx. +NT$${monthlyPremium.toLocaleString()}/mo). Highly recommend graduate school!`;
    } else if (roiPercentage >= 25) {
        commentZh = `📈 <strong>穩定高回報！</strong> 碩士能帶來顯著的加薪效益（每月多賺約 ${monthlyPremium.toLocaleString()} 元），是一筆非常精準且值得投資的職涯資本。`;
        commentEn = `📈 <strong>Solid Return!</strong> A master's degree brings significant leverage (+NT$${monthlyPremium.toLocaleString()}/mo). It is a well-justified career investment.`;
    } else {
        commentZh = `⚖️ <strong>實務經驗優先！</strong> 碩士與大學薪資落差較小（加薪幅僅 ${roiPercentage}%）。該產業可能更看重在職實務經驗、年資或核心證照，建議審慎評估兩年時間與學費成本。`;
        commentEn = `⚖️ <strong>Experience First!</strong> Low salary premium (+${roiPercentage}%). This industry values on-the-job experience or practical licenses more than diplomas. Evaluate the cost carefully.`;
    }

    // 4. 判斷現行雙語系語境，渲染網頁文字
    const isEn = currentLang === 'en';
    
    document.getElementById('roiUnivText').innerText = isEn ? `${univSalary}萬 / Yr` : `${univSalary} 萬/年`;
    document.getElementById('roiGradText').innerText = isEn ? `${gradSalary}萬 / Yr` : `${gradSalary} 萬/年`;
    document.getElementById('roiPremiumText').innerHTML = isEn 
        ? `+${annualPremium}萬 <span class="text-lg font-bold text-slate-500">/ Yr</span>`
        : `+${annualPremium} 萬 <span class="text-lg font-bold text-slate-500">/ 年</span>`;
    document.getElementById('roiPercentText').innerText = isEn 
        ? `Salary Premium: +${roiPercentage}%` 
        : `學歷加薪幅度：+${roiPercentage}%`;
    document.getElementById('roiComment').innerHTML = isEn ? commentEn : commentZh;

    // 5. 動態比例條動畫優化 (以最大可能年薪 140 萬作為比例尺基準)
    const maxScale = 140;
    const univWidth = Math.min((univSalary / maxScale) * 100, 100);
    const gradWidth = Math.min((gradSalary / maxScale) * 100, 100);
    
    document.getElementById('roiUnivBar').style.width = univWidth + '%';
    document.getElementById('roiGradBar').style.width = gradWidth + '%';
}

// 6. 擴充原本的 setLanguage 雙語翻譯字典，維持全站高密合度語系切換
function updateRoiLanguageTexts() {
    const isEn = currentLang === 'en';
    
    document.getElementById('roiTitle').innerHTML = isEn ? "Should You Go to Grad School?<br>Education ROI Calculator" : "該不該讀研究所？<br>學歷投報率計算";
    document.getElementById('roiDesc').innerText = isEn 
        ? "Cross-examine official statistics to analyze the salary premium of Master's vs. Bachelor's degrees across industries. Make smart investments in your career."
        : "交叉比對 113 年官方完整數據，深度解析不同產業中「碩士」相比於「學士」的薪資溢價，出社會前幫自己做最精準的職涯投資評估。";
    document.getElementById('roiSelectLabel').innerText = isEn ? "Select Industry for Evaluation:" : "請選擇欲評估的行業別：";
    document.getElementById('roiNote').innerHTML = isEn 
        ? "💡 Methodology Notes: This calculator dynamically retrieves data from baseline tables to calculate the precise capital premium while excluding outliers."
        : "💡 數據分析幕後：本計算器動態撈取底層核心報表，排除極端值，精算同產業內之學歷資本實質溢價率。";
    document.getElementById('roiGuideTitle').innerText = isEn ? "Big Data Career Guide" : "大數據職涯指南";
    
    // 重新跑一次計算，刷新當前畫面的中英文文字
    calculateEduROI();
}

// 綁定到全域供 HTML 調用
window.calculateEduROI = calculateEduROI;

// 如果未來將 JS 改為 type="module" 部署，這行能確保 HTML 的 onclick 依然叫得到它
window.changeAgeChartYear = changeAgeChartYear;
// 初始化預設執行一次計算
setTimeout(calculateEduROI, 500);