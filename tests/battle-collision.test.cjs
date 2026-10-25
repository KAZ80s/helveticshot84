const assert=require("node:assert/strict");
const hit=(a,b)=>a.x<b.x+b.w&&a.x+a.w>b.x&&a.y<b.y+b.h&&a.y+a.h>b.y;
assert.equal(hit({x:110,y:315,w:4,h:9},{x:100,y:300,w:30,h:22}),true,"enemy hit");
assert.equal(hit({x:300,y:47,w:4,h:9},{x:278,y:45,w:44,h:20}),true,"player 2 hit");
assert.equal(hit({x:300,y:737,w:4,h:9},{x:278,y:735,w:44,h:20}),true,"player 1 hit");
assert.equal(hit({x:400,y:200,w:4,h:9},{x:278,y:735,w:44,h:20}),false,"miss");
console.log("4 collision tests passed");
