import { useState } from 'react'
import { ArrowRight, Info } from 'lucide-react'
import { soundFX } from '../utils/audio'

const ARCH_EXPLANATIONS_EN = {
  UI: 'Presentation Layer: Clean reactive UI built with declarative widgets, keeping presentation strictly decoupled from business logic.',
  'UI Layer': 'Presentation Layer: Clean reactive UI built with declarative widgets, keeping presentation strictly decoupled from business logic.',
  'Flutter UI': 'Presentation Layer: Clean reactive UI built with declarative widgets, keeping presentation strictly decoupled from business logic.',
  Cubit: 'State Management: Predictable, testable unidirectional state emissions via Cubit / BLoC streams.',
  'Cubit State': 'State Management: Predictable, testable unidirectional state emissions via Cubit / BLoC streams.',
  'Compose UI': 'Modern Android UI: Declarative, reactive UI written in Kotlin using Jetpack Compose.',
  'ViewModel (MVVM)': 'Architecture Layer: Holds UI state and exposes immutable StateFlow/LiveData to views.',
  Repository: 'Domain Bridge: Coordinates data operations, abstracts data sources, and applies caching strategies.',
  DataSource: 'Network & Persistence: Raw drivers communicating with remote APIs and databases.',
  'Firebase Firestore': 'Cloud Database: Real-time NoSQL synchronization and cloud authentication.',
  'Cloud Firestore': 'Cloud Database: Real-time NoSQL synchronization and cloud authentication.',
  'Firebase Auth & DB': 'Backend as a Service: Secure client auth and realtime data synchronization.',
  SQLite: 'Offline-First Engine: High-speed relational persistence ensuring 100% functionality without internet.',
  'SQLite Local DB': 'Offline-First Engine: High-speed relational persistence ensuring 100% functionality without internet.',
  'Domain UseCases': 'Domain Layer: Encapsulates pure business rules and use cases with zero framework dependency.',
  'Clean Architecture': 'Layered isolation ensuring business rules remain independent of frameworks and UI.',
}

const ARCH_EXPLANATIONS_AR = {
  'طبقة العرض (UI)': 'طبقة العرض: واجهات تفاعلية سريعة مبنية بمكونات مستقلة تماماً عن قواعد البيانات والاتصال الشبكي.',
  'إدارة الحالة (Cubit)': 'إدارة الحالة: تدفق أحادي متوقع ومنظم لتحديث الواجهات والتعامل مع الأحداث البرمجية.',
  'المستودع (Repository)': 'جسر البيانات: تنسيق عمليات الجلب والتخزين وعزل المنطق البرمجي عن مصادر البيانات.',
  'مصدر البيانات (DataSource)': 'طبقة الاتصال: التعامل المباشر مع واجهات REST APIs وقواعد البيانات المحلية والسحابية.',
  'فايرستور (Firestore)': 'قاعدة بيانات سحابية: مزامنة فورية للبيانات في الوقت الحقيقي مع مصادقة آمنة للمستخدمين.',
  'قاعدة بيانات SQLite': 'محرك دون اتصال (Offline-First): قاعدة بيانات علائقية محلية تضمن تشغيل التطبيق بنسبة 100% دون إنترنت.',
  'UseCases (Domain)': 'طبقة النطاق والمنطق: قواعد العمل النقية المستقلة تماماً عن أي إطار عمل أو واجهة.',
  'Compose UI': 'واجهات أندرويد الحديثة: واجهات تفاعلية مبنية بالكامل بلغة كوتلن وأحدث مكتبات Jetpack Compose.',
  'ViewModel (MVVM)': 'طبقة ViewModel: حفظ وإدارة حالة الشاشة وبث البيانات التفاعلية عبر StateFlow.',
  'Firebase Auth & DB': 'خدمات فايربيس السحابية: إدارة المصادقة وقواعد البيانات الفورية السحابية المشتركة.',
}

export default function ArchitectureDiagram({
  items = [],
  title = '// SYSTEM ARCHITECTURE FLOW',
  hint = 'Hover nodes to inspect responsibilities',
  lang = 'en',
}) {
  const [activeNode, setActiveNode] = useState(null)

  const handleHover = (item) => {
    soundFX.playClick()
    setActiveNode(item)
  }

  const dict = lang === 'ar' ? ARCH_EXPLANATIONS_AR : ARCH_EXPLANATIONS_EN

  return (
    <div className="arch-diagram-wrapper">
      <div className="arch-header">
        <span className="arch-title">{title}</span>
        <span className="arch-hint">{hint}</span>
      </div>

      <div className="arch-nodes-row">
        {items.map((node, index) => {
          const isLast = index === items.length - 1
          const isCurrent = activeNode === node

          return (
            <div key={node} className="arch-node-group">
              <div
                className={`arch-node ${isCurrent ? 'active' : ''}`}
                onMouseEnter={() => handleHover(node)}
                onClick={() => handleHover(node)}
              >
                <span className="node-step">0{index + 1}</span>
                <span className="node-name">{node}</span>
              </div>

              {!isLast && (
                <div className="arch-connector">
                  <div className="connector-line" />
                  <ArrowRight size={14} className="connector-arrow" />
                </div>
              )}
            </div>
          )
        })}
      </div>

      {/* Active Node Explanation Pill */}
      {activeNode && (
        <div className="arch-explanation-box">
          <Info size={14} className="info-icon" />
          <p>
            <strong>{activeNode}:</strong>{' '}
            {dict[activeNode] ||
              (lang === 'ar'
                ? 'عنصر معماري أساسي يضمن فصل المهام وسهولة الصيانة والاختبار.'
                : 'Architectural component ensuring separation of concerns and maintainability.')}
          </p>
        </div>
      )}
    </div>
  )
}
