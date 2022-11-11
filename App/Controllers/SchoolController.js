import SchoolHelper from "/App/Helpers/SchoolHelper.js";
import AppResource from "/App/Resources/AppResource.js";
import School from "/App/Models/School.js";

export default class SchoolController {

    static get(form) {
        let data = SchoolHelper.getFormData(form);
        let id = SchoolHelper.getIdFromName(data['name']);

        if (id === undefined) {
            console.log('Record not found.');
            return;
        }

        console.log(
            '\nId:' + id,
            '\nName:' + AppResource.schoolData[id]['name'],
            '\nCity:' + AppResource.schoolData[id]['city'],
            '\nManager:' + AppResource.schoolData[id]['manager']
        );
    }

    static getAll() {
        let text = '';

        for (let id in AppResource.schoolData) {
            text +=
                '\nId:' + id +
                '\nName:' + AppResource.schoolData[id]['name'] +
                '\nCity:' + AppResource.schoolData[id]['city'] +
                '\nManager:' + AppResource.schoolData[id]['manager'] + '\n';
        }

        console.log(text);
    }

    static post(form) {
        let data = SchoolHelper.getFormData(form);

        AppResource.schoolData[School.genId()] = new School(
            data.name,
            data.city,
            data.manager
        );
    }

    static patch(form) {
        let data = SchoolHelper.getFormData(form);
        let id = SchoolHelper.getIdFromName(data['name']);

        if (id === undefined) {
            console.log('Record not found.');
            return;
        }

        AppResource.schoolData[id] = new School(
            data.name,
            data.city,
            data.manager
        );
    }

    static delete(form) {
        let data = SchoolHelper.getFormData(form);
        let id = SchoolHelper.getIdFromName(data['name']);

        if (id === undefined) {
            console.log('Record not found.');
            return;
        }

        delete AppResource.schoolData[id];
    }

    static deleteAll() {
        AppResource.schoolData = [];
    }
}
