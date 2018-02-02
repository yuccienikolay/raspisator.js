function RandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

String.prototype.Format = function () {
    var i = 0, args = arguments;
    return this.replace(/{}/g, function () {
        return typeof args[i] != 'undefined' ? args[i++] : '';
    });
};

String.prototype.ReplaceAll = function(str1, str2, ignore) {
    return this.replace(new RegExp(str1.replace(/([\/\,\!\\\^\$\{\}\[\]\(\)\.\*\+\?\|\<\>\-\&])/g,"\\$&"),(ignore?"gi":"g")),(typeof(str2)=="string")?str2.replace(/\$/g,"$$$$"):str2);
};

String.prototype.MakeNormal = function(placeholder) {
    var normalString = this.ReplaceAll(".", placeholder);
    var toChange = ` .,./.\\.$.@.#.%.^.&.*.(.).-.{.}.[.].=.+.?.<.>.~.;._.:`.split(".");
    toChange.forEach( function (element, index, array) {
        normalString = normalString.ReplaceAll(element, placeholder);
    });
    return normalString;
};


function print(obj) {
    obj = String(obj);
    $("#log").append(`<pre class="javascript"><code class="javascript">` + obj + `</code></pre>`);
};
