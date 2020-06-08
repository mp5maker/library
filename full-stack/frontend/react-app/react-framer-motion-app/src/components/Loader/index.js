import React, { Fragment, useEffect, useState } from 'react'
import { motion, useCycle } from 'framer-motion'
import "./loader.css"

const loaderVariants = {
    animationOne: {
        x: [-20, 20],
        y: [0, -30],
        transition: {
            x: {
                yoyo: Infinity,
                duration: 0.5,
            },
            y: {
                yoyo: Infinity,
                duration: 0.25,
                ease: `easeOut`
            }
        }
    },
    animationTwo: {
        x: [0, 0],
        y: [0, -40],
        transition: {
            x: {
                yoyo: Infinity,
            },
            y: {
                yoyo: Infinity,
                ease: `easeOut`,
                duration: 0.25
            }
        }
    }
}

export const Loader = () => {
    const [animation, cycleAnimation] = useCycle("animationOne", "animationTwo")
    const [toggle, setToggle] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setToggle(toggle ? false : true)
            cycleAnimation()
        }, 3000)
        return () => {}
    }, [toggle])

    return (
        <Fragment>
            <motion.div
                variants={loaderVariants}
                animate={animation}
                className={`loader`}>
            </motion.div>
        </Fragment>
    )
}