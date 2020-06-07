import React, { Fragment } from 'react'
import { motion } from 'framer-motion'

const containerVariants = {
    hidden: {
        opacity: 0,
        x: `100vw`
    },
    visible: {
        opacity: 1,
        x: 10,
        fontSize: `24px`,
        transition: {
            type: `spring`,
            mass: 0.4,
            damping: 8,
            when: `beforeChildren`,
            staggerChildren: 0.4
        }
    }
}

const childrenVariants = {
    hidden: {
        opacity: 0,
        fontSize: `12px`
    },
    visible: {
        opacity: 1,
        transition: {
            type: `spring`,
        }
    }
}

export const AboutUs = () => {
    return (
        <Fragment>
            <motion.div
                variants={containerVariants}
                initial={`hidden`}
                animate={`visible`}
                className={`page-about-us-container`}>
                About Us
                <motion.div
                    variants={childrenVariants}>
                    Lorem ipsum dolor sit amet.
                </motion.div>
            </motion.div>
        </Fragment>
    )
}