export const moneyFormat = amount => {
    return amount.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD'
    })
}