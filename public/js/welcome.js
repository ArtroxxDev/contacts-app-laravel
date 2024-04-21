/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/js/welcome.js":
/*!*********************************!*\
  !*** ./resources/js/welcome.js ***!
  \*********************************/
/***/ (() => {

eval("var navbar = document.querySelector(\".navbar\");\nvar welcome = document.querySelector(\".welcome\");\nvar navbarToggle = document.querySelector(\"#navbarSupportedContent\");\nvar resizeBackgroundImg = function resizeBackgroundImg() {\n  var height = window.innerHeight - navbar.clientHeight;\n  welcome.style.height = \"\".concat(height, \"px\"); // Corrección aquí\n};\nnavbarToggle.ontransitionend = resizeBackgroundImg;\nnavbarToggle.ontransitionstart = resizeBackgroundImg; // Corrección aquí\nwindow.onresize = resizeBackgroundImg;\nwindow.onload = resizeBackgroundImg;\ndocument.querySelector('main').classList.remove('py-4');//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJuYXZiYXIiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJ3ZWxjb21lIiwibmF2YmFyVG9nZ2xlIiwicmVzaXplQmFja2dyb3VuZEltZyIsImhlaWdodCIsIndpbmRvdyIsImlubmVySGVpZ2h0IiwiY2xpZW50SGVpZ2h0Iiwic3R5bGUiLCJjb25jYXQiLCJvbnRyYW5zaXRpb25lbmQiLCJvbnRyYW5zaXRpb25zdGFydCIsIm9ucmVzaXplIiwib25sb2FkIiwiY2xhc3NMaXN0IiwicmVtb3ZlIl0sInNvdXJjZXMiOlsid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy93ZWxjb21lLmpzPzI2ZDIiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgbmF2YmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYXZiYXJcIik7XG5jb25zdCB3ZWxjb21lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi53ZWxjb21lXCIpO1xuY29uc3QgbmF2YmFyVG9nZ2xlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNuYXZiYXJTdXBwb3J0ZWRDb250ZW50XCIpO1xuXG5jb25zdCByZXNpemVCYWNrZ3JvdW5kSW1nID0gKCkgPT4ge1xuICAgIGNvbnN0IGhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodCAtIG5hdmJhci5jbGllbnRIZWlnaHQ7XG4gICAgd2VsY29tZS5zdHlsZS5oZWlnaHQgPSBgJHtoZWlnaHR9cHhgOyAvLyBDb3JyZWNjacOzbiBhcXXDrVxufTtcblxubmF2YmFyVG9nZ2xlLm9udHJhbnNpdGlvbmVuZCA9IHJlc2l6ZUJhY2tncm91bmRJbWc7XG5uYXZiYXJUb2dnbGUub250cmFuc2l0aW9uc3RhcnQgPSByZXNpemVCYWNrZ3JvdW5kSW1nOyAvLyBDb3JyZWNjacOzbiBhcXXDrVxud2luZG93Lm9ucmVzaXplID0gcmVzaXplQmFja2dyb3VuZEltZztcbndpbmRvdy5vbmxvYWQgPSByZXNpemVCYWNrZ3JvdW5kSW1nO1xuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpLmNsYXNzTGlzdC5yZW1vdmUoJ3B5LTQnKTtcbiJdLCJtYXBwaW5ncyI6IkFBQUEsSUFBTUEsTUFBTSxHQUFHQyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxTQUFTLENBQUM7QUFDaEQsSUFBTUMsT0FBTyxHQUFHRixRQUFRLENBQUNDLGFBQWEsQ0FBQyxVQUFVLENBQUM7QUFDbEQsSUFBTUUsWUFBWSxHQUFHSCxRQUFRLENBQUNDLGFBQWEsQ0FBQyx5QkFBeUIsQ0FBQztBQUV0RSxJQUFNRyxtQkFBbUIsR0FBRyxTQUF0QkEsbUJBQW1CQSxDQUFBLEVBQVM7RUFDOUIsSUFBTUMsTUFBTSxHQUFHQyxNQUFNLENBQUNDLFdBQVcsR0FBR1IsTUFBTSxDQUFDUyxZQUFZO0VBQ3ZETixPQUFPLENBQUNPLEtBQUssQ0FBQ0osTUFBTSxNQUFBSyxNQUFBLENBQU1MLE1BQU0sT0FBSSxDQUFDLENBQUM7QUFDMUMsQ0FBQztBQUVERixZQUFZLENBQUNRLGVBQWUsR0FBR1AsbUJBQW1CO0FBQ2xERCxZQUFZLENBQUNTLGlCQUFpQixHQUFHUixtQkFBbUIsQ0FBQyxDQUFDO0FBQ3RERSxNQUFNLENBQUNPLFFBQVEsR0FBR1QsbUJBQW1CO0FBQ3JDRSxNQUFNLENBQUNRLE1BQU0sR0FBR1YsbUJBQW1CO0FBQ25DSixRQUFRLENBQUNDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQ2MsU0FBUyxDQUFDQyxNQUFNLENBQUMsTUFBTSxDQUFDIiwiaWdub3JlTGlzdCI6W10sImZpbGUiOiIuL3Jlc291cmNlcy9qcy93ZWxjb21lLmpzIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./resources/js/welcome.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./resources/js/welcome.js"]();
/******/ 	
/******/ })()
;