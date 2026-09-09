import { useState, useRef, useEffect } from 'react'
import { Terminal as TermIcon, CornerDownLeft, Play } from 'lucide-react'
import { soundFX } from '../utils/audio'
import { triggerConfetti } from '../utils/confetti'

const COMMANDS_EN = {
  help: () => `Available commands:
  • whoami     - Engineer biography & profile summary
  • skills     - Technical toolkit & frameworks
  • projects   - Production mobile & systems portfolio
  • arch       - Architecture philosophy (Clean Arch & MVVM)
  • contact    - Contact channels & social links
  • hire       - Launch hiring protocol (try it!)
  • clear      - Clean terminal screen`,

  whoami: () => `NAME: Ahmed Qataria
ROLE: Software Engineer (Mobile & Systems Architecture)
EDUCATION: Faculty of Computers & Artificial Intelligence, Damietta University (2024–2029)
LOCATION: Egypt
FOCUS: Cross-platform Flutter, Native Android (Kotlin / Jetpack Compose), Clean Architecture, Firebase, SQLite.
MOTTO: "Engineering resilient mobile architectures that scale effortlessly."`,

  skills: () => `LANGUAGES:
  [■■■■■■■■■■] Dart (Flutter specialist)
  [■■■■■■■■■□] Kotlin & Java (Android / Jetpack Compose)
  [■■■■■■■■□□] Python & SQL

ARCHITECTURE & PATTERNS:
  • Clean Architecture (Presentation, Domain, Data)
  • MVVM & Repository Pattern
  • BLoC & Cubit State Management
  • StateFlow & LiveData

BACKEND & DATA:
  • Firebase Authentication & Cloud Firestore
  • SQLite & Hive (Offline-First Architectures)
  • RESTful APIs & JSON Serialization`,

  projects: () => `SELECTED PRODUCTION SYSTEMS:
1. GHAYEB [Windows / Desktop]
   Teacher Management System for educational centers.
   Stack: Flutter, Dart, Firebase, Firestore, Cubit.

2. SANAY3Y [Android]
   Role-based service marketplace connecting clients and artisans.
   Stack: Kotlin, Jetpack Compose, MVVM, Firebase.

3. RIBHI [Offline / Mobile]
   Offline-first inventory, sales & expenses management system.
   Stack: Flutter, SQLite, Clean Architecture, Cubit.`,

  arch: () => `ARCHITECTURE PHILOSOPHY:
"Code must be maintainable when 10x larger."
1. Separation of Concerns: UI knows nothing about network or SQL.
2. Reactive State: Unidirectional data flow (Event -> State).
3. Testability & Dependency Inversion: Swappable data sources.`,

  contact: () => `DIRECT CHANNELS:
• Email: ahmedqataria98@gmail.com
• GitHub: https://github.com/ahmedqataria99
• LinkedIn: https://linkedin.com/in/ahmedqataria
• Location: Damietta, Egypt (Open to Remote & Hybrid)`,

  hire: (rect) => {
    triggerConfetti(rect?.x, rect?.y)
    return `🎉 EXCELLENT DECISION!
Ahmed is open for Software Engineering and Mobile Development roles.
Initiating connection protocol...
-> Email: ahmedqataria98@gmail.com
Let's build something phenomenal together!`
  },
}

