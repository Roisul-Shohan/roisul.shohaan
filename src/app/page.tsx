import Nav from '@/components/nav';
import Hero from '@/components/sections/hero';
import About from '@/components/sections/about';
import Skills from '@/components/sections/skills';
import Projects from '@/components/sections/projects';
import Education from '@/components/sections/education';
import Contact from '@/components/sections/contact';
import Footer from '@/components/footer';
import FloatingParticles from '@/components/animated/floating-particles';

export default function Home() {
    return (
        <div className="flex min-h-screen flex-col relative overflow-x-hidden selection:bg-primary/30 selection:text-white">
            {/* Background layers */}
            <div className="fixed inset-0 bg-surface -z-50" />
            <div className="fixed inset-0 dot-bg opacity-30 -z-40" aria-hidden />

            {/* Navigation header */}
            <Nav />

            {/* Main content body wrapper */}
            <main className="flex-grow">
                {/* Hero Banner Area */}
                <Hero />

                {/* About Info Grid */}
                <About />

                {/* Core Skills & Tech Grid */}
                <Skills />

                {/* Showcase Portfolio items */}
                <Projects />

                {/* Education Timeline tracker */}
                <Education />

                {/* Connect contacts card and message form */}
                <Contact />
            </main>

            {/* Footer Branding social area */}
            <Footer />

            {/* Subtle floating particles overlay */}
            <FloatingParticles className="fixed inset-0 -z-10 pointer-events-none" />
        </div>
    );
}
