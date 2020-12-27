const Schema = require("mongoose").Schema;
const Model = require("mongoose").model;

const gcpAccountSchema = new Schema({
	aliasName: {
		type: String,
		required: true,
		unique: true,
	},
	privateKey: {
		type: String,
		required: true,
	},
	clientEmail: {
		type: String,
		required: true,
	},
	bigQueryDataset: {
		type: String,
		required: true,
	},
	projectId: {
		type: String,
		required: true,
	},
	pollingInterval: {
		type: Number,
	},
});

const GcpAccount = Model("GcpAccount", gcpAccountSchema);

module.exports = GcpAccount;
