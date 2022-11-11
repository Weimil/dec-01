import SchoolResolver from "/App/Resolvers/SchoolResolver.js";
import CompanyResolver from "/App/Resolvers/CompanyResolver.js";
import InstallationResolver from "/App/Resolvers/InstallationResolver.js";

window.resolve = resolve;

function resolve(form, action) {
    console.clear();
    switch (form) {
        case 'school-form':
            SchoolResolver.resolve(form, action);
            break;
        case 'company-form':
            CompanyResolver.resolve(form, action);
            break;
        case 'installation-form':
            InstallationResolver.resolve(form, action);
    }
}

