'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Card, Button, TextField, Label, InputGroup } from '@heroui/react';
import {
    At,
    Lock,
    Eye,
    EyeSlash,
    CircleCheckFill,
    TriangleExclamationFill,
} from '@gravity-ui/icons';
import { signIn } from '@/lib/auth-client';

export default function SignInPage() {
    const router = useRouter();
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const [isVisible, setIsVisible] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const toggleVisibility = () => setIsVisible(!isVisible);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    useEffect(() => {
        if (!success) return;
        const timer = setTimeout(() => router.push('/'), 1200);
        return () => clearTimeout(timer);
    }, [success, router]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');
        setLoading(true);

        try {
            const { data, error: authError } = await signIn.email({
                email: formData.email,
                password: formData.password,
            });

            if (authError) {
                setError(authError.message || 'Something went wrong during sign in.');
            } else {
                setSuccess('Signed in successfully! Redirecting...');
                setFormData({ email: '', password: '' });
            }
        } catch (err) {
            setError(err.message || 'An unexpected error occurred.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-black px-4 py-8">
            <Card className="w-full max-w-md shadow-xl border border-gray-200 dark:border-zinc-800 p-6">
                {/* Header Section */}
                <div className="flex flex-col gap-1 items-center pb-4 text-center">
                    <h1 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Welcome Back
                    </h1>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                        Sign in to continue to your account
                    </p>
                </div>

                {/* Divider */}
                <div className="h-px bg-gray-200 dark:bg-zinc-800 my-2 w-full" />

                {/* Form Body Section */}
                <div className="py-4">
                    {/* Success Alert */}
                    {success && (
                        <div className="mb-4 p-3 rounded-lg bg-success-soft text-success-soft-foreground border border-success/20 text-sm flex items-center gap-2">
                            <CircleCheckFill className="w-5 h-5 flex-shrink-0" />
                            <span>{success}</span>
                        </div>
                    )}

                    {/* Error Alert */}
                    {error && (
                        <div className="mb-4 p-3 rounded-lg bg-danger-soft text-danger-soft-foreground border border-danger/20 text-sm flex items-center gap-2">
                            <TriangleExclamationFill className="w-5 h-5 flex-shrink-0" />
                            <span>{error}</span>
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                        {/* Email Input */}
                        <TextField isRequired fullWidth>
                            <Label>Email Address</Label>
                            <InputGroup>
                                <InputGroup.Prefix>
                                    <At className="text-gray-400 dark:text-gray-500 text-xl pointer-events-none" />
                                </InputGroup.Prefix>
                                <InputGroup.Input
                                    type="email"
                                    name="email"
                                    placeholder="you@example.com"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                            </InputGroup>
                        </TextField>

                        {/* Password Input */}
                        <TextField isRequired fullWidth>
                            <Label>Password</Label>
                            <InputGroup>
                                <InputGroup.Prefix>
                                    <Lock className="text-gray-400 dark:text-gray-500 text-xl pointer-events-none" />
                                </InputGroup.Prefix>
                                <InputGroup.Input
                                    type={isVisible ? 'text' : 'password'}
                                    name="password"
                                    placeholder="••••••••"
                                    value={formData.password}
                                    onChange={handleChange}
                                />
                                <InputGroup.Suffix>
                                    <button
                                        type="button"
                                        onClick={toggleVisibility}
                                        className="focus:outline-none text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                                        aria-label="toggle password visibility"
                                    >
                                        {isVisible ? (
                                            <EyeSlash className="text-xl pointer-events-none" />
                                        ) : (
                                            <Eye className="text-xl pointer-events-none" />
                                        )}
                                    </button>
                                </InputGroup.Suffix>
                            </InputGroup>
                        </TextField>

                        {/* Submit Button */}
                        <Button
                            type="submit"
                            variant="primary"
                            size="lg"
                            className="w-full mt-2 font-medium"
                            isPending={loading}
                        >
                            Sign In
                        </Button>
                    </form>
                </div>

                {/* Divider */}
                <div className="h-px bg-gray-200 dark:bg-zinc-800 my-2 w-full" />

                {/* Footer Navigation Section */}
                <div className="flex justify-center pt-4 text-center">
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                        Don&apos;t have an account?{' '}
                        <Link
                            href="/auth/signup"
                            className="text-primary font-semibold hover:underline transition-all"
                        >
                            Sign Up
                        </Link>
                    </p>
                </div>
            </Card>
        </div>
    );
}
