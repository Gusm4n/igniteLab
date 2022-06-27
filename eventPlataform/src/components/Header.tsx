import { Logo } from "./Logo";


export function Header() {
    return (
        <header className="w-full py-5 flex items-center justify-center bg-gray-900 border-green-700-600 border-b">
            <Logo />
        </header>
    )
}