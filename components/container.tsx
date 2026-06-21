interface ContainerProps {
    children: React.ReactNode;
    className?: string;
    as?: React.ElementType;
}

export function Container({
    children,
    className = "",
    as: Component = "div",
}: ContainerProps) {
    return (
        <Component
            className={`mx-auto w-full max-w-[1200px] px-6 md:px-12 ${className}`}
        >
            {children}
        </Component>
    );
}
