import {useContext} from "react";
import {motion} from "framer-motion";
import {FaMessage} from "react-icons/fa6";

const ChatButton = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 100}}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, type: "spring", stiffness: 100 }}
            whileHover={{scale:1.05}}
            whileTap={{scale:0.95}}
            className={`fixed bottom-10 right-10 z-30  bg-tertiary text-textHeading
            } text-sm md:text-lg cursor-pointer p-4 md:p-5 rounded-full`}
        >
            <FaMessage />
        </motion.div>
    );
}

export default ChatButton;