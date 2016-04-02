/// <reference path="dojo.d.ts" />

function test_require() {
    require(["foo"], foo => 1);
    require({ config: 1 });
    define(["foo"], () => 1);
}