const COMMANDS_AR = {
  help: () => `الأوامر المتاحة في النظام:
  • whoami     - نبذة تعريفية كاملة عن المهندس
  • skills     - قائمة المهارات ولغات البرمجة
  • projects   - استعراض المشاريع والأنظمة المنفذة
  • arch       - فلسفة المعمارية البرمجية (Clean Arch & MVVM)
  • contact    - قنوات التواصل المباشر
  • hire       - بروتوكول التوظيف السريع (جربه الآن!)
  • clear      - مسح شاشة الطرفية`,

  whoami: () => `الاسم: أحمد قطارية
المسمى: مهندس برمجيات (تطوير أنظمة وتطبيقات الجوال)
التعليم: كلية الحاسبات والذكاء الاصطناعي، جامعة دمياط (2024–2029)
الموقع: مصر (متاح للعمل عن بُعد أو الانتقال)
التخصص: Flutter، أندرويد نيتف (Kotlin / Compose)، Clean Architecture، Firebase، SQLite.
الشعار: "هندسة برمجيات عالية الاعتمادية تتوسع بسهولة واستقرار."`,

  skills: () => `لغات البرمجة:
  [■■■■■■■■■■] Dart (خبير تطوير فلاتر)
  [■■■■■■■■■□] Kotlin و Java (تطوير أندرويد نيتف و Jetpack Compose)
  [■■■■■■■■□□] Python و SQL

المعمارية وإدارة الحالة:
  • Clean Architecture (طبقات العرض، النطاق، البيانات)
  • نمط MVVM والمستودعات (Repository Pattern)
  • BLoC و Cubit
  • StateFlow و Coroutines

السحابة وقواعد البيانات:
  • Firebase Authentication و Cloud Firestore
  • SQLite و Hive (حلول تعمل دون اتصال بالإنترنت)
  • استهلاك وتكامل RESTful APIs`,

  projects: () => `المشاريع الإنتاجية الرئيسية:
1. غايب (Ghayeb) [ديسكتوب / ويندوز]
   نظام إدارة شامل للمراكز التعليمية والدروس.
   التقنيات: Flutter, Dart, Firebase, Firestore, Cubit.

2. صنايعي (Sanay3y) [أندرويد]
   منصة وسوق خدمات لحجز الحرفيين وإدارة الطلبات.
   التقنيات: Kotlin, Jetpack Compose, MVVM, Firebase.

3. ربحي (Ribhi) [موبايل دون إنترنت]
   نظام تجاري لإدارة المخازن والمبيعات والمصروفات.
   التقنيات: Flutter, SQLite, Clean Architecture, Cubit.`,

  arch: () => `فلسفة المعمارية البرمجية:
"يجب أن يبقى الكود نظيفاً وسهل الصيانة حتى مع تضاعف حجم النظام 10 مرات."
1. فصل المهام: الواجهات لا تعلم أي شيء عن الشبكة أو قواعد البيانات.
2. التدفق الأحادي: بث حالات واضحة ومحددة تقضي على الأخطاء العشوائية.
3. قابلية الاختبار: عزل قواعد الأعمال في طبقة Domain نقية.`,

  contact: () => `قنوات التواصل المباشرة:
• البريد الإلكتروني: ahmedqataria98@gmail.com
• جيت هاب: https://github.com/ahmedqataria99
• لينكد إن: https://linkedin.com/in/ahmedqataria
• الموقع: دمياط، مصر (جاهز للعمل فوراً)`,

  hire: (rect) => {
    triggerConfetti(rect?.x, rect?.y)
    return `🎉 خيار رائع ويسعدني العمل معكم!
أحمد جاهز ومتاح للعمل في أدوار هندسة البرمجيات وتطوير تطبيقات الجوال.
-> أرسل رسالة مباشرة إلى: ahmedqataria98@gmail.com
دعنا نصنع منتجاً برمجياً استثنائياً معاً!`
  },
}

