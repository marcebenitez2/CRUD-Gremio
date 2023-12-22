export const formattedDates = (arr) =>{
    return arr.map((item) => {
        const date = new Date(item.birth);
        const formattedDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
        const active = item.state === 1 ? "Activo" : "Inactivo";
        return { ...item, birth: formattedDate, state: active };
    });
}