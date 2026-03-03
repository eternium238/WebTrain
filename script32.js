let c = prompt("Введите количества учащихся в группе: ","0");
let count = parseInt(c);
for(let i = 0; i< count; i++)
{
    let name = prompt("Введите имя и фамилию студента: ")
    let group = prompt("Введите группу: ")
    document.write(name+ ", " + group + "<br>");
}