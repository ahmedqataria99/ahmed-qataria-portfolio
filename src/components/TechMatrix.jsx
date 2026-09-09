import { useState, useMemo } from 'react'
import {
  Search,
  X,
  Cpu,
  CheckCircle2,
  Activity,
} from 'lucide-react'
import { soundFX } from '../utils/audio'

/* ==========================================================================
   AUTHENTIC TECH BRAND SVG ICONS
   ========================================================================== */
function FlutterIcon({ size = 22 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M14.5 2L3 13.5L6.5 17L19.5 4H14.5Z" fill="#02569B" />
      <path d="M14.5 13L9.5 18L13 21.5L18 16.5L14.5 13Z" fill="#0175C2" />
      <path d="M14.5 13L11.5 16L15 19.5L18 16.5L14.5 13Z" fill="#29B6F6" />
      <path d="M19.5 4L11.5 12L14.5 15L22.5 7H19.5V4Z" fill="#40C4FF" />
    </svg>
  )
}

function DartIcon({ size = 22 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M4 4L13 2L20 9L11 11L4 4Z" fill="#0081C6" />
      <path d="M4 4L11 11L9 19L2 12L4 4Z" fill="#00B4AB" />
      <path d="M9 19L11 11L20 9L18 17L11 22L9 19Z" fill="#01579B" />
      <path d="M11 11L20 9L15 14L11 11Z" fill="#29B6F6" />
    </svg>
  )
}

function KotlinIcon({ size = 22 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <defs>
        <linearGradient id="kt-grad" x1="2" y1="2" x2="22" y2="22" gradientUnits="userSpaceOnUse">
          <stop stopColor="#7F52FF" />
          <stop offset="0.5" stopColor="#C711E1" />
          <stop offset="1" stopColor="#E4485D" />
        </linearGradient>
      </defs>
      <path d="M22 2H2V22H22L12 12L22 2Z" fill="url(#kt-grad)" />
    </svg>
  )
}

function JetpackComposeIcon({ size = 22 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <rect x="2" y="2" width="20" height="20" rx="5" fill="#0F172A" stroke="#3DDC84" strokeWidth="1.6" />
      <path d="M6 8L12 4.5L18 8L12 11.5L6 8Z" fill="#4285F4" />
      <path d="M6 12.5L12 9L18 12.5L12 16L6 12.5Z" fill="#3DDC84" />
      <path d="M6 17L12 13.5L18 17L12 20.5L6 17Z" fill="#00E5FF" />
    </svg>
  )
}

function JavaIcon({ size = 22 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" strokeWidth="1.8">
      <path d="M4 19C7 21 17 21 20 19" stroke="#E76F00" />
      <path d="M5 22C8 23.5 16 23.5 19 22" stroke="#E76F00" />
      <path d="M8 12C7 9 10 7 11 4C12 7 9 8 13 11" stroke="#5382A1" />
      <path d="M12 12C11 9 14 7 15 4C16 7 13 8 17 11" stroke="#E76F00" />
      <path d="M6 16C9 17 15 17 18 16" stroke="#5382A1" />
    </svg>
  )
}

function PythonIcon({ size = 22 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M11.8 2C7.3 2 7.6 3.9 7.6 3.9L7.6 5.8H12V6.8H4.6C4.6 6.8 2 6.5 2 11C2 15.5 4.3 15.2 4.3 15.2H5.6V13.3C5.6 13.3 5.5 11 7.8 11H12.2C12.2 11 14.4 11.1 14.4 8.9V4.4C14.4 4.4 14.7 2 11.8 2ZM9.5 3.5C10 3.5 10.4 3.9 10.4 4.4C10.4 4.9 10 5.3 9.5 5.3C9 5.3 8.6 4.9 8.6 4.4C8.6 3.9 9 3.5 9.5 3.5Z" fill="#387EB8" />
      <path d="M12.2 22C16.7 22 16.4 20.1 16.4 20.1V18.2H12V17.2H19.4C19.4 17.2 22 17.5 22 13C22 8.5 19.7 8.8 19.7 8.8H18.4V10.7C18.4 10.7 18.5 13 16.2 13H11.8C11.8 13 9.6 12.9 9.6 15.1V19.6C9.6 19.6 9.3 22 12.2 22ZM14.5 20.5C14 20.5 13.6 20.1 13.6 19.6C13.6 19.1 14 18.7 14.5 18.7C15 18.7 15.4 19.1 15.4 19.6C15.4 20.1 15 20.5 14.5 20.5Z" fill="#FFE052" />
    </svg>
  )
}

