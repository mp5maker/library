import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export const Home = () => {
    return (
        <Fragment>
            <motion.div
                initial={{
                    x: "1000vw",
                    opacity: 0,
                }}
                animate={{
                    x: 0,
                    opacity: 1
                }}
                transition={{
                    type: `spring`,
                    delay: 0.5
                }}
                style={{
                    height: `100vh`,
                    backgroundColor: `lightgrey`
                }}
                exit={{
                    x: `-100vw`,
                    transition: `easeInOut`
                }}
                className={`page-home-container`}>
                <motion.h2
                    initial={{
                        y: `-100vh`,
                        opacity: 0,
                    }}
                    transition={{
                        delay: 1,
                        duration: 0.25,
                        type: `spring`,
                        // [spring, tween]
                        /* Works for spring only */
                        stiffness: 50
                    }}
                    animate={{
                        opacity: 1,
                        fontSize: 50,
                        x: 10,
                        y: 0,
                    }}>
                    Home
                </motion.h2>
                <Link to={`/about-us`}>
                    <motion.button
                        style={{
                            marginLeft: `10px`,
                            border: `none`,
                            padding: `12px`,
                            outline: `none`,
                            borderRadius: `5px`
                        }}
                        transition={{
                            type: `spring`,
                            stiffness: 150
                        }}
                        whileHover={{
                            boxShadow: `0 1px 15px 0 ligthgrey`,
                            scale: 1.1,
                            originX: 0,
                            color: `white`,
                            border: `1px solid white`
                        }}>
                        About Us
                    </motion.button>
                </Link>
                <Link to={`/contact-us`}>
                    <motion.button
                        style={{
                            marginLeft: `10px`,
                            border: `none`,
                            padding: `12px`,
                            outline: `none`,
                            borderRadius: `5px`
                        }}
                        transition={{
                            type: `spring`,
                            stiffness: 150
                        }}
                        whileHover={{
                            boxShadow: `0 1px 15px 0 ligthgrey`,
                            scale: 1.1,
                            originX: 0,
                            color: `white`,
                            border: `1px solid white`
                        }}>
                        Contact Us
                    </motion.button>
                </Link>
            </motion.div>
        </Fragment>
    )
}