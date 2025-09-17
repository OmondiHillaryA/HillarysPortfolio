import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import ContactForm from '@/components/ContactForm';
import { projects } from '@/lib/data';

export default function Home() {
  return (
    <main>
      <Hero />
      <Projects projects={projects} />
      <ContactForm />
    </main>
  );
}