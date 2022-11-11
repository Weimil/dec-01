import AppResource from "/App/Resources/AppResource.js";

export default class InstallationHelper {
    static getFormData(id) {
        let data = document.getElementById(id).elements;

        return {
            'id': data['id'].value,
            'name': data['name'].value,
            'city': data['city'].value,
            'manager': data['manager'].value
        };
    }

    static getIdFromName(name) {
        for (let id in AppResource.installationData) {
            if (AppResource.installationData[id]['name'] === name)
                return id;
        }
    }
}