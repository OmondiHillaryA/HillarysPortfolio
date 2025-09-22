import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import ContactForm from '@/components/ContactForm';
import { projects } from '@/lib/data';
import { ThemeSwitcher } from '@/components/ThemeSwitcher';

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <div className="absolute top-4 right-4 z-10">
        <ThemeSwitcher />
      </div>
      <Hero projects={projects} />
    </main>
  );
}