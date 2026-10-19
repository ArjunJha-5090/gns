"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const KEY = "gns-preloader-seen";

export default function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let seen = false;
    try {
      seen = sessionStorage.getItem(KEY) === "1";
      sessionStorage.setItem(KEY, "1");
    } catch {}
    const timer = setTimeout(() => setLoading(false), seen ? 0 : 1100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: "easeInOut" } }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center gap-7 bg-white"
          aria-hidden="true"
        >
          <motion.img
            src="/logo.png"
            alt=""
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="h-auto w-[116px]"
          />
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.6 }}
            className="font-[family-name:var(--font-display)] text-lg font-bold tracking-wide text-navy"
          >
            Gyan Niketan School
          </motion.p>
          <div className="h-[3px] w-[180px] overflow-hidden rounded bg-gray-100">
            <motion.div
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 1, ease: "easeInOut" }}
              className="h-full bg-gradient-to-r from-red to-gold"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
