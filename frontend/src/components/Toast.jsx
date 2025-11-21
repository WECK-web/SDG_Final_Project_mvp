import React, { useEffect, useState } from 'react';
import { X, CheckCircle, AlertCircle, Info } from 'lucide-react';

const Toast = ({ message, type = 'info', onClose }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Trigger enter animation
        requestAnimationFrame(() => setIsVisible(true));
    }, []);

    const handleClose = () => {
        setIsVisible(false);
        // Wait for exit animation
        setTimeout(onClose, 300);
    };

    const icons = {
        success: <CheckCircle className="w-5 h-5 text-emerald-500" />,
        error: <AlertCircle className="w-5 h-5 text-red-500" />,
        info: <Info className="w-5 h-5 text-blue-500" />,
    };

    const bgColors = {
        success: 'bg-emerald-50 border-emerald-100',
        error: 'bg-red-50 border-red-100',
        info: 'bg-blue-50 border-blue-100',
    };

    return (
        <div
            className={`${bgColors[type]
                } border shadow-lg rounded-lg p-4 flex items-center gap-3 min-w-[300px] transform transition-all duration-300 ease-in-out ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
                }`}
        >
            {icons[type]}
            <p className="text-stone-800 text-sm font-medium flex-grow">{message}</p>
            <button
                onClick={handleClose}
                className="text-stone-400 hover:text-stone-600 transition-colors"
            >
                <X className="w-4 h-4" />
            </button>
        </div>
    );
};

export default Toast;
