/* Напишите и типизируйте функцию, рассчитывающую стоимость с учетом скидки 
и рассрочки на заданное количество месяцев: */

interface InputParameters {
    price: number
    discount?: number
    isInstallment: boolean
    months: number
}

const totalPrice = ({ price, discount = 0, isInstallment, months }: InputParameters): number => {
    if (discount < 0 || months < 0) {
        throw new Error('Ошибка: Скидка и количество месяцев должны быть положительными значениями')
    }
    let res: number;
    res = price / months
    if (isInstallment) {
        res = res * ((100 - discount) / 100)
    } 
    return res;
};

const price = totalPrice({ price: 100000, discount: 25, isInstallment: true, months: 12 });
console.log(price) // 6250
