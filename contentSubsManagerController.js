let contentSubsManagerController = {
    subscriptions: [],
    billingRecords: [],
    users: [],
    videos: [],

    // Add new user
    addNewUser(name, tier = 'free', notificationsPreference, billingDate, subsCount, subsChannels) {
        this.users.push({
            name: name,
            tier: tier,
            notificationsPreference: notificationsPreference,
            billingDate: billingDate,
            subsCount: subsCount,
            subsChannels: subsChannels,
        });
    },

    // Delete user
    // deleteUser(name) {
    // },


//     // Explain what function A does
//     // Notifications preference
    // notificationsPreference() {
    //     return 1+2;
    // },

//     // Explain what function B does
//     // Biling cycles
//     billingCycles() {
//         console.log("Hello function B");
//     },

//     // Explain what function C does
//     // "Unwatched Only" Filter Toggle
//     unwatchedOnlyFT() {
//         console.log("Hello function B");
//     },

//     // Explain what function D does
//     // Custom Subscription Collections (Folders / Categories)
//     customSubsCollections() {
//         console.log("Hello function B");
//     },

//     // Explain what function E does
//     // Handle user access tiers
//     userAccessTiers() {
//         console.log("Hello function B");
//     },
};

module.exports = contentSubsManagerController;