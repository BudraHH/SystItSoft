const StarBorder = ({
                        as: Component = "button",
                        className = "",
                        componentClassName,
                        color = "white",
                        speed = "4s",
                        children,
                        ...rest
                    }) => {
    return (
        <Component className={`relative inline-block py-1 overflow-hidden rounded-lg ${className}`} {...rest}>
            <div
                className="absolute w-[300%] h-[50%] opacity-70 bottom-[-11px] right-[-250%] rounded-full animate-star-movement-bottom z-0"
                style={{
                    background: `radial-gradient(circle, ${color}, transparent 10%)`,
                    animationDuration: speed,
                }}
            ></div>
            <div
                className="absolute w-[300%] h-[50%] opacity-70 top-[-10px] left-[-250%] rounded-full animate-star-movement-top z-0"
                style={{
                    background: `radial-gradient(circle, ${color}, transparent 10%)`,
                    animationDuration: speed,
                }}
            ></div>
            <div className={`relative z-1 bg-gradient-to-r from-darkTheme-primary to-darkTheme-secondary border border-darkTheme-tertiary text-white text-center ${componentClassName}  rounded-lg`}>
                {children}
            </div>
        </Component>
    );
};

export default StarBorder;


