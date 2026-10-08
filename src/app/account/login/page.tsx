import { LoginForm } from '@/components/account/LoginForm';

export const metadata = {
  title: 'Customer Login | Branda V2 Account',
};

export default function LoginPage() {
  return (
    <div className="py-6">
      <LoginForm />
    </div>
  );
}
