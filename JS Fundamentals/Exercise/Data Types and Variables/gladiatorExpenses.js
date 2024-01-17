function gladiatorExpenses(lostFightsCount, helmetPrice, swordPrice, shieldPrice, armorPrice) {
    let brokenHelmetCount = 0;
    let brokenSwordCount = 0;
    let brokenShieldCount = 0;
    let armorRepairCount = 0;

    for (let i = 1; i <= lostFightsCount; i++) {
        if (i % 2 == 0) {
            brokenHelmetCount++;
        }     
        
        if(i % 3 == 0) {
            brokenSwordCount++;
        }

        if(i % 2 == 0 && i % 3 == 0) {
            brokenShieldCount++;

            if(brokenShieldCount % 2 == 0) {
                armorRepairCount++;
            }
        }
    }

    let totalSum = (brokenHelmetCount * helmetPrice) + (brokenSwordCount * swordPrice) + 
    (brokenShieldCount * shieldPrice) + (armorRepairCount * armorPrice);

    console.log(`Gladiator expenses: ${totalSum.toFixed(2)} aureus`);
}

gladiatorExpenses(7, 2, 3, 4, 5);