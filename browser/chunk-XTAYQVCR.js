import{a as v,b}from"./chunk-ICC5SWU3.js";import{a as e,b as s}from"./chunk-MCRJI3T3.js";import{f as a}from"./chunk-QVHMM4ZF.js";var m=o=>{if(s===void 0||o===v.None||o===void 0)return null;let n=s.querySelector("ion-app");return n??s.body},y=o=>{let n=m(o);return n===null?0:n.clientHeight},R=o=>a(void 0,null,function*(){let n,l,r,d,c=()=>a(void 0,null,function*(){let t=yield b.getResizeMode(),i=t===void 0?void 0:t.mode;n=()=>{d===void 0&&(d=y(i)),r=!0,u(r,i)},l=()=>{r=!1,u(r,i)},e===null||e===void 0||e.addEventListener("keyboardWillShow",n),e===null||e===void 0||e.addEventListener("keyboardWillHide",l)}),u=(t,i)=>{o&&o(t,w(i))},w=t=>{if(d===0||d===y(t))return;let i=m(t);if(i!==null)return new Promise(g=>{let h=()=>{i.clientHeight===d&&(f.disconnect(),g())},f=new ResizeObserver(h);f.observe(i)})},H=()=>{e===null||e===void 0||e.removeEventListener("keyboardWillShow",n),e===null||e===void 0||e.removeEventListener("keyboardWillHide",l),n=l=void 0},p=()=>r;return yield c(),{init:c,destroy:H,isKeyboardVisible:p}});export{R as a};
