function basketballEquipment(input) {
    let annualFee = Number(input[0]);

    let shoes = annualFee * 0.6;
    let outfit = shoes * 0.8;
    let ball = outfit * 0.25;
    let accessories = ball * 0.2;

    let totalEquipmentPrice = shoes + outfit + ball + accessories + annualFee;

    console.log(totalEquipmentPrice);
}

basketballEquipment(["550"]);