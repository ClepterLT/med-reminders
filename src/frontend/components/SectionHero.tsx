import Container from "@/components/Container";

export default function SectionHero() {
    return (
        <section id="section-hero" className="relative" >
            <div aria-hidden="true" className="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20">
                <div className="blur-[106px] h-56 bg-gradient-to-br from-blue-700 to-purple-400"></div>
                <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-indigo-600"></div>
            </div>
            <Container>
                Julianovas
            </Container>
        </section>
    )
}