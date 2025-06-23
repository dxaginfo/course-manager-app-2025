import { useState, useEffect } from 'react'
import { useCourse } from '@/contexts/CourseContext'
import { Button } from './ui/button'

export function ProgressTracker() {
  const { courseData, activeSection } = useCourse()
  const [completedSections, setCompletedSections] = useState<string[]>([])
  
  // Load progress from localStorage on component mount
  useEffect(() => {
    const savedProgress = localStorage.getItem('courseProgress')
    if (savedProgress) {
      setCompletedSections(JSON.parse(savedProgress))
    }
  }, [])
  
  // Save progress to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('courseProgress', JSON.stringify(completedSections))
  }, [completedSections])
  
  const markComplete = (sectionId: string) => {
    if (!completedSections.includes(sectionId)) {
      setCompletedSections([...completedSections, sectionId])
    }
  }
  
  const markIncomplete = (sectionId: string) => {
    setCompletedSections(completedSections.filter(id => id !== sectionId))
  }
  
  const progress = Math.round(
    (completedSections.length / courseData.sections.length) * 100
  )
  
  const currentSection = courseData.sections.find(section => section.id === activeSection)
  
  return (
    <div className="bg-muted p-4 rounded-lg">
      <div className="mb-4">
        <div className="flex justify-between mb-2">
          <span className="text-sm font-medium">Course Progress</span>
          <span className="text-sm font-medium">{progress}%</span>
        </div>
        <div className="h-2 bg-secondary rounded-full overflow-hidden">
          <div 
            className="h-full bg-primary" 
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
      
      {currentSection && (
        <div className="mt-4">
          {completedSections.includes(currentSection.id) ? (
            <Button 
              variant="outline" 
              size="sm" 
              onClick={() => markIncomplete(currentSection.id)}
              className="w-full"
            >
              Mark as Incomplete
            </Button>
          ) : (
            <Button 
              size="sm" 
              onClick={() => markComplete(currentSection.id)}
              className="w-full"
            >
              Mark as Complete
            </Button>
          )}
        </div>
      )}
    </div>
  )
}