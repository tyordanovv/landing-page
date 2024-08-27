import {
    Toast,
    ToastClose,
    ToastDescription,
    ToastProvider,
    ToastTitle,
    ToastViewport,
  } from '../ui/Toast.jsx';
import { useToast } from '../ui/use-toast.js';
  
export function Toaster() {
    const { toasts } = useToast();
  
    return (
      <ToastProvider>
        {toasts.map(({ id, title, description, action, ...props }) => ( 
          <Toast key={id} {...props}>
            <div className='grid gap-1'>
              {title && <ToastTitle>{title}</ToastTitle>} 
              {description && ( 
                <ToastDescription className='font-coolvetica font-normal'>
                  {description}
                </ToastDescription>
              )}
            </div>
            {action}
            <ToastClose />
          </Toast>
        ))}
        <ToastViewport />
      </ToastProvider>
    );
  }
  