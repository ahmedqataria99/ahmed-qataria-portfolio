import { Calendar, GraduationCap, CheckCircle2 } from 'lucide-react'

const EXPERIENCES_EN = [
  {
    role: 'Android Mobile Development Intern',
    company: 'DEPI (Digital Egypt Pioneers Initiative)',
    date: 'Nov 2025 — Jul 2026',
    highlights: [
      'Architected native Android applications using Kotlin and Jetpack Compose.',
      'Implemented MVVM architecture with Firebase Authentication & Cloud Firestore integration.',
      'Adopted modern engineering standards and version-controlled team workflows.',
    ],
    skills: ['Kotlin', 'Jetpack Compose', 'MVVM', 'Firebase', 'StateFlow'],
  },
  {
    role: 'Flutter Development Intern',
    company: 'Creativa (NTI - National Telecommunication Institute)',
    date: 'Dec 2025 — Jun 2026',
    highlights: [
      'Engineered cross-platform Flutter applications built on Clean Architecture principles.',
      'Integrated RESTful APIs, Firebase backends, and responsive reusable UI libraries.',
      'Collaborated in agile sprint cycles with rigorous Git pull request workflows.',
    ],
    skills: ['Flutter', 'Dart', 'Clean Architecture', 'REST APIs', 'BLoC/Cubit'],
  },
  {
    role: 'Flutter Development Intern',
    company: 'Google Developer Groups (GDG)',
    date: 'Oct 2025',
    highlights: [
      'Developed Flutter mobile prototypes adhering to strict Material 3 & human interface guidelines.',
      'Implemented robust reactive state management and memory-efficient widget hierarchies.',
      'Deepened expertise in performance profiling and clean code patterns.',
    ],
    skills: ['Flutter', 'UI/UX Principles', 'State Management', 'Dart'],
  },
]

const EXPERIENCES_AR = [
  {
    role: 'متدرب تطوير تطبيقات أندرويد (Android Mobile)',
    company: 'مبادرة رواد مصر الرقمية (DEPI)',
    date: 'نوفمبر 2025 — يوليو 2026',
    highlights: [
      'بناء وتطوير تطبيقات أندرويد أصلية بلغة Kotlin وواجهات Jetpack Compose الحديثة.',
      'تطبيق معمارية MVVM مع ربط خدمات المصادقة Firebase Authentication و Cloud Firestore.',
      'العمل وفق أحدث المعايير البرمجية وإدارة دورة حياة البرمجيات بفرق عمل تقنية.',
    ],
    skills: ['Kotlin', 'Jetpack Compose', 'MVVM', 'Firebase', 'StateFlow'],
  },
  {
    role: 'متدرب تطوير تطبيقات فلاتر (Flutter Mobile)',
    company: 'كرياتيفا — المعهد القومي للاتصالات (Creativa NTI)',
    date: 'ديسمبر 2025 — يونيو 2026',
    highlights: [
      'تطوير تطبيقات Flutter عبر المنصات باستخدام معمارية الكود النظيف (Clean Architecture).',
      'ربط واجهات برمجة التطبيقات REST APIs والخدمات السحابية ومكونات واجهة متجاوبة قابلة لإعادة الاستخدام.',
      'التعاون في دورات تطوير أجايل (Agile Sprints) وتدقيق الأكواد عبر Git Pull Requests.',
    ],
    skills: ['Flutter', 'Dart', 'Clean Architecture', 'REST APIs', 'BLoC/Cubit'],
  },
  {
    role: 'متدرب تطوير تطبيقات فلاتر (Flutter Mobile)',
    company: 'مجتمعات مطوري جوجل (GDG)',
    date: 'أكتوبر 2025',
    highlights: [
      'تطوير نماذج أولية لتطبيقات Flutter تلتزم بمعايير Material 3 وتجربة المستخدم الحديثة.',
      'إدارة الحالة التفاعلية وبناء شاشات ذات أداء فائق واستهلاك رشيد للذاكرة.',
      'تعميق الخبرة العملية في تحليل الأداء (Profiling) وأنماط كتابة الأكواد النظيفة.',
    ],
    skills: ['Flutter', 'مبادئ UI/UX', 'إدارة الحالة', 'Dart'],
  },
]

export default function ExperienceTimeline({ lang = 'en', t }) {
  const experiences = lang === 'ar' ? EXPERIENCES_AR : EXPERIENCES_EN

  return (
    <section className="experience-section" id="experience">
      {/* Section Header */}
      <div className="section-header-hud">
        <div className="hud-label">
          <span className="hud-num">{t?.experience?.hudNum || '04'}</span>
          <span className="hud-slash">/</span>
          <span className="hud-name">{t?.experience?.hudName || 'CAREER & ACADEMICS'}</span>
        </div>
        <h2 className="section-title">
          {t?.experience?.title || 'Experience &'}{' '}
          <span className="gradient-text">{t?.experience?.titleHighlight || 'Education'}</span>
        </h2>
        <p className="section-subtitle">
          {t?.experience?.subtitle || 'Proven track record across leading national tech initiatives.'}
        </p>
      </div>

      <div className="experience-layout-grid">
        {/* Timeline Column */}
        <div className="timeline-main-col">
          <div className="timeline-vertical-line" />

          {experiences.map((exp) => (
            <div key={exp.company} className="timeline-card-cyber">
              {/* Node Marker */}
              <div className="timeline-node-pin">
                <div className="pin-pulse" />
                <div className="pin-core" />
              </div>

              {/* Card Content */}
              <div className="timeline-card-body">
                <div className="timeline-card-header">
                  <div>
                    <span className="timeline-role">{exp.role}</span>
                    <h3 className="timeline-company">{exp.company}</h3>
                  </div>
                  <div className="timeline-date-badge">
                    <Calendar size={12} />
                    <span>{exp.date}</span>
                  </div>
                </div>

                {/* Highlights List */}
                <ul className="timeline-bullets">
                  {exp.highlights.map((item, i) => (
                    <li key={i}>
                      <CheckCircle2 size={14} className="bullet-icon" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Badges */}
                <div className="timeline-tags">
                  {exp.skills.map((s) => (
                    <span key={s} className="tag-pill">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Education & Credentials Side Card */}
        <div className="education-sidebar-col">
          <div className="edu-card-cyber">
            <div className="edu-icon-wrap">
              <GraduationCap size={28} />
            </div>

            <span className="edu-badge">{t?.experience?.eduBadge || 'ACADEMIC FOUNDATION'}</span>
            <h3 className="edu-degree">{t?.experience?.eduDegree || 'Faculty of Computers & Artificial Intelligence'}</h3>
            <p className="edu-university">{t?.experience?.eduUni || 'Damietta University'}</p>

            <div className="edu-timeframe">
              <Calendar size={13} />
              <span>{t?.experience?.eduTime || 'Oct 2024 — Jul 2029 (Expected)'}</span>
            </div>

            <p className="edu-details">
              {t?.experience?.eduDesc || 'Undergraduate program specializing in Computer Science, Data Structures, Algorithms, Object-Oriented Design, Database Systems, and Software Engineering.'}
            </p>

            <div className="edu-status-row">
              <span className="edu-dot" />
              <span>{t?.experience?.eduStatus || 'Active Honors Student // Damietta, Egypt'}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
