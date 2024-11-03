import { Card, CardHeader, CardContent } from '@/components/ui/card';

export default function ResourcesPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Resources</h1>
      <Card>
        <CardHeader>
          <h2 className="text-xl font-semibold">Resource Management</h2>
        </CardHeader>
        <CardContent>
          <p>Resource management content will go here.</p>
          <p className="text-gray-500 mt-2">Coming soon:
            <ul className="list-disc ml-5 mt-2">
              <li>VM Resources</li>
              <li>Network Resources</li>
              <li>Storage Resources</li>
              <li>Resource Monitoring</li>
            </ul>
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
