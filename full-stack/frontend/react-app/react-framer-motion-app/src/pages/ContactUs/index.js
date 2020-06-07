import React, { Fragment, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

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
        boxShadow: `0 1px 15px 0 ligthgrey`,
        scale: 1.1,
        originX: 0,
        x: [-1, 1, -1, 1, 0],
    },
    /* Testing two */
    hoverTwo: {
        boxShadow: `0 1px 15px 0 ligthgrey`,
        scale: 1.1,
        originX: 0,
        transition: {
            yoyo: Infinity
        }
    }
}


export const ContactUs = () => {
    const [showTitle, setTitle ] = useState(true)

    useEffect(() => {
        setTimeout(() => setTitle(false), 4000)
        return () => {}
    }, [])

    return (
        <Fragment>
            <motion.div
                exit={{
                    x: `-100vw`,
                    transition: `easeInOut`
                }}
                className={`page-contact-us-container`}>
                <AnimatePresence>
                    {
                        showTitle && (
                            <motion.div
                                exit={{
                                    delay: 0.5,
                                    opacity: 0,
                                    y: -20
                                }}>
                                Contact Us
                            </motion.div>
                        )
                    }
                </AnimatePresence>
                <Link to={`/`}>
                    <motion.button
                        style={{ border: `1px solid white` }}
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
                            marginLeft: `12px`,
                            border: `1px solid white`
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