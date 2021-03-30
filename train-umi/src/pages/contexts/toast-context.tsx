import { EuiGlobalToastList } from '@elastic/eui';
import React, { useEffect } from 'react';
import { useCallback, useState } from 'react';
import { createContext } from 'react';
import { v4 as uuidv4 } from 'uuid';

const ToastContext = createContext((type: any) => {});

export default ToastContext;

export function ToastContextProvider({ children }: any) {
  const [toasts, setToasts] = useState<any>([]);

  function getToast(type: any) {
    return {
      id: uuidv4(),
      title: 'Thành công',
      color: type,
    };
  }

  const removeToast = (removedToast: any) => {
    setToasts(toasts.filter((toast: any) => toast.id !== removedToast.id));
  };

  const toastList = (
    <EuiGlobalToastList
      toasts={toasts}
      dismissToast={removeToast}
      toastLifeTimeMs={6000}
    />
  );

  const handleAddToast = (type: any) => {
    toasts.push(getToast(type));
    setToasts(toasts);
  };

  return (
    <ToastContext.Provider value={handleAddToast}>
      {children}
      {toastList}
    </ToastContext.Provider>
  );
}
