import { redirect } from 'next/navigation';
import AdminDashboard from './ui';
import { isAdminAuthenticated } from '@/lib/admin/auth';

export const dynamic = 'force-dynamic';

export default async function AdminPage() {
  if (!await isAdminAuthenticated()) redirect('/admin/login');
  return <AdminDashboard />;
}
