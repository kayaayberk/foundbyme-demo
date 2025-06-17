'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import loginBgImage from '@/public/page-signup/image-signup-bg.png'
import { VALIDATION_RULES } from '@/constants'
import GoogleSignIn from '../google-sign-in'
import FormField from '../form-field'
import Link from 'next/link'

const LoginView = () => {
    // Background image component
    const BackgroundImage = () => (
        <div className='hidden lg:flex lg:w-1/2 relative min-h-screen overflow-hidden'>
            <Image
                src={loginBgImage}
                alt="Login background"
                fill
                className='object-cover'
                quality={100}
                priority
                sizes="50vw"
            />
        </div>
    )

    // Main form component
    const SignInForm = () => {
        const [showPassword, setShowPassword] = useState(false)

        const {
            register,
            handleSubmit,
            formState: { errors }
        } = useForm({
            defaultValues: {
                email: '',
                sifre: ''
            }
        })

        const onSubmit = (data) => {
            console.log('Login data:', data)
        }

        const togglePasswordVisibility = () => setShowPassword(!showPassword)

        return (
            <div className={`flex w-full lg:w-1/2 items-center justify-center bg-white min-h-screen overflow-y-auto`}>
                <div className={`w-full space-y-10 py-8 px-20`}>
                    <div className='space-y-2'>
                        <h1 className='text-5xl font-bold text-primary'>Giriş Yap</h1>
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)} className='space-y-10'>
                        {/* Email Field */}
                        <FormField
                            id="email"
                            label="E-posta"
                            type="email"
                            placeholder="john.doe@gmail.com"
                            register={register}
                            validation={VALIDATION_RULES.email}
                            error={errors.email}
                        />

                        {/* Password Field */}
                        <FormField
                            id="sifre"
                            label="Şifre"
                            type={showPassword ? 'text' : 'password'}
                            register={register}
                            validation={VALIDATION_RULES.password}
                            error={errors.sifre}
                            showPassword={showPassword}
                            togglePassword={togglePasswordVisibility}
                        />

                        <div className='text-right'>
                            <Link href="#" className='text-sm text-blue-600 hover:underline'>
                                Parolamı unuttum
                            </Link>
                        </div>

                        {/* Submit Button */}
                        <Button
                            type="submit"
                            className='w-full h-12 bg-primary hover:bg-primary/80 text-white font-medium'
                        >
                            Giriş Yap
                        </Button>

                        <div className='text-center text-sm text-gray-600'>
                            <span>Henüz hesabın yok mu? </span>
                            <Link href="/sign-up" className='text-blue-600 hover:underline font-medium'>
                                Kayıt ol
                            </Link>
                        </div>

                        {/* Divider */}
                        <div className='relative'>
                            <div className='absolute inset-0 flex items-center'>
                                <span className='w-full border-t border-gray-300' />
                            </div>
                            <div className='relative flex justify-center text-sm'>
                                <span className='px-2 bg-white text-gray-500'>veya</span>
                            </div>
                        </div>

                        <GoogleSignIn />
                    </form>
                </div>
            </div>
        )
    }
    return (
        <div className='flex min-h-screen w-full'>
            <SignInForm />
            <BackgroundImage />
        </div>
    )
}

export default LoginView