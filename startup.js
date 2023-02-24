Raia.App = require('raia_app');


Raia.App.Event.update = function(func) {
    while (!Raia.App.Window.shouldClose()) {
        func();
        Raia.App.Window.pollEvents();
    }
};

var width = 800;
var height = 600;
var name = "title"

Raia.App.Window.init(Raia.context, width, height, name);
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

for(var i = 0; i < width * height * 3; i += 3) {
    Raia.context.app.window.pixels[i] = getRandomInt(255);
    Raia.context.app.window.pixels[i + 1] = getRandomInt(255);
    Raia.context.app.window.pixels[i + 2] = getRandomInt(255);
}

Raia.Core.print(Raia.context.app.window.width);
Raia.Core.print(Raia.context.app.window.height);
Raia.Core.print(Raia.context.app.window.title);

Raia.App.Event.key(function(key, scancode, action, mods) {
    Raia.Core.print(key + ":" + scancode + ":" + action + ":" + mods);
});

var count = 0;
Raia.App.Event.update(function() {
    Raia.App.Screen.redraw(Raia.context.app.window.pixels);
    Raia.App.Window.setTitle(Raia.context, "hello" + count);
    if (Raia.App.GLFW.joystickPresent(0)===true) {
        //Raia.Core.print(Raia.App.GLFW.getJoystickAxes(0));
        Raia.Core.print(Raia.App.GLFW.getJoystickButtons(0));
    }
    count++;
});