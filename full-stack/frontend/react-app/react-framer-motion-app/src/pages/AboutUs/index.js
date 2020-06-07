import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
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
    },
    exit: {
        x: `-100vw`,
        transition: `easeInOut`
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

const buttonVariants = {
    hidden: {
        border: `none`,
        padding: `12px`,
        outline: `none`,
        borderRadius: `5px`
    },
    visible: {
        border: `none`,
        padding: `12px`,
        outline: `none`,
        borderRadius: `5px`,
        transition: {
            type: `spring`,
            stiffness: 150
        }
    },
    /* Testing One */
    hover: {
        boxShadow: `0 1px 15px 0 lightgrey`,
        scale: 1.1,
        originX: 0,
        x: [-1, 1, -1, 1, 0],
    },
    /* Testing two */
    hoverTwo: {
        boxShadow: `0 1px 15px 0 lightgrey`,
        scale: 1.1,
        originX: 0,
        transition: {
            yoyo: Infinity
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
                exit={`exit`}
                className={`page-about-us-container`}>
                About Us
                <motion.div
                    variants={childrenVariants}>
                    Lorem ipsum dolor sit amet.
                </motion.div>
                 <Link to={`/`}>
                    <motion.button
                        variants={buttonVariants}
                        initial={`hidden`}
                        animate={`visible`}
                        whileHover={`hover`}>
                        Home
                    </motion.button>
                </Link>
                <Link to={`/contact-us`}>
                    <motion.button
                        style={{
                            marginLeft: `12px`
                        }}
                        variants={buttonVariants}
                        initial={`hidden`}
                        animate={`visible`}
                        whileHover={`hoverTwo`}>
                        Contact Us
                    </motion.button>
                </Link>
            </motion.div>
        </Fragment>
    )
}