Raia.Core.Lib.open("libraia_app");


module.exports = {
    Window: {
        init: Raia.Core.Lib.func("raia_app_window_init", 4), // (ctx, width, height, title)
        setTitle: Raia.Core.Lib.func("raia_app_window_set_title", 2), // (ctx, title)
        shouldClose: Raia.Core.Lib.func("raia_app_window_should_close", 0), // (void)
        pollEvents: Raia.Core.Lib.func("raia_app_window_poll_events", 0), // (void)
    },
    Screen: {
        initPixels: Raia.Core.Lib.func("raia_app_screen_init_pixels", 0),
        setPixels: Raia.Core.Lib.func("raia_app_screen_set_pixels", 1),
        redraw: Raia.Core.Lib.func("raia_app_screen_redraw", 1), // (void)
    },
    Event: {
        key: Raia.Core.Lib.func("raia_app_event_key_callback", 1), // (function(key, scancode, action, mods))
        error: Raia.Core.Lib.func("raia_app_event_error_callback", 1), // (function(int error, const char *message))
        cursor: Raia.Core.Lib.func("raia_app_event_cursor_position_callback", 1), // (function(double xpos, double ypos))
        mouse: Raia.Core.Lib.func("raia_app_event_mouse_button_callback", 1), // (function(int button, int action, int mods))
        char: Raia.Core.Lib.func("raia_app_event_character_callback", 1), // (function(unsigned int codepoint))
        enter: Raia.Core.Lib.func("raia_app_event_cursor_enter_callback", 1), // (function(int entered))
        scroll: Raia.Core.Lib.func("raia_app_event_scroll_callback", 2), // (function(double xoffset, double yoffset))
        joystick: Raia.Core.Lib.func("raia_app_event_joystick_callback", 2), // (function(int jid, int event))
        drop: Raia.Core.Lib.func("raia_app_event_drop_callback", 2), // (function(int count, const char** paths))
        //update: Raia.Core.Lib.func("raia_app_event_update_callback", 1), // (function())
        //updateEnable: Raia.Core.Lib.func("raia_app_event_update_enable", 0), // void
    },
    GLFW: {
        joystickPresent: Raia.Core.Lib.func("raia_app_glfw_joystick_present", 1),
        getJoystickAxes: Raia.Core.Lib.func("raia_app_glfw_get_joystick_axes", 1),
        getJoystickButtons: Raia.Core.Lib.func("raia_app_glfw_get_joystick_buttons", 1),
        getJoystickName: Raia.Core.Lib.func("raia_app_glfw_get_joystick_name", 1),
    }
};


