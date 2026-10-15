import { redirect } from 'next/navigation';
import AdminLogin from './ui';
import { isAdminAuthenticated, isAdminConfigured } from '@/lib/admin/auth';

export const dynamic = 'force-dynamic';

export default async function AdminLoginPage() {
  if (await isAdminAuthenticated()) redirect('/admin');
  return <AdminLogin configured={isAdminConfigured()} />;
}
