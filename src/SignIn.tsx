import { FC } from 'react';
import { Button } from './components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from './components/ui/card';
import { Input } from './components/ui/input';
import { Label } from './components/ui/label';
import { useNavigate } from 'react-router-dom';

const SignIn: FC = () => {
  const navigate = useNavigate();

  const redirectToSecuredApp = () => navigate('/app');

  return (
    <div className="flex items-center h-screen">
      <Card className="mx-auto max-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl">Login</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center justify-between w-full">
                <Label htmlFor="password">Password</Label>
                <Button variant="link" className="gap-2 p-0 h-fit">
                  Forgot your password?
                </Button>
              </div>
              <Input id="password" type="password" required />
            </div>
            <Button
              type="submit"
              className="w-full"
              onClick={redirectToSecuredApp}>
              Login
            </Button>
            {/* <Button variant="outline" className="w-full">
              Login with Google
            </Button> */}
          </div>
          <div className="mt-4 text-sm flex items-center justify-center w-full">
            Don&apos;t have an account?{' '}
            <Button variant="link" className="px-1">
              Sign up
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SignIn;