export default function TerminalSimulator({ lang = 'en', t }) {
  const commands = lang === 'ar' ? COMMANDS_AR : COMMANDS_EN

  const [history, setHistory] = useState([
    {
      type: 'system',
      text: t?.terminal?.welcome || 'Ahmed Qataria Mobile & Systems Environment [v2.6.0-stable]\nType "help" or click presets below.',
    },
  ])
  const [input, setInput] = useState('')
  const [cmdHistory, setCmdHistory] = useState([])
  const [historyIndex, setHistoryIndex] = useState(-1)
  const bottomRef = useRef(null)
  const inputRef = useRef(null)

  useEffect(() => {
    setHistory([
      {
        type: 'system',
        text: t?.terminal?.welcome || 'Ahmed Qataria Mobile & Systems Environment [v2.6.0-stable]\nType "help" or click presets below.',
      },
    ])
  }, [lang, t?.terminal?.welcome])

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [history])

  const executeCommand = (rawCmd, e) => {
    const trimmed = rawCmd.trim().toLowerCase()
    if (!trimmed) return

    soundFX.playClick()
    setCmdHistory((prev) => [...prev, trimmed])
    setHistoryIndex(-1)

    if (trimmed === 'clear') {
      setHistory([])
      setInput('')
      return
    }

    const runner = commands[trimmed]
    let outputText = ''

    if (runner) {
      if (trimmed === 'hire') {
        const rect = e?.currentTarget?.getBoundingClientRect?.()
        outputText = runner(rect ? { x: rect.left + rect.width / 2, y: rect.top } : null)
      } else {
        outputText = runner()
      }
    } else {
      outputText =
        lang === 'ar'
          ? `الأمر غير معروف: "${trimmed}". اكتب "help" لمشاهدة الأوامر المتاحة.`
          : `Command not recognized: "${trimmed}". Type "help" for available commands.`
    }

    setHistory((prev) => [
      ...prev,
      { type: 'user', text: `visitor@qataria-system:~$ ${rawCmd}` },
      { type: 'output', text: outputText },
    ])
    setInput('')
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      executeCommand(input, e)
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      if (cmdHistory.length === 0) return
      const nextIdx = historyIndex + 1 < cmdHistory.length ? historyIndex + 1 : historyIndex
      setHistoryIndex(nextIdx)
      setInput(cmdHistory[cmdHistory.length - 1 - nextIdx] || '')
    } else if (e.key === 'ArrowDown') {
      e.preventDefault()
      if (historyIndex > 0) {
        const nextIdx = historyIndex - 1
        setHistoryIndex(nextIdx)
        setInput(cmdHistory[cmdHistory.length - 1 - nextIdx] || '')
      } else {
        setHistoryIndex(-1)
        setInput('')
      }
    }
  }

  return (
    <div className="terminal-wrapper" dir="ltr">
      {/* Window Header */}
      <div className="terminal-header">
        <div className="terminal-dots">
          <span className="dot dot-red" />
          <span className="dot dot-yellow" />
          <span className="dot dot-green" />
        </div>
        <div className="terminal-title">
          <TermIcon size={13} />
          <span>ahmed@qataria-workstation: ~ (zsh)</span>
        </div>
        <div className="terminal-meta">UTF-8</div>
      </div>

      {/* Quick Action Chips */}
      <div className="terminal-chips">
        <span className="chip-label">{t?.terminal?.presetsLabel || 'Presets:'}</span>
        {['whoami', 'skills', 'projects', 'arch', 'hire'].map((cmd) => (
          <button
            key={cmd}
            className={`cmd-chip ${cmd === 'hire' ? 'chip-highlight' : ''}`}
            onClick={(e) => executeCommand(cmd, e)}
          >
            <Play size={10} />
            <span>{cmd}</span>
          </button>
        ))}
      </div>

      {/* Terminal Body */}
      <div
        className="terminal-screen"
        onClick={() => inputRef.current?.focus()}
      >
        {history.map((entry, index) => (
          <div key={index} className={`term-line term-${entry.type}`}>
            <pre>{entry.text}</pre>
          </div>
        ))}

        {/* Live Input Line */}
        <div className="term-input-line">
          <span className="term-prompt">visitor@qataria-system:~$</span>
          <input
            ref={inputRef}
            type="text"
            className="term-input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            spellCheck="false"
            autoComplete="off"
            placeholder={t?.terminal?.inputPlaceholder || "Type 'help' or command..."}
          />
          <button
            className="term-submit"
            onClick={(e) => executeCommand(input, e)}
            aria-label="Execute"
          >
            <CornerDownLeft size={13} />
          </button>
        </div>
        <div ref={bottomRef} />
      </div>
    </div>
  )
}
