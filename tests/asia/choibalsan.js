var moment = require("../../index");

exports["Asia/Choibalsan"] = {

	"1905" : function (t) {
		t.equal(moment("1905-07-31T16:21:59+00:00").tz("Asia/Choibalsan").format("HH:mm:ss"), "23:59:59", "1905-07-31T16:21:59+00:00 should be 23:59:59 LMT");
		t.equal(moment("1905-07-31T16:22:00+00:00").tz("Asia/Choibalsan").format("HH:mm:ss"), "23:22:00", "1905-07-31T16:22:00+00:00 should be 23:22:00 ULAT");

		t.equal(moment("1905-07-31T16:21:59+00:00").tz("Asia/Choibalsan").zone(), -458, "1905-07-31T16:21:59+00:00 should be -458 minutes offset in LMT");
		t.equal(moment("1905-07-31T16:22:00+00:00").tz("Asia/Choibalsan").zone(), -420, "1905-07-31T16:22:00+00:00 should be -420 minutes offset in ULAT");

		t.done();
	},

	"1977" : function (t) {
		t.equal(moment("1977-12-31T16:59:59+00:00").tz("Asia/Choibalsan").format("HH:mm:ss"), "23:59:59", "1977-12-31T16:59:59+00:00 should be 23:59:59 ULAT");
		t.equal(moment("1977-12-31T17:00:00+00:00").tz("Asia/Choibalsan").format("HH:mm:ss"), "01:00:00", "1977-12-31T17:00:00+00:00 should be 01:00:00 ULAT");

		t.equal(moment("1977-12-31T16:59:59+00:00").tz("Asia/Choibalsan").zone(), -420, "1977-12-31T16:59:59+00:00 should be -420 minutes offset in ULAT");
		t.equal(moment("1977-12-31T17:00:00+00:00").tz("Asia/Choibalsan").zone(), -480, "1977-12-31T17:00:00+00:00 should be -480 minutes offset in ULAT");

		t.done();
	},

	"1983" : function (t) {
		t.equal(moment("1983-03-31T15:59:59+00:00").tz("Asia/Choibalsan").format("HH:mm:ss"), "23:59:59", "1983-03-31T15:59:59+00:00 should be 23:59:59 ULAT");
		t.equal(moment("1983-03-31T16:00:00+00:00").tz("Asia/Choibalsan").format("HH:mm:ss"), "02:00:00", "1983-03-31T16:00:00+00:00 should be 02:00:00 CHOST");
		t.equal(moment("1983-09-30T13:59:59+00:00").tz("Asia/Choibalsan").format("HH:mm:ss"), "23:59:59", "1983-09-30T13:59:59+00:00 should be 23:59:59 CHOST");
		t.equal(moment("1983-09-30T14:00:00+00:00").tz("Asia/Choibalsan").format("HH:mm:ss"), "23:00:00", "1983-09-30T14:00:00+00:00 should be 23:00:00 CHOT");

		t.equal(moment("1983-03-31T15:59:59+00:00").tz("Asia/Choibalsan").zone(), -480, "1983-03-31T15:59:59+00:00 should be -480 minutes offset in ULAT");
		t.equal(moment("1983-03-31T16:00:00+00:00").tz("Asia/Choibalsan").zone(), -600, "1983-03-31T16:00:00+00:00 should be -600 minutes offset in CHOST");
		t.equal(moment("1983-09-30T13:59:59+00:00").tz("Asia/Choibalsan").zone(), -600, "1983-09-30T13:59:59+00:00 should be -600 minutes offset in CHOST");
		t.equal(moment("1983-09-30T14:00:00+00:00").tz("Asia/Choibalsan").zone(), -540, "1983-09-30T14:00:00+00:00 should be -540 minutes offset in CHOT");

		t.done();
	},

	"1984" : function (t) {
		t.equal(moment("1984-03-31T14:59:59+00:00").tz("Asia/Choibalsan").format("HH:mm:ss"), "23:59:59", "1984-03-31T14:59:59+00:00 should be 23:59:59 CHOT");
		t.equal(moment("1984-03-31T15:00:00+00:00").tz("Asia/Choibalsan").format("HH:mm:ss"), "01:00:00", "1984-03-31T15:00:00+00:00 should be 01:00:00 CHOST");
		t.equal(moment("1984-09-29T13:59:59+00:00").tz("Asia/Choibalsan").format("HH:mm:ss"), "23:59:59", "1984-09-29T13:59:59+00:00 should be 23:59:59 CHOST");
		t.equal(moment("1984-09-29T14:00:00+00:00").tz("Asia/Choibalsan").format("HH:mm:ss"), "23:00:00", "1984-09-29T14:00:00+00:00 should be 23:00:00 CHOT");

		t.equal(moment("1984-03-31T14:59:59+00:00").tz("Asia/Choibalsan").zone(), -540, "1984-03-31T14:59:59+00:00 should be -540 minutes offset in CHOT");
		t.equal(moment("1984-03-31T15:00:00+00:00").tz("Asia/Choibalsan").zone(), -600, "1984-03-31T15:00:00+00:00 should be -600 minutes offset in CHOST");
		t.equal(moment("1984-09-29T13:59:59+00:00").tz("Asia/Choibalsan").zone(), -600, "1984-09-29T13:59:59+00:00 should be -600 minutes offset in CHOST");
		t.equal(moment("1984-09-29T14:00:00+00:00").tz("Asia/Choibalsan").zone(), -540, "1984-09-29T14:00:00+00:00 should be -540 minutes offset in CHOT");

		t.done();
	},

	"1985" : function (t) {
		t.equal(moment("1985-03-30T14:59:59+00:00").tz("Asia/Choibalsan").format("HH:mm:ss"), "23:59:59", "1985-03-30T14:59:59+00:00 should be 23:59:59 CHOT");
		t.equal(moment("1985-03-30T15:00:00+00:00").tz("Asia/Choibalsan").format("HH:mm:ss"), "01:00:00", "1985-03-30T15:00:00+00:00 should be 01:00:00 CHOST");
		t.equal(moment("1985-09-28T13:59:59+00:00").tz("Asia/Choibalsan").format("HH:mm:ss"), "23:59:59", "1985-09-28T13:59:59+00:00 should be 23:59:59 CHOST");
		t.equal(moment("1985-09-28T14:00:00+00:00").tz("Asia/Choibalsan").format("HH:mm:ss"), "23:00:00", "1985-09-28T14:00:00+00:00 should be 23:00:00 CHOT");

		t.equal(moment("1985-03-30T14:59:59+00:00").tz("Asia/Choibalsan").zone(), -540, "1985-03-30T14:59:59+00:00 should be -540 minutes offset in CHOT");
		t.equal(moment("1985-03-30T15:00:00+00:00").tz("Asia/Choibalsan").zone(), -600, "1985-03-30T15:00:00+00:00 should be -600 minutes offset in CHOST");
		t.equal(moment("1985-09-28T13:59:59+00:00").tz("Asia/Choibalsan").zone(), -600, "1985-09-28T13:59:59+00:00 should be -600 minutes offset in CHOST");
		t.equal(moment("1985-09-28T14:00:00+00:00").tz("Asia/Choibalsan").zone(), -540, "1985-09-28T14:00:00+00:00 should be -540 minutes offset in CHOT");

		t.done();
	},

	"1986" : function (t) {
		t.equal(moment("1986-03-29T14:59:59+00:00").tz("Asia/Choibalsan").format("HH:mm:ss"), "23:59:59", "1986-03-29T14:59:59+00:00 should be 23:59:59 CHOT");
		t.equal(moment("1986-03-29T15:00:00+00:00").tz("Asia/Choibalsan").format("HH:mm:ss"), "01:00:00", "1986-03-29T15:00:00+00:00 should be 01:00:00 CHOST");
		t.equal(moment("1986-09-27T13:59:59+00:00").tz("Asia/Choibalsan").format("HH:mm:ss"), "23:59:59", "1986-09-27T13:59:59+00:00 should be 23:59:59 CHOST");
		t.equal(moment("1986-09-27T14:00:00+00:00").tz("Asia/Choibalsan").format("HH:mm:ss"), "23:00:00", "1986-09-27T14:00:00+00:00 should be 23:00:00 CHOT");

		t.equal(moment("1986-03-29T14:59:59+00:00").tz("Asia/Choibalsan").zone(), -540, "1986-03-29T14:59:59+00:00 should be -540 minutes offset in CHOT");
		t.equal(moment("1986-03-29T15:00:00+00:00").tz("Asia/Choibalsan").zone(), -600, "1986-03-29T15:00:00+00:00 should be -600 minutes offset in CHOST");
		t.equal(moment("1986-09-27T13:59:59+00:00").tz("Asia/Choibalsan").zone(), -600, "1986-09-27T13:59:59+00:00 should be -600 minutes offset in CHOST");
		t.equal(moment("1986-09-27T14:00:00+00:00").tz("Asia/Choibalsan").zone(), -540, "1986-09-27T14:00:00+00:00 should be -540 minutes offset in CHOT");

		t.done();
	},

	"1987" : function (t) {
		t.equal(moment("1987-03-28T14:59:59+00:00").tz("Asia/Choibalsan").format("HH:mm:ss"), "23:59:59", "1987-03-28T14:59:59+00:00 should be 23:59:59 CHOT");
		t.equal(moment("1987-03-28T15:00:00+00:00").tz("Asia/Choibalsan").format("HH:mm:ss"), "01:00:00", "1987-03-28T15:00:00+00:00 should be 01:00:00 CHOST");
		t.equal(moment("1987-09-26T13:59:59+00:00").tz("Asia/Choibalsan").format("HH:mm:ss"), "23:59:59", "1987-09-26T13:59:59+00:00 should be 23:59:59 CHOST");
		t.equal(moment("1987-09-26T14:00:00+00:00").tz("Asia/Choibalsan").format("HH:mm:ss"), "23:00:00", "1987-09-26T14:00:00+00:00 should be 23:00:00 CHOT");

		t.equal(moment("1987-03-28T14:59:59+00:00").tz("Asia/Choibalsan").zone(), -540, "1987-03-28T14:59:59+00:00 should be -540 minutes offset in CHOT");
		t.equal(moment("1987-03-28T15:00:00+00:00").tz("Asia/Choibalsan").zone(), -600, "1987-03-28T15:00:00+00:00 should be -600 minutes offset in CHOST");
		t.equal(moment("1987-09-26T13:59:59+00:00").tz("Asia/Choibalsan").zone(), -600, "1987-09-26T13:59:59+00:00 should be -600 minutes offset in CHOST");
		t.equal(moment("1987-09-26T14:00:00+00:00").tz("Asia/Choibalsan").zone(), -540, "1987-09-26T14:00:00+00:00 should be -540 minutes offset in CHOT");

		t.done();
	},

	"1988" : function (t) {
		t.equal(moment("1988-03-26T14:59:59+00:00").tz("Asia/Choibalsan").format("HH:mm:ss"), "23:59:59", "1988-03-26T14:59:59+00:00 should be 23:59:59 CHOT");
		t.equal(moment("1988-03-26T15:00:00+00:00").tz("Asia/Choibalsan").format("HH:mm:ss"), "01:00:00", "1988-03-26T15:00:00+00:00 should be 01:00:00 CHOST");
		t.equal(moment("1988-09-24T13:59:59+00:00").tz("Asia/Choibalsan").format("HH:mm:ss"), "23:59:59", "1988-09-24T13:59:59+00:00 should be 23:59:59 CHOST");
		t.equal(moment("1988-09-24T14:00:00+00:00").tz("Asia/Choibalsan").format("HH:mm:ss"), "23:00:00", "1988-09-24T14:00:00+00:00 should be 23:00:00 CHOT");

		t.equal(moment("1988-03-26T14:59:59+00:00").tz("Asia/Choibalsan").zone(), -540, "1988-03-26T14:59:59+00:00 should be -540 minutes offset in CHOT");
		t.equal(moment("1988-03-26T15:00:00+00:00").tz("Asia/Choibalsan").zone(), -600, "1988-03-26T15:00:00+00:00 should be -600 minutes offset in CHOST");
		t.equal(moment("1988-09-24T13:59:59+00:00").tz("Asia/Choibalsan").zone(), -600, "1988-09-24T13:59:59+00:00 should be -600 minutes offset in CHOST");
		t.equal(moment("1988-09-24T14:00:00+00:00").tz("Asia/Choibalsan").zone(), -540, "1988-09-24T14:00:00+00:00 should be -540 minutes offset in CHOT");

		t.done();
	},

	"1989" : function (t) {
		t.equal(moment("1989-03-25T14:59:59+00:00").tz("Asia/Choibalsan").format("HH:mm:ss"), "23:59:59", "1989-03-25T14:59:59+00:00 should be 23:59:59 CHOT");
		t.equal(moment("1989-03-25T15:00:00+00:00").tz("Asia/Choibalsan").format("HH:mm:ss"), "01:00:00", "1989-03-25T15:00:00+00:00 should be 01:00:00 CHOST");
		t.equal(moment("1989-09-23T13:59:59+00:00").tz("Asia/Choibalsan").format("HH:mm:ss"), "23:59:59", "1989-09-23T13:59:59+00:00 should be 23:59:59 CHOST");
		t.equal(moment("1989-09-23T14:00:00+00:00").tz("Asia/Choibalsan").format("HH:mm:ss"), "23:00:00", "1989-09-23T14:00:00+00:00 should be 23:00:00 CHOT");

		t.equal(moment("1989-03-25T14:59:59+00:00").tz("Asia/Choibalsan").zone(), -540, "1989-03-25T14:59:59+00:00 should be -540 minutes offset in CHOT");
		t.equal(moment("1989-03-25T15:00:00+00:00").tz("Asia/Choibalsan").zone(), -600, "1989-03-25T15:00:00+00:00 should be -600 minutes offset in CHOST");
		t.equal(moment("1989-09-23T13:59:59+00:00").tz("Asia/Choibalsan").zone(), -600, "1989-09-23T13:59:59+00:00 should be -600 minutes offset in CHOST");
		t.equal(moment("1989-09-23T14:00:00+00:00").tz("Asia/Choibalsan").zone(), -540, "1989-09-23T14:00:00+00:00 should be -540 minutes offset in CHOT");

		t.done();
	},

	"1990" : function (t) {
		t.equal(moment("1990-03-24T14:59:59+00:00").tz("Asia/Choibalsan").format("HH:mm:ss"), "23:59:59", "1990-03-24T14:59:59+00:00 should be 23:59:59 CHOT");
		t.equal(moment("1990-03-24T15:00:00+00:00").tz("Asia/Choibalsan").format("HH:mm:ss"), "01:00:00", "1990-03-24T15:00:00+00:00 should be 01:00:00 CHOST");
		t.equal(moment("1990-09-29T13:59:59+00:00").tz("Asia/Choibalsan").format("HH:mm:ss"), "23:59:59", "1990-09-29T13:59:59+00:00 should be 23:59:59 CHOST");
		t.equal(moment("1990-09-29T14:00:00+00:00").tz("Asia/Choibalsan").format("HH:mm:ss"), "23:00:00", "1990-09-29T14:00:00+00:00 should be 23:00:00 CHOT");

		t.equal(moment("1990-03-24T14:59:59+00:00").tz("Asia/Choibalsan").zone(), -540, "1990-03-24T14:59:59+00:00 should be -540 minutes offset in CHOT");
		t.equal(moment("1990-03-24T15:00:00+00:00").tz("Asia/Choibalsan").zone(), -600, "1990-03-24T15:00:00+00:00 should be -600 minutes offset in CHOST");
		t.equal(moment("1990-09-29T13:59:59+00:00").tz("Asia/Choibalsan").zone(), -600, "1990-09-29T13:59:59+00:00 should be -600 minutes offset in CHOST");
		t.equal(moment("1990-09-29T14:00:00+00:00").tz("Asia/Choibalsan").zone(), -540, "1990-09-29T14:00:00+00:00 should be -540 minutes offset in CHOT");

		t.done();
	},

	"1991" : function (t) {
		t.equal(moment("1991-03-30T14:59:59+00:00").tz("Asia/Choibalsan").format("HH:mm:ss"), "23:59:59", "1991-03-30T14:59:59+00:00 should be 23:59:59 CHOT");
		t.equal(moment("1991-03-30T15:00:00+00:00").tz("Asia/Choibalsan").format("HH:mm:ss"), "01:00:00", "1991-03-30T15:00:00+00:00 should be 01:00:00 CHOST");
		t.equal(moment("1991-09-28T13:59:59+00:00").tz("Asia/Choibalsan").format("HH:mm:ss"), "23:59:59", "1991-09-28T13:59:59+00:00 should be 23:59:59 CHOST");
		t.equal(moment("1991-09-28T14:00:00+00:00").tz("Asia/Choibalsan").format("HH:mm:ss"), "23:00:00", "1991-09-28T14:00:00+00:00 should be 23:00:00 CHOT");

		t.equal(moment("1991-03-30T14:59:59+00:00").tz("Asia/Choibalsan").zone(), -540, "1991-03-30T14:59:59+00:00 should be -540 minutes offset in CHOT");
		t.equal(moment("1991-03-30T15:00:00+00:00").tz("Asia/Choibalsan").zone(), -600, "1991-03-30T15:00:00+00:00 should be -600 minutes offset in CHOST");
		t.equal(moment("1991-09-28T13:59:59+00:00").tz("Asia/Choibalsan").zone(), -600, "1991-09-28T13:59:59+00:00 should be -600 minutes offset in CHOST");
		t.equal(moment("1991-09-28T14:00:00+00:00").tz("Asia/Choibalsan").zone(), -540, "1991-09-28T14:00:00+00:00 should be -540 minutes offset in CHOT");

		t.done();
	},

	"1992" : function (t) {
		t.equal(moment("1992-03-28T14:59:59+00:00").tz("Asia/Choibalsan").format("HH:mm:ss"), "23:59:59", "1992-03-28T14:59:59+00:00 should be 23:59:59 CHOT");
		t.equal(moment("1992-03-28T15:00:00+00:00").tz("Asia/Choibalsan").format("HH:mm:ss"), "01:00:00", "1992-03-28T15:00:00+00:00 should be 01:00:00 CHOST");
		t.equal(moment("1992-09-26T13:59:59+00:00").tz("Asia/Choibalsan").format("HH:mm:ss"), "23:59:59", "1992-09-26T13:59:59+00:00 should be 23:59:59 CHOST");
		t.equal(moment("1992-09-26T14:00:00+00:00").tz("Asia/Choibalsan").format("HH:mm:ss"), "23:00:00", "1992-09-26T14:00:00+00:00 should be 23:00:00 CHOT");

		t.equal(moment("1992-03-28T14:59:59+00:00").tz("Asia/Choibalsan").zone(), -540, "1992-03-28T14:59:59+00:00 should be -540 minutes offset in CHOT");
		t.equal(moment("1992-03-28T15:00:00+00:00").tz("Asia/Choibalsan").zone(), -600, "1992-03-28T15:00:00+00:00 should be -600 minutes offset in CHOST");
		t.equal(moment("1992-09-26T13:59:59+00:00").tz("Asia/Choibalsan").zone(), -600, "1992-09-26T13:59:59+00:00 should be -600 minutes offset in CHOST");
		t.equal(moment("1992-09-26T14:00:00+00:00").tz("Asia/Choibalsan").zone(), -540, "1992-09-26T14:00:00+00:00 should be -540 minutes offset in CHOT");

		t.done();
	},

	"1993" : function (t) {
		t.equal(moment("1993-03-27T14:59:59+00:00").tz("Asia/Choibalsan").format("HH:mm:ss"), "23:59:59", "1993-03-27T14:59:59+00:00 should be 23:59:59 CHOT");
		t.equal(moment("1993-03-27T15:00:00+00:00").tz("Asia/Choibalsan").format("HH:mm:ss"), "01:00:00", "1993-03-27T15:00:00+00:00 should be 01:00:00 CHOST");
		t.equal(moment("1993-09-25T13:59:59+00:00").tz("Asia/Choibalsan").format("HH:mm:ss"), "23:59:59", "1993-09-25T13:59:59+00:00 should be 23:59:59 CHOST");
		t.equal(moment("1993-09-25T14:00:00+00:00").tz("Asia/Choibalsan").format("HH:mm:ss"), "23:00:00", "1993-09-25T14:00:00+00:00 should be 23:00:00 CHOT");

		t.equal(moment("1993-03-27T14:59:59+00:00").tz("Asia/Choibalsan").zone(), -540, "1993-03-27T14:59:59+00:00 should be -540 minutes offset in CHOT");
		t.equal(moment("1993-03-27T15:00:00+00:00").tz("Asia/Choibalsan").zone(), -600, "1993-03-27T15:00:00+00:00 should be -600 minutes offset in CHOST");
		t.equal(moment("1993-09-25T13:59:59+00:00").tz("Asia/Choibalsan").zone(), -600, "1993-09-25T13:59:59+00:00 should be -600 minutes offset in CHOST");
		t.equal(moment("1993-09-25T14:00:00+00:00").tz("Asia/Choibalsan").zone(), -540, "1993-09-25T14:00:00+00:00 should be -540 minutes offset in CHOT");

		t.done();
	},

	"1994" : function (t) {
		t.equal(moment("1994-03-26T14:59:59+00:00").tz("Asia/Choibalsan").format("HH:mm:ss"), "23:59:59", "1994-03-26T14:59:59+00:00 should be 23:59:59 CHOT");
		t.equal(moment("1994-03-26T15:00:00+00:00").tz("Asia/Choibalsan").format("HH:mm:ss"), "01:00:00", "1994-03-26T15:00:00+00:00 should be 01:00:00 CHOST");
		t.equal(moment("1994-09-24T13:59:59+00:00").tz("Asia/Choibalsan").format("HH:mm:ss"), "23:59:59", "1994-09-24T13:59:59+00:00 should be 23:59:59 CHOST");
		t.equal(moment("1994-09-24T14:00:00+00:00").tz("Asia/Choibalsan").format("HH:mm:ss"), "23:00:00", "1994-09-24T14:00:00+00:00 should be 23:00:00 CHOT");

		t.equal(moment("1994-03-26T14:59:59+00:00").tz("Asia/Choibalsan").zone(), -540, "1994-03-26T14:59:59+00:00 should be -540 minutes offset in CHOT");
		t.equal(moment("1994-03-26T15:00:00+00:00").tz("Asia/Choibalsan").zone(), -600, "1994-03-26T15:00:00+00:00 should be -600 minutes offset in CHOST");
		t.equal(moment("1994-09-24T13:59:59+00:00").tz("Asia/Choibalsan").zone(), -600, "1994-09-24T13:59:59+00:00 should be -600 minutes offset in CHOST");
		t.equal(moment("1994-09-24T14:00:00+00:00").tz("Asia/Choibalsan").zone(), -540, "1994-09-24T14:00:00+00:00 should be -540 minutes offset in CHOT");

		t.done();
	},

	"1995" : function (t) {
		t.equal(moment("1995-03-25T14:59:59+00:00").tz("Asia/Choibalsan").format("HH:mm:ss"), "23:59:59", "1995-03-25T14:59:59+00:00 should be 23:59:59 CHOT");
		t.equal(moment("1995-03-25T15:00:00+00:00").tz("Asia/Choibalsan").format("HH:mm:ss"), "01:00:00", "1995-03-25T15:00:00+00:00 should be 01:00:00 CHOST");
		t.equal(moment("1995-09-23T13:59:59+00:00").tz("Asia/Choibalsan").format("HH:mm:ss"), "23:59:59", "1995-09-23T13:59:59+00:00 should be 23:59:59 CHOST");
		t.equal(moment("1995-09-23T14:00:00+00:00").tz("Asia/Choibalsan").format("HH:mm:ss"), "23:00:00", "1995-09-23T14:00:00+00:00 should be 23:00:00 CHOT");

		t.equal(moment("1995-03-25T14:59:59+00:00").tz("Asia/Choibalsan").zone(), -540, "1995-03-25T14:59:59+00:00 should be -540 minutes offset in CHOT");
		t.equal(moment("1995-03-25T15:00:00+00:00").tz("Asia/Choibalsan").zone(), -600, "1995-03-25T15:00:00+00:00 should be -600 minutes offset in CHOST");
		t.equal(moment("1995-09-23T13:59:59+00:00").tz("Asia/Choibalsan").zone(), -600, "1995-09-23T13:59:59+00:00 should be -600 minutes offset in CHOST");
		t.equal(moment("1995-09-23T14:00:00+00:00").tz("Asia/Choibalsan").zone(), -540, "1995-09-23T14:00:00+00:00 should be -540 minutes offset in CHOT");

		t.done();
	},

	"1996" : function (t) {
		t.equal(moment("1996-03-30T14:59:59+00:00").tz("Asia/Choibalsan").format("HH:mm:ss"), "23:59:59", "1996-03-30T14:59:59+00:00 should be 23:59:59 CHOT");
		t.equal(moment("1996-03-30T15:00:00+00:00").tz("Asia/Choibalsan").format("HH:mm:ss"), "01:00:00", "1996-03-30T15:00:00+00:00 should be 01:00:00 CHOST");
		t.equal(moment("1996-09-28T13:59:59+00:00").tz("Asia/Choibalsan").format("HH:mm:ss"), "23:59:59", "1996-09-28T13:59:59+00:00 should be 23:59:59 CHOST");
		t.equal(moment("1996-09-28T14:00:00+00:00").tz("Asia/Choibalsan").format("HH:mm:ss"), "23:00:00", "1996-09-28T14:00:00+00:00 should be 23:00:00 CHOT");

		t.equal(moment("1996-03-30T14:59:59+00:00").tz("Asia/Choibalsan").zone(), -540, "1996-03-30T14:59:59+00:00 should be -540 minutes offset in CHOT");
		t.equal(moment("1996-03-30T15:00:00+00:00").tz("Asia/Choibalsan").zone(), -600, "1996-03-30T15:00:00+00:00 should be -600 minutes offset in CHOST");
		t.equal(moment("1996-09-28T13:59:59+00:00").tz("Asia/Choibalsan").zone(), -600, "1996-09-28T13:59:59+00:00 should be -600 minutes offset in CHOST");
		t.equal(moment("1996-09-28T14:00:00+00:00").tz("Asia/Choibalsan").zone(), -540, "1996-09-28T14:00:00+00:00 should be -540 minutes offset in CHOT");

		t.done();
	},

	"1997" : function (t) {
		t.equal(moment("1997-03-29T14:59:59+00:00").tz("Asia/Choibalsan").format("HH:mm:ss"), "23:59:59", "1997-03-29T14:59:59+00:00 should be 23:59:59 CHOT");
		t.equal(moment("1997-03-29T15:00:00+00:00").tz("Asia/Choibalsan").format("HH:mm:ss"), "01:00:00", "1997-03-29T15:00:00+00:00 should be 01:00:00 CHOST");
		t.equal(moment("1997-09-27T13:59:59+00:00").tz("Asia/Choibalsan").format("HH:mm:ss"), "23:59:59", "1997-09-27T13:59:59+00:00 should be 23:59:59 CHOST");
		t.equal(moment("1997-09-27T14:00:00+00:00").tz("Asia/Choibalsan").format("HH:mm:ss"), "23:00:00", "1997-09-27T14:00:00+00:00 should be 23:00:00 CHOT");

		t.equal(moment("1997-03-29T14:59:59+00:00").tz("Asia/Choibalsan").zone(), -540, "1997-03-29T14:59:59+00:00 should be -540 minutes offset in CHOT");
		t.equal(moment("1997-03-29T15:00:00+00:00").tz("Asia/Choibalsan").zone(), -600, "1997-03-29T15:00:00+00:00 should be -600 minutes offset in CHOST");
		t.equal(moment("1997-09-27T13:59:59+00:00").tz("Asia/Choibalsan").zone(), -600, "1997-09-27T13:59:59+00:00 should be -600 minutes offset in CHOST");
		t.equal(moment("1997-09-27T14:00:00+00:00").tz("Asia/Choibalsan").zone(), -540, "1997-09-27T14:00:00+00:00 should be -540 minutes offset in CHOT");

		t.done();
	},

	"1998" : function (t) {
		t.equal(moment("1998-03-28T14:59:59+00:00").tz("Asia/Choibalsan").format("HH:mm:ss"), "23:59:59", "1998-03-28T14:59:59+00:00 should be 23:59:59 CHOT");
		t.equal(moment("1998-03-28T15:00:00+00:00").tz("Asia/Choibalsan").format("HH:mm:ss"), "01:00:00", "1998-03-28T15:00:00+00:00 should be 01:00:00 CHOST");
		t.equal(moment("1998-09-26T13:59:59+00:00").tz("Asia/Choibalsan").format("HH:mm:ss"), "23:59:59", "1998-09-26T13:59:59+00:00 should be 23:59:59 CHOST");
		t.equal(moment("1998-09-26T14:00:00+00:00").tz("Asia/Choibalsan").format("HH:mm:ss"), "23:00:00", "1998-09-26T14:00:00+00:00 should be 23:00:00 CHOT");

		t.equal(moment("1998-03-28T14:59:59+00:00").tz("Asia/Choibalsan").zone(), -540, "1998-03-28T14:59:59+00:00 should be -540 minutes offset in CHOT");
		t.equal(moment("1998-03-28T15:00:00+00:00").tz("Asia/Choibalsan").zone(), -600, "1998-03-28T15:00:00+00:00 should be -600 minutes offset in CHOST");
		t.equal(moment("1998-09-26T13:59:59+00:00").tz("Asia/Choibalsan").zone(), -600, "1998-09-26T13:59:59+00:00 should be -600 minutes offset in CHOST");
		t.equal(moment("1998-09-26T14:00:00+00:00").tz("Asia/Choibalsan").zone(), -540, "1998-09-26T14:00:00+00:00 should be -540 minutes offset in CHOT");

		t.done();
	},

	"2001" : function (t) {
		t.equal(moment("2001-04-27T16:59:59+00:00").tz("Asia/Choibalsan").format("HH:mm:ss"), "01:59:59", "2001-04-27T16:59:59+00:00 should be 01:59:59 CHOT");
		t.equal(moment("2001-04-27T17:00:00+00:00").tz("Asia/Choibalsan").format("HH:mm:ss"), "03:00:00", "2001-04-27T17:00:00+00:00 should be 03:00:00 CHOST");
		t.equal(moment("2001-09-28T15:59:59+00:00").tz("Asia/Choibalsan").format("HH:mm:ss"), "01:59:59", "2001-09-28T15:59:59+00:00 should be 01:59:59 CHOST");
		t.equal(moment("2001-09-28T16:00:00+00:00").tz("Asia/Choibalsan").format("HH:mm:ss"), "01:00:00", "2001-09-28T16:00:00+00:00 should be 01:00:00 CHOT");

		t.equal(moment("2001-04-27T16:59:59+00:00").tz("Asia/Choibalsan").zone(), -540, "2001-04-27T16:59:59+00:00 should be -540 minutes offset in CHOT");
		t.equal(moment("2001-04-27T17:00:00+00:00").tz("Asia/Choibalsan").zone(), -600, "2001-04-27T17:00:00+00:00 should be -600 minutes offset in CHOST");
		t.equal(moment("2001-09-28T15:59:59+00:00").tz("Asia/Choibalsan").zone(), -600, "2001-09-28T15:59:59+00:00 should be -600 minutes offset in CHOST");
		t.equal(moment("2001-09-28T16:00:00+00:00").tz("Asia/Choibalsan").zone(), -540, "2001-09-28T16:00:00+00:00 should be -540 minutes offset in CHOT");

		t.done();
	},

	"2002" : function (t) {
		t.equal(moment("2002-03-29T16:59:59+00:00").tz("Asia/Choibalsan").format("HH:mm:ss"), "01:59:59", "2002-03-29T16:59:59+00:00 should be 01:59:59 CHOT");
		t.equal(moment("2002-03-29T17:00:00+00:00").tz("Asia/Choibalsan").format("HH:mm:ss"), "03:00:00", "2002-03-29T17:00:00+00:00 should be 03:00:00 CHOST");
		t.equal(moment("2002-09-27T15:59:59+00:00").tz("Asia/Choibalsan").format("HH:mm:ss"), "01:59:59", "2002-09-27T15:59:59+00:00 should be 01:59:59 CHOST");
		t.equal(moment("2002-09-27T16:00:00+00:00").tz("Asia/Choibalsan").format("HH:mm:ss"), "01:00:00", "2002-09-27T16:00:00+00:00 should be 01:00:00 CHOT");

		t.equal(moment("2002-03-29T16:59:59+00:00").tz("Asia/Choibalsan").zone(), -540, "2002-03-29T16:59:59+00:00 should be -540 minutes offset in CHOT");
		t.equal(moment("2002-03-29T17:00:00+00:00").tz("Asia/Choibalsan").zone(), -600, "2002-03-29T17:00:00+00:00 should be -600 minutes offset in CHOST");
		t.equal(moment("2002-09-27T15:59:59+00:00").tz("Asia/Choibalsan").zone(), -600, "2002-09-27T15:59:59+00:00 should be -600 minutes offset in CHOST");
		t.equal(moment("2002-09-27T16:00:00+00:00").tz("Asia/Choibalsan").zone(), -540, "2002-09-27T16:00:00+00:00 should be -540 minutes offset in CHOT");

		t.done();
	},

	"2003" : function (t) {
		t.equal(moment("2003-03-28T16:59:59+00:00").tz("Asia/Choibalsan").format("HH:mm:ss"), "01:59:59", "2003-03-28T16:59:59+00:00 should be 01:59:59 CHOT");
		t.equal(moment("2003-03-28T17:00:00+00:00").tz("Asia/Choibalsan").format("HH:mm:ss"), "03:00:00", "2003-03-28T17:00:00+00:00 should be 03:00:00 CHOST");
		t.equal(moment("2003-09-26T15:59:59+00:00").tz("Asia/Choibalsan").format("HH:mm:ss"), "01:59:59", "2003-09-26T15:59:59+00:00 should be 01:59:59 CHOST");
		t.equal(moment("2003-09-26T16:00:00+00:00").tz("Asia/Choibalsan").format("HH:mm:ss"), "01:00:00", "2003-09-26T16:00:00+00:00 should be 01:00:00 CHOT");

		t.equal(moment("2003-03-28T16:59:59+00:00").tz("Asia/Choibalsan").zone(), -540, "2003-03-28T16:59:59+00:00 should be -540 minutes offset in CHOT");
		t.equal(moment("2003-03-28T17:00:00+00:00").tz("Asia/Choibalsan").zone(), -600, "2003-03-28T17:00:00+00:00 should be -600 minutes offset in CHOST");
		t.equal(moment("2003-09-26T15:59:59+00:00").tz("Asia/Choibalsan").zone(), -600, "2003-09-26T15:59:59+00:00 should be -600 minutes offset in CHOST");
		t.equal(moment("2003-09-26T16:00:00+00:00").tz("Asia/Choibalsan").zone(), -540, "2003-09-26T16:00:00+00:00 should be -540 minutes offset in CHOT");

		t.done();
	},

	"2004" : function (t) {
		t.equal(moment("2004-03-26T16:59:59+00:00").tz("Asia/Choibalsan").format("HH:mm:ss"), "01:59:59", "2004-03-26T16:59:59+00:00 should be 01:59:59 CHOT");
		t.equal(moment("2004-03-26T17:00:00+00:00").tz("Asia/Choibalsan").format("HH:mm:ss"), "03:00:00", "2004-03-26T17:00:00+00:00 should be 03:00:00 CHOST");
		t.equal(moment("2004-09-24T15:59:59+00:00").tz("Asia/Choibalsan").format("HH:mm:ss"), "01:59:59", "2004-09-24T15:59:59+00:00 should be 01:59:59 CHOST");
		t.equal(moment("2004-09-24T16:00:00+00:00").tz("Asia/Choibalsan").format("HH:mm:ss"), "01:00:00", "2004-09-24T16:00:00+00:00 should be 01:00:00 CHOT");

		t.equal(moment("2004-03-26T16:59:59+00:00").tz("Asia/Choibalsan").zone(), -540, "2004-03-26T16:59:59+00:00 should be -540 minutes offset in CHOT");
		t.equal(moment("2004-03-26T17:00:00+00:00").tz("Asia/Choibalsan").zone(), -600, "2004-03-26T17:00:00+00:00 should be -600 minutes offset in CHOST");
		t.equal(moment("2004-09-24T15:59:59+00:00").tz("Asia/Choibalsan").zone(), -600, "2004-09-24T15:59:59+00:00 should be -600 minutes offset in CHOST");
		t.equal(moment("2004-09-24T16:00:00+00:00").tz("Asia/Choibalsan").zone(), -540, "2004-09-24T16:00:00+00:00 should be -540 minutes offset in CHOT");

		t.done();
	},

	"2005" : function (t) {
		t.equal(moment("2005-03-25T16:59:59+00:00").tz("Asia/Choibalsan").format("HH:mm:ss"), "01:59:59", "2005-03-25T16:59:59+00:00 should be 01:59:59 CHOT");
		t.equal(moment("2005-03-25T17:00:00+00:00").tz("Asia/Choibalsan").format("HH:mm:ss"), "03:00:00", "2005-03-25T17:00:00+00:00 should be 03:00:00 CHOST");
		t.equal(moment("2005-09-23T15:59:59+00:00").tz("Asia/Choibalsan").format("HH:mm:ss"), "01:59:59", "2005-09-23T15:59:59+00:00 should be 01:59:59 CHOST");
		t.equal(moment("2005-09-23T16:00:00+00:00").tz("Asia/Choibalsan").format("HH:mm:ss"), "01:00:00", "2005-09-23T16:00:00+00:00 should be 01:00:00 CHOT");

		t.equal(moment("2005-03-25T16:59:59+00:00").tz("Asia/Choibalsan").zone(), -540, "2005-03-25T16:59:59+00:00 should be -540 minutes offset in CHOT");
		t.equal(moment("2005-03-25T17:00:00+00:00").tz("Asia/Choibalsan").zone(), -600, "2005-03-25T17:00:00+00:00 should be -600 minutes offset in CHOST");
		t.equal(moment("2005-09-23T15:59:59+00:00").tz("Asia/Choibalsan").zone(), -600, "2005-09-23T15:59:59+00:00 should be -600 minutes offset in CHOST");
		t.equal(moment("2005-09-23T16:00:00+00:00").tz("Asia/Choibalsan").zone(), -540, "2005-09-23T16:00:00+00:00 should be -540 minutes offset in CHOT");

		t.done();
	},

	"2006" : function (t) {
		t.equal(moment("2006-03-24T16:59:59+00:00").tz("Asia/Choibalsan").format("HH:mm:ss"), "01:59:59", "2006-03-24T16:59:59+00:00 should be 01:59:59 CHOT");
		t.equal(moment("2006-03-24T17:00:00+00:00").tz("Asia/Choibalsan").format("HH:mm:ss"), "03:00:00", "2006-03-24T17:00:00+00:00 should be 03:00:00 CHOST");
		t.equal(moment("2006-09-29T15:59:59+00:00").tz("Asia/Choibalsan").format("HH:mm:ss"), "01:59:59", "2006-09-29T15:59:59+00:00 should be 01:59:59 CHOST");
		t.equal(moment("2006-09-29T16:00:00+00:00").tz("Asia/Choibalsan").format("HH:mm:ss"), "01:00:00", "2006-09-29T16:00:00+00:00 should be 01:00:00 CHOT");

		t.equal(moment("2006-03-24T16:59:59+00:00").tz("Asia/Choibalsan").zone(), -540, "2006-03-24T16:59:59+00:00 should be -540 minutes offset in CHOT");
		t.equal(moment("2006-03-24T17:00:00+00:00").tz("Asia/Choibalsan").zone(), -600, "2006-03-24T17:00:00+00:00 should be -600 minutes offset in CHOST");
		t.equal(moment("2006-09-29T15:59:59+00:00").tz("Asia/Choibalsan").zone(), -600, "2006-09-29T15:59:59+00:00 should be -600 minutes offset in CHOST");
		t.equal(moment("2006-09-29T16:00:00+00:00").tz("Asia/Choibalsan").zone(), -540, "2006-09-29T16:00:00+00:00 should be -540 minutes offset in CHOT");

		t.done();
	},

	"2008" : function (t) {
		t.equal(moment("2008-03-30T14:59:59+00:00").tz("Asia/Choibalsan").format("HH:mm:ss"), "23:59:59", "2008-03-30T14:59:59+00:00 should be 23:59:59 CHOT");
		t.equal(moment("2008-03-30T15:00:00+00:00").tz("Asia/Choibalsan").format("HH:mm:ss"), "23:00:00", "2008-03-30T15:00:00+00:00 should be 23:00:00 CHOT");

		t.equal(moment("2008-03-30T14:59:59+00:00").tz("Asia/Choibalsan").zone(), -540, "2008-03-30T14:59:59+00:00 should be -540 minutes offset in CHOT");
		t.equal(moment("2008-03-30T15:00:00+00:00").tz("Asia/Choibalsan").zone(), -480, "2008-03-30T15:00:00+00:00 should be -480 minutes offset in CHOT");

		t.done();
	}
};