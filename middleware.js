// middleware

// Apis that require authentication

const fs = require('fs');
const checkRole = require('./checkRole'); // Assuming checkRole is a function in another file
const Roles_file = './roles.json'; // Assuming the roles file path
// function to the check the role
function checkRole(mapper, localScope, action, role) {
    if (mapper[localScope]) {
        if (mapper[localScope][action]) {
            return mapper[localScope][action].includes(role);
        }
    }
    return false;
}

module.exports = (scope) => (req, res, next) => {
    const role = req.scope;
    if (role) {
        fs.readFile(Roles_file, 'utf8', (err, data) => {
            if (err) {
                res.status(403).json({ message: 'Error reading roles file' });
                return;
            }
            // task
            // localScope = req.path
            // action = req.method

            const [localScope, action] = scope.split(".");
            const mapper = JSON.parse(data.toString("utf8").replace(/^\uFEFF/, ""));
            const isAllowed = checkRole(mapper, localScope, action, role);

            if (isAllowed) {
                next();
            } else {
                res.status(403).json({ message: 'Access denied' });
            }
        });
    } else {
        res.status(403).json({ message: 'No role found' });
    }
};