import InstallationHelper from "/App/Helpers/InstallationHelper.js";
import AppResource from "/App/Resources/AppResource.js";
import Installation from "/App/Models/Installation.js";

export default class InstallationController {

    static get(form) {
        let data = InstallationHelper.getFormData(form);
        let id = InstallationHelper.getIdFromName(data['name']);

        if (id === undefined) {
            console.log('Record not found.');
            return;
        }

        console.log(
            '\nId:' + id,
            '\nName:' + AppResource.installationData[id]['name'],
            '\nCity:' + AppResource.installationData[id]['city'],
            '\nManager:' + AppResource.installationData[id]['manager']
        );
    }

    static getAll() {
        let text = '';

        for (let id in AppResource.installationData) {
            text +=
                '\nId:' + id +
                '\nName:' + AppResource.installationData[id]['name'] +
                '\nCity:' + AppResource.installationData[id]['city'] +
                '\nManager:' + AppResource.installationData[id]['manager'] + '\n';
        }

        console.log(text);
    }

    static post(form) {
        let data = InstallationHelper.getFormData(form);

        AppResource.installationData[Installation.genId()] = new Installation(
            data.name,
            data.city,
            data.manager
        );
    }

    static patch(form) {
        let data = InstallationHelper.getFormData(form);
        let id = InstallationHelper.getIdFromName(data['name']);

        if (id === undefined) {
            console.log('Record not found.');
            return;
        }

        AppResource.installationData[id] = new Installation(
            data.name,
            data.city,
            data.manager
        );
    }

    static delete(form) {
        let data = InstallationHelper.getFormData(form);
        let id = InstallationHelper.getIdFromName(data['name']);

        if (id === undefined) {
            console.log('Record not found.');
            return;
        }

        delete AppResource.installationData[id];
    }

    static deleteAll() {
        AppResource.installationData = [];
    }
}
