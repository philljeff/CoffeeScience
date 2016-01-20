var braintree = require("braintree");

var gateway = braintree.connect({environment: braintree.Environment.Sandbox, merchantId: "rfkpwfrg2tbtpmfw", publicKey: "rfkpwfrg2tbtpmfw", privateKey: "b95342b9d027eb0d66466dc365f13249"})