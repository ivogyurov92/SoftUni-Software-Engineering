function furniture(input) {
    let pattern = />>(?<name>[A-Z][A-Za-z]+)<<(?<price>[0-9]+.?[0-9]*)!(?<quantity>[0-9]+)/;
    let totalMoney = 0;

    console.log('Bought furniture:');

    for (let i = 0; i < input.length; i++) {
        if (input[i] == 'Purchase') {
            break;
        }

        let exec = pattern.exec(input[i]);

        if (exec) {
            console.log(exec.groups.name);
            totalMoney += Number(exec.groups.price) * Number(exec.groups.quantity)
        }
    }

    console.log(`Total money spend: ${totalMoney.toFixed(2)}`);
}

furniture([
    '>>Laptop<<312.2323!3',
    '>>TV<<300.21314!5',
    '>Invalid<<!5',
    '>>TV<<300.21314!20',
    '>>Invalid<!5',
    '>>TV<<30.21314!5',
    '>>Invalid<<!!5',
    'Purchase'])