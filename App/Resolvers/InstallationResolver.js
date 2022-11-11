import InstallationController from "/App/Controllers/InstallationController.js";

export default class InstallationResolver {
    static resolve(form, action) {
        switch (action) {
            case 'GET':
                InstallationController.get(form);
                break;
            case 'GET-ALL':
                InstallationController.getAll();
                break;
            case 'POST':
                InstallationController.post(form);
                break;
            case 'PATCH':
                InstallationController.patch(form);
                break;
            case 'DELETE':
                InstallationController.delete(form);
                break;
            case 'DELETE-ALL':
                InstallationController.deleteAll();
                break;
        }
    }
}