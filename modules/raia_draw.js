Raia.Core.Lib.open("raia_draw");

module.exports = {
    noise: Raia.Core.Lib.func("raia_draw_noise", 3), // uint8_t *pixels, int width, int height
    point: Raia.Core.Lib.func("raia_draw_point", 8),
    pointAlpha: Raia.Core.Lib.func("raia_draw_point_alpha", 9),
    line: Raia.Core.Lib.func("raia_draw_line", 10),
    fillRect: Raia.Core.Lib.func("raia_draw_fill_rect", 10),
    fillCircle: Raia.Core.Lib.func("raia_draw_fill_circle", 10),
    loadImage: Raia.Core.Lib.func("raia_draw_load_image", 6),
}
