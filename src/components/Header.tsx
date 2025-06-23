import { Tabs, TabsList, TabsTrigger } from "./ui/tabs"
import { useCourse } from "@/contexts/CourseContext"

export function Header() {
  const { setActiveTab, activeTab } = useCourse()

  return (
    <header className="border-b">
      <div className="container py-4">
        <h1 className="text-2xl font-bold mb-4">AI Movie Creation Course</h1>
        
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="w-full max-w-md">
            <TabsTrigger value="overview" className="flex-1">
              Course Overview
            </TabsTrigger>
            <TabsTrigger value="curriculum" className="flex-1">
              Curriculum
            </TabsTrigger>
            <TabsTrigger value="faq" className="flex-1">
              FAQ
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
    </header>
  )
}