function CleanArchIcon({ size = 22 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="9" stroke="#00F0FF" strokeWidth="1.5" strokeDasharray="3 2" />
      <circle cx="12" cy="12" r="6" stroke="#10B981" strokeWidth="1.5" />
      <circle cx="12" cy="12" r="3" fill="#10B981" />
      <path d="M12 3V5M12 19V21M3 12H5M19 12H21" stroke="#00F0FF" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

function MvvmIcon({ size = 22 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <rect x="3" y="3" width="18" height="4.5" rx="2" fill="#8B5CF6" />
      <rect x="5" y="9.5" width="14" height="4.5" rx="2" fill="#A78BFA" />
      <rect x="7" y="16" width="10" height="4.5" rx="2" fill="#C4B5FD" />
      <path d="M12 7.5V9.5M12 14V16" stroke="#00F0FF" strokeWidth="1.5" />
    </svg>
  )
}

function BlocIcon({ size = 22 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M12 2L3 7V17L12 22L21 17V7L12 2Z" stroke="#06B6D4" strokeWidth="1.6" fill="rgba(6,182,212,0.15)" />
      <path d="M12 2V12M12 12L21 7M12 12L3 7M12 12V22" stroke="#06B6D4" strokeWidth="1.4" />
      <circle cx="12" cy="12" r="2.5" fill="#00F0FF" />
    </svg>
  )
}

function StateFlowIcon({ size = 22 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M3 12C6 5 8 5 12 12C16 19 18 19 21 12" stroke="#EC4899" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M3 12C6 17 8 17 12 12C16 7 18 7 21 12" stroke="#06B6D4" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="2 2" />
      <circle cx="12" cy="12" r="2" fill="#EC4899" />
    </svg>
  )
}

function FirebaseIcon({ size = 22 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M4.5 18.5L6.8 3.5L10.5 10.5L4.5 18.5Z" fill="#FFA000" />
      <path d="M19.5 18.5L14.5 9.5L10.5 10.5L4.5 18.5H19.5Z" fill="#F57C00" />
      <path d="M12.5 13.5L14.5 9.5L19.5 18.5L14.8 21.2C13.5 21.9 11.8 21.4 11.2 20.1L12.5 13.5Z" fill="#FFCA28" />
    </svg>
  )
}

function RestApiIcon({ size = 22 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <rect x="3" y="4" width="18" height="6" rx="2" stroke="#38BDF8" strokeWidth="1.6" fill="rgba(56,189,248,0.1)" />
      <rect x="3" y="14" width="18" height="6" rx="2" stroke="#38BDF8" strokeWidth="1.6" fill="rgba(56,189,248,0.1)" />
      <circle cx="7" cy="7" r="1.5" fill="#38BDF8" />
      <circle cx="7" cy="17" r="1.5" fill="#38BDF8" />
      <path d="M13 10L15 14M16 10L14 14" stroke="#00F0FF" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

function SqliteIcon({ size = 22 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <ellipse cx="12" cy="6" rx="8" ry="3" stroke="#00BCF2" strokeWidth="1.6" fill="rgba(0,188,242,0.15)" />
      <path d="M4 6V12C4 13.7 7.6 15 12 15C16.4 15 20 13.7 20 12V6" stroke="#00BCF2" strokeWidth="1.6" />
      <path d="M4 12V18C4 19.7 7.6 21 12 21C16.4 21 20 19.7 20 18V12" stroke="#00BCF2" strokeWidth="1.6" />
    </svg>
  )
}

function HiveIcon({ size = 22 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M12 3L19 7V15L12 19L5 15V7L12 3Z" stroke="#F59E0B" strokeWidth="1.6" fill="rgba(245,158,11,0.12)" />
      <path d="M12 7L16 9.5V14.5L12 17L8 14.5V9.5L12 7Z" fill="#FBBF24" />
    </svg>
  )
}

function CloudFirestoreIcon({ size = 22 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M18 10C17.5 7.2 15 5 12 5C9.6 5 7.5 6.5 6.6 8.7C4.5 9.2 3 11 3 13.3C3 15.9 5.1 18 7.7 18H18C20.2 18 22 16.2 22 14C22 11.9 20.2 10.2 18 10Z" stroke="#F97316" strokeWidth="1.6" fill="rgba(249,115,22,0.12)" />
      <path d="M11 11L13 9L15 12L13 15H11L11 11Z" fill="#F97316" />
    </svg>
  )
}

function GitIcon({ size = 22 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M21.6 10.7L13.3 2.4C12.8 1.9 12 1.9 11.5 2.4L9.8 4.1L12.3 6.6C13 6.4 13.8 6.6 14.3 7.1C14.9 7.7 15.1 8.5 14.8 9.3L17.2 11.7C18 11.4 18.8 11.6 19.3 12.2C20 12.9 20 14 19.3 14.7C18.6 15.4 17.5 15.4 16.8 14.7C16.3 14.2 16.1 13.4 16.3 12.6L14 10.3V15.7C14.2 16 14.3 16.3 14.3 16.7C14.3 17.8 13.4 18.7 12.3 18.7C11.2 18.7 10.3 17.8 10.3 16.7C10.3 16.1 10.6 15.6 11 15.2V9.8C10.6 9.4 10.3 8.9 10.3 8.3C10.3 7.8 10.5 7.4 10.8 7L8.4 4.6L2.4 10.6C1.9 11.1 1.9 11.9 2.4 12.4L10.7 20.7C11.2 21.2 12 21.2 12.5 20.7L21.6 11.6C22.1 12 22.1 11.2 21.6 10.7Z" fill="#F05032" />
    </svg>
  )
}

function AndroidStudioIcon({ size = 22 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="9" stroke="#3DDC84" strokeWidth="1.6" fill="rgba(61,220,132,0.1)" />
      <path d="M8 12C8 9.8 9.8 8 12 8C14.2 8 16 9.8 16 12H8Z" fill="#3DDC84" />
      <circle cx="10" cy="10" r="0.75" fill="#000" />
      <circle cx="14" cy="10" r="0.75" fill="#000" />
      <path d="M9 7L7.5 5M15 7L16.5 5" stroke="#3DDC84" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M8 14H16V16H8V14Z" fill="#3DDC84" />
    </svg>
  )
}

function VsCodeIcon({ size = 22 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M17.5 2L6 11.5L2 8.5L1 9.5L5 13L1 16.5L2 17.5L6 14.5L17.5 24L23 21.5V4.5L17.5 2Z" fill="#007ACC" />
      <path d="M17.5 6.5L9.5 13L17.5 19.5V6.5Z" fill="#1F9CF0" />
    </svg>
  )
}

function PostmanIcon({ size = 22 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="9" fill="#FF6C37" />
      <path d="M6 13L18 8L12 17L11 13L6 13Z" fill="#FFF" />
    </svg>
  )
}

function FigmaIcon({ size = 22 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M8 2H12V7H8C6.6 7 5.5 5.9 5.5 4.5C5.5 3.1 6.6 2 8 2Z" fill="#F24E1E" />
      <path d="M12 2H16C17.4 2 18.5 3.1 18.5 4.5C18.5 5.9 17.4 7 16 7H12V2Z" fill="#FF7262" />
      <path d="M12 7H16C17.4 7 18.5 8.1 18.5 9.5C18.5 10.9 17.4 12 16 12H12V7Z" fill="#1ABCFE" />
      <path d="M8 12C9.4 12 10.5 10.9 10.5 9.5C10.5 8.1 9.4 7 8 7C6.6 7 5.5 8.1 5.5 9.5C5.5 10.9 6.6 12 8 12Z" fill="#0ACF83" />
      <path d="M8 12H12V17C12 18.4 10.9 19.5 9.5 19.5C8.1 19.5 7 18.4 7 17C7 15.6 8.1 14.5 9.5 14.5H12V12H8Z" fill="#A259FF" />
    </svg>
  )
}

/* ==========================================================================
   CATEGORIES WITH HUD INDEXES
   ========================================================================== */
const CATEGORIES_EN = [
  { id: 'all', num: '01', label: 'All Technologies' },
  { id: 'mobile', num: '02', label: 'Mobile & Frameworks' },
  { id: 'languages', num: '03', label: 'Languages' },
  { id: 'arch', num: '04', label: 'Architecture & State' },
  { id: 'backend', num: '05', label: 'Backend & Cloud' },
  { id: 'databases', num: '06', label: 'Databases' },
  { id: 'tools', num: '07', label: 'Dev Tools' },
]

const CATEGORIES_AR = [
  { id: 'all', num: '01', label: 'جميع التقنيات' },
  { id: 'mobile', num: '02', label: 'تطبيقات الجوال' },
  { id: 'languages', num: '03', label: 'لغات البرمجة' },
  { id: 'arch', num: '04', label: 'المعمارية وإدارة الحالة' },
  { id: 'backend', num: '05', label: 'السحابية والخدمات' },
  { id: 'databases', num: '06', label: 'قواعد البيانات' },
  { id: 'tools', num: '07', label: 'أدوات التطوير' },
]

/* ==========================================================================
   RICH SKILLS DATA WITH BRAND COLORS & TELEMETRY
   ========================================================================== */
const SKILLS = [
  {
    name: 'Flutter',
    category: 'mobile',
    telemetryId: 'SYS.FLUTTER_V3',
    pct: 98,
    level: { en: 'Expert', ar: 'خبير' },
    accent: '#29B6F6',
    glow: 'rgba(41, 182, 246, 0.45)',
    metrics: 'Impeller • 60+ FPS • Custom Render',
    icon: FlutterIcon,
    highlight: {
      en: 'Cross-platform native compilation, animations, custom widgets',
      ar: 'ترجمة أصلية عبر المنصات، تحريكات متطورة، وودجتس مخصصة',
    },
  },
  {
    name: 'Dart',
    category: 'languages',
    telemetryId: 'LANG.DART_ASYNC',
    pct: 95,
    level: { en: 'Advanced', ar: 'متقدم' },
    accent: '#00B4AB',
    glow: 'rgba(0, 180, 171, 0.4)',
    metrics: 'Streams • Isolates • Sound Null Safety',
    icon: DartIcon,
    highlight: {
      en: 'Asynchronous streams, isolates, strong type safety',
      ar: 'تدفقات لا تزامنية، عزل للعمليات، وأمان عالي للأنواع',
    },
  },
  {
    name: 'Kotlin',
    category: 'languages',
    telemetryId: 'LANG.KOTLIN_FLOW',
    pct: 95,
    level: { en: 'Advanced', ar: 'متقدم' },
    accent: '#C711E1',
    glow: 'rgba(199, 17, 225, 0.45)',
    metrics: 'Coroutines • StateFlow • Idiomatic DSL',
    icon: KotlinIcon,
    highlight: {
      en: 'Coroutines, Flow, idiomatic modern Android',
      ar: 'كروتنز وسريان للبيانات، وبرمجة معيارية حديثة لأندرويد',
    },
  },
  {
    name: 'Jetpack Compose',
    category: 'mobile',
    telemetryId: 'UI.JETPACK_COMPOSE',
    pct: 92,
    level: { en: 'Advanced', ar: 'متقدم' },
    accent: '#3DDC84',
    glow: 'rgba(61, 220, 132, 0.45)',
    metrics: 'Declarative UI • State Hoisting • Material 3',
    icon: JetpackComposeIcon,
    highlight: {
      en: 'Modern declarative Android UI & state hoists',
      ar: 'واجهات تصريحية متطورة للأندرويد ورفع ذكي للحالة',
    },
  },
  {
    name: 'Java',
    category: 'languages',
    telemetryId: 'LANG.JAVA_SDK',
    pct: 88,
    level: { en: 'Proficient', ar: 'متقن' },
    accent: '#E76F00',
    glow: 'rgba(231, 111, 0, 0.4)',
    metrics: 'Android SDK • OOP Foundations • Multithreading',
    icon: JavaIcon,
    highlight: {
      en: 'OOP, Android SDK foundations, data structures',
      ar: 'برمجة كائنية OOP، أسس أندرويد SDK، وهياكل البيانات',
    },
  },
  {
    name: 'Python',
    category: 'languages',
    telemetryId: 'CORE.PYTHON_LOGIC',
    pct: 86,
    level: { en: 'Proficient', ar: 'متقن' },
    accent: '#FFE052',
    glow: 'rgba(255, 224, 82, 0.35)',
    metrics: 'Automation • Data Pipelines • Backend Scripting',
    icon: PythonIcon,
    highlight: {
      en: 'Scripting, backend logic, data processing',
      ar: 'السكربتات، المنطق الخلفي، ومعالجة البيانات',
    },
  },
  {
    name: 'Clean Architecture',
    category: 'arch',
    telemetryId: 'ARCH.LAYERED_CLEAN',
    pct: 99,
    level: { en: 'Expert', ar: 'خبير' },
    accent: '#00F0FF',
    glow: 'rgba(0, 240, 255, 0.5)',
    metrics: 'Zero Framework Coupling • Unit Testable',
    icon: CleanArchIcon,
    highlight: {
      en: 'Decoupled presentation, domain use cases, and data layers',
      ar: 'فصل تام بين طبقات العرض وحالات الاستخدام والبيانات',
    },
  },
  {
    name: 'MVVM Pattern',
    category: 'arch',
    telemetryId: 'PAT.MVVM_REACTIVE',
    pct: 98,
    level: { en: 'Expert', ar: 'خبير' },
    accent: '#A78BFA',
    glow: 'rgba(167, 139, 250, 0.45)',
    metrics: 'Unidirectional Flow • ViewModel Lifecycle',
    icon: MvvmIcon,
    highlight: {
      en: 'Model-View-ViewModel with reactive state holders',
      ar: 'نمط MVVM مع مستودعات حالة تفاعلية وعزل تام للواجهة',
    },
  },
  {
    name: 'BLoC & Cubit',
    category: 'arch',
    telemetryId: 'STATE.BLOC_STREAMS',
    pct: 96,
    level: { en: 'Advanced', ar: 'متقدم' },
    accent: '#06B6D4',
    glow: 'rgba(6, 182, 212, 0.45)',
    metrics: 'Predictable Transitions • Event-State Decoupling',
    icon: BlocIcon,
    highlight: {
      en: 'Predictable stream-based state management for Flutter',
      ar: 'إدارة حالة قائمة على التدفقات البرمجية لتطبيقات فلاتر',
    },
  },
  {
    name: 'StateFlow & LiveData',
    category: 'arch',
    telemetryId: 'STATE.FLOW_ANDROID',
    pct: 94,
    level: { en: 'Advanced', ar: 'متقدم' },
    accent: '#EC4899',
    glow: 'rgba(236, 72, 153, 0.45)',
    metrics: 'Cold/Hot Streams • Lifecycle Aware Delivery',
    icon: StateFlowIcon,
    highlight: {
      en: 'Android reactive lifecycle-aware state delivery',
      ar: 'بث البيانات التفاعلية مع وعي كامل بدورة حياة أندرويد',
    },
  },
  {
    name: 'Firebase & Firestore',
    category: 'backend',
    telemetryId: 'CLOUD.FIREBASE_REALTIME',
    pct: 94,
    level: { en: 'Advanced', ar: 'متقدم' },
    accent: '#FFCA28',
    glow: 'rgba(255, 202, 40, 0.45)',
    metrics: 'Auth • NoSQL Sync • Security Rules',
    icon: FirebaseIcon,
    highlight: {
      en: 'Auth, Firestore NoSQL, Cloud Functions, real-time sync',
      ar: 'المصادقة، قواعد بيانات NoSQL، ومزامنة آنية للبيانات',
    },
  },
  {
    name: 'REST APIs & HTTP',
    category: 'backend',
    telemetryId: 'NET.REST_INTERCEPTORS',
    pct: 96,
    level: { en: 'Advanced', ar: 'متقدم' },
    accent: '#38BDF8',
    glow: 'rgba(56, 189, 248, 0.45)',
    metrics: 'JWT Auth • Interceptors • Dio / Retrofit',
    icon: RestApiIcon,
    highlight: {
      en: 'Contract-first API consumption, interceptors, error handling',
      ar: 'استهلاك المعايير البرمجية، اعتراض الطلبات، ومعالجة الأخطاء',
    },
  },
  {
    name: 'SQLite',
    category: 'databases',
    telemetryId: 'DB.SQLITE_LOCAL',
    pct: 92,
    level: { en: 'Advanced', ar: 'متقدم' },
    accent: '#00BCF2',
    glow: 'rgba(0, 188, 242, 0.45)',
    metrics: 'Relational Schemas • Migrations • Index Optimization',
    icon: SqliteIcon,
    highlight: {
      en: 'Relational local schemas, migrations, query optimization',
      ar: 'مخططات علائقية محلية، ترحيل البيانات، وتحسين الاستعلامات',
    },
  },
  {
    name: 'Hive DB',
    category: 'databases',
    telemetryId: 'DB.HIVE_NOSQL',
    pct: 94,
    level: { en: 'Advanced', ar: 'متقدم' },
    accent: '#F59E0B',
    glow: 'rgba(245, 158, 11, 0.45)',
    metrics: 'Ultra-fast Binary • Key-Value • Zero Native Overhead',
    icon: HiveIcon,
    highlight: {
      en: 'Lightweight, ultra-fast NoSQL local key-value store',
      ar: 'تخزين مفتاح-قيمة محلي فائق السرعة وخفيف الوزن',
    },
  },
  {
    name: 'Cloud Firestore',
    category: 'databases',
    telemetryId: 'DB.FIRESTORE_DISTRIBUTED',
    pct: 92,
    level: { en: 'Advanced', ar: 'متقدم' },
    accent: '#F97316',
    glow: 'rgba(249, 115, 22, 0.45)',
    metrics: 'Document DB • Offline Caching • Snapshot Streams',
    icon: CloudFirestoreIcon,
    highlight: {
      en: 'Document-based distributed offline-capable storage',
      ar: 'تخزين مستندات سحابي موزع مع دعم العمل دون إنترنت',
    },
  },
  {
    name: 'Git & GitHub',
    category: 'tools',
    telemetryId: 'DEV.GIT_WORKFLOWS',
    pct: 95,
    level: { en: 'Advanced', ar: 'متقدم' },
    accent: '#F05032',
    glow: 'rgba(240, 80, 50, 0.45)',
    metrics: 'GitFlow • Pull Requests • Semantic Versioning',
    icon: GitIcon,
    highlight: {
      en: 'GitFlow, pull request reviews, versioning',
      ar: 'إدارة الفروع GitFlow، مراجعة الأكواد، وإصدارات البرمجيات',
    },
  },
  {
    name: 'Android Studio',
    category: 'tools',
    telemetryId: 'IDE.ANDROID_STUDIO',
    pct: 94,
    level: { en: 'Advanced', ar: 'متقدم' },
    accent: '#3DDC84',
    glow: 'rgba(61, 220, 132, 0.45)',
    metrics: 'Memory Profiler • Layout Inspector • Gradle Builds',
    icon: AndroidStudioIcon,
    highlight: {
      en: 'Profiler, layout inspector, emulator, gradle build scripts',
      ar: 'محلل الأداء، فاحص التخطيط، المحاكي، وملفات بناء Gradle',
    },
  },
  {
    name: 'VS Code',
    category: 'tools',
    telemetryId: 'IDE.VS_CODE',
    pct: 96,
    level: { en: 'Advanced', ar: 'متقدم' },
    accent: '#007ACC',
    glow: 'rgba(0, 122, 204, 0.45)',
    metrics: 'Flutter Tooling • CLI Pipelines • DevExtensions',
    icon: VsCodeIcon,
    highlight: {
      en: 'Flutter tooling, extensions, command-line integrations',
      ar: 'أدوات فلاتر، الإضافات المتقدمة، وأوامر سطر الأوامر',
    },
  },
  {
    name: 'Postman',
    category: 'tools',
    telemetryId: 'TEST.POSTMAN_API',
    pct: 88,
    level: { en: 'Proficient', ar: 'متقن' },
    accent: '#FF6C37',
    glow: 'rgba(255, 108, 55, 0.45)',
    metrics: 'Contract Testing • Environment Sets • Mocking',
    icon: PostmanIcon,
    highlight: {
      en: 'API contract testing, environment variables, documentation',
      ar: 'اختبار واجهات البرمجة، متغيرات البيئة، والتوثيق',
    },
  },
  {
    name: 'Figma',
    category: 'tools',
    telemetryId: 'UI.FIGMA_PIXEL_PERFECT',
    pct: 88,
    level: { en: 'Proficient', ar: 'متقن' },
    accent: '#A259FF',
    glow: 'rgba(162, 89, 255, 0.45)',
    metrics: 'Design Systems • Tokens • Responsive Auto-Layout',
    icon: FigmaIcon,
    highlight: {
      en: 'Design system interpretation, pixel-perfect UI translation',
      ar: 'قراءة أنظمة التصميم وتحويل الشاشات بدقة pixel-perfect',
    },
  },
]

const ARCH_PILLARS_EN = [
  {
    id: 'clean-arch',
    tab: 'Clean Architecture',
    title: 'Clean Architecture in Production',
    subtitle: 'Zero UI Coupling',
    badge: 'Core Standard',
    desc: 'Separates business logic from frameworks. If Flutter or Android changes, the core business use cases and entity rules remain 100% untouched and unit-testable.',
    points: ['Domain Layer has zero external dependencies', 'Presentation communicates strictly via UseCases', 'Repositories implement swappable data sources'],
  },
  {
    id: 'state-mgmt',
    tab: 'Reactive Streams',
    title: 'Reactive Unidirectional Data Flow',
    subtitle: 'BLoC, Cubit & StateFlow',
    badge: 'Predictability',
    desc: 'Eliminates unexpected state glitches. UI triggers immutable events, state engines process business rules, and new immutable state is emitted back to the view layer.',
    points: ['Deterministic states (Loading, Success, Failure)', 'State transitions are logged and debuggable', 'Clean lifecycle handling prevents memory leaks'],
  },
  {
    id: 'offline-first',
    tab: 'Offline Resilience',
    title: 'Offline-First & Cloud Resilience',
    subtitle: 'SQLite + Firebase Sync',
    badge: 'High Reliability',
    desc: 'Users should never face a broken app when internet drops. Local databases (SQLite / Hive) provide immediate read/write speed, with graceful cloud synchronization.',
    points: ['Instant optimistic UI updates', 'Background data sync upon reconnecting', 'Zero-downtime local persistence'],
  },
]

const ARCH_PILLARS_AR = [
  {
    id: 'clean-arch',
    tab: 'المعمارية النظيفة',
    title: 'المعمارية النظيفة (Clean Architecture)',
    subtitle: 'عزل تام لمنطق الأعمال عن الواجهات',
    badge: 'معيار قياسي',
    desc: 'فصل كامل لقواعد العمل عن أطر العمل. إذا تغيرت واجهة فلاتر أو أندرويد، تظل قواعد الأعمال (UseCases) والكيانات سليمة بنسبة 100% وقابلة للاختبار الفوري.',
    points: ['طبقة النطاق (Domain) ليس لها أي تبعيات خارجية', 'طبقة العرض تتواصل حصرياً عبر UseCases', 'طبقة المستودعات تتيح استبدال مصادر البيانات بسلاسة'],
  },
  {
    id: 'state-mgmt',
    tab: 'التدفق الأحادي',
    title: 'تدفق تفاعلي أحادي الاتجاه (Unidirectional)',
    subtitle: 'BLoC و Cubit و StateFlow',
    badge: 'استقرار تام',
    desc: 'القضاء على أخطاء الحالات العشوائية. الواجهة ترسل أحداثاً غير قابلة للتعديل، ومحركات الحالة تعالج المنطق، وتبث حالة جديدة مستقرة للواجهة.',
    points: ['حالات واضحة ومحددة (تحميل، نجاح، فشل)', 'انتقالات الحالة قابلة للتتبع والتسجيل بدقة', 'إدارة دورة حياة المكونات لمنع تسرب الذاكرة'],
  },
  {
    id: 'offline-first',
    tab: 'العمل دون إنترنت',
    title: 'العمل دون اتصال بالإنترنت والمزامنة السحابية',
    subtitle: 'قواعد بيانات SQLite مع مزامنة Firebase',
    badge: 'اعتمادية فائقة',
    desc: 'لا ينبغي أن يتعطل المستخدم عند انقطاع الإنترنت. توفر قواعد البيانات المحلية سرعة قراءة وكتابة لحظية، مع مزامنة خلفية ذكية بمجرد عودة الاتصال.',
    points: ['تحديثات واجهة لحظية وتفاؤلية (Optimistic UI)', 'مزامنة تلقائية في الخلفية فور توفر الشبكة', 'استقرار كامل لقواعد البيانات محلياً دون توقف'],
  },
]

export default function TechMatrix({ lang = 'en', t }) {
  const [selectedCat, setSelectedCat] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [activePillar, setActivePillar] = useState('clean-arch')

  const categories = lang === 'ar' ? CATEGORIES_AR : CATEGORIES_EN
  const pillars = lang === 'ar' ? ARCH_PILLARS_AR : ARCH_PILLARS_EN

  const filteredSkills = useMemo(() => {
    return SKILLS.filter((skill) => {
      const matchCat = selectedCat === 'all' || skill.category === selectedCat
      const query = searchQuery.trim().toLowerCase()
      if (!query) return matchCat
      const matchName = skill.name.toLowerCase().includes(query)
      const matchHighlight = (skill.highlight[lang] || skill.highlight.en).toLowerCase().includes(query)
      const matchTelemetry = skill.telemetryId.toLowerCase().includes(query)
      const matchMetrics = skill.metrics.toLowerCase().includes(query)
      return matchCat && (matchName || matchHighlight || matchTelemetry || matchMetrics)
    })
  }, [selectedCat, searchQuery, lang])

  const handleCatChange = (catId) => {
    soundFX.playTab()
    setSelectedCat(catId)
  }

  const handlePillarChange = (pillarId) => {
    soundFX.playClick()
    setActivePillar(pillarId)
  }

  return (
    <section className="tech-matrix-section" id="architecture">
      {/* Section Header HUD */}
      <div className="section-header-hud">
        <div className="hud-label">
          <span className="hud-num">{t?.tech?.hudNum || '03'}</span>
          <span className="hud-slash">/</span>
          <span className="hud-name">{t?.tech?.hudName || 'ENGINEERING TOOLKIT & ARCHITECTURE'}</span>
        </div>
        <h2 className="section-title">
          {t?.tech?.title || 'Technical'}{' '}
          <span className="gradient-text">{t?.tech?.titleHighlight || 'Matrix & Standards'}</span>
        </h2>
        <p className="section-subtitle">
          {t?.tech?.subtitle || 'More than just syntax. A rigorous engineering stack focused on clean layering, performance, and long-term maintainability.'}
        </p>
      </div>

      {/* Futuristic Controls Hub: Categories + Live Search */}
      <div className="matrix-controls-hub">
        <div className="matrix-categories-dock">
          {categories.map((cat) => (
            <button
              key={cat.id}
              className={`cat-hud-pill ${selectedCat === cat.id ? 'active' : ''}`}
              onClick={() => handleCatChange(cat.id)}
            >
              <span className="cat-num">{cat.num}</span>
              <span className="cat-text">{cat.label}</span>
            </button>
          ))}
        </div>

        {/* Live Filter Search Bar */}
        <div className="matrix-search-box">
          <Search size={14} className="search-icon-hud" />
          <input
            type="text"
            className="matrix-search-input"
            placeholder={lang === 'ar' ? 'بحث سريع في التقنيات والمعايير...' : 'Filter technologies & standards...'}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          {searchQuery && (
            <button
              className="search-clear-btn"
              onClick={() => {
                soundFX.playClick()
                setSearchQuery('')
              }}
              title="Clear search"
            >
              <X size={12} />
            </button>
          )}
        </div>
      </div>

      {/* Live Results Counter HUD */}
      <div className="matrix-telemetry-bar">
        <div className="telemetry-item">
          <Activity size={12} className="telemetry-pulse-icon" />
          <span>
            {lang === 'ar'
              ? `التقنيات النشطة: ${filteredSkills.length} من ${SKILLS.length}`
              : `ACTIVE NODES: ${filteredSkills.length} / ${SKILLS.length}`}
          </span>
        </div>
        <div className="telemetry-item tag-arch-mode">
          <span>// PRODUCTION READY HARDWARE & SOFTWARE SPEC</span>
        </div>
      </div>

      {/* Cybernetic Holographic Skills Grid */}
      <div className="skills-hologram-grid">
        {filteredSkills.map((skill) => {
          const IconComp = skill.icon
          const levelText = skill.level[lang] || skill.level.en
          const highlightText = skill.highlight[lang] || skill.highlight.en

          return (
            <div
              key={skill.name}
              className="tech-chip-card"
              style={{
                '--chip-accent': skill.accent,
                '--chip-glow': skill.glow,
              }}
            >
              {/* Sci-Fi Corner HUD Reticles */}
              <div className="chip-corner cc-tl" />
              <div className="chip-corner cc-tr" />
              <div className="chip-corner cc-bl" />
              <div className="chip-corner cc-br" />

              {/* Ambient Hover Aura */}
              <div className="chip-ambient-aura" />

              {/* Top Row: Authentic Brand Logo + Telemetry Badge */}
              <div className="chip-top">
                <div className="chip-brand-badge">
                  <IconComp size={22} />
                </div>
                <div className="chip-status-wrap">
                  <span className="chip-telemetry-code">{skill.telemetryId}</span>
                  <span className="chip-level-badge">{levelText}</span>
                </div>
              </div>

              {/* Center Row: Title & Percentage */}
              <div className="chip-body">
                <div className="chip-title-row">
                  <h4 className="chip-title">{skill.name}</h4>
                  <span className="chip-pct-val">{skill.pct}%</span>
                </div>
                <p className="chip-highlight-text">{highlightText}</p>
              </div>

              {/* Bottom Row: Futuristic Energy Gauge & Micro Spec */}
              <div className="chip-gauge-section">
                <div className="chip-gauge-track">
                  <div
                    className="chip-gauge-fill"
                    style={{ width: `${skill.pct}%` }}
                  />
                </div>
                <div className="chip-footer-meta">
                  <span className="chip-metric-tag">{skill.metrics}</span>
                  <span className="chip-state-online">
                    <span className="online-dot" />
                    ONLINE
                  </span>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Architecture Deep-Dive Lab */}
      <div className="arch-lab-box">
        <div className="arch-lab-header">
          <div className="arch-lab-tag">
            <Cpu size={15} />
            <span>{t?.tech?.labTag || 'ARCHITECTURE LAB // THE UNDERLYING PILLARS'}</span>
          </div>
          <div className="arch-lab-tabs">
            {pillars.map((pillar) => (
              <button
                key={pillar.id}
                className={`arch-lab-tab ${activePillar === pillar.id ? 'active' : ''}`}
                onClick={() => handlePillarChange(pillar.id)}
              >
                <span>{pillar.tab}</span>
              </button>
            ))}
          </div>
        </div>

        {pillars.map((pillar) => {
          if (pillar.id !== activePillar) return null
          return (
            <div key={pillar.id} className="arch-pillar-body">
              <div className="pillar-heading">
                <div>
                  <span className="pillar-badge">{pillar.badge}</span>
                  <h3 className="pillar-title">{pillar.title}</h3>
                  <p className="pillar-sub">{pillar.subtitle}</p>
                </div>
              </div>
              <p className="pillar-desc">{pillar.desc}</p>
              <div className="pillar-points-list">
                {pillar.points.map((pt, i) => (
                  <div key={i} className="pillar-point-item">
                    <CheckCircle2 size={16} className="point-icon" />
                    <span>{pt}</span>
                  </div>
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
