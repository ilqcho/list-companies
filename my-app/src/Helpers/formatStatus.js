const formatStatus = (status) =>{
    switch (status) {
        case 'accepted':
            return 'Aceptado'
        case 'pending':
            return 'Pendiente'
        case 'declined':
            return 'Declinado'
        default:
            return status;
    }
}


export default formatStatus;