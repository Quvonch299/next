'use client'

import { motion, AnimatePresence } from 'framer-motion'

export default function MobileMenu({ open, setOpen }) {
  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/60 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          />

          {/* Menu panel */}
          <motion.div
            className="fixed top-0 left-0 right-0 bg-gradient-to-b from-white to-gray-50 z-50 rounded-b-3xl shadow-2xl overflow-hidden"
            initial={{ y: '-100%' }}
            animate={{ y: 0 }}
            exit={{ y: '-100%' }}
            transition={{
              type: 'spring',
              stiffness: 120,
              damping: 20,
            }}
          >
            <div className="pt-20 pb-12 px-8">
              {/* Close button */}
              <button
                onClick={() => setOpen(false)}
                className="absolute top-6 right-6 w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300 transition"
                aria-label="Menu yopish"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>

              {/* Menu links - sizning saytingizga moslashtirdim */}
              <nav className="flex flex-col items-center gap-10 mt-12">
                {['Bosh sahifa', 'Biz haqimizda', 'Mehmonxonalar', 'Turizm turlari', 'Xizmatlar', 'Bog‘lanish'].map((item) => (
                  <motion.a
                    key={item}
                    href="#"
                    onClick={() => setOpen(false)}
                    className="text-3xl font-semibold text-gray-800 hover:text-blue-600 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {item}
                  </motion.a>
                ))}
              </nav>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}