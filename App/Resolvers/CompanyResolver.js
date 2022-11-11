import CompanyController from "/App/Controllers/CompanyController.js";

export default class SchoolResolver {
    static resolve(form, action) {
        switch (action) {
            case 'GET':
                CompanyController.get(form);
                break;
            case 'GET-ALL':
                CompanyController.getAll();
                break;
            case 'POST':
                CompanyController.post(form);
                break;
            case 'PATCH':
                CompanyController.patch(form);
                break;
            case 'DELETE':
                CompanyController.delete(form);
                break;
            case 'DELETE-ALL':
                CompanyController.deleteAll();
                break;
        }
    }
}