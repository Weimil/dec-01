import SchoolController from "/App/Controllers/SchoolController.js";

export default class SchoolResolver {
    static resolve(form, action) {
        switch (action) {
            case 'GET':
                SchoolController.get(form);
                break;
            case 'GET-ALL':
                SchoolController.getAll();
                break;
            case 'POST':
                SchoolController.post(form);
                break;
            case 'PATCH':
                SchoolController.patch(form);
                break;
            case 'DELETE':
                SchoolController.delete(form);
                break;
            case 'DELETE-ALL':
                SchoolController.deleteAll();
                break;
        }
    }
}