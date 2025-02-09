const Hero = () => {

    return (
        <section
            className="relative z-20 w-full h-[80vh] my-22 flex flex-col items-center justify-center bg-gradient-to-br from-dark/50 via-primary/50  to-dark/50
            overflow-hidden backdrop-blur-2xl border-2 border-tertiary rounded-lg backdrop-brightness-125
            "
        >
            <div className={`absolute  w-64 h-40 bg-textAccent/10 backdrop-blur-3xl rounded-xl shadow-xl transform rotate-[-15deg]"
            />bg-textAccent border border-secondary`}>

            </div>

        </section>
    )
}
export default Hero;