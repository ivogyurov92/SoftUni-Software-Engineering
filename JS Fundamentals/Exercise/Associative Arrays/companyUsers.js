function companyUsers(array) {
    let company = {};

    for (let element of array) {
        let [companyName, employeeID] = element.split(' -> ');

        if (companyName in company) {
            if (!company[companyName].includes(employeeID)) {
                company[companyName].push(employeeID);
            }
        } else {
            company[companyName] = [employeeID];
        }
    }

    let entries = Object.entries(company).sort((a, b) => a[0].localeCompare(b[0]));

    for (let [company, ids] of entries) {
        console.log(`${company}`);

        for (let id of ids) {
            console.log(`-- ${id}`);
        }
    }
}

companyUsers(['SoftUni -> AA12345',
    'SoftUni -> BB12345',
    'Microsoft -> CC12345',
    'HP -> BB12345']);