import { useCourse } from "@/contexts/CourseContext"
import { CourseContent } from "./CourseContent"
import { ProgressTracker } from "./ProgressTracker"

export function StudentView() {
  const { activeTab, activeSection } = useCourse()
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="md:col-span-2">
        <CourseContent />
      </div>
      
      <div className="space-y-6">
        {activeTab === 'curriculum' && activeSection && (
          <ProgressTracker />
        )}
        
        <div className="bg-muted p-4 rounded-lg">
          <h3 className="font-medium mb-3">Course Information</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex justify-between">
              <span className="text-muted-foreground">Total Sections:</span>
              <span>4</span>
            </li>
            <li className="flex justify-between">
              <span className="text-muted-foreground">Total Duration:</span>
              <span>27:11</span>
            </li>
            <li className="flex justify-between">
              <span className="text-muted-foreground">Last Updated:</span>
              <span>June 23, 2025</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}