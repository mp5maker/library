import React, { Fragment } from 'react'
import { motion } from 'framer-motion'

export const Home = () => {
    return (
        <Fragment>
            <div className={`page-home-container`}>
                <motion.h2
                    initial={{
                        y: `-100vh`,
                        opacity: 0,
                    }}
                    transition={{
                        delay: 0.25,
                        duration: 0.25,
                        type: `spring`,
                        /* Works for spring only */
                        stiffness: 50
                    }}
                    animate={{
                        opacity: 1,
                        fontSize: 50,
                        color: `#ff2994`,
                        x: 10,
                        y: 0,
                    }}>
                    Home
                </motion.h2>
            </div>
        </Fragment>
    )
}