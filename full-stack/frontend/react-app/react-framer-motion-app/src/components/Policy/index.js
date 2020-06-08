import React, { useEffect, useState, Fragment } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import "./policy.css"

const backdrop = {
    initial: {
        opacity: 0
    },
    animate: {
        opacity: 1
    }
}

const modalContent = {
    initial: {
        y: '-100vh',
        opacity: 0
    },
    animate: {
        y: `200px`,
        opacity: 1,
        transition: {
            ease: `easeInOut`,
            delay: 0.25
        }
    },
}


export const Policy = () => {
    const [open, setOpen] = useState(false)

    const openPolicy = () => setOpen(true)

    useEffect(() => {
        if (open) {
            setTimeout(() => {
                setOpen(false)
            }, 4000)
        }

        return () => {}
    }, [open])

    return (
        <Fragment>
            <AnimatePresence exitBeforeEnter>
                {
                    open && (
                        <motion.div
                            variants={backdrop}
                            initial="initial"
                            animate="animate"
                            exit="initial"
                            className="policy-container-backdrop">
                            <motion.div className={`modal`}>
                                <motion.div
                                    variants={modalContent}
                                    initial="initial"
                                    animate="animate"
                                    exit="initial"
                                    className="modal-content">
                                    <div>
                                        Lorem ipsum dolor sit amet.
                                    </div>
                                </motion.div>
                            </motion.div>
                        </motion.div>
                    )
                }
            </AnimatePresence>
            <button
                className={`openPolicy`}
                onClick={openPolicy}>
                Open Policy
            </button>
        </Fragment>
    )
}