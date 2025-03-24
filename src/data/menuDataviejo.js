const menuData = {
    contact: {
        location: 'Paraná 3097, Martinez',
        phone1: '11 6228 8696',
        phone2: '5291 8671',
        social: '@sushitownar',
        website: 'www.sushitown.com'
    },
    sections: [
        {
            title: 'Entradas',
            items: [
                {
                    name: 'CHICKEN FINGERS',
                    price: 12500,
                    description: 'Pechuguitas rebozadas en escamas de papa, papas fritas y barbacoa.'
                },
                {
                    name: 'RABAS',
                    price: 19200,
                    description: 'Anillos de calamar fritos, servidos con salsa tártara y lima.'
                }
            ]
        },
        {
            title: 'Sushi Combinado',
            items: [
                {
                    name: 'KIOTO',
                    price: 44275,
                    description: 'Selección especial por el itamae.',
                    sizes: ['24 P']
                }
            ]
        }
        // Puedes agregar más secciones e items según necesites
    ]
}

export default menuData
