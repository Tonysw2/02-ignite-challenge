import { v4 as uuid } from 'uuid'

export const coffeeListData = [
	{
		type: 'expresso',
		id: uuid(),
		tag: ['tradicional'],
		name: 'Expreso tradicional',
		description: 'O tradicional café feito com água quente e grãos moídos',
		price: 5,
	},
	{
		type: 'americano',
		id: uuid(),
		tag: ['tradicional'],
		name: ' Expresso Americano',
		description: 'Expresso diluído, menos intenso que o tradicional',
		price: 5,
	},
	{
		type: 'expresso_cremoso',
		id: uuid(),
		tag: ['tradicional'],
		name: 'Expresso Cremoso',
		description: 'Café expresso tradicional com espuma cremosa',
		price: 5,
	},
	{
		type: 'café_gelado',
		id: uuid(),
		tag: ['tradicional', 'gelado'],
		name: 'Expresso Gelado',
		description: 'Bebida preparada com café expresso e cubos de gelo',
		price: 5,
	},
	{
		type: 'café_leite',
		id: uuid(),
		tag: ['tradicional', 'com leite'],
		name: 'Café com Leite',
		description: 'Meio a meio de expresso tradicional com leite vaporizado',
		price: 5,
	},
	{
		type: 'latte',
		id: uuid(),
		tag: ['tradicional', 'com leite'],
		name: 'Latte',
		description:
			'Uma dose de café expresso com o dobro de leite e espuma cremosa',

		price: 5,
	},
	{
		type: 'capuccino',
		id: uuid(),
		tag: ['tradicional', 'com leite'],
		name: 'Capuccino',
		description:
			'Bebida com canela feita de doses iguais de café, leite e espuma',

		price: 5,
	},
	{
		type: 'macchiato',
		id: uuid(),
		tag: ['tradicional', 'com leite'],
		name: 'Macchiato',
		description:
			'Café expresso misturado com um pouco de leite quente e espuma',

		price: 5,
	},
	{
		type: 'mochaccino',
		id: uuid(),
		tag: ['tradicional', 'com leite'],
		name: 'Mochaccino',
		description: 'Café expresso com calda de chocolate, pouco leite e espuma',
		price: 5,
	},
	{
		type: 'chocolate_quente',
		id: uuid(),
		tag: ['especial', 'com leite'],
		name: 'Chocolate Quente',
		description: 'Bebida feita com chocolate dissolvido no leite quente e café',
		price: 5,
	},
	{
		type: 'cubano',
		id: uuid(),
		tag: ['especial', 'alcoólico', 'gelado'],
		name: 'Cubano',
		description:
			'Drink gelado de café expresso com rum, creme de leite e hortelã',

		price: 5,
	},
	{
		type: 'havaiano',
		id: uuid(),
		tag: ['especial'],
		name: 'Havaiano',
		description: 'Bebida adocicada preparada com café e leite de coco',
		price: 5,
	},
	{
		type: 'árabe',
		id: uuid(),
		tag: ['especial'],
		name: 'Árabe',
		description: 'Bebida preparada com grãos de café árabe e especiarias',
		price: 5,
	},
	{
		type: 'irlandês',
		id: uuid(),
		tag: ['especial', 'alcoólico'],
		name: 'Irlandês',
		description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
		price: 5,
	},
]
