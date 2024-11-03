import { Card, CardHeader, CardContent } from '@/components/ui/card';

export default function CustomersPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Customers</h1>
      <Card>
        <CardHeader>
          <h2 className="text-xl font-semibold">Customer Management</h2>
        </CardHeader>
        <CardContent>
          <p>Customer management content will go here.</p>
          <p className="text-gray-500 mt-2">Coming soon:
            <ul className="list-disc ml-5 mt-2">
              <li>Customer List</li>
              <li>Tenant Management</li>
              <li>Subscription Management</li>
              <li>Usage Analytics</li>
            </ul>
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
