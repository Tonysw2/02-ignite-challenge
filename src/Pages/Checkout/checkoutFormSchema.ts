import { z } from 'zod'

export const checkoutFormSchema = z.object({
	cep: z
		.string()
		.min(1, 'CEP é obrigatório')
		.regex(/^\d{5}-\d{3}$/, 'CEP deve estar no formato 00000-000'),
	rua: z.string().min(3, 'Rua é obrigatória'),
	número: z.string().min(1, 'Número é obrigatório'),
	complemento: z.string(),
	bairro: z.string().min(1, 'Bairro é obrigatório'),
	cidade: z.string().min(1, 'Cidade é obrigatória'),
	estado: z
		.string()
		.min(1, 'UF é obrigatório')
		.length(2, 'UF deve ter 2 caracteres'),
	paymentMethod: z.enum(['credit', 'debit', 'cash'], {
		error: 'Selecione uma forma de pagamento',
	}),
})

export type CheckoutFormData = z.infer<typeof checkoutFormSchema>
