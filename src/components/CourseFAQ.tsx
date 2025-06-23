import { useCourse } from "@/contexts/CourseContext"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function CourseFAQ() {
  const { courseData } = useCourse()

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Frequently Asked Questions</h2>
      
      <Accordion type="multiple">
        {courseData.faqs.map((faq, index) => (
          <AccordionItem key={index} value={`faq-${index}`}>
            <AccordionTrigger className="hover:no-underline text-left">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent>
              <p className="text-muted-foreground">{faq.answer}</p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}