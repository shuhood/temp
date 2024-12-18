import React, { useState } from 'react';
import { X, Phone, Mic, MicOff, PhoneOff } from 'lucide-react';
import { Ticket } from '../../types';

interface AudioCallModalProps {
  isOpen: boolean;
  onClose: () => void;
  ticket: Ticket;
}

export default function AudioCallModal({ isOpen, onClose, ticket }: AudioCallModalProps) {
  const [isCallActive, setIsCallActive] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  const handleStartCall = () => {
    setIsCallActive(true);
    // Add actual call logic here
  };

  const handleEndCall = () => {
    setIsCallActive(false);
    onClose();
    // Add call cleanup logic here
  };

  if (!isOpen) return null;

  return (
    <>
      <div 
        className="fixed inset-0 bg-black/20 dark:bg-black/40 z-40"
        onClick={isCallActive ? undefined : onClose}
      />

      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div className="bg-white dark:bg-dark-200 rounded-lg shadow-xl w-full max-w-md">
          <div className="flex items-center justify-between p-4 border-b border-gray-100 dark:border-dark-100">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
              Audio Call
            </h2>
            {!isCallActive && (
              <button
                onClick={onClose}
                className="p-2 hover:bg-gray-100 dark:hover:bg-dark-100 rounded-full transition-colors"
              >
                <X className="h-5 w-5 text-gray-500 dark:text-gray-400" />
              </button>
            )}
          </div>

          <div className="p-6">
            <div className="text-center">
              <div className="w-20 h-20 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8 text-green-600 dark:text-green-400" />
              </div>
              
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                {isCallActive ? 'Call in Progress' : 'Start Audio Call'}
              </h3>
              
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
                {isCallActive 
                  ? 'Connected to support agent'
                  : `Ticket #${ticket.id} - ${ticket.title}`
                }
              </p>

              <div className="flex items-center justify-center space-x-4">
                {isCallActive ? (
                  <>
                    <button
                      onClick={() => setIsMuted(!isMuted)}
                      className={`p-4 rounded-full transition-colors ${
                        isMuted
                          ? 'bg-red-100 dark:bg-red-900/20 text-red-600 dark:text-red-400'
                          : 'bg-gray-100 dark:bg-dark-100 text-gray-600 dark:text-gray-400'
                      }`}
                    >
                      {isMuted ? (
                        <MicOff className="h-6 w-6" />
                      ) : (
                        <Mic className="h-6 w-6" />
                      )}
                    </button>
                    <button
                      onClick={handleEndCall}
                      className="p-4 bg-red-600 hover:bg-red-700 dark:bg-red-500 dark:hover:bg-red-600 text-white rounded-full transition-colors"
                    >
                      <PhoneOff className="h-6 w-6" />
                    </button>
                  </>
                ) : (
                  <button
                    onClick={handleStartCall}
                    className="px-6 py-2 bg-green-600 hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600 text-white rounded-lg transition-colors flex items-center space-x-2"
                  >
                    <Phone className="h-5 w-5" />
                    <span>Start Call</span>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}