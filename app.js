const contentSubscriptionManager = require('./Evelyn_contentSubscriptionManager');

// Add existing user
console.log("----Add Existing User----");
contentSubscriptionManager.addNewUser("Jackson", undefined, "all", "01-06-2027", ["favorites"]);

// Add new user with the tier set to "free" by default
// console.log("----Add New User----");
// contentSubscriptionManager.addNewUser("Ray", undefined, "none", "01-06-2027", ["favorites"]);

// Get existing user by name
// console.log("----Get Existing User----");
// console.log(contentSubscriptionManager.getUserByName("Ray"));

// Add new user with the wrong value for tier
// console.log("----Add New User with Invalid Value----");
// contentSubscriptionManager.addNewUser("Dean", "student", "none", "01-06-2027", ["favorites"]);

// Delete non-existing user
// console.log("----Delete Non-Existing User----");
// contentSubscriptionManager.deleteUserByName("May");

// Delete existing user
// console.log("----Delete Existing User----");
// contentSubscriptionManager.deleteUserByName("Peter");

// Update user's tier with the same value
// console.log("----Update User's Tier with Same Value----");
// contentSubscriptionManager.updateUserAccessTier("Lupa", "free");

// Update the user's tier successfully
// console.log("----Update User's Tier Successfully----");
// contentSubscriptionManager.updateUserAccessTier("Lupa", "premium");

// Update user's billing cycle with the invalid value
// console.log("----Update User's Billing Cycle with Invalid Value----");
// contentSubscriptionManager.changeBillingCycle("John", "none");

// Update user's billing cycle to "monthly" successfully
// console.log("----Update User's Billing Cycle Successfully (Monthly)----");
// contentSubscriptionManager.changeBillingCycle("John", "monthly");

// Update user's billing cycle to "yearly" successfully
// console.log("----Update User's Billing Cycle Successfully (Yearly)----");
// contentSubscriptionManager.changeBillingCycle("John", "yearly");

// Add existing playlist
// console.log("----Add Existing Playlist----");
// contentSubscriptionManager.addNewPlaylist("Noelle", "inspiration");

// Add a new playlist
// console.log("----Add New Playlist----");
// contentSubscriptionManager.addNewPlaylist("Noelle", "guitar tutorials");