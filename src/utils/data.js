let data = [{
	idUser:1,
	rol: "cliente",
	email: "admin@banagrario.com",
	clave: "Abcd/123",
	datos:{
		nombre:"Pepe",
		apellido:"Botellas",
	},
	cuentas: [{
			idCuenta: 1,
			saldo: 100,
			estado: "activa",
            transferencias: [{
                idTransf: 101,
                fecha: "2021-10-12",
                ctaOrigen: 2,
                ctaDestino: 3,		
                monto: 650,
                reclamo: false
            },
            {
                idTransf: 102,
                fecha: "2021-08-06",
                ctaOrigen: 2,
                ctaDestino: 1,		
                monto: 45850,
                reclamo: false
            },
            {
                idTransf: 105,
                fecha: "2021-07-20",
                ctaOrigen: 1,
                ctaDestino: 2,		
                monto: 6500000,
                reclamo: false
            },
            {
                idTransf: 113,
                fecha: "2021-09-15",
                ctaOrigen: 3,
                ctaDestino: 1,		
                monto: 48700000,
                reclamo: false
            },
        ]
		},
		{
			idCuenta: 2,
			saldo: 943000,
			estado: "activa",
		},
		{
			idCuenta: 3,
			saldo: 2456789,
			estado: "activa",
		},
	]
}]

export default data;