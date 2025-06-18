'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { VALIDATION_RULES } from '@/constants'
import loginBgImage from '@/public/page-login/image-login-bg.png'
import { useForm } from 'react-hook-form'
import { Button } from '@/components/ui/button'
import FormField from '../form-field'
import GoogleSignIn from '../google-sign-in'

const LoginView = () => {
	// Background image component
	const BackgroundImage = () => (
		<div className='relative hidden min-h-screen overflow-hidden lg:flex lg:w-1/2'>
			<Image
				src={loginBgImage}
				alt='Login background'
				fill
				className='object-cover'
				quality={100}
				priority
				sizes='50vw'
			/>
		</div>
	)

	// Main form component
	const SignInForm = () => {
		const [showPassword, setShowPassword] = useState(false)

		const {
			register,
			handleSubmit,
			formState: { errors },
		} = useForm({
			defaultValues: {
				email: '',
				sifre: '',
			},
		})

		const onSubmit = data => {
			console.log('Login data:', data)
		}

		const togglePasswordVisibility = () => setShowPassword(!showPassword)

		return (
			<div className='bg-muted flex w-full items-center justify-center lg:w-1/2'>
				<div className='w-full space-y-10 px-10 py-8 md:px-20'>
					<div className='space-y-2'>
						<h1 className='text-primary text-5xl font-bold'>Giriş Yap</h1>
					</div>

					<form
						onSubmit={handleSubmit(onSubmit)}
						className='space-y-6'>
						{/* Email Field */}
						<FormField
							id='email'
							label='E-posta'
							type='email'
							placeholder='john.doe@gmail.com'
							register={register}
							validation={VALIDATION_RULES.email}
							error={errors.email}
						/>

						{/* Password Field */}
						<FormField
							id='sifre'
							label='Şifre'
							type={showPassword ? 'text' : 'password'}
							register={register}
							validation={VALIDATION_RULES.password}
							error={errors.sifre}
							showPassword={showPassword}
							togglePassword={togglePasswordVisibility}
						/>

						<div className='text-right'>
							<Link
								href='#'
								className='text-sm text-blue-600 hover:underline'>
								Parolamı unuttum
							</Link>
						</div>

						{/* Submit Button */}
						<Button
							type='submit'
							className='bg-primary hover:bg-primary/80 h-12 w-full font-medium text-white'>
							Giriş Yap
						</Button>

						<div className='text-center text-sm text-gray-600'>
							<span>Henüz hesabın yok mu? </span>
							<Link
								href='/sign-up'
								className='font-medium text-blue-600 hover:underline'>
								Kayıt ol
							</Link>
						</div>

						{/* Divider */}
						<div className='relative'>
							<div className='absolute inset-0 flex items-center'>
								<span className='w-full border-t border-gray-300' />
							</div>
							<div className='relative flex justify-center text-sm'>
								<span className='bg-muted text-primary px-2'>veya</span>
							</div>
						</div>

						<GoogleSignIn />
					</form>
				</div>
			</div>
		)
	}
	return (
		<div className='my-40 flex h-full min-h-screen w-full md:my-0'>
			<SignInForm />
			<BackgroundImage />
		</div>
	)
}

export default LoginView
