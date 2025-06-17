"use client"

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Eye, EyeOff } from 'lucide-react'
import signupBgImage from '@/public/page-signup/image-signup-bg.png'
import GoogleSignIn from '@/components/google-sign-in'

// Form validation rules
const VALIDATION_RULES = {
	email: {
		required: 'E-posta alanı zorunludur',
		pattern: {
			value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
			message: 'Geçerli bir e-posta adresi giriniz'
		}
	},
	password: {
		required: 'Şifre alanı zorunludur',
		minLength: {
			value: 6,
			message: 'Şifre en az 6 karakter olmalıdır'
		}
	},
	required: (fieldName) => ({ required: `${fieldName} zorunludur` })
}

// Form field component
const FormField = ({
	id,
	label,
	type = 'text',
	placeholder,
	register,
	validation,
	error,
	showPassword,
	togglePassword,
	className = ''
}) => (
	<div className={className}>
		<Label htmlFor={id} className='text-sm text-gray-700'>{label}</Label>
		<div className='relative'>
			<Input
				id={id}
				type={type}
				placeholder={placeholder}
				className='mt-1 h-12 pr-10'
				{...register(id, validation)}
			/>
			{(type === 'password' || (type === 'text' && togglePassword)) && (
				<button
					type="button"
					onClick={togglePassword}
					className='absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600'
				>
					{showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
				</button>
			)}
		</div>
		{error && (
			<p className='text-sm text-red-600 mt-1'>{error.message}</p>
		)}
	</div>
)

// Marka form fields component
const Fields = ({ register, errors, setValue }) => {
	const [showPassword, setShowPassword] = useState(false)
	const [showConfirmPassword, setShowConfirmPassword] = useState(false)

	const togglePasswordVisibility = () => setShowPassword(!showPassword)
	const toggleConfirmPasswordVisibility = () => setShowConfirmPassword(!showConfirmPassword)

	return (
		<div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
			<FormField
				id="ad"
				label="Ad"
				placeholder="Adınızı girin"
				register={register}
				validation={VALIDATION_RULES.required('Ad')}
				error={errors.ad}
			/>

			<FormField
				id="soyad"
				label="Soyad"
				placeholder="Soyadınızı girin"
				register={register}
				validation={VALIDATION_RULES.required('Soyad')}
				error={errors.soyad}
			/>

			<FormField
				id="email"
				label="E-posta"
				type="email"
				placeholder="john.doe@gmail.com"
				register={register}
				validation={VALIDATION_RULES.email}
				error={errors.email}
			/>

			<FormField
				id="telefon"
				label="Telefon Numarası"
				type="tel"
				placeholder="0537 919 1096"
				register={register}
				validation={VALIDATION_RULES.required('Telefon numarası')}
				error={errors.telefon}
			/>

			<FormField
				id="sifre"
				label="Şifre"
				type={showPassword ? 'text' : 'password'}
				register={register}
				validation={VALIDATION_RULES.password}
				error={errors.sifre}
				showPassword={showPassword}
				togglePassword={togglePasswordVisibility}
				className="md:col-span-2"
			/>

			<FormField
				id="sifreTekrar"
				label="Şifre Tekrar"
				type={showConfirmPassword ? 'text' : 'password'}
				register={register}
				validation={{
					required: 'Şifre tekrarı zorunludur',
					validate: (value) => value === watch('sifre') || 'Şifreler eşleşmiyor'
				}}
				error={errors.sifreTekrar}
				showPassword={showConfirmPassword}
				togglePassword={toggleConfirmPasswordVisibility}
				className="md:col-span-2"
			/>
		</div>
	)
}

// Google sign in component


// Background image component
const BackgroundImage = () => (
	<div className='hidden lg:flex lg:w-1/2 relative min-h-screen overflow-hidden'>
		<Image
			src={signupBgImage}
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
const SignUpForm = () => {
	const [activeTab, setActiveTab] = useState('marka')

	const {
		register,
		handleSubmit,
		watch,
		setValue,
		formState: { errors }
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
			sifreTekrar: ''
		}
	})

	const onSubmit = (data) => {
		console.log(data)
	}

	const handleTabChange = (value) => {
		setActiveTab(value)
		setValue('hesapTipi', value)
	}

	return (
		<div className='flex w-full lg:w-1/2 items-center justify-center bg-white min-h-screen overflow-y-auto'>
			<div className='w-full max-w-lg py-8'>
				<div className='space-y-10'>
					<h1 className='text-5xl font-bold text-primary'>Kayıt Ol</h1>
					<p className='text-sm text-gray-600'>Hesap türü</p>
				</div>

				<form onSubmit={handleSubmit(onSubmit)} className='space-y-6'>
					{/* Account Type Tabs */}
					<Tabs value={activeTab} onValueChange={handleTabChange} className="w-full">
						<TabsList className="grid w-full grid-cols-2 h-12 bg-transparent gap-6">
							<TabsTrigger value="marka" className="text-sm font-medium  data-[state=active]:ring-2 data-[state=active]:ring-primary bg-secondary border-2 border-primary/10">
								Marka
							</TabsTrigger>
							<TabsTrigger value="influencer" className="text-sm font-medium  data-[state=active]:ring-2 data-[state=active]:ring-primary bg-secondary border-2 border-primary/10">
								Influencer
							</TabsTrigger>
						</TabsList>

						{/* Marka Tab Content */}
						<TabsContent value="marka" className="space-y-4 mt-6">
							<Fields register={register} errors={errors} setValue={setValue} />
						</TabsContent>

						{/* Influencer Tab Content */}
						<TabsContent value="influencer" className="space-y-4 mt-6">
							<Fields register={register} errors={errors} setValue={setValue} />
						</TabsContent>
					</Tabs>

					<div className='space-y-2'>
						<Button
							type="submit"
							className='w-full h-12 bg-primary hover:bg-primary/80 text-white font-medium'
						>
							Hesap Oluştur
						</Button>
						<span className='text-xs text-gray-600'>Devam ederek <span className='text-blue-600 underline'>KVKK Aydınlatma Metni</span>’ni okuduğunuzu kabul etmektesiniz.</span>
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

					<div className='text-center text-sm text-gray-600'>
						<span>Hesabın var mı? </span>
						<a href="#" className='text-blue-600 hover:underline font-medium'>
							Giriş Yap
						</a>
					</div>
				</form>
			</div>
		</div>
	)
}

// Main page component
function SignUpPage() {
	return (
		<div className='flex min-h-screen w-full'>
			<SignUpForm />
			<BackgroundImage />
		</div>
	)
}

export default SignUpPage
