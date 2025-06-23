import { createContext, useContext, useState, ReactNode } from 'react'
import { CourseData, courseData } from '@/data/courseData'

type TabType = 'overview' | 'curriculum' | 'faq'

type CourseContextType = {
  courseData: CourseData
  activeTab: TabType
  activeSection: string | null
  setActiveTab: (tab: TabType) => void
  setActiveSection: (sectionId: string | null) => void
}

const CourseContext = createContext<CourseContextType | undefined>(undefined)

export function CourseProvider({ children }: { children: ReactNode }) {
  const [activeTab, setActiveTab] = useState<TabType>('overview')
  const [activeSection, setActiveSection] = useState<string | null>(null)

  return (
    <CourseContext.Provider
      value={{
        courseData,
        activeTab,
        activeSection,
        setActiveTab,
        setActiveSection,
      }}
    >
      {children}
    </CourseContext.Provider>
  )
}

export function useCourse() {
  const context = useContext(CourseContext)
  if (context === undefined) {
    throw new Error('useCourse must be used within a CourseProvider')
  }
  return context
}