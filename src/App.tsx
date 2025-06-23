import { CourseContent } from './components/CourseContent'
import { Header } from './components/Header'
import { CourseProvider } from './contexts/CourseContext'

function App() {
  return (
    <CourseProvider>
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container py-6">
          <CourseContent />
        </main>
      </div>
    </CourseProvider>
  )
}

export default App