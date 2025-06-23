import { Tabs, TabsList, TabsTrigger, TabsContent } from "./ui/tabs"
import { SectionManager } from "./SectionManager"
import { FAQManager } from "./FAQManager"

export function AdminView() {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-6">Course Administration</h2>
      
      <Tabs defaultValue="sections">
        <TabsList>
          <TabsTrigger value="sections">Manage Sections</TabsTrigger>
          <TabsTrigger value="faq">Manage FAQs</TabsTrigger>
        </TabsList>
        
        <TabsContent value="sections" className="mt-6">
          <SectionManager />
        </TabsContent>
        
        <TabsContent value="faq" className="mt-6">
          <FAQManager />
        </TabsContent>
      </Tabs>
    </div>
  )
}