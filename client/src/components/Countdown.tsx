import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Clock } from 'lucide-react';

interface CountdownProps {
  minutes?: number;
}

export default function Countdown({ minutes = 5 }: CountdownProps) {
  const [timeLeft, setTimeLeft] = useState(minutes * 60); // Convert to seconds

  useEffect(() => {
    if (timeLeft <= 0) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return {
      minutes: String(mins).padStart(2, '0'),
      seconds: String(secs).padStart(2, '0'),
    };
  };

  const { minutes: displayMinutes, seconds: displaySeconds } = formatTime(timeLeft);

  return (
    <motion.div
      className="bg-gradient-to-r from-red-600/30 to-red-900/30 border-2 border-red-600 rounded-xl p-6 mb-6"
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center justify-center gap-3 mb-3">
        <Clock className="text-red-500 animate-pulse" size={24} />
        <p className="text-white font-semibold text-lg sm:text-xl">
          ⚠️ Oferta Expira em:
        </p>
      </div>
      
      <div className="flex items-center justify-center gap-3">
        {/* Minutes */}
        <motion.div
          className="bg-black/50 rounded-lg p-3 sm:p-4 min-w-[70px] sm:min-w-[80px]"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 1, repeat: Infinity }}
        >
          <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-red-500 text-center">
            {displayMinutes}
          </div>
          <div className="text-xs sm:text-sm text-gray-400 text-center mt-1">
            MIN
          </div>
        </motion.div>

        {/* Separator */}
        <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-red-500 animate-pulse">
          :
        </div>

        {/* Seconds */}
        <motion.div
          className="bg-black/50 rounded-lg p-3 sm:p-4 min-w-[70px] sm:min-w-[80px]"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 1, repeat: Infinity, delay: 0.5 }}
        >
          <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-red-500 text-center">
            {displaySeconds}
          </div>
          <div className="text-xs sm:text-sm text-gray-400 text-center mt-1">
            SEG
          </div>
        </motion.div>
      </div>

      {timeLeft <= 60 && timeLeft > 0 && (
        <motion.p
          className="text-center text-red-400 font-semibold mt-4 text-sm sm:text-base"
          animate={{ opacity: [1, 0.5, 1] }}
          transition={{ duration: 0.5, repeat: Infinity }}
        >
          🔥 Última chance! Não perca essa oportunidade!
        </motion.p>
      )}

      {timeLeft === 0 && (
        <p className="text-center text-gray-400 mt-4 text-sm sm:text-base">
          Oferta expirada. Recarregue a página para nova oferta.
        </p>
      )}
    </motion.div>
  );
}
