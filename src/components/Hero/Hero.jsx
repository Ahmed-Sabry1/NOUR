'use client'

import React from 'react'
import './Hero.css'
import { HeroData } from '@/src/utils/data'
import { motion } from 'framer-motion'
import { containerVariants, desVariants, tagVariants, titleVariants } from '@/src/utils/animation'

function Hero() {
    const variants = (delay) => ({
        initial : {
            y: '18rem'
        },
        animate : {
            y: '0rem',
            transition: {
                type: 'spring',
                damping: 25,
                duration: 2.5,
                delay
            }
        }
    })

    const imgvariants = () => ({
        initial : {
            y: '18rem'
        },
        animate : {
            y: '0rem',
            transition: {
                type: 'spring',
                duration: 2,
                stiffness: 30
            }
        }
    })


  return (
    <div className='h-wrapper'>
        <div className='container'>
            <div className='h-container'>

                {/* left side */}
                <div className='h-left'>
                    <div className='image-row'>
                        {
                            HeroData.slice(0, 2).map((person, i) => (
                                <div className='person-pill' key={i}>
                                    <motion.div
                                    initial={'initial'}
                                    animate={'animate'}
                                    variants={variants(person.delay)}
                                    style={{ backgroundColor: person.bg }}
                                    className='person-pill-bg'>
                                        <motion.img
                                            initial={'initial'}
                                            animate={'animate'}
                                            variants={imgvariants()}
                                            src={person.src}
                                            alt={person.src}
                                            style={{
                                                width: '110%',
                                                height: '110%',
                                            }}
                                        />
                                    </motion.div>
                                </div>
                            ))
                        }
                    </div>
                </div>

                {/* right side */}
                <div className='h-right'>
                    <motion.div
                        className='h-title'
                        initial= 'offScreen'
                        whileInView='onScreen'
                        variants={titleVariants}
                    >
                        <span>Happy Birthday</span>
                        <span>Nourhan</span>
                    </motion.div>
                    <motion.div
                        className='h-des'
                        initial= 'offScreen'
                        whileInView='onScreen'
                        variants={desVariants}
                    >
                        Today is your birthday,
                        Today is your day,
                        To be happy in each and every way,
                        Be happy keep smiling in every thing you do,
                        Cause now I wish HAPPY BIRTHDAY to you
                    </motion.div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero
