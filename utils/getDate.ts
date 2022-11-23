const getDate = () => {
    const date = new Date();
    const options: Intl.DateTimeFormatOptions = { weekday: 'long', hour: 'numeric', minute: 'numeric' };
    const result = date.toLocaleDateString('ru-RU', options).split(' ').join(', ');

    return result;
}

export default getDate;