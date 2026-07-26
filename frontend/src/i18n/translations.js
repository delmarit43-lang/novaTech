export const LANGUAGES = [
  { code: 'EN', name: 'English', dir: 'ltr', htmlLang: 'en' },
  { code: 'SO', name: 'Somali', dir: 'ltr', htmlLang: 'so' },
  { code: 'AR', name: 'العربية', dir: 'rtl', htmlLang: 'ar' },
];

export const translations = {
  EN: {
    nav: {
      services: 'Services',
      about: 'About',
      portfolio: 'Portfolio',
      process: 'Process',
      pricing: 'Pricing',
      insights: 'Insights',
      faq: 'FAQ',
      search: 'Search',
      startBuilding: 'Start Building',
      startProject: 'Start Project',
      requestProposal: 'Request Custom Proposal',
      megaMenuLabel: '7 ENTERPRISE SERVICE CATEGORIES',
    },
    hero: {
      launch: 'Launch Your Solution',
      explore: 'Explore Platform Demo',
    },
    contact: {
      submitSuccess: 'Your build request was sent! Our team will review it in the admin dashboard.',
      submitError: 'Could not send request. Check that the backend is running on port 5000.',
      required: 'Please complete all required fields (Name, Email, Project Description).',
    },
  },
  SO: {
    nav: {
      services: 'Adeegyada',
      about: 'Nagu saabsan',
      portfolio: 'Mashaariic',
      process: 'Habka Shaqada',
      pricing: 'Qiimaha',
      insights: 'Maqaallo',
      faq: 'Su\'aalaha',
      search: 'Raadi',
      startBuilding: 'Bilow Dhismaha',
      startProject: 'Bilow Mashruuc',
      requestProposal: 'Codso Qorshe Gaar ah',
      megaMenuLabel: '7 QAYBOOD OO ADEEGYO ENTERPRISE AH',
    },
    hero: {
      launch: 'Bilow Xalkaaga',
      explore: 'Daawo Demo-ga',
    },
    contact: {
      submitSuccess: 'Codsigaaga dhismaha waa la diray! Kooxdu waxay ka arki doontaa dashboard-ka admin.',
      submitError: 'Lama dirin codsiga. Hubi in backend-ku socdo port 5000.',
      required: 'Fadlan buuxi goobaha loo baahan yahay (Magac, Email, Sharaxaadda Mashruuca).',
    },
  },
  AR: {
    nav: {
      services: 'الخدمات',
      about: 'من نحن',
      portfolio: 'الأعمال',
      process: 'العملية',
      pricing: 'الأسعار',
      insights: 'المقالات',
      faq: 'الأسئلة',
      search: 'بحث',
      startBuilding: 'ابدأ البناء',
      startProject: 'ابدأ مشروعاً',
      requestProposal: 'طلب عرض مخصص',
      megaMenuLabel: '7 فئات خدمات مؤسسية',
    },
    hero: {
      launch: 'أطلق حلّك',
      explore: 'استكشف المنصة',
    },
    contact: {
      submitSuccess: 'تم إرسال طلب البناء! سيراجعه الفريق في لوحة الإدارة.',
      submitError: 'تعذّر الإرسال. تأكد أن الخادم يعمل على المنفذ 5000.',
      required: 'يرجى إكمال الحقول المطلوبة (الاسم، البريد، وصف المشروع).',
    },
  },
};

export function getNested(obj, path) {
  return path.split('.').reduce((acc, key) => acc?.[key], obj);
}
