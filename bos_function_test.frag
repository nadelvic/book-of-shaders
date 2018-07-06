// Author:
// Title:

#ifdef GL_ES
precision mediump float;
#define M_PI 3.1415926535897932384626433832795
#endif



uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

float plot(vec2 st, float pct){
    return smoothstep( pct-0.01, pct, st.y) - smoothstep( pct, pct+0.01, st.y);
}

void main() {
    vec2 st = gl_FragCoord.xy/u_resolution;
    
    //float y = 1.0 - fract(sin(1.57 * sin(u_time) * st.x));
    float y = 1.0 - fract(sin(1.57 * (sin(u_time * 1.0)) * st.x));
    
    vec3 color = vec3(y);
    
    // Plot a line
    float pct = plot(st, y);
    color = (1.0 - pct) * color+pct*vec3(0.0,1.0,1.0);
    
    gl_FragColor = vec4(color,1);

}