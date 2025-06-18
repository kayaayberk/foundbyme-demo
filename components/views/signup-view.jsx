'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { VALIDATION_RULES } from '@/constants'
import signupBgImage from '@/public/page-signup/image-signup-bg.png'
import { useForm } from 'react-hook-form'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import FormField from '../form-field'
import GoogleSignIn from '../google-sign-in'

const SignUpView = () => {
	const Fields = ({ register, errors, setValue }) => {
		const [showPassword, setShowPassword] = useState(false)
		const [showConfirmPassword, setShowConfirmPassword] = useState(false)

		const togglePasswordVisibility = () => setShowPassword(!showPassword)
		const toggleConfirmPasswordVisibility = () =>
			setShowConfirmPassword(!showConfirmPassword)

		return (
			<div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
				<FormField
					id='ad'
					label='Ad'
					placeholder='Adınızı girin'
					register={register}
					validation={VALIDATION_RULES.required('Ad')}
					error={errors.ad}
				/>

				<FormField
					id='soyad'
					label='Soyad'
					placeholder='Soyadınızı girin'
					register={register}
					validation={VALIDATION_RULES.required('Soyad')}
					error={errors.soyad}
				/>

				<FormField
					id='email'
					label='E-posta'
					type='email'
					placeholder='john.doe@gmail.com'
					register={register}
					validation={VALIDATION_RULES.email}
					error={errors.email}
				/>

				<FormField
					id='telefon'
					label='Telefon Numarası'
					type='tel'
					placeholder='0537 919 1096'
					register={register}
					validation={VALIDATION_RULES.required('Telefon numarası')}
					error={errors.telefon}
				/>

				<FormField
					id='sifre'
					label='Şifre'
					type={showPassword ? 'text' : 'password'}
					register={register}
					validation={VALIDATION_RULES.password}
					error={errors.sifre}
					showPassword={showPassword}
					togglePassword={togglePasswordVisibility}
					className='md:col-span-2'
				/>

				<FormField
					id='sifreTekrar'
					label='Şifre Tekrar'
					type={showConfirmPassword ? 'text' : 'password'}
					register={register}
					validation={{
						required: 'Şifre tekrarı zorunludur',
						validate: value =>
							value === watch('sifre') || 'Şifreler eşleşmiyor',
					}}
					error={errors.sifreTekrar}
					showPassword={showConfirmPassword}
					togglePassword={toggleConfirmPasswordVisibility}
					className='md:col-span-2'
				/>
			</div>
		)
	}

	// Background image component
	const BackgroundImage = () => (
		<div className='relative hidden min-h-screen overflow-hidden lg:flex lg:w-1/2'>
			<Image
				src={signupBgImage}
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
	const SignUpForm = () => {
		const [activeTab, setActiveTab] = useState('marka')

		const {
			register,
			handleSubmit,
			setValue,
			formState: { errors },
		} = useForm({
			defaultValues: {
				hesapTipi: 'marka',
				// Marka fields
				markaAdi: '',
				sektor: '',
				sirketAdi: '',
				yetkiliAdi: '',
				yetkiliSoyadi: '',
				// Influencer fields
				ad: '',
				soyad: '',
				kullaniciAdi: '',
				kategori: '',
				takipciSayisi: '',
				// Common fields
				email: '',
				telefon: '',
				sifre: '',
				sifreTekrar: '',
			},
		})

		const onSubmit = data => {
			console.log(data)
		}

		const handleTabChange = value => {
			setActiveTab(value)
			setValue('hesapTipi', value)
		}

		return (
			<div className='bg-muted flex w-full items-center justify-center lg:w-1/2'>
				<div className='w-full space-y-10 px-10 py-8 md:px-20'>
					<div className='space-y-2'>
						<h1 className='text-primary text-5xl font-bold'>Kayıt Ol</h1>
					</div>

					<form
						onSubmit={handleSubmit(onSubmit)}
						className='space-y-6'>
						<p className='text-sm text-gray-600'>Hesap türü</p>
						<Tabs
							value={activeTab}
							onValueChange={handleTabChange}
							className='w-full'>
							<TabsList className='grid h-12 w-full grid-cols-2 gap-6 bg-transparent'>
								<TabsTrigger
									value='marka'
									className='data-[state=active]:ring-primary bg-secondary border-primary/10 rounded-xl border-2 text-sm font-medium data-[state=active]:ring-2'>
									Marka
								</TabsTrigger>
								<TabsTrigger
									value='influencer'
									className='data-[state=active]:ring-primary bg-secondary border-primary/10 rounded-xl border-2 text-sm font-medium data-[state=active]:ring-2'>
									Influencer
								</TabsTrigger>
							</TabsList>

							<TabsContent
								value='marka'
								className='mt-6 space-y-4'>
								<Fields
									register={register}
									errors={errors}
									setValue={setValue}
								/>
							</TabsContent>

							<TabsContent
								value='influencer'
								className='mt-6 space-y-4'>
								<Fields
									register={register}
									errors={errors}
									setValue={setValue}
								/>
							</TabsContent>
						</Tabs>

						<div className='space-y-2'>
							<Button
								type='submit'
								className='bg-primary hover:bg-primary/80 h-12 w-full font-medium text-white'>
								Hesap Oluştur
							</Button>
							<span className='text-xs text-gray-600'>
								Devam ederek{' '}
								<span className='text-blue-600 underline'>
									KVKK Aydınlatma Metni
								</span>
								’ni okuduğunuzu kabul etmektesiniz.
							</span>
						</div>

						<div className='relative'>
							<div className='absolute inset-0 flex items-center'>
								<span className='w-full border-t border-gray-300' />
							</div>
							<div className='relative flex justify-center text-sm'>
								<span className='bg-muted text-primary px-2'>veya</span>
							</div>
						</div>

						<GoogleSignIn />

						<div className='text-center text-sm text-gray-600'>
							<span>Hesabın var mı? </span>
							<Link
								href='/sign-in'
								className='font-medium text-blue-600 hover:underline'>
								Giriş Yap
							</Link>
						</div>
					</form>
				</div>
			</div>
		)
	}
	return (
		<div className='my-40 flex h-full min-h-screen w-full md:my-0'>
			<SignUpForm />
			<BackgroundImage />
		</div>
	)
}

export default SignUpView
