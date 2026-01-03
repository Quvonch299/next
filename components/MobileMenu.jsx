'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { X, Home, Info, Hotel, Globe, Package, Phone } from 'lucide-react'

export default function MobileMenu({ open, setOpen }) {
  const menuItems = [
    { label: 'Bosh sahifa', href: '/', icon: Home },
    { label: 'Biz haqimizda', href: '/about', icon: Info },
    { label: 'Mehmonxonalar', href: '/hotel', icon: Hotel },
    { label: 'Turizm turlari', href: '/turizim', icon: Globe },
    { label: 'Xizmatlar', href: '/server', icon: Package },
    { label: 'Bog‘lanish', href: '/contact', icon: Phone },
  ]

  const menuVariants = {
    closed: { y: '-100%', opacity: 0 },
    open: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 25,
        staggerChildren: 0.07,
        delayChildren: 0.2,
      },
    },
    exit: { y: '-100%', opacity: 0 },
  }

  const itemVariants = {
    closed: { opacity: 0, x: -50 },
    open: { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 100 } },
  }

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            className="fixed inset-0 bg-black/70 z-40 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          />

          <motion.div
            className="fixed top-0 left-0 right-0 bg-gradient-to-br from-blue-50 via-white to-teal-50 z-50 rounded-b-3xl shadow-2xl overflow-hidden"
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="exit"
          >
            <div className="pt-20 pb-16 px-8 relative">
              <motion.button
                onClick={() => setOpen(false)}
                className="absolute top-6 right-6 w-14 h-14 rounded-full bg-white/80 backdrop-blur-md shadow-lg flex items-center justify-center hover:bg-white hover:scale-110 transition-all duration-300"
                whileTap={{ scale: 0.9 }}
                aria-label="Menu yopish"
              >
                <X size={28} className="text-gray-700" strokeWidth={2.5} />
              </motion.button>

              <nav className="flex flex-col items-start gap-8 mt-10 max-w-xs mx-auto">
                {menuItems.map((item) => {
                  const Icon = item.icon
                  return (
                    <motion.a
                      key={item.label}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      variants={itemVariants}
                      whileHover={{ scale: 1.05, x: 10 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-5 w-full group"
                    >
                      <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500 to-teal-500 text-white shadow-md group-hover:shadow-lg transition-all duration-300">
                        <Icon size={26} strokeWidth={2} />
                      </div>
                      <span className="text-3xl font-semibold bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent group-hover:from-blue-700 group-hover:to-teal-700 transition-all duration-300">
                        {item.label}
                      </span>
                      <motion.div
                        className="absolute left-0 right-0 bottom-0 h-1 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full -z-10"
                        initial={{ scaleX: 0 }}
                        whileHover={{ scaleX: 1 }}
                        transition={{ duration: 0.4 }}
                        style={{ transformOrigin: 'left' }}
                      />
                    </motion.a>
                  )
                })}
              </nav>

              <div className="mt-16 text-center">
                <p className="text-sm text-gray-500 font-medium">
                  Sayohatingizni biz bilan boshlang ✈️
                </p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}