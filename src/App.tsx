import { useState } from 'react'
import { Header } from './components/Header'
import { StudentView } from './components/StudentView'
import { AdminView } from './components/AdminView'
import { CourseProvider } from './contexts/CourseContext'
import { Button } from './components/ui/button'

function App() {
  const [viewMode, setViewMode] = useState<'student' | 'admin'>('student')

  return (
    <CourseProvider>
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container py-6">
          <div className="flex justify-end mb-6">
            <div className="space-x-2">
              <Button 
                variant={viewMode === 'student' ? 'default' : 'outline'}
                onClick={() => setViewMode('student')}
              >
                Student View
              </Button>
              <Button 
                variant={viewMode === 'admin' ? 'default' : 'outline'}
                onClick={() => setViewMode('admin')}
              >
                Admin View
              </Button>
            </div>
          </div>
          
          {viewMode === 'student' ? <StudentView /> : <AdminView />}
        </main>
      </div>
    </CourseProvider>
  )
}

export default App