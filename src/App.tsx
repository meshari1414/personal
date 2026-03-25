import { useState } from 'react';

// أنواع البيانات
interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link?: string;
  category: string;
}

interface Category {
  id: string;
  name: string;
  icon: string;
  link?: string;
}

// الأقسام - يمكن تحديثها لاحقاً
const categories: Category[] = [
  { id: 'all', name: 'البرامج', icon: '📁', link: 'https://drive.google.com/drive/folders/1vUs9pgtKxsmNSVp98i0ltsphExmGlrCh?usp=drive_link' },
  { id: 'web', name: 'التعريفات', icon: '🌐', link: 'https://drive.google.com/drive/folders/15VDk_9eZqHvnHy2YrWvgZ12KOIlgzBhA?usp=drive_link' },
  { id: 'mobile', name: 'الخطوط', icon: '🔤', link: 'https://drive.google.com/drive/folders/1hbKXZ2WvtCtWje6_1P4V_cD7hwz6RuPI?usp=drive_link' },
  { id: 'design', name: 'اكواد', icon: '💻', link: 'https://drive.google.com/drive/folders/1etcdxm5a-BltKyZLXIJ_F6Se6b4kxjZ_?usp=drive_link' },
];

// بيانات تجريبية لمشاريع معرض الأعمال
const projects: Project[] = [];

function App() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // تصفية المشاريع حسب القسم
  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50" dir="rtl">
      {/* الهيدر */}
{/* القسم الرئيسي */}
      <section id="home" className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
<h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
             <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Meshari</span>
          </h2>
          <div className="flex gap-4 justify-center">
            <a
              href="mailto:Meshari1414@hotmail.com"
              className="w-12 h-12 rounded-xl bg-white text-gray-700 border-2 border-gray-200 hover:border-blue-600 hover:text-blue-600 transition-all flex items-center justify-center"
              aria-label="Email"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fill="currentColor"
                  d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2Zm0 2v.01L12 13l8-6.99V6H4Zm16 12V8.24l-7.4 6.48a1 1 0 0 1-1.2 0L4 8.24V18h16Z"
                />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/meshari-alderbas-6223a59a"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-xl bg-white text-gray-700 border-2 border-gray-200 hover:border-blue-600 hover:text-blue-600 transition-all flex items-center justify-center"
              aria-label="LinkedIn"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fill="currentColor"
                  d="M4.98 3.5C4.98 4.88 3.86 6 2.48 6C1.1 6 0 4.88 0 3.5C0 2.12 1.1 1 2.48 1C3.86 1 4.98 2.12 4.98 3.5ZM0.5 8.5H4.5V23H0.5V8.5ZM8.5 8.5H12.35V10.48H12.41C12.95 9.46 14.27 8.39 16.23 8.39C20.08 8.39 21.5 10.86 21.5 14.07V23H17.5V15.11C17.5 13.23 17.46 10.83 15.11 10.83C12.72 10.83 12.35 12.69 12.35 14.99V23H8.5V8.5Z"
                />
              </svg>
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=966503238666"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-xl bg-white text-gray-700 border-2 border-gray-200 hover:border-blue-600 hover:text-blue-600 transition-all flex items-center justify-center"
              aria-label="WhatsApp"
            >
              <svg className="w-6 h-6" viewBox="0 0 32 32" aria-hidden="true">
                <path
                  fill="currentColor"
                  d="M16 2.5C8.55 2.5 2.5 8.55 2.5 16c0 2.38.62 4.62 1.7 6.57L2 29.5l7.13-2.15A13.42 13.42 0 0 0 16 29.5c7.45 0 13.5-6.05 13.5-13.5S23.45 2.5 16 2.5Zm0 24.5c-2.33 0-4.49-.68-6.32-1.85l-.45-.28-4.23 1.27 1.28-4.12-.3-.48A11.41 11.41 0 0 1 4.5 16C4.5 9.66 9.66 4.5 16 4.5S27.5 9.66 27.5 16 22.34 27 16 27Zm6.35-8.05c-.35-.18-2.06-1.02-2.38-1.14-.32-.12-.56-.18-.8.18-.24.35-.92 1.14-1.13 1.37-.21.24-.41.27-.76.09-.35-.18-1.46-.54-2.78-1.72-1.03-.92-1.72-2.06-1.92-2.41-.2-.35-.02-.54.15-.71.15-.15.35-.41.53-.62.18-.21.24-.35.35-.59.12-.24.06-.45-.03-.62-.09-.18-.8-1.94-1.1-2.66-.29-.7-.58-.6-.8-.61h-.68c-.24 0-.62.09-.95.45-.32.35-1.25 1.22-1.25 2.98s1.28 3.46 1.46 3.7c.18.24 2.52 3.85 6.1 5.4.85.37 1.51.6 2.02.77.85.27 1.63.23 2.24.14.68-.1 2.06-.84 2.35-1.66.29-.82.29-1.52.2-1.66-.09-.15-.32-.24-.67-.41Z"
                />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* معرض الأعمال */}
      <section id="portfolio" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">الادوات</h2>
            
          </div>

          {/* أزرار الفلترة */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              category.link ? (
                <button
                  key={category.id}
                  onClick={() => {
                    setActiveCategory(category.id);
                    window.open(category.link, '_blank', 'noopener,noreferrer');
                  }}
                  className={`px-6 py-2 rounded-xl font-medium transition-all inline-flex items-center ${
                    activeCategory === category.id
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <span className="ml-2">{category.icon}</span>
                  {category.name}
                </button>
              ) : (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-6 py-2 rounded-xl font-medium transition-all ${
                    activeCategory === category.id
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <span className="ml-2">{category.icon}</span>
                  {category.name}
                </button>
              )
            ))}
          </div>

          {/* شبكة المشاريع */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => {
              const CardTag = project.link ? 'a' : 'div';
              return (
                <CardTag
                  key={project.id}
                  {...(project.link
                    ? { href: project.link, target: '_blank', rel: 'noopener noreferrer' }
                    : {})}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 border border-gray-100 block"
                >
                  <div className="h-48 overflow-hidden mb-4">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-contain bg-gray-50 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3
                      className={`text-xl font-bold text-gray-900 mb-2 ${
                        project.title === 'AdbeRed' ||
                        project.title === 'Office' ||
                        project.title === 'المتصفحات'
                          ? 'text-center'
                          : ''
                      }`}
                    >
                      {project.title}
                    </h3>
                    {project.description && (
                      <p className="text-gray-600 mb-4">{project.description}</p>
                    )}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardTag>
              );
            })}
          </div>
        </div>
      </section>

      {/* قسم التواصل */}
{/* الفوتر */}
      <footer className="bg-gray-900 text-white py-8 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400">
            مدونتي الشخصية
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;






