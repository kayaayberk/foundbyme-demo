import { Eye, EyeOff } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

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
	className = '',
}) => (
	<div className={className}>
		<Label
			htmlFor={id}
			className='text-sm text-gray-700'>
			{label}
		</Label>
		<div className='relative'>
			<Input
				id={id}
				type={type}
				placeholder={placeholder}
				className='mt-1 h-12 rounded-xl pr-10'
				{...register(id, validation)}
			/>
			{(type === 'password' || (type === 'text' && togglePassword)) && (
				<button
					type='button'
					onClick={togglePassword}
					className='absolute top-1/2 right-3 -translate-y-1/2 transform text-gray-400 hover:text-gray-600'>
					{showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
				</button>
			)}
		</div>
		{error && <p className='mt-1 text-sm text-red-600'>{error.message}</p>}
	</div>
)

export default FormField
