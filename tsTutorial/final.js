const user = {
    name: "Chandra",

    login: async () => {
        return "Success";
    }
};

const result = await user.login();

console.log(result);