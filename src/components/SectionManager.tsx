import { useState } from 'react'
import { useCourse } from '@/contexts/CourseContext'
import { Button } from './ui/button'
import { Section } from '@/data/courseData'

export function SectionManager() {
  const { courseData } = useCourse()
  const [sections, setSections] = useState<Section[]>(courseData.sections)
  const [editingSection, setEditingSection] = useState<Section | null>(null)
  const [title, setTitle] = useState('')
  const [duration, setDuration] = useState('')
  const [content, setContent] = useState('')
  
  const handleEdit = (section: Section) => {
    setEditingSection(section)
    setTitle(section.title)
    setDuration(section.duration)
    setContent(section.content)
  }
  
  const handleSave = () => {
    if (!editingSection) return
    
    const updatedSections = sections.map(section => 
      section.id === editingSection.id 
        ? { ...section, title, duration, content } 
        : section
    )
    
    setSections(updatedSections)
    resetForm()
  }
  
  const handleAdd = () => {
    const newSection: Section = {
      id: `section-${sections.length + 1}`,
      title,
      duration,
      content
    }
    
    setSections([...sections, newSection])
    resetForm()
  }
  
  const handleDelete = (id: string) => {
    setSections(sections.filter(section => section.id !== id))
    if (editingSection?.id === id) {
      resetForm()
    }
  }
  
  const resetForm = () => {
    setEditingSection(null)
    setTitle('')
    setDuration('')
    setContent('')
  }
  
  return (
    <div className="space-y-8">
      <div className="bg-card rounded-lg p-4 border">
        <h3 className="text-lg font-medium mb-4">
          {editingSection ? 'Edit Section' : 'Add New Section'}
        </h3>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full p-2 border rounded-md"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-1">Duration (MM:SS)</label>
            <input
              type="text"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              className="w-full p-2 border rounded-md"
              placeholder="05:30"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-1">Content</label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full p-2 border rounded-md min-h-[100px]"
            />
          </div>
          
          <div className="flex space-x-2">
            {editingSection ? (
              <>
                <Button onClick={handleSave}>Save Changes</Button>
                <Button variant="outline" onClick={resetForm}>Cancel</Button>
              </>
            ) : (
              <Button onClick={handleAdd} disabled={!title || !duration || !content}>
                Add Section
              </Button>
            )}
          </div>
        </div>
      </div>
      
      <div>
        <h3 className="text-lg font-medium mb-4">Manage Sections</h3>
        
        <div className="space-y-2">
          {sections.map((section) => (
            <div 
              key={section.id} 
              className="flex items-center justify-between p-3 bg-muted rounded-md"
            >
              <div>
                <h4 className="font-medium">{section.title}</h4>
                <p className="text-sm text-muted-foreground">{section.duration}</p>
              </div>
              
              <div className="flex space-x-2">
                <Button size="sm" variant="outline" onClick={() => handleEdit(section)}>
                  Edit
                </Button>
                <Button size="sm" variant="destructive" onClick={() => handleDelete(section.id)}>
                  Delete
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}