const RAIA_APIS_GLOBAL_FUNCTIONS = true;
Raia.App = require('raia_app');

Raia.App.Event.update = function(func) {
    while (!Raia.App.Window.shouldClose()) {
        func();
        Raia.App.Window.pollEvents();
    }
};

//Raia.App.GLFW.init();
//Raia.App.Gles.init();

/*
Raia.App.GLFW.init();
Raia.App.GLES.flush();
var window = Raia.App.GLFW.createWindow(480, 320, 'my(window');

Raia.App.GLFW.makeContextCurrent(window);
Raia.App.GLFW.swapInterval(1);

while (!Raia.App.GLFW.windowShouldClose(window)) {
    Raia.App.GLFW.pollEvents();
}
*/



var width = 800;
var height = 600;
var name = "title"

// TODO
//
//
// var window = Window.init();
//
// window =>
// {
//     uuid: "",
//     width: "",
//     height: "",
//     name: ""
// }
//
Raia.App.Window.init(Raia.context, width, height, name);

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

//var pixels = Uint8Array.allocPlain(width * height * 3);

Raia.Draw = require('raia_draw');

//pixels[0] = 255;
//Raia.App.Screen.setPixels(pixels);

Raia.Core.print(Raia.context.app.window.width);
Raia.Core.print(Raia.context.app.window.height);
Raia.Core.print(Raia.context.app.window.title);

var cursor_pos_x = 0;
var cursor_pos_y = 0;

Raia.App.Event.cursor(function(xpos, ypos) {
    cursor_pos_x = xpos;
    cursor_pos_y = ypos;
});

Raia.App.Event.key(function(key, scancode, action, mods) {
    Raia.Core.print(key + ":" + scancode + ":" + action + ":" + mods);
});


/*
Raia.App.Event.updateEnable();
*/

//init: function(a){_raia_lib_init(a);}


//Raia.Draw.loadImage(Raia.context.app.window.pixels, 0, 0, width, height, "gaurin-cute_200px.png");


// surface =>
// {
//     pixels: [],
//     blend: normal,
//     opacity: 255, //0-255
//     color: RAIA_COLOR_RGBA
//     position: { //point
//         x: 0,
//         y: 0,
//     },
//     size: {
//         width: 300,
//         height: 500,
//     },
//     clip: { //segment
//         start: {
//            x: 0,
//            y: 0,
//         },
//         end: {
//            300,
//            500,
//         },
//     },
// }



var count = 0;
Raia.App.Event.update(function() {
    //Raia.Draw.noise(Raia.context.app.window.pixels, width, height);
    //Raia.Draw.point(Raia.context.app.window.pixels, 100, 100, 255, 255, 255, width, height);
    //Raia.Draw.fillRect(Raia.context.app.window.pixels, 0,0, width, height, 0, 0, 0, width, height);
    for(var i=0; i<10; i++) {
        Raia.Draw.pointAlpha(Raia.context.app.window.pixels, 100+i, 100, 255, 255, 255, 100, width, height);
    }

    Raia.App.Screen.redraw(Raia.context.app.window.pixels);
    //var x = cursor_pos_x;//getRandomInt(500);
    //var y = cursor_pos_y;//getRandomInt(500);
    //Raia.Draw.fillCircle(Raia.context.app.window.pixels, x, y, x + 50, y + 50, 255, 255, 255, width, height);
    //Raia.Draw.line(Raia.context.app.window.pixels, getRandomInt(500), getRandomInt(500), getRandomInt(500), getRandomInt(500), 255, 255, 255, width, height);
    //set_pixel_rgb(pixels, point_x, point_y, color_r, color_g, color_b, width, height, 3);
    //for(var i = 0; i < width * height * 3; i ++) {
    //    Raia.context.app.window.pixels[i] = getRandomInt(255);
    //}

    //Raia.App.Window.setTitle(Raia.context, "hello" + count);
    count++;
});

/*
while (!Raia.App.Window.shouldClose()) {
    Raia.App.Screen.redraw(Raia.context.app.window.pixels);
    Raia.App.Window.pollEvents();
}
*/
