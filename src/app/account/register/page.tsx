import { RegisterForm } from '@/components/account/RegisterForm';

export const metadata = {
  title: 'Customer Registration | Branda V2 Account',
};

export default function RegisterPage() {
  return (
    <div className="py-6">
      <RegisterForm />
    </div>
  );
}
