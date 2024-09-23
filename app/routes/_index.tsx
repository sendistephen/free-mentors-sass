import type { MetaFunction } from '@remix-run/node';

export const meta: MetaFunction = () => {
  return [
    { title: 'Free mentors - SaaS Platform for Developer Mentorship' },
    {
      name: 'description',
      content: 'Free mentors - SaaS Platform for Developer Mentorship',
    },
  ];
};

export default function Index() {
  return (
    <div className="flex h-screen items-center justify-center">
      <h1 className="text-blue-800">Hello Free Mentors</h1>
    </div>
  );
}