/*
    GLES: {
        activeTexture: Raia.Core.Lib.func("duk_gl_glActiveTexture", 1),
        attachShader: Raia.Core.Lib.func("duk_gl_glAttachShader", 2),
        bindAttribLocation: Raia.Core.Lib.func("duk_gl_glBindAttribLocation", 3),
        bindBuffer: Raia.Core.Lib.func("duk_gl_glBindBuffer", 2),
        bindFramebuffer: Raia.Core.Lib.func("duk_gl_glBindFramebuffer", 2),
        bindRenderbuffer: Raia.Core.Lib.func("duk_gl_glBindRenderbuffer", 2),
        bindTexture: Raia.Core.Lib.func("duk_gl_glBindTexture", 2),
        blendColor: Raia.Core.Lib.func("duk_gl_glBlendColor", 4),
        blendEquation: Raia.Core.Lib.func("duk_gl_glBlendEquation", 1),
        blendEquationSeparate: Raia.Core.Lib.func("duk_gl_glBlendEquationSeparate", 2),
        blendFunc: Raia.Core.Lib.func("duk_gl_glBlendFunc", 2),
        blendFuncSeparate: Raia.Core.Lib.func("duk_gl_glBlendFuncSeparate", 4),
        bufferData: Raia.Core.Lib.func("duk_gl_glBufferData", 4),
        bufferSubData: Raia.Core.Lib.func("duk_gl_glBufferSubData", 4),
        CheckFramebufferStatus: Raia.Core.Lib.func("duk_gl_glCheckFramebufferStatus", 1),
        Clear: Raia.Core.Lib.func("duk_gl_glClear", 1),
        ClearColor: Raia.Core.Lib.func("duk_gl_glClearColor", 4),
        ClearDepthf: Raia.Core.Lib.func("duk_gl_glClearDepthf", 1),
        ClearStencil: Raia.Core.Lib.func("duk_gl_glClearStencil", 1),
        ColorMask: Raia.Core.Lib.func("duk_gl_glColorMask", 4),
        CompileShader: Raia.Core.Lib.func("duk_gl_glCompileShader", 1),
        CompressedTexImage2D: Raia.Core.Lib.func("duk_gl_glCompressedTexImage2D", 8),
        CompressedTexSubImage2D: Raia.Core.Lib.func("duk_gl_glCompressedTexSubImage2D", 9),
        CopyTexImage2D: Raia.Core.Lib.func("duk_gl_glCopyTexImage2D", 8),
        CopyTexSubImage2D: Raia.Core.Lib.func("duk_gl_glCopyTexSubImage2D", 8),
        CreateProgram: Raia.Core.Lib.func("duk_gl_glCreateProgram", 0),
        CreateShader: Raia.Core.Lib.func("duk_gl_glCreateShader", 1),
        CullFace: Raia.Core.Lib.func("duk_gl_glCullFace", 1),
        deleteBuffers: Raia.Core.Lib.func("duk_gl_glDeleteBuffers", 2),
        deleteFramebuffers: Raia.Core.Lib.func("duk_gl_glDeleteFramebuffers", 2),
        deleteProgram: Raia.Core.Lib.func("duk_gl_glDeleteProgram", 1),
        deleteRenderbuffers: Raia.Core.Lib.func("duk_gl_glDeleteRenderbuffers", 2),
        deleteShader: Raia.Core.Lib.func("duk_gl_glDeleteShader", 1),
        deleteTextures: Raia.Core.Lib.func("duk_gl_glDeleteTextures", 2),
        depthFunc: Raia.Core.Lib.func("duk_gl_glDepthFunc", 1),
        depthMask: Raia.Core.Lib.func("duk_gl_glDepthMask", 1),
        depthRangef: Raia.Core.Lib.func("duk_gl_glDepthRangef", 2),
        detachShader: Raia.Core.Lib.func("duk_gl_glDetachShader", 2),
        disable: Raia.Core.Lib.func("duk_gl_glDisable", 1),
        disableVertexAttribArray: Raia.Core.Lib.func("duk_gl_glDisableVertexAttribArray", 1),
        drawArrays: Raia.Core.Lib.func("duk_gl_glDrawArrays", 3),
        drawElements: Raia.Core.Lib.func("duk_gl_glDrawElements", 4),
        enable: Raia.Core.Lib.func("duk_gl_glEnable", 1),
        enableVertexAttribArray: Raia.Core.Lib.func("duk_gl_glEnableVertexAttribArray", 1),
        finish: Raia.Core.Lib.func("duk_gl_glFinish", 0),
        flush: Raia.Core.Lib.func("duk_gl_glFlush", 0),
        framebufferRenderbuffer: Raia.Core.Lib.func("duk_gl_glFramebufferRenderbuffer", 4),
        framebufferTexture2D: Raia.Core.Lib.func("duk_gl_glFramebufferTexture2D", 5),
        frontFace: Raia.Core.Lib.func("duk_gl_glFrontFace", 1),
        genBuffers: Raia.Core.Lib.func("duk_gl_glGenBuffers", 2),
        generateMipmap: Raia.Core.Lib.func("duk_gl_glGenerateMipmap", 1),
        genFramebuffers: Raia.Core.Lib.func("duk_gl_glGenFramebuffers", 2),
        genRenderbuffers: Raia.Core.Lib.func("duk_gl_glGenRenderbuffers", 2),
        genTextures: Raia.Core.Lib.func("duk_gl_glGenTextures", 2),
        getActiveAttrib: Raia.Core.Lib.func("duk_gl_glGetActiveAttrib", 7),
        getActiveUniform: Raia.Core.Lib.func("duk_gl_glGetActiveUniform", 7),
        getAttachedShaders: Raia.Core.Lib.func("duk_gl_glGetAttachedShaders", 4),
        getAttribLocation: Raia.Core.Lib.func("duk_gl_glGetAttribLocation", 2),
        getBooleanv: Raia.Core.Lib.func("duk_gl_glGetBooleanv", 2),
        getBufferParameteriv: Raia.Core.Lib.func("duk_gl_glGetBufferParameteriv", 3),
        getError: Raia.Core.Lib.func("duk_gl_glGetError", 0),
        getFloatv: Raia.Core.Lib.func("duk_gl_glGetFloatv", 2),
        getFramebufferAttachmentParameteriv: Raia.Core.Lib.func("duk_gl_glGetFramebufferAttachmentParameteriv", 4),
        getIntegerv: Raia.Core.Lib.func("duk_gl_glGetIntegerv", 2),
        getProgramInfoLog: Raia.Core.Lib.func("duk_gl_glGetProgramInfoLog", 4),
        getProgramiv: Raia.Core.Lib.func("duk_gl_glGetProgramiv", 3),
        getRenderbufferParameteriv: Raia.Core.Lib.func("duk_gl_glGetRenderbufferParameteriv", 3),
        getShaderiv: Raia.Core.Lib.func("duk_gl_glGetShaderiv", 3),
        getShaderInfoLog: Raia.Core.Lib.func("duk_gl_glGetShaderInfoLog", 4),
        getShaderPrecisionFormat: Raia.Core.Lib.func("duk_gl_glGetShaderPrecisionFormat", 4),
        getShaderSource: Raia.Core.Lib.func("duk_gl_glGetShaderSource", 4),
        getShaderSource: Raia.Core.Lib.func("duk_gl_glGetShaderSource", 1),
        getTexParameterfv: Raia.Core.Lib.func("duk_gl_glGetTexParameterfv", 3),
        getTexParameteriv: Raia.Core.Lib.func("duk_gl_glGetTexParameteriv", 3),
        getUniformfv: Raia.Core.Lib.func("duk_gl_glGetUniformfv", 3),
        getUniformiv: Raia.Core.Lib.func("duk_gl_glGetUniformiv", 3),
        getUniformLocation: Raia.Core.Lib.func("duk_gl_glGetUniformLocation", 2),
        getVertexAttribfv: Raia.Core.Lib.func("duk_gl_glGetVertexAttribfv", 3),
        getVertexAttribiv: Raia.Core.Lib.func("duk_gl_glGetVertexAttribiv", 3),
        getVertexAttribPointerv: Raia.Core.Lib.func("duk_gl_glGetVertexAttribPointerv", 3),
        hint: Raia.Core.Lib.func("duk_gl_glHint", 2),
        isBuffer: Raia.Core.Lib.func("duk_gl_glIsBuffer", 1),
        isEnabled: Raia.Core.Lib.func("duk_gl_glIsEnabled", 1),
        isFramebuffer: Raia.Core.Lib.func("duk_gl_glIsFramebuffer", 1),
        isProgram: Raia.Core.Lib.func("duk_gl_glIsProgram", 1),
        isRenderbuffer: Raia.Core.Lib.func("duk_gl_glIsRenderbuffer", 1),
        isShader: Raia.Core.Lib.func("duk_gl_glIsShader", 1),
        isTexture: Raia.Core.Lib.func("duk_gl_glIsTexture", 1),
        lineWidth: Raia.Core.Lib.func("duk_gl_glLineWidth", 1),
        linkProgram: Raia.Core.Lib.func("duk_gl_glLinkProgram", 1),
        pixelStorei: Raia.Core.Lib.func("duk_gl_glPixelStorei", 2),
        polygonOffset: Raia.Core.Lib.func("duk_gl_glPolygonOffset", 2),
        readPixels: Raia.Core.Lib.func("duk_gl_glReadPixels", 7),
        releaseShaderCompiler: Raia.Core.Lib.func("duk_gl_glReleaseShaderCompiler", 0),
        renderbufferStorage: Raia.Core.Lib.func("duk_gl_glRenderbufferStorage", 4),
        sampleCoverage: Raia.Core.Lib.func("duk_gl_glSampleCoverage", 2),
        scissor: Raia.Core.Lib.func("duk_gl_glScissor", 4),
        shaderBinary: Raia.Core.Lib.func("duk_gl_glShaderBinary", 5),
        shaderSource: Raia.Core.Lib.func("duk_gl_glShaderSource", 4),
        stencilFunc: Raia.Core.Lib.func("duk_gl_glStencilFunc", 3),
        stencilFuncSeparate: Raia.Core.Lib.func("duk_gl_glStencilFuncSeparate", 4),
        stencilMask: Raia.Core.Lib.func("duk_gl_glStencilMask", 1),
        stencilMaskSeparate: Raia.Core.Lib.func("duk_gl_glStencilMaskSeparate", 2),
        stencilOp: Raia.Core.Lib.func("duk_gl_glStencilOp", 3),
        stencilOpSeparate: Raia.Core.Lib.func("duk_gl_glStencilOpSeparate", 4),
        texImage2D: Raia.Core.Lib.func("duk_gl_glTexImage2D", 9),
        texParameterf: Raia.Core.Lib.func("duk_gl_glTexParameterf", 3),
        texParameterfv: Raia.Core.Lib.func("duk_gl_glTexParameterfv", 3),
        texParameteri: Raia.Core.Lib.func("duk_gl_glTexParameteri", 3),
        texParameteriv: Raia.Core.Lib.func("duk_gl_glTexParameteriv", 3),
        texSubImage2D: Raia.Core.Lib.func("duk_gl_glTexSubImage2D", 9),
        uniform1f: Raia.Core.Lib.func("duk_gl_glUniform1f", 2),
        uniform1fv: Raia.Core.Lib.func("duk_gl_glUniform1fv", 3),
        uniform1i: Raia.Core.Lib.func("duk_gl_glUniform1i", 2),
        uniform1iv: Raia.Core.Lib.func("duk_gl_glUniform1iv", 3),
        uniform2f: Raia.Core.Lib.func("duk_gl_glUniform2f", 3),
        uniform2fv: Raia.Core.Lib.func("duk_gl_glUniform2fv", 3),
        uniform2i: Raia.Core.Lib.func("duk_gl_glUniform2i", 3),
        uniform2iv: Raia.Core.Lib.func("duk_gl_glUniform2iv", 3),
        uniform3f: Raia.Core.Lib.func("duk_gl_glUniform3f", 4),
        uniform3fv: Raia.Core.Lib.func("duk_gl_glUniform3fv", 3),
        uniform3i: Raia.Core.Lib.func("duk_gl_glUniform3i", 4),
        uniform3iv: Raia.Core.Lib.func("duk_gl_glUniform3iv", 3),
        uniform4f: Raia.Core.Lib.func("duk_gl_glUniform4f", 5),
        uniform4fv: Raia.Core.Lib.func("duk_gl_glUniform4fv", 3),
        uniform4i: Raia.Core.Lib.func("duk_gl_glUniform4i", 5),
        uniform4iv: Raia.Core.Lib.func("duk_gl_glUniform4iv", 3),
        uniformMatrix2fv: Raia.Core.Lib.func("duk_gl_glUniformMatrix2fv", 4),
        uniformMatrix3fv: Raia.Core.Lib.func("duk_gl_glUniformMatrix3fv", 4),
        uniformMatrix4fv: Raia.Core.Lib.func("duk_gl_glUniformMatrix4fv", 4),
        useProgram: Raia.Core.Lib.func("duk_gl_glUseProgram", 1),
        validateProgram: Raia.Core.Lib.func("duk_gl_glValidateProgram", 1),
        vertexAttrib1f: Raia.Core.Lib.func("duk_gl_glVertexAttrib1f", 2),
        vertexAttrib1fv: Raia.Core.Lib.func("duk_gl_glVertexAttrib1fv", 2),
        vertexAttrib2f: Raia.Core.Lib.func("duk_gl_glVertexAttrib2f", 3),
        vertexAttrib2fv: Raia.Core.Lib.func("duk_gl_glVertexAttrib2fv", 2),
        vertexAttrib3f: Raia.Core.Lib.func("duk_gl_glVertexAttrib3f", 4),
        vertexAttrib3fv: Raia.Core.Lib.func("duk_gl_glVertexAttrib3fv", 2),
        vertexAttrib4f: Raia.Core.Lib.func("duk_gl_glVertexAttrib4f", 5),
        vertexAttrib4fv: Raia.Core.Lib.func("duk_gl_glVertexAttrib4fv", 2),
        vertexAttribPointer: Raia.Core.Lib.func("duk_gl_glVertexAttribPointer", 6),
        viewport: Raia.Core.Lib.func("duk_gl_glViewport", 4),
    },
    GLFW: {
        //init: Raia.Core.Lib.func("raia_app_glfw_init", 0),
        makeContextCurrent: Raia.Core.Lib.func("glfw_make_context_current", 1),
        getCurrentContext: Raia.Core.Lib.func("glfw_get_current_context", 0),
        swapInterval: Raia.Core.Lib.func("glfw_swap_interval", 1),
        extensionSupported: Raia.Core.Lib.func("glfw_extension_supported", 1),
        getProcAddress: Raia.Core.Lib.func("glfw_get_proc_address", 1),
        init: Raia.Core.Lib.func("glfw_init_", 0),
        terminate: Raia.Core.Lib.func("glfw_terminate", 0),
        setErrorCallBack: Raia.Core.Lib.func("glfw_set_error_callback", 1),
        getVersion: Raia.Core.Lib.func("glfw_get_version", 0),
        getVersionString: Raia.Core.Lib.func("glfw_get_version_string", 0),
        defaultWindowHints: Raia.Core.Lib.func("glfw_default_window_hints", 0),
        windowHint: Raia.Core.Lib.func("glfw_window_hint", 2),
        createWindow: Raia.Core.Lib.func("glfw_create_window_", 5),
        destroyWindow: Raia.Core.Lib.func("glfw_destroy_window", 1),
        windowShouldClose: Raia.Core.Lib.func("glfw_window_should_close", 1),
        setWindowShouldClose: Raia.Core.Lib.func("glfw_set_window_should_close", 2),
        setWindowTitle: Raia.Core.Lib.func("glfw_set_window_title", 2),
        getWindowPos: Raia.Core.Lib.func("glfw_get_window_pos", 1),
        setWindowPos: Raia.Core.Lib.func("glfw_set_window_pos", 3),
        getWindowSize: Raia.Core.Lib.func("glfw_get_window_size", 1),
        setWindowSize: Raia.Core.Lib.func("glfw_set_window_size", 3),
        getFramebufferSize: Raia.Core.Lib.func("glfw_get_framebuffer_size", 1),
        getWindowFrameSize: Raia.Core.Lib.func("glfw_get_window_frame_size", 1),
        iconifyWindow: Raia.Core.Lib.func("glfw_iconify_window", 1),
        restoreWindow: Raia.Core.Lib.func("glfw_restore_window", 1),
        showWindow: Raia.Core.Lib.func("glfw_show_window", 1),
        hideWindow: Raia.Core.Lib.func("glfw_hide_window", 1),
        getWindowMonitor: Raia.Core.Lib.func("glfw_get_window_monitor", 1),
        getWindowAttrib: Raia.Core.Lib.func("glfw_get_window_attrib", 2),
        setWindowUserPointer: Raia.Core.Lib.func("glfw_set_window_user_pointer", 2),
        getWindowUserPointer: Raia.Core.Lib.func("glfw_get_window_user_pointer", 1),
        setWindowPosCallback: Raia.Core.Lib.func("glfw_set_window_pos_callback", 2),
        setWindowSizeCallback: Raia.Core.Lib.func("glfw_set_window_size_callback", 2),
        setWindowCloseCallback: Raia.Core.Lib.func("glfw_set_window_close_callback", 2),
        setWindowRefreshCallback: Raia.Core.Lib.func("glfw_set_window_refresh_callback", 2),
        setWindowFocusCallback: Raia.Core.Lib.func("glfw_set_window_focus_callback", 2),
        setWindowIconifyCallback: Raia.Core.Lib.func("glfw_set_window_iconify_callback", 2),
        setFramebufferSizeCallback: Raia.Core.Lib.func("glfw_set_framebuffer_size_callback", 2),
        pollEvents: Raia.Core.Lib.func("glfw_poll_events", 0),
        waitEvents: Raia.Core.Lib.func("glfw_wait_events", 0),
        postEmptyEvent: Raia.Core.Lib.func("glfw_post_empty_event", 0),
        swapBuffers: Raia.Core.Lib.func("glfw_swap_buffers", 1),
        getMonitors: Raia.Core.Lib.func("glfw_get_monitors", 1),
        getPrimaryMonitor: Raia.Core.Lib.func("glfw_get_primary_monitor", 0),
        getMonitorPos: Raia.Core.Lib.func("glfw_get_monitor_pos", 3),
        getMonitorPhysicalSize: Raia.Core.Lib.func("glfw_get_monitor_physical_size", 3),
        getMonitorName: Raia.Core.Lib.func("glfw_get_monitor_name", 1),
        setMonitorCallback: Raia.Core.Lib.func("glfw_set_monitor_callback", 1),
        getVideoModes: Raia.Core.Lib.func("glfw_get_video_modes", 1),
        getVideoMode: Raia.Core.Lib.func("glfw_get_video_mode", 1),
        setGamma: Raia.Core.Lib.func("glfw_set_gamma", 2),
        getGammaRamp: Raia.Core.Lib.func("glfw_get_gamma_ramp", 1),
        setGammaRamp: Raia.Core.Lib.func("glfw_set_gamma_ramp", 2),
        getInputMode: Raia.Core.Lib.func("glfw_get_input_mode", 2),
        setInputMode: Raia.Core.Lib.func("glfw_set_input_mode", 3),
        getKey: Raia.Core.Lib.func("glfw_get_key", 2),
        getMouseButton: Raia.Core.Lib.func("glfw_get_mouse_button", 2),
        getCursorPos: Raia.Core.Lib.func("glfw_get_cursor_pos", 1),
        setCursorPos: Raia.Core.Lib.func("glfw_set_cursor_pos", 3),
        createCursor: Raia.Core.Lib.func("glfw_create_cursor", 5),
        createStandardCursor: Raia.Core.Lib.func("glfw_create_standard_cursor", 1),
        destroyCursor: Raia.Core.Lib.func("glfw_destroy_cursor", 1),
        setCursor: Raia.Core.Lib.func("glfw_set_cursor", 2),
        setKeyCallback: Raia.Core.Lib.func("glfw_set_key_callback", 2),
        setCharCallback: Raia.Core.Lib.func("glfw_set_char_callback", 2),
        setCharModsCallback: Raia.Core.Lib.func("glfw_set_char_mods_callback", 2),
        setMouseButtonCallback: Raia.Core.Lib.func("glfw_set_mouse_button_callback", 2),
        setCursorPosCallback: Raia.Core.Lib.func("glfw_set_cursor_pos_callback", 2),
        setCursorEnterCallback: Raia.Core.Lib.func("glfw_set_cursor_enter_callback", 2),
        setScrollCallback: Raia.Core.Lib.func("glfw_set_scroll_callback", 2),
        setDropCallback: Raia.Core.Lib.func("glfw_set_drop_callback", 2),
        joystickPresent: Raia.Core.Lib.func("glfw_joystick_present", 1),
        getJoystickAxes: Raia.Core.Lib.func("glfw_get_joystick_axes", 1),
        getJoystickButtons: Raia.Core.Lib.func("glfw_get_joystick_buttons", 1),
        getJoystickName: Raia.Core.Lib.func("glfw_get_joystick_name", 1),
        setClipboardString: Raia.Core.Lib.func("glfw_set_clipboard_string", 2),
        getClipboardString: Raia.Core.Lib.func("glfw_get_clipboard_string", 1),
        getTime: Raia.Core.Lib.func("glfw_get_time", 0),
        setTime: Raia.Core.Lib.func("glfw_set_time", 1),
        makeContextCurrent: Raia.Core.Lib.func("glfw_make_context_current", 1),
        getCurrentContext: Raia.Core.Lib.func("glfw_get_current_context", 0),
    },
*/
