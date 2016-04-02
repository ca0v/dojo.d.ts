/// <reference path="dojo.d.ts" />
import lang = require("dojo/_base/lang");

function test_require() {
    require(["foo"], foo => 1);
    require({ config: 1 });
    define(["foo"], () => 1);    
}

function test_mixin() {
    let ab = lang.mixin({a:1}, {b:2});
    ab.a;
    ab.b;
}
