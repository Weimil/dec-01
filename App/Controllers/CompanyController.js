import CompanyHelper from "/App/Helpers/CompanyHelper.js";
import AppResource from "/App/Resources/AppResource.js";
import Company from "/App/Models/Company.js";

export default class CompanyController {

    static get(form) {
        let data = CompanyHelper.getFormData(form);
        let id = CompanyHelper.getIdFromName(data['name']);

        if (id === undefined) {
            console.log('Record not found.');
            return;
        }

        console.log(
            '\nId:' + id,
            '\nName:' + AppResource.companyData[id]['name'],
            '\nManager:' + AppResource.companyData[id]['manager']
        );
    }

    static getAll() {
        let text = '';

        for (let id in AppResource.companyData) {
            text +=
                '\nId:' + id +
                '\nName:' + AppResource.companyData[id]['name'] +
                '\nManager:' + AppResource.companyData[id]['manager'] + '\n';
        }

        console.log(text);
    }

    static post(form) {
        let data = CompanyHelper.getFormData(form);

        AppResource.companyData[Company.genId()] = new Company(
            data.name,
            data.city,
            data.manager
        );
    }

    static patch(form) {
        let data = CompanyHelper.getFormData(form);
        let id = CompanyHelper.getIdFromName(data['name']);

        if (id === undefined) {
            console.log('Record not found.');
            return;
        }

        AppResource.companyData[id] = new Company(
            data.name,
            data.city,
            data.manager
        );
    }

    static delete(form) {
        let data = CompanyHelper.getFormData(form);
        let id = CompanyHelper.getIdFromName(data['name']);

        if (id === undefined) {
            console.log('Record not found.');
            return;
        }

        delete AppResource.companyData[id];
    }

    static deleteAll() {
        AppResource.companyData = [];
    }
}
