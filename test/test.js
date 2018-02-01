function log(obj) {
    obj = String(obj);
    $("#log").append(`<pre class="javascript"><code class="javascript">` + obj + `</code></pre>`);
};