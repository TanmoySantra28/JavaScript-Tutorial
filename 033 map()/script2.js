const dates = ["2004-06-09","2004-28-01"];
const formattedDate = dates.map(formatDate);

console.log(formattedDate);

function formatDate(element){
    const parts = element.split("-");
    return `${parts[1]}/${parts[2]}/${parts[0]}`;
} 