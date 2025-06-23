import { useCourse } from "@/contexts/CourseContext"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function CourseCurriculum() {
  const { courseData, activeSection, setActiveSection } = useCourse()

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Course Curriculum</h2>
      
      <Accordion 
        type="single" 
        collapsible 
        value={activeSection}
        onValueChange={setActiveSection}
      >
        {courseData.sections.map((section) => (
          <AccordionItem key={section.id} value={section.id}>
            <AccordionTrigger className="hover:no-underline">
              <div className="flex justify-between w-full text-left">
                <span>{section.title}</span>
                <span className="text-muted-foreground ml-2">{section.duration}</span>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <p className="text-muted-foreground">{section.content}</p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}