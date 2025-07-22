import { UserProfile } from '@clerk/nextjs';

export default function UserProfilePage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <UserProfile path='/user-profile' />
    </div>
  );
}