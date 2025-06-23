import { useCourse } from "@/contexts/CourseContext"

export function CourseOverview() {
  const { courseData } = useCourse()

  return (
    <div className="space-y-8">
      <section>
        <h2 className="text-xl font-semibold mb-4">Description</h2>
        <p className="text-muted-foreground">{courseData.description}</p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-4">What You Will Learn</h2>
        <ul className="list-disc pl-5 space-y-2">
          {courseData.whatYouWillLearn.map((item, index) => (
            <li key={index} className="text-muted-foreground">{item}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-4">Who This Course is For</h2>
        <ul className="list-disc pl-5 space-y-2">
          {courseData.whoThisCourseIsFor.map((item, index) => (
            <li key={index} className="text-muted-foreground">{item}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-4">Requirements</h2>
        <ul className="list-disc pl-5 space-y-2">
          {courseData.requirements.map((item, index) => (
            <li key={index} className="text-muted-foreground">{item}</li>
          ))}
        </ul>
      </section>
    </div>
  )
}