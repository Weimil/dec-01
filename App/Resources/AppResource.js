import School from "/App/Models/School.js";
import Company from "/App/Models/Company.js";
import Installation from "/App/Models/Installation.js";

export default class AppResource {
    static schoolData = {
        'sch-6543654158': new School(
            'School-01',
            'City-01',
            'Manager-01'
        ),
        'sch-657287523': new School(
            'School-02',
            'City-02',
            'Manager-02'
        )
    };

    static companyData = {
        'com-179314621': new Company(
            'Company-01',
            'Manager-01'
        ),
        'com-987465218': new Company(
            'Company-02',
            'Manager-02'
        )
    };

    static installationData = {
        'com-179314621': new Installation(
            'Company-01',
            'Manager-01'
        ),
        'com-987465218': new Installation(
            'Company-02',
            'Manager-02'
        )
    };
}