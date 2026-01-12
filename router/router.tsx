import { useRouter } from "next/router";
import { ReactNode } from "react";

type LinkType = {
    children: ReactNode;
    href: string;
}

function ActiveLink({ children, href, ...props }: LinkType) {
    const router = useRouter();

    const handleOnClick = () => {
        router.push(href);
    }

    const baseClass = `mr-1`;

    return (
        <a href={href} onClick={handleOnClick} className={baseClass} {...props}>
            {children}
        </a>
    );
}

export default ActiveLink;