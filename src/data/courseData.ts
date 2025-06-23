export interface Section {
  id: string
  title: string
  duration: string
  content: string
}

export interface FAQ {
  question: string
  answer: string
}

export interface CourseData {
  title: string
  description: string
  whatYouWillLearn: string[]
  whoThisCourseIsFor: string[]
  requirements: string[]
  sections: Section[]
  faqs: FAQ[]
}

export const courseData: CourseData = {
  title: 'AI Movie Creation Course',
  description: 'Learn how to create amazing AI-generated movies using the latest tools and techniques. This course covers everything from writing scripts with ChatGPT to generating and editing images for your productions.',
  whatYouWillLearn: [
    'How to create movie scripts using ChatGPT',
    'Techniques for generating consistent character images',
    'Image editing workflows for AI-generated content',
    'How to assemble your images into a cohesive movie',
    'Best practices for AI movie creation'
  ],
  whoThisCourseIsFor: [
    'Content creators looking to explore AI-generated visuals',
    'Filmmakers interested in new production techniques',
    'AI enthusiasts who want to create narrative content',
    'Anyone interested in the intersection of AI and storytelling'
  ],
  requirements: [
    'Basic computer skills',
    'Access to ChatGPT (free tier is sufficient)',
    'Image editing software (free options will be discussed)',
    'No prior experience with AI tools required'
  ],
  sections: [
    {
      id: 'section-1',
      title: 'Intro To Making AI Movies',
      duration: '05:30',
      content: 'In this section, we introduce the concept of AI movie creation and overview the tools and workflows we\'ll be using throughout the course. You\'ll learn about the capabilities and limitations of current AI technologies for creative storytelling.'
    },
    {
      id: 'section-2',
      title: 'Developing with ChatGPT',
      duration: '05:44',
      content: 'This section focuses on using ChatGPT to develop compelling scripts and storyboards for your AI movie. We\'ll cover prompting techniques specific to narrative creation and character development, and how to maintain consistency across your story.'
    },
    {
      id: 'section-3',
      title: 'Creating Our Images',
      duration: '08:22',
      content: 'Here we dive into image generation techniques using various AI tools. You\'ll learn how to create consistent characters, settings, and scenes that align with your script. We\'ll explore advanced prompting methods to achieve the visual style you want.'
    },
    {
      id: 'section-4',
      title: 'Image Editing',
      duration: '07:35',
      content: 'This section covers essential image editing techniques to refine and enhance your AI-generated visuals. You\'ll learn how to fix common issues with AI art, maintain consistency across images, and prepare your visuals for assembly into a movie.'
    }
  ],
  faqs: [
    {
      question: 'Do I need expensive AI tools to complete this course?',
      answer: 'No, the course is designed to work with free tiers of popular AI tools. We\'ll show you how to get good results without expensive subscriptions.'
    },
    {
      question: 'Is programming experience required?',
      answer: 'No programming experience is needed. The course focuses on using existing AI tools through their user interfaces.'
    },
    {
      question: 'How long will it take to create my first AI movie?',
      answer: 'After completing the course (about 30 minutes of content), you should be able to create a simple AI movie in just a few hours.'
    },
    {
      question: 'Will the techniques in this course become outdated quickly?',
      answer: 'While AI tools evolve rapidly, the fundamental concepts and workflows taught in this course will remain relevant. We focus on principles that can be applied to new tools as they emerge.'
    },
    {
      question: 'Can I use the content I create commercially?',
      answer: 'The course covers the basics of AI content licensing. Generally, content you create with most AI tools can be used commercially, but always check the specific terms of the tools you use.'
    }
  ]
}