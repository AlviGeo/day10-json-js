const DATA = {
    "employees":[
        {"firstName":"John", "lastName":"Doe"},
        {"firstName":"Anna", "lastName":"Smith"},
        {"firstName":"Peter", "lastName":"Jhon"},
        {"firstName":"Doni", "lastName":"Wong"},
        {"firstName":"Slamet", "lastName":"Jordan"},
        {"firstName":"Carlo", "lastName":"Wee"},
        {"firstName":"Philips", "lastName":"Morris"},
        {"firstName":"Angga", "lastName":"Dwi"},
        {"firstName":"Vicky", "lastName":"Sasongko"},
        {"firstName":"Nadya", "lastName":"Lembayung"}
    ], 
    "jobs": [
        {"department": "QC", "title": "QA"},
        {"department": "IT", "title": ['IT Support', 'Software engineer', 'UI/UX', 'DevOps','tester']},
        {"department": "Human Resources Development", "title": "SPV"},
        {"department": "Finance and Accounting", "title": "Finance"},
        {"department": "Marketing and Customer Service", "title": "Marketing"},
        {"department": "Maintenance and Facility", "title": "Maintenance"},
    ], 
    "details": [
        {"age": [22, 23, 24, 29, 30, 32 ]}, 
        {"experience": ['2 Tahun', '3 Tahun', '4 Tahun',]}
    ]    
    
}

{
    // name :jhon doe, jobs: department: IT, title: UI/UX, age: 23, experience: 2 Tahun
    list1: () => {
        let employeeName = DATA.employees[0] .firstName
        let employeeName2 = DATA.employees[0] .lastName
        let employeeJob = DATA.jobs[1].department
        let employeeTitle = DATA.jobs[1].title[2]
        let employeeAge = DATA.details[0].age[1]
        let employeeExperience = DATA.details[1].experience[0]

        console.log(`name: ${employeeName} ${employeeName2}, jobs: department: ${employeeJob}, title: ${employeeTitle}, age: ${employeeAge}, Experience: ${employeeExperience}`);
        
    }

    //name :anna smith, jobs: department: Human Resources Development, title: SPV, age: 29, experience: 4 Tahun
    list2: () => {
        let employeeName = DATA.employees[1] .firstName
        let employeeName2 = DATA.employees[1] .lastName
        let employeeJob = DATA.jobs[2].department
        let employeeTitle = DATA.jobs[2].title
        let employeeAge = DATA.details[0].age[3]
        let employeeExperience = DATA.details[1].experience[2]

        console.log(`name: ${employeeName} ${employeeName2}, jobs: department: ${employeeJob}, title: ${employeeTitle}, age: ${employeeAge}, Experience: ${employeeExperience}`);
        
    }

    //name :Peter jhon, jobs: department: IT, title: DevOps, age: 24, experience: 3 Tahun
    list3: () => {
        let employeeName = DATA.employees[2] .firstName
        let employeeName2 = DATA.employees[2] .lastName
        let employeeJob = DATA.jobs[1].department
        let employeeTitle = DATA.jobs[1].title[3]
        let employeeAge = DATA.details[0].age[2]
        let employeeExperience = DATA.details[1].experience[1]

        console.log(`name: ${employeeName} ${employeeName2}, jobs: department: ${employeeJob}, title: ${employeeTitle}, age: ${employeeAge}, Experience: ${employeeExperience}`);
        
    }

    //name :doni wong, jobs: department: IT, title: Tester, age: 22, experience: 2 Tahun
    list4: () => {
        let employeeName = DATA.employees[3] .firstName
        let employeeName2 = DATA.employees[3] .lastName
        let employeeJob = DATA.jobs[1].department
        let employeeTitle = DATA.jobs[1].title[4]
        let employeeAge = DATA.details[0].age[0]
        let employeeExperience = DATA.details[1].experience[0]

        console.log(`name: ${employeeName} ${employeeName2}, jobs: department: ${employeeJob}, title: ${employeeTitle}, age: ${employeeAge}, Experience: ${employeeExperience}`);
        
    }

    //name :slamet jordan, jobs: department: IT, title: UI/UX, age: 23, experience: 2 Tahun
    list5: () => {
        let employeeName = DATA.employees[4] .firstName
        let employeeName2 = DATA.employees[4] .lastName
        let employeeJob = DATA.jobs[1].department
        let employeeTitle = DATA.jobs[1].title[2]
        let employeeAge = DATA.details[0].age[1]
        let employeeExperience = DATA.details[1].experience[0]

        console.log(`name: ${employeeName} ${employeeName2}, jobs: department: ${employeeJob}, title: ${employeeTitle}, age: ${employeeAge}, Experience: ${employeeExperience}`);
        
    }

    //name :carlo wee, jobs: department: Finance and Accounting, title: Finance, age: 32, experience: 4 Tahun
    list6: () => {
        let employeeName = DATA.employees[5] .firstName
        let employeeName2 = DATA.employees[5] .lastName
        let employeeJob = DATA.jobs[3].department
        let employeeTitle = DATA.jobs[3].title
        let employeeAge = DATA.details[0].age[5]
        let employeeExperience = DATA.details[1].experience[2]

        console.log(`name: ${employeeName} ${employeeName2}, jobs: department: ${employeeJob}, title: ${employeeTitle}, age: ${employeeAge}, Experience: ${employeeExperience}`);
        
    }

    //name :philips morris, jobs: department: Maintenance and Facility, title: maintenance, age: 29, experience: 2 Tahun
    list7: () => {
        let employeeName = DATA.employees[6] .firstName
        let employeeName2 = DATA.employees[6] .lastName
        let employeeJob = DATA.jobs[5].department
        let employeeTitle = DATA.jobs[5].title
        let employeeAge = DATA.details[0].age[3]
        let employeeExperience = DATA.details[1].experience[0]

        console.log(`name: ${employeeName} ${employeeName2}, jobs: department: ${employeeJob}, title: ${employeeTitle}, age: ${employeeAge}, Experience: ${employeeExperience}`);
        
    }

    //name :angga dwi, jobs: department: IT, title: IT Support, age: 23, experience: 2 Tahun
    list8: () => {
        let employeeName = DATA.employees[7] .firstName
        let employeeName2 = DATA.employees[7] .lastName
        let employeeJob = DATA.jobs[1].department
        let employeeTitle = DATA.jobs[1].title[0]
        let employeeAge = DATA.details[0].age[1]
        let employeeExperience = DATA.details[1].experience[0]

        console.log(`name: ${employeeName} ${employeeName2}, jobs: department: ${employeeJob}, title: ${employeeTitle}, age: ${employeeAge}, Experience: ${employeeExperience}`);
        
    }

    //name :vicky sasongko, jobs: department: QC, title: QA, age: 24, experience: 2 Tahun
    list9: () => {
        let employeeName = DATA.employees[8] .firstName
        let employeeName2 = DATA.employees[8] .lastName
        let employeeJob = DATA.jobs[0].department
        let employeeTitle = DATA.jobs[0].title
        let employeeAge = DATA.details[0].age[2]
        let employeeExperience = DATA.details[1].experience[0]

        console.log(`name: ${employeeName} ${employeeName2}, jobs: department: ${employeeJob}, title: ${employeeTitle}, age: ${employeeAge}, Experience: ${employeeExperience}`);
        
    }

    //name :nadya lembayung, jobs: department: IT, title: Software engineer, age: 23, experience: 2 Tahun
    list10: () => {
        let employeeName = DATA.employees[9] .firstName
        let employeeName2 = DATA.employees[9] .lastName
        let employeeJob = DATA.jobs[1].department
        let employeeTitle = DATA.jobs[1].title[1]
        let employeeAge = DATA.details[0].age[1]
        let employeeExperience = DATA.details[1].experience[0]

        console.log(`name: ${employeeName} ${employeeName2}, jobs: department: ${employeeJob}, title: ${employeeTitle}, age: ${employeeAge}, Experience: ${employeeExperience}`);
        
    }

    printAll: () => {
        DATA.list1()
        DATA.list2()
        DATA.list3()
        DATA.list4()
        DATA.list5()
        DATA.list6()
        DATA.list7()
        DATA.list8()
        DATA.list9()
        DATA.list10()
    }
}
