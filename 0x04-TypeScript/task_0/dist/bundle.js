!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t){var n=[{firstName:"AA",lastName:"BB",age:10,location:"KFC"},{firstName:"CC",lastName:"DD",age:20,location:"MAC"}],r=document.createElement("table");r.style.width="100%",r.style.borderCollapse="collapse";var o=document.createElement("thead"),l=document.createElement("tr");["First Name","Location"].forEach((function(e){var t=document.createElement("th");t.textContent=e,t.style.border="1px solid #ccc",t.style.padding="8px",t.style.backgroundColor="#f4f4f4",t.style.textAlign="left",l.appendChild(t)})),o.appendChild(l),r.appendChild(o);var a=document.createElement("tbody");n.forEach((function(e){var t=document.createElement("tr"),n=document.createElement("td");n.textContent=e.firstName,n.style.border="1px solid #ccc",n.style.padding="8px";var r=document.createElement("td");r.textContent=e.location,r.style.border="1px solid #ccc",r.style.padding="8px",t.appendChild(n),t.appendChild(r),a.appendChild(t)})),r.appendChild(a),document.body.appendChild(r)}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vanMvbWFpbi50cyJdLCJuYW1lcyI6WyJpbnN0YWxsZWRNb2R1bGVzIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsIm1vZHVsZUlkIiwiZXhwb3J0cyIsIm1vZHVsZSIsImkiLCJsIiwibW9kdWxlcyIsImNhbGwiLCJtIiwiYyIsImQiLCJuYW1lIiwiZ2V0dGVyIiwibyIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZW51bWVyYWJsZSIsImdldCIsInIiLCJTeW1ib2wiLCJ0b1N0cmluZ1RhZyIsInZhbHVlIiwidCIsIm1vZGUiLCJfX2VzTW9kdWxlIiwibnMiLCJjcmVhdGUiLCJrZXkiLCJiaW5kIiwibiIsIm9iamVjdCIsInByb3BlcnR5IiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJwIiwicyIsInN0dWRlbnRzTGlzdCIsImZpcnN0TmFtZSIsImxhc3ROYW1lIiwiYWdlIiwibG9jYXRpb24iLCJ0YWJsZSIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsInN0eWxlIiwid2lkdGgiLCJib3JkZXJDb2xsYXBzZSIsInRoZWFkIiwiaGVhZGVyUm93IiwiZm9yRWFjaCIsImhlYWRlclRleHQiLCJ0aCIsInRleHRDb250ZW50IiwiYm9yZGVyIiwicGFkZGluZyIsImJhY2tncm91bmRDb2xvciIsInRleHRBbGlnbiIsImFwcGVuZENoaWxkIiwidGJvZHkiLCJzdHVkZW50Iiwicm93IiwiZmlyc3ROYW1lQ2VsbCIsImxvY2F0aW9uQ2VsbCIsImJvZHkiXSwibWFwcGluZ3MiOiJhQUNFLElBQUlBLEVBQW1CLEdBR3ZCLFNBQVNDLEVBQW9CQyxHQUc1QixHQUFHRixFQUFpQkUsR0FDbkIsT0FBT0YsRUFBaUJFLEdBQVVDLFFBR25DLElBQUlDLEVBQVNKLEVBQWlCRSxHQUFZLENBQ3pDRyxFQUFHSCxFQUNISSxHQUFHLEVBQ0hILFFBQVMsSUFVVixPQU5BSSxFQUFRTCxHQUFV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LE1BQU1VLFFBQVUsTUFFN0JNLEVBQUlILFlBQVlJLEdBQ2hCRCxFQUFJSCxZQUFZSyxHQUVoQkosRUFBTUQsWUFBWUcsTUFHdEJuQixFQUFNZ0IsWUFBWUMsR0FHbEJoQixTQUFTcUIsS0FBS04sWUFBWWhCIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsImludGVyZmFjZSBTdHVkZW50IHtcbiAgICBmaXJzdE5hbWU6IHN0cmluZztcbiAgICBsYXN0TmFtZTogc3RyaW5nO1xuICAgIGFnZTogbnVtYmVyO1xuICAgIGxvY2F0aW9uOiBzdHJpbmc7XG59XG5sZXQgc3R1ZGVudDE6IFN0dWRlbnQgPSB7XG4gICAgZmlyc3ROYW1lOiAnQUEnLFxuICAgIGxhc3ROYW1lOiAnQkInLCBhZ2U6IDEwLCBsb2NhdGlvbjogJ0tGQydcbn1cblxubGV0IHN0dWRlbnQyOiBTdHVkZW50ID0ge1xuICAgIGZpcnN0TmFtZTogJ0NDJyxcbiAgICBsYXN0TmFtZTogJ0REJywgYWdlOiAyMCwgbG9jYXRpb246ICdNQUMnXG59XG5cblxuY29uc3Qgc3R1ZGVudHNMaXN0OiBTdHVkZW50W10gPSBbc3R1ZGVudDEsIHN0dWRlbnQyXTtcblxuLy8gU3RlcCAzOiBSZW5kZXIgdGhlIHRhYmxlIHVzaW5nIFZhbmlsbGEgSmF2YVNjcmlwdFxuY29uc3QgdGFibGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0YWJsZScpO1xudGFibGUuc3R5bGUud2lkdGggPSAnMTAwJSc7XG50YWJsZS5zdHlsZS5ib3JkZXJDb2xsYXBzZSA9ICdjb2xsYXBzZSc7XG5cbi8vIENyZWF0ZSB0aGUgdGFibGUgaGVhZGVyXG5jb25zdCB0aGVhZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RoZWFkJyk7XG5jb25zdCBoZWFkZXJSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0cicpO1xuXG5jb25zdCBoZWFkZXJzID0gWydGaXJzdCBOYW1lJywgJ0xvY2F0aW9uJ107XG5oZWFkZXJzLmZvckVhY2goaGVhZGVyVGV4dCA9PiB7XG4gICAgY29uc3QgdGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0aCcpO1xuICAgIHRoLnRleHRDb250ZW50ID0gaGVhZGVyVGV4dDtcbiAgICB0aC5zdHlsZS5ib3JkZXIgPSAnMXB4IHNvbGlkICNjY2MnO1xuICAgIHRoLnN0eWxlLnBhZGRpbmcgPSAnOHB4JztcbiAgICB0aC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnI2Y0ZjRmNCc7XG4gICAgdGguc3R5bGUudGV4dEFsaWduID0gJ2xlZnQnO1xuICAgIGhlYWRlclJvdy5hcHBlbmRDaGlsZCh0aCk7XG59KTtcblxudGhlYWQuYXBwZW5kQ2hpbGQoaGVhZGVyUm93KTtcbnRhYmxlLmFwcGVuZENoaWxkKHRoZWFkKTtcblxuLy8gQ3JlYXRlIHRoZSB0YWJsZSBib2R5XG5jb25zdCB0Ym9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3Rib2R5Jyk7XG5cbnN0dWRlbnRzTGlzdC5mb3JFYWNoKHN0dWRlbnQgPT4ge1xuICAgIGNvbnN0IHJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RyJyk7XG5cbiAgICBjb25zdCBmaXJzdE5hbWVDZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcbiAgICBmaXJzdE5hbWVDZWxsLnRleHRDb250ZW50ID0gc3R1ZGVudC5maXJzdE5hbWU7XG4gICAgZmlyc3ROYW1lQ2VsbC5zdHlsZS5ib3JkZXIgPSAnMXB4IHNvbGlkICNjY2MnO1xuICAgIGZpcnN0TmFtZUNlbGwuc3R5bGUucGFkZGluZyA9ICc4cHgnO1xuXG4gICAgY29uc3QgbG9jYXRpb25DZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcbiAgICBsb2NhdGlvbkNlbGwudGV4dENvbnRlbnQgPSBzdHVkZW50LmxvY2F0aW9uO1xuICAgIGxvY2F0aW9uQ2VsbC5zdHlsZS5ib3JkZXIgPSAnMXB4IHNvbGlkICNjY2MnO1xuICAgIGxvY2F0aW9uQ2VsbC5zdHlsZS5wYWRkaW5nID0gJzhweCc7XG5cbiAgICByb3cuYXBwZW5kQ2hpbGQoZmlyc3ROYW1lQ2VsbCk7XG4gICAgcm93LmFwcGVuZENoaWxkKGxvY2F0aW9uQ2VsbCk7XG5cbiAgICB0Ym9keS5hcHBlbmRDaGlsZChyb3cpO1xufSk7XG5cbnRhYmxlLmFwcGVuZENoaWxkKHRib2R5KTtcblxuLy8gQXBwZW5kIHRoZSB0YWJsZSB0byB0aGUgZG9jdW1lbnQgYm9keVxuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0YWJsZSk7Il0sInNvdXJjZVJvb3QiOiIifQ==