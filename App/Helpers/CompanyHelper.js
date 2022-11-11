import AppResource from "/App/Resources/AppResource.js";

export default class CompanyHelper {
    static getFormData(id) {
        let data = document.getElementById(id).elements;

        return {
            'id': data['id'].value,
            'name': data['name'].value,
            'manager': data['manager'].value
        };
    }

    static getIdFromName(name) {
        for (let id in AppResource.companyData) {
            if (AppResource.companyData[id]['name'] === name)
                return id;
        }
    }
}