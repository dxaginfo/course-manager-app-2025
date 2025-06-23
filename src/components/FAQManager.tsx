import { useState } from 'react'
import { useCourse } from '@/contexts/CourseContext'
import { Button } from './ui/button'
import { FAQ } from '@/data/courseData'

export function FAQManager() {
  const { courseData } = useCourse()
  const [faqs, setFaqs] = useState<FAQ[]>(courseData.faqs)
  const [editingFaq, setEditingFaq] = useState<FAQ | null>(null)
  const [question, setQuestion] = useState('')
  const [answer, setAnswer] = useState('')
  
  const handleEdit = (faq: FAQ) => {
    setEditingFaq(faq)
    setQuestion(faq.question)
    setAnswer(faq.answer)
  }
  
  const handleSave = () => {
    if (!editingFaq) return
    
    const updatedFaqs = faqs.map(faq => 
      faq.question === editingFaq.question 
        ? { question, answer } 
        : faq
    )
    
    setFaqs(updatedFaqs)
    resetForm()
  }
  
  const handleAdd = () => {
    const newFaq: FAQ = {
      question,
      answer
    }
    
    setFaqs([...faqs, newFaq])
    resetForm()
  }
  
  const handleDelete = (faq: FAQ) => {
    setFaqs(faqs.filter(item => item.question !== faq.question))
    if (editingFaq?.question === faq.question) {
      resetForm()
    }
  }
  
  const resetForm = () => {
    setEditingFaq(null)
    setQuestion('')
    setAnswer('')
  }
  
  return (
    <div className="space-y-8">
      <div className="bg-card rounded-lg p-4 border">
        <h3 className="text-lg font-medium mb-4">
          {editingFaq ? 'Edit FAQ' : 'Add New FAQ'}
        </h3>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Question</label>
            <input
              type="text"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              className="w-full p-2 border rounded-md"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-1">Answer</label>
            <textarea
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              className="w-full p-2 border rounded-md min-h-[100px]"
            />
          </div>
          
          <div className="flex space-x-2">
            {editingFaq ? (
              <>
                <Button onClick={handleSave}>Save Changes</Button>
                <Button variant="outline" onClick={resetForm}>Cancel</Button>
              </>
            ) : (
              <Button onClick={handleAdd} disabled={!question || !answer}>
                Add FAQ
              </Button>
            )}
          </div>
        </div>
      </div>
      
      <div>
        <h3 className="text-lg font-medium mb-4">Manage FAQs</h3>
        
        <div className="space-y-2">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="p-3 bg-muted rounded-md"
            >
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-medium">{faq.question}</h4>
                
                <div className="flex space-x-2 ml-4">
                  <Button size="sm" variant="outline" onClick={() => handleEdit(faq)}>
                    Edit
                  </Button>
                  <Button size="sm" variant="destructive" onClick={() => handleDelete(faq)}>
                    Delete
                  </Button>
                </div>
              </div>
              
              <p className="text-sm text-muted-foreground">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}