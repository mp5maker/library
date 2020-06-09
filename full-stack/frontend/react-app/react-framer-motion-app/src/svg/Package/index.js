import React, { Fragment } from 'react'
import { motion } from 'framer-motion'

const svgVariants = {
    initial: {
        rotate: -180
    },
    animate: {
        rotate: 0,
        transition: {
            duration: 1
        }
    }
}

const pathVariants = {
    initial: {
        opacity: 0,
        pathLength: 0
    },
    animate: {
        opacity: 1,
        pathLength: 1,
        transition: {
            duration: 2,
            ease: `easeInOut`
        }
    }
}

export const Package = () => {
    return (
        <Fragment>
            <motion.svg
                variants={svgVariants}
                initial={`initial`}
                animate={`animate`}
                width="152"
                height="152"
                viewBox="0 0 152 152"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <motion.path
                    variants={pathVariants}
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M81.6366 9.18332L132.303 34.5167C136.608 36.6556 139.331 41.0467 139.333 45.8533V106.21C139.331 111.017 136.608 115.408 132.303 117.547L81.6366 142.88C78.0686 144.665 73.8679 144.665 70.2999 142.88L19.6332 117.547C15.3329 115.38 12.6331 110.962 12.6666 106.147V45.8533C12.6691 41.0467 15.3921 36.6556 19.6966 34.5167L70.3632 9.18332C73.9139 7.41895 78.0859 7.41895 81.6366 9.18332Z"
                    stroke="white"
                    stroke-width="12.6667"
                    stroke-linecap="round"
                    stroke-linejoin="round"/>
                <motion.path
                    variants={pathVariants}
                    d="M14.6934 39.0134L76 69.6667L137.307 39.0134"
                    stroke="white"
                    stroke-width="12.6667"
                    stroke-linecap="round"
                    stroke-linejoin="round"/>
                <motion.path
                    variants={pathVariants}
                    d="M76 144.147V69.6667"
                    stroke="white"
                    stroke-width="12.6667"
                    stroke-linecap="round"
                    stroke-linejoin="round"/>
                <motion.path
                    variants={pathVariants}
                    d="M44.3333 22.1667L107.667 53.8333"
                    stroke="white"
                    stroke-width="12.6667"
                    stroke-linecap="round"
                    stroke-linejoin="round"/>
            </motion.svg>
        </Fragment>
    )
}

