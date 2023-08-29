import Container from "@/components/Container";
import Link from "next/link";
import ButtonLinkPrimary from "@/components/ButtonLinkPrimary";

export default function Header() {
    return (
        <header className="py-6">
            <Container classes="flex justify-between items-center">
                <Link href="/" className="font-stardos text-3xl">
                    <span className="text-purple">Med</span>Reminders
                </Link>
                <nav className="flex gap-x-6 items-center">
                    <Link href="/">Home</Link>
                    <ButtonLinkPrimary link="/">Get Started</ButtonLinkPrimary>
                </nav>
            </Container>
        </header>
    );
}