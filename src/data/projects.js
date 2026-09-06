export const projects = [
  {
    number: '01', name: 'Ghayeb', subtitle: 'Teacher Management System', platform: 'Windows / Desktop',
    description: 'A desktop management system for educational centers to manage teachers, students, subscriptions, sales, and daily operations.',
    tags: ['Flutter', 'Dart', 'Firebase', 'Firestore', 'Cubit'], github: 'https://github.com/ahmedqataria99/ghayeb', accent: 'blue',
    images: ['/projects/ghayeb/ghayeb1.png', '/projects/ghayeb/ghayeb2.png', '/projects/ghayeb/ghayeb3.png'],
    screens: ['Dashboard', 'Management', 'Statistics'], architecture: ['UI', 'Cubit', 'Repository', 'DataSource', 'Firebase Firestore'],
  },
  {
    number: '02', name: 'Sanay3y', subtitle: 'Service Marketplace', platform: 'Android',
    description: 'A service marketplace connecting clients with service providers through role-based navigation and request management.',
    tags: ['Kotlin', 'Jetpack Compose', 'MVVM', 'Firebase'], github: 'https://github.com/ahmedqataria99/sanay3y_app', accent: 'teal',
    images: ['/projects/sanay3y/sanay3y-1.png', '/projects/sanay3y/sanay3y-2.png'],
    screens: ['Home / Services', 'Provider Dashboard', 'Requests'], architecture: ['Client', 'Service Request', 'Provider', 'Request Management'],
  },
  {
    number: '03', name: 'Ribhi', subtitle: 'Inventory Management System', platform: 'Offline / Local',
    description: 'An offline inventory management application for products, sales, and expenses with local database support.',
    tags: ['Flutter', 'SQLite', 'Clean Architecture', 'Cubit'], github: 'https://github.com/ahmedqataria99/Ribhi', accent: 'sand',
    images: ['/projects/ribhi/ribhi.png', '/projects/ribhi/ribhi-1.png', '/projects/ribhi/ribhi-2.png'],
    screens: ['Dashboard', 'Inventory', 'Sales / Expenses'], architecture: ['UI', 'Cubit', 'Repository / Data Layer', 'SQLite'],
  },
]