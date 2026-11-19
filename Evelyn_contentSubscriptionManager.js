let user1 = {
    name: "Jackson",
    tier: "free",
    notificationsPreference: "all",
    billingDate: "01-01-2027",
    playlistsNo: ["allSubscribedChannels", "favorites"],
};

let user2 = {
    name: "Peter",
    tier: "free",
    notificationsPreference: "personalized",
    billingDate: "20-10-2027",
    playlistsNo: ["allSubscribedChannels", "songs"],
};

let user3 = {
    name: "Lupa",
    tier: "free",
    notificationsPreference: "all",
    billingDate: "20-10-2027",
    playlistsNo: ["allSubscribedChannels", "songs", "watch later"],
};

let user4 = {
    name: "John",
    tier: "premium",
    notificationsPreference: "none",
    billingDate: "20-08-2027",
    playlistsNo: ["allSubscribedChannels", "peak", "drama"],
};

let user5 = {
    name: "Noelle",
    tier: "premium",
    notificationsPreference: "personalized",
    billingDate: "10-05-2027",
    playlistsNo: ["allSubscribedChannels", "sleep asmr", "inspiration"],
};

let users = [user1, user2, user3, user4, user5];

let userPlaylists = ["allSubscribedChannels"];

// Add new user to users array
function addNewUser(name, tier = "free", notificationsPreference, billingDate, playlists) {
    // Check the users array if the name exists
    for (let i = 0; i < users.length; i++) {
        if (users[i].name == name) {
            console.log(name + " already exists!");
            return;
        }
    }

    // Check if the provided value for tier is "free" or "premium"
    // If value is undefined, default is "free"
    if (tier == null) {
        tier = "free";
    }
    else if (tier != "free" && tier != "premium") {
        console.log(tier + " is invalid. Please choose between Free and Premium!");
        return;
    }

    // Else, add the new user to the users array
    users.push({
        name: name,
        tier: tier,
        notificationsPreference: notificationsPreference,
        billingDate: billingDate,
        playlistsNo: userPlaylists.push(playlists),
    });

    console.log(name + " has been added successfully!");
}

// Get user's information based on name
function getUserByName(name) {
    for (let i = 0; i < users.length; i++) {
        if (users[i].name == name) {
            return users[i];
        }
    }
}

// Delete user based on name
function deleteUserByName(name) {
    for (let i = 0; i < users.length; i++) {
        if (users[i].name == name) {
            users.splice(i, 1);
            console.log(name + " has been deleted!");
            return;
        }
    }

    console.log(name + " does not exist!");
}

// Update user's access tier to either "free" or "premium"
function updateUserAccessTier(name, newTier) {
    // Check the value of newTier, it should be either "free" or "premium"
    if (newTier != "free" && newTier != "premium") {
        console.log("Invalid tier! Please choose between Free and Premium!");
        return;
    }

    // Get the existing user's information based on name
    // Check if the value of tier is the same as newTier
    // Else, update the value of tier
    for (let i = 0; i < users.length; i++) {
        if (users[i].name == name) {
            if (users[i].tier == newTier) {
                console.log(newTier + " is your existing tier!");
                return;
            }

            users[i].tier = newTier;
            console.log("Update successfull!\nName: " + users[i].name + ", Updated Tier: " + users[i].tier);
            return;
        }
    }

    console.log(name + " does not exist!");
}

// Change billing cycle to either "monthly" or "yearly" and calculate the next billing date
function changeBillingCycle(name, cycle) {
    // To check if cycle is either "monthly" or "yearly"
    if (cycle != "monthly" && cycle != "yearly") {
        console.log("Please choose between Monthly or Yearly!");
        return;
    }

    for (let i = 0; i < users.length; i++) {
        if (users[i].name == name) {
            // To convert the date from string to object
            const [day, month, year] = users[i].billingDate.split("-");

            dateObj = new Date (Number(year), Number(month), Number(day));

            if (cycle == "monthly") {
                dateObj.setMonth(dateObj.getMonth() + 1);
            }
            else if (cycle == "yearly") {
                dateObj.setFullYear(dateObj.getFullYear() + 1);
            }

            // To convert the date from object to string
            const dayString = String(dateObj.getDate()).padStart(2, "0");
            const monthString = String(dateObj.getMonth()).padStart(2, "0");
            const yearString = dateObj.getFullYear();

            let dateString = `${dayString}-${monthString}-${yearString}`;

            users[i].billingDate = dateString;
            console.log(name + "'s next billing date is " + users[i].billingDate);
            return;
        }
    }

    console.log(name + " does not exist!");
}

// Add a new playlist
function addNewPlaylist(name, playlistName) {
    for (let i = 0; i < users.length; i++) {
        if (users[i].name == name) {
            if (users[i].playlistsNo.includes(playlistName)) {
                console.log(playlistName + " already exists!");
                return;
            }

            users[i].playlistsNo.push(playlistName);
            console.log(playlistName + " has been added!\nUpdated playlist: " + users[i].playlistsNo);
            return;
        }
    }

    console.log(name + " does not exist!");
}

let contentSubscriptionManager = {
    addNewUser,
    getUserByName,
    deleteUserByName,
    updateUserAccessTier,
    changeBillingCycle,
    addNewPlaylist
};

module.exports = contentSubscriptionManager;