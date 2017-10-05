String.isEmail || (String.isEmail = function(e) {
    if(typeof e !== "string") throw new TypeError("Email must be a string.");
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(e);
});
String.prototype.isEmail || (String.prototype.isEmail = function(e) {
    if(this == null) throw new TypeError('"this" is null or not defined');
    return String.isEmail(""+this);//What the fuuuckkkkk
});

String.prototype.replaceAll || (String.prototype.replaceAll = function(search, replacement) {
	let target = this;
	return target.replace(new RegExp(search, 'g'), replacement);
});

String.prototype.startsWith || (String.prototype.startsWith = function(prefix) {
	return this.slice(0, prefix.length) == prefix;
});

String.prototype.isBlank || (String.prototype.isBlank = function() {
    let str_clone = "" + this;
    str_clone = str_clone.replaceAll(" ", "").replaceAll("\n", "").replaceAll("\r", "").replaceAll("\t", "");
    return str_clone === "";
});