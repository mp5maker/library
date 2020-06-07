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
            delay: 0.5
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
            </motion.div>
        </Fragment>
    )
}