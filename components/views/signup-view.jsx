"use client"

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import signupBgImage from '@/public/page-signup/image-signup-bg.png'
import { VALIDATION_RULES } from '@/constants'
import GoogleSignIn from '../google-sign-in'
import FormField from '../form-field'
import Link from 'next/link'

const SignUpView = () => {
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
            <div className='flex w-full lg:w-1/2 items-center justify-center bg-muted'>
                <div className='w-full space-y-10 py-8 md:px-20 px-10'>
                    <div className='space-y-2'>
                        <h1 className='text-5xl font-bold text-primary'>Kayıt Ol</h1>
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)} className='space-y-6'>
                        <p className='text-sm text-gray-600'>Hesap türü</p>
                        <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full">
                            <TabsList className="grid w-full grid-cols-2 h-12 bg-transparent gap-6">
                                <TabsTrigger value="marka" className="rounded-xl text-sm font-medium  data-[state=active]:ring-2 data-[state=active]:ring-primary bg-secondary border-2 border-primary/10">
                                    Marka
                                </TabsTrigger>
                                <TabsTrigger value="influencer" className="rounded-xl text-sm font-medium  data-[state=active]:ring-2 data-[state=active]:ring-primary bg-secondary border-2 border-primary/10">
                                    Influencer
                                </TabsTrigger>
                            </TabsList>

                            <TabsContent value="marka" className="space-y-4 mt-6">
                                <Fields register={register} errors={errors} setValue={setValue} />
                            </TabsContent>

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

                        <div className='relative'>
                            <div className='absolute inset-0 flex items-center'>
                                <span className='w-full border-t border-gray-300' />
                            </div>
                            <div className='relative flex justify-center text-sm'>
                                <span className='px-2 bg-muted text-primary'>veya</span>
                            </div>
                        </div>

                        <GoogleSignIn />

                        <div className='text-center text-sm text-gray-600'>
                            <span>Hesabın var mı? </span>
                            <Link href="/sign-in" className='text-blue-600 hover:underline font-medium'>
                                Giriş Yap
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
    return (
        <div className='flex w-full h-full min-h-screen md:my-0 my-40'>
            <SignUpForm />
            <BackgroundImage />
        </div>
    )
}

export default SignUpView