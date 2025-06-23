import { useCourse } from "@/contexts/CourseContext"
import { CourseOverview } from "./CourseOverview"
import { CourseCurriculum } from "./CourseCurriculum"
import { CourseFAQ } from "./CourseFAQ"
import { TabsContent } from "./ui/tabs"

export function CourseContent() {
  const { activeTab } = useCourse()

  return (
    <div>
      <TabsContent value="overview" className={activeTab === "overview" ? "block" : "hidden"}>
        <CourseOverview />
      </TabsContent>

      <TabsContent value="curriculum" className={activeTab === "curriculum" ? "block" : "hidden"}>
        <CourseCurriculum />
      </TabsContent>

      <TabsContent value="faq" className={activeTab === "faq" ? "block" : "hidden"}>
        <CourseFAQ />
      </TabsContent>
    </div>
  )
}