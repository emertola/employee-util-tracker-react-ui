import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { AlertCircle } from 'lucide-react';
import { FC } from 'react';

interface ErrorAlertProps {
  errorMessage: string | null;
}

const ErrorAlert: FC<ErrorAlertProps> = ({ errorMessage }) => {
  return (
    <>
      {errorMessage && (
        <Alert variant="destructive" className="mb-6">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{errorMessage}</AlertDescription>
        </Alert>
      )}
    </>
  );
};

export default ErrorAlert;